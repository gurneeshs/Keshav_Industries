import { useContext, useState, useEffect } from "react";
import myContext from "../../context/myContext";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { fireDB } from "../../firebase/FirebaseConfig";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { Button } from "@material-tailwind/react";
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import toast from "react-hot-toast";

const Popup = ({ show, onClose, onUpdate, orderId }) => {
	const [shipmentID, setshipmentId] = useState("");
	// console.log(orderId);	

	if (!show) return null;

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-customGray bg-opacity-30 rounded-lg shadow-lg p-6 w-80">
				<h2 className="text-xl font-bold mb-4 text-center">Order Update</h2>
				<label htmlFor="orderId" className="block text-sm font-medium text-white">
					Shipment ID:
				</label>
				<input
					type="text"
					id="orderId"
					className="mt-1 p-2 text-black block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					value={shipmentID}
					onChange={(e) => setshipmentId(e.target.value)}
					placeholder="Enter Order ID"
				/>
				<div className="mt-6 flex justify-end space-x-4">
					<button
						className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600"
						onClick={() => {
							onUpdate(orderId, shipmentID);
							onClose();
						}}
					>
						Update
					</button>
					<button
						className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
						onClick={onClose}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

const CompleteOrderTable = () => {

	const context = useContext(myContext);
	const { getAllProduct, getAllOrder, getAllUser } = context;


	const [orderData, setOrderData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState([]);
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [selectedOrderId, setSelectedOrderId] = useState(null);
	const [selectedStatus, setSelectedStatus] = useState("Pending");

	


	const handleUpdate = async (orderId, shipmentId) => {
		try {
			// Reference to the specific document in the Firestore collection
			const orderRef = doc(fireDB, "payments", orderId);

			// Update the status field to "inProgress"
			await updateDoc(orderRef, {
				Status: "InProgress",
				shipmentID: shipmentId,
			});
			toast.success('Order Updated Successfully');
		} catch (error) {
			toast.error(`Error in updating Order : ${error}`)
			console.log(error);
		}
	};

	const formatDateTime = (timestamp) => {
		if (!timestamp) return "N/A";
		return timestamp.toDate().toLocaleString();
	};

	useEffect(() => {
		async function fetchOrders() {
			try {
				const paymentsCollection = collection(fireDB, "completed");
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
						order_items: orderDetails.Order || [],
						payment_method: "prepaid",
						sub_total: totalCost,
					};
				});

				setOrderData(fetchedOrders);
				setFilteredOrders(fetchedOrders);
				// console.log(fetchedOrders)
			} catch (error) {
				console.error("Error fetching orders: ", error);
			}
		}

		fetchOrders();
	}, []);

	
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

	const handleOrderPlaced = (orderId) => {
		setSelectedOrderId(orderId);
		setIsPopupVisible(true);
	};

	
	
	return (
		<motion.div
			className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 my-3'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex flex-col sm:flex-row justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100 mb-4 sm:mb-0'>Completed Orders</h2>
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
						

					</motion.div>
				))}
			</div>

		</motion.div>
	);
};

export default CompleteOrderTable;
