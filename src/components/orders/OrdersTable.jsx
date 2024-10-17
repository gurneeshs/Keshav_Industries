import { useContext, useState, useEffect } from "react";
import myContext from "../../context/myContext";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";
import { fireDB } from "../../firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const OrdersTable = () => {
	const context = useContext(myContext);
	const { getAllProduct, getAllOrder, getAllUser } = context;
	const [orderData, setOrderData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState([]);

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

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) =>
				order.OrderId.toLowerCase().includes(term) ||
				order.UserName.toLowerCase().includes(term) ||
				order.UserID.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
		<motion.div
			className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search orders...'
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
						className='bg-gray-800 rounded-lg p-4 shadow-md'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<div className='flex justify-between items-center mb-4'>
							<div>
								<p className='text-gray-100 font-semibold'>Order ID: {order.OrderId}</p>
								<p className='text-gray-100'>Payment ID: {order.PaymentID}</p>
								<p className='text-gray-100'>User Name: {order.UserName}</p>
								<p className='text-gray-100'>User ID: {order.UserID}</p>
							</div>
							{/* <Eye className='text-indigo-400 hover:text-indigo-300 cursor-pointer' size={24} /> */}
						</div>

						{/* Nested table for order details */}
						<div className='overflow-x-auto'>
							<table className='min-w-full divide-y divide-gray-700'>
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
												{item.ProductName}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												{item.Quantity}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												${item.Price}
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
