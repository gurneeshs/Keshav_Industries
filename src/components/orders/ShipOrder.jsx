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


const ShipOrder = () => {
	const context = useContext(myContext);
	const { getAllProduct, getAllOrder, getAllUser } = context;
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [selectedOrderId, setSelectedOrderId] = useState(null);
	const [orderData, setOrderData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState([]);
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

	

	const openPopup = (orderId) => {
		setSelectedOrderId(orderId); // Set the selected order ID
		setIsPopupOpen(true); // Open the popup
	};

	useEffect(() => {
		async function fetchOrders() {
			try {
				const paymentsCollection = collection(fireDB, "ship_orders");
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
				<h2 className='text-xl font-semibold text-gray-100'>Order Ready For Shipment</h2>
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
								<p className='text-gray-100'>Order ID: {order.OrderId}</p>
								<p className='text-gray-100'>ShipRocket Order ID: {order.shiprocketOrderId}</p>
								<p className='text-gray-100'>Order Status: {order.status}</p>
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

export default ShipOrder;