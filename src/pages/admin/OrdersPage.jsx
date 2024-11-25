import { CheckCircle, Clock, DollarSign, ShoppingBag, RotateCw } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";
import OrdersTable from "../../components/orders/OrdersTable";
import AdminLayout from "../../components/layout/AdminLayout";
import { getDocs, collection, query, where } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useState } from "react";

const OrdersPage = () => {
	const orderDB = collection(fireDB, 'payments');
	const inProgressorderDB = collection(fireDB, 'progress');
	const completedorderDB = collection(fireDB, 'completed');

	const [totalOrder, settotalOrder] = useState();
	const [incompleteOrder, setincompleteOrder] = useState(0);
	const [inprogressOrder, setinprogressOrder] = useState(0);
	const [completeOrder, setcompleteOrder] = useState(0);

	async function OrderLength() {
		

		const snapshot1 = await getDocs(orderDB);
		const snapshot2 = await getDocs(inProgressorderDB);
		const snapshot3 = await getDocs(completedorderDB);

		settotalOrder(snapshot1.size + snapshot2.size + snapshot3.size);
		setincompleteOrder(snapshot1.size);
		setinprogressOrder(snapshot2.size);
		setcompleteOrder(snapshot3.size);
	}

	OrderLength();
	return (
		<AdminLayout>
			<div className='flex-1 relative z-10 overflow-auto'>
				<Header title={"Pending Orders"} />

				<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
					<motion.div
						className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						<StatCard name='Total Orders' icon={ShoppingBag} value={<CountUp duration={3.75} end={totalOrder} />} color='#6366F1' />
						<StatCard name='Pending Orders' icon={Clock} value={<CountUp duration={3.75} end={incompleteOrder} />} color='#F59E0B' />
						<StatCard name='In Progress Orders' icon={RotateCw} value={<CountUp duration={3.75} end={inprogressOrder} />} color='#EF4444' />
						<StatCard
							name='Completed Orders'
							icon={CheckCircle}
							value={<CountUp duration={3.75} end={completeOrder} />}
							color='#10B981'
						/>
					</motion.div>

					{/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
						<DailyOrders />
						<OrderDistribution />
					</div> */}

					<OrdersTable />
					{/* <ShipOrder /> */}
				</main>
			</div>

		</AdminLayout>
	);
};
export default OrdersPage;
