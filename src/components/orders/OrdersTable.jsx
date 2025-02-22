import { useContext, useState, useEffect } from "react";
import myContext from "../../context/myContext";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { fireDB } from "../../firebase/FirebaseConfig";
import { collection, getDocs, updateDoc, doc, getDoc, deleteDoc, addDoc, Timestamp, query, where } from "firebase/firestore";
import { Button } from "@material-tailwind/react";
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import toast from "react-hot-toast";
import NewLoader from "../loader/NewLoader";


const OrdersTable = () => {

	const context = useContext(myContext);
	const { getAllProduct, getAllOrder, getAllUser } = context;


	const [orderData, setOrderData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState([]);
	const [selectedStatus, setSelectedStatus] = useState("Pending");
	const [loading, setLoading] = useState(false);



	async function fetchOrders() {
		try {
			const paymentsCollection = collection(fireDB, "payments");
			const querySnapshot = await getDocs(paymentsCollection);

			const fetchedOrders = querySnapshot.docs.map((doc) => {
				const orderDetails = doc.data();

				const totalCost = orderDetails.Order
					? orderDetails.Order.reduce(
						(sum, item) => sum + (item.units * item.selling_price || 0),
						0
					)
					: 0;

				return {
					id: doc.id,
					order_id: orderDetails.OrderId || "N/A",
					payment_id: orderDetails.PaymentID || "N/A",
					order_date: formatDateTime(orderDetails.Time),
					pickup_location: "warehouse",
					billing_customer_name: orderDetails.userInfo?.name || "N/A",
					billing_last_name: orderDetails.userInfo?.lastName || "N/A",
					billing_address: orderDetails.userInfo?.addressLane || "N/A",
					billing_city: orderDetails.userInfo?.city || "N/A",
					billing_pincode: orderDetails.userInfo?.pincode || "N/A",
					billing_state: orderDetails.userInfo?.state || "N/A",
					billing_country: orderDetails.userInfo?.country || "N/A",
					billing_email: orderDetails.userInfo?.email || "N/A",
					billing_phone: orderDetails.userInfo?.phone || "N/A",
					shipping_is_billing: true,
					order_items: orderDetails.Order || [],
					payment_method: "prepaid",
					sub_total: totalCost,
					length: orderDetails.length || "N/A",
					breadth: orderDetails.breadth || "N/A",
					height: orderDetails.height || "N/A",
					weight: orderDetails.weight || "N/A",
				};
			});

			setOrderData(fetchedOrders);
			setFilteredOrders(fetchedOrders);
			// console.log(fetchedOrders)
		} catch (error) {
			console.error("Error fetching orders: ", error);
		}
	}

	useEffect(() => {
		fetchOrders();
	}, [])



	const handleUpdate = async (orderId, shipmentId, userEmail) => {
		setLoading(true);
		try {
			// Reference to the specific document in the Firestore collection
			const orderRef = doc(fireDB, "payments", orderId);
			const progressCollectionRef = collection(fireDB, "progress");
			const userQuery = query(collection(fireDB, "users"), where("email", "==", userEmail));
			const userSnapshot = await getDocs(userQuery);

			// Get the document data
			const orderDoc = await getDoc(orderRef);


			if (orderDoc.exists() && !userSnapshot.empty) {
				const orderData = orderDoc.data();
				const currentTime = Timestamp.now();

				// Add the document to the progress collection with the updated fields
				await addDoc(progressCollectionRef, {
					...orderData,
					Status: "InProgress",
					shipmentID: shipmentId,
					updatedAt: currentTime,
				});
				await deleteDoc(orderRef);
				// Update the status field to "inProgress"

				const userDoc = userSnapshot.docs[0];
				const userRef = doc(fireDB, "users", userDoc.id);

				const userData = userDoc.data();
				const updatedOrders = userData.Orders.map((order) => {
					if (order.orderId === orderData.OrderId && order.Status === "Pending") {
						return {
							...order,
							Status: "InProgress",
							Time: currentTime,
						};
					}
					return order;
				});
				// Update the user's document with the updated Orders array
				await updateDoc(userRef, {
					Orders: updatedOrders,
				});

				toast.success('Order Updated Successfully');
			}
			else {
				setLoading(false);
				toast.error('Error in Updating Order. Invalid Data');
			}

			await fetchOrders();
		} catch (error) {
			toast.error(`Error in updating Order : ${error}`)
			console.log(error);
		} finally {
			// setSelectedOrderId(null);
			// setSelectedEmail(null);
			setLoading(false); // Set loading to false
			// setIsPopupVisible(false);
		}
	};

	const formatDateTime = (timestamp) => {
		if (!timestamp) return "N/A";
		return timestamp.toDate().toLocaleString();
	};

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) =>
				order.order_id.toLowerCase().includes(term) ||
				order.billing_customer_name.toLowerCase().includes(term) ||
				order.billing_email.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	const handleOrderPlaced = (orderId, email) => {
		setLoading(true);
		const userInputCode = prompt("Enter Shipment ID:");
		if (!userInputCode) {
			setLoading(false);
			toast.error("Shipment ID Not Entered");
			return;
		}
		handleUpdate(orderId, userInputCode, email);
	};



	return (
		<motion.div
			className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 my-3'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex flex-col sm:flex-row justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100 mb-4 sm:mb-0'>Created Orders</h2>
				<div className='relative w-full sm:w-auto'>
					<input
						type='text'
						placeholder='Search by Order ID or Customer Name'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
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
						<div className='overflow-x-auto'>
							<table className='min-w-full divide-y divide-gray-700 bg-customGray'>
								<thead>
									<tr>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Order Id
										</th>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Payment Id
										</th>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Order Date
										</th>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Customer Name
										</th>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Phone
										</th>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Address
										</th>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Email
										</th>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Sub Total
										</th>
									</tr>
								</thead>
								<tbody className='divide-y divide-gray-700'>
									<tr>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
											{order.order_id || "N/A"}
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
											{order.payment_id || "N/A"}
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
											{order.order_date || 0}
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
											{order.billing_customer_name || "N/A"}
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
											{order.billing_phone || "N/A"}
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
											{order.billing_address}, {order.billing_city}, {order.billing_state}, {order.billing_country}, {order.billing_pincode}
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
											{order.billing_email}
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
											{order.sub_total || "N/A"}
										</td>

									</tr>

								</tbody>
							</table>
						</div>
						{/* Nested table for order items */}
						<div className='overflow-x-auto'>
							{/* <p>Order Data</p> */}
							<table className='min-w-full divide-y divide-gray-700 bg-customGray'>
								<thead>
									<tr>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Product Name
										</th>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Quantity
										</th>
										<th className='px-6 py-3 text-left text-sm font-bold text-gray-300 uppercase tracking-wider'>
											Price
										</th>
									</tr>
								</thead>
								<tbody className='divide-y divide-gray-700'>
									{order.order_items.map((item, index) => (
										<tr key={index}>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												{item.name || "N/A"}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												{item.units || 0}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												${item.selling_price || "N/A"}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						{console.log(order)}
						<Button className="m-2 bg-green-500" disabled={loading} onClick={() => handleOrderPlaced(order.id, order.billing_email)}>{loading ? 'Updating....' : 'Order Completed'}</Button>
						<Button className="m-2 bg-red-500" disabled={loading} >Cancel Order</Button>

					</motion.div>
				))}
			</div>

		</motion.div>
	);
};

export default OrdersTable;
