import { useContext, useState, useEffect } from "react";
import myContext from "../../context/myContext";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";
import { fireDB } from "../../firebase/FirebaseConfig";
import { collection, getDocs, doc, updateDoc, getDoc, deleteDoc, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import UpdateOrder from "./UpdateOrder";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import axios from "axios";


const OrdersTable = () => {
	const context = useContext(myContext);
	const { getAllProduct, getAllOrder, getAllUser } = context;
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [selectedOrderId, setSelectedOrderId] = useState(null);
	const [orderData, setOrderData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState([]);
	const SHIPROCKET_EMAIL = 'devendra@keshav.co.in'; // Replace with your Shiprocket email
	const SHIPROCKET_PASSWORD = 'Keshav@123';
	const [dimensions, setDimensions] = useState({
		length: '',
		breadth: '',
		height: '',
		weight: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDimensions({ ...dimensions, [name]: value });
	};

	const updateOrder = async (orderId) => {
		try {
			// Reference to the order document in Firestore
			const orderRef = doc(fireDB, 'payments', orderId);

			// Update the order document with the new dimensions and weight
			await updateDoc(orderRef, {
				length: dimensions.length,
				breadth: dimensions.breadth,
				height: dimensions.height,
				weight: dimensions.weight,
			});

			toast.success("Order Updated Successfully");
			setIsPopupOpen(false);
			console.log('Order updated successfully!');
			// onClose()
			// You might want to add a success message or redirect after this
		} catch (error) {
			toast.error("Error in updating order");
			setIsPopupOpen(false);
			console.error('Error updating order:', error);
			// onClose()
		}
	};


	const openPopup = (orderId) => {
		setSelectedOrderId(orderId); // Set the selected order ID
		setIsPopupOpen(true); // Open the popup
	};

	useEffect(() => {
		async function fetchOrders() {
			try {
				const paymentsCollection = collection(fireDB, "payments");
				const querySnapshot = await getDocs(paymentsCollection);

				const fetchedOrders = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				setOrderData(fetchedOrders);
				setFilteredOrders(fetchedOrders);
			} catch (error) {
				console.error("Error fetching orders: ", error);
			}
		}

		fetchOrders();
	}, []);
	

	const formatDateTime = (timestamp) => {
		const date = timestamp.toDate(); // Convert Firestore timestamp to Date object
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
		const day = String(date.getDate()).padStart(2, '0');
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');
	
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	};
	
	const placeShiprocketOrder = async (orderDetails) => {
		try {
			if (!orderDetails.length || !orderDetails.breadth || !orderDetails.height || !orderDetails.weight) {
				toast.error("Please Update the order First");
				return;
			}
	
			const authResponse = await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', {
				email: SHIPROCKET_EMAIL,
				password: SHIPROCKET_PASSWORD,
			});
	
			let totalCost = 0;
			orderDetails.Order.forEach(item => { totalCost += (item.selling_price * item.units); });
	
			let fullName = orderDetails.userInfo.name.split(" ");
			let firstName = fullName[0];
			let lastName = fullName.slice(1).join(" ");
	
			const token = authResponse.data.token;
	
			const orderData = {
				order_id: orderDetails.OrderId,
				order_date: formatDateTime(orderDetails.Time), // Format date from Firestore
				pickup_location: 'warehouse',
				billing_customer_name: firstName,
				billing_last_name: lastName,
				billing_address: orderDetails.userInfo.addressLane,
				billing_city: orderDetails.userInfo.city,
				billing_pincode: orderDetails.userInfo.pincode,
				billing_state: orderDetails.userInfo.state,
				billing_country: orderDetails.userInfo.country,
				billing_email: orderDetails.userInfo.email,
				billing_phone: orderDetails.userInfo.phone,
				shipping_is_billing: true,
				order_items: orderDetails.Order,
				payment_method: 'prepaid',
				sub_total: totalCost,
				length: orderDetails.length,
				breadth: orderDetails.breadth,
				height: orderDetails.height,
				weight: orderDetails.weight,
			};
	
			console.log('Order Data:', orderData); // Log order data to check its structure
	
			const createOrderResponse = await axios.post(
				'https://apiv2.shiprocket.in/v1/external/orders/create/adhoc',
				orderData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
            console.log(createOrderResponse);
			if (createOrderResponse.status === 200) {
				const orderId = createOrderResponse.data.order_id;
				const orderRef = doc(fireDB, 'payments', orderDetails.id);
	
				const orderUpdateData = {
					shiprocketOrderId: orderId,
					trackingId: createOrderResponse.data.tracking_id || null,
					status: createOrderResponse.data.status,
				};
	
				await updateDoc(orderRef, orderUpdateData);
				const paymentDoc = await getDoc(orderRef);
				if (paymentDoc.exists()) {
					const paymentDocData = paymentDoc.data();
					await addDoc(collection(fireDB, 'ship_orders'), { ...paymentDocData });
					await deleteDoc(orderRef);
				}
				toast.success("Order Placed at Shiprocket successfully");
				// return createOrderResponse.data;
			} else {
				toast.error("Failed to Place Order");
				throw new Error('Failed to place order');
			}
		} catch (error) {
			toast.error("Error in placing order");
			console.error('Error placing order:', error.response?.data || error);
			// throw error;
		}
	};
	
	

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) =>
				order.OrderId.toLowerCase().includes(term) ||
				order.User.name.toLowerCase().includes(term) ||
				order.uid.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
		<motion.div
			className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 my-3'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Created Order</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Enter Order Id'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>
			<div className='space-y-4'>

				{filteredOrders.map((order) => (
					<motion.div
						key={order.id}
						className='bg-customGray rounded-lg p-4 shadow-md border'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						{isPopupOpen && (
							<div className="max-w-lg  fixed bg-customBlue w-80 ml-8 p-8 mb-10 ">
								<div>
									<h2 className="text-xl font-bold mb-4">Update Order Details</h2>
									<input
										type="number"
										name="length"
										placeholder="Length (in cm)"
										value={dimensions.length}
										onChange={handleChange}
										className="border p-2 w-full mb-2 text-black"
										required
									/>
									<input
										type="number"
										name="breadth"
										placeholder="Breadth (in cm)"
										value={dimensions.breadth}
										onChange={handleChange}
										className="border p-2 w-full mb-2 text-black"
										required
									/>
									<input
										type="number"
										name="height"
										placeholder="Height (in cm)"
										value={dimensions.height}
										onChange={handleChange}
										className="border p-2 w-full mb-2 text-black"
										required
									/>
									<input
										type="number"
										name="weight"
										placeholder="Weight"
										value={dimensions.weight}
										onChange={handleChange}
										className="border p-2 w-full mb-2 text-black"
										required
									/>
								</div>
								<div>
									<Button onClick={() => setIsPopupOpen(false)} color="red">Cancel</Button>
									<Button onClick={() => updateOrder(order.id)} color="green">Update</Button>
								</div>
							</div>
						)}

						<div className='flex justify-between items-center mb-4'>
							<div>
								<p className='text-gray-100 font-semibold'>Order ID: {order.OrderId}</p>
								<p className='text-gray-100'>Payment ID: {order.PaymentID}</p>
								<p className='text-gray-100'>User Name: {order.userInfo.name}</p>
								<p className='text-gray-100'>User Phone: {order.userInfo.phone}</p>
								<p className='text-gray-100'>Created At: {order.Time.toDate().toLocaleString()}</p>

							</div>
							<div className='flex flex-col items-center space-x-2'>
								<button
									className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded my-2 w-60'
									onClick={() => placeShiprocketOrder(order)} // Add your shipment handler here
								>
									Ready for Shipment
								</button>
								<button
									className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded my-2 w-60'
									onClick={() => openPopup(order.id)} // Add your update handler here
								>
									Update Order
								</button>
								<button
									className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded my-2 w-60'
									onClick={() => handleCancel(order.id)} // Add your cancel handler here
								>
									Cancel Order
								</button>
							</div>

							{/* <Eye className='text-indigo-400 hover:text-indigo-300 cursor-pointer' size={24} /> */}
						</div>

						{/* Nested table for order details */}
						<div className='overflow-x-auto'>
							<table className='min-w-full divide-y divide-gray-700 bg-gray-800'>
								<thead>
									<tr>
										<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
											Product Name
										</th>
										<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
											Quantity
										</th>
										<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
											Price
										</th>
										<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
											Description
										</th>
									</tr>
								</thead>
								<tbody className='divide-y divide-gray-700'>
									{order.Order.map((item, index) => (
										<tr key={index}>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												{item.name}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												{item.units}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												${item.selling_price}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												{item.Description}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</motion.div>
				))}
			</div>

		</motion.div>
	);
};

export default OrdersTable;