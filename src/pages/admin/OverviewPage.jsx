import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";
import CategoryDistributionChart from "../../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../../components/overview/SalesChannelChart";
import AdminLayout from "../../components/layout/AdminLayout";
import CountUp from "react-countup";
import { fireDB } from "../../firebase/FirebaseConfig";
import { getDocs, collection } from "firebase/firestore";
const OverviewPage = () => {
	const orderDB = collection(fireDB, 'payments');
	const context = useContext(myContext);
	const { getAllProduct, getAllOrder, getAllUser } = context;
	const [totalSalesInINR, setTotalSalesInINR] = useState(0);
	const [totalSales, setTotalSales] = useState(0);
	const [orderlength, setOrderLength] = useState();

	async function OrderLength(){
		const snapshot = await getDocs(orderDB);
		setOrderLength(snapshot.size);
	}

	OrderLength();


	// console.log(getAllProduct)
	useEffect(() => {
		if (getAllProduct.length > 0) {
			// Initialize a variable to accumulate the total sales
			let salesSum = 0;
			
			// Iterate over the products and add the totalSales value to salesSum
			getAllProduct.forEach(product => {
				if (product.totalSales) {
					salesSum += Number(product.totalSales) || 0; // Ensure it's a number
				}
			});
	
			setTotalSales(salesSum);
		}
	}, [getAllProduct]);

	useEffect(() => {
		if (getAllProduct.length > 0) {
			// Initialize a variable to accumulate the total sales in INR
			let salesSumInINR = 0;
	
			// Iterate over the products and add (sales * price) to salesSumInINR
			getAllProduct.forEach(product => {
				if (product.totalSales && product.price) {
					salesSumInINR += Number(product.totalSales) * Number(product.price) || 0; // Ensure values are numbers
				}
			});
	
			setTotalSalesInINR(salesSumInINR);
		}
	}, [getAllProduct]);

	return (
		<AdminLayout>
			<div className='flex-1 overflow-auto relative z-10'>
				<Header title='Overview' />

				<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
					{/* STATS */}
					<motion.div
						className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						<StatCard name='Total Product Sales' icon={Zap} value={<CountUp duration={5.75} end={totalSales} />} color='#6366F1' />
						<StatCard name='Total Sales in INR' icon={Users} value={<CountUp duration={5.75} end={totalSalesInINR} />} color='#8B5CF6' />
						<StatCard name='Total Products' icon={ShoppingBag} value={<CountUp duration={5.75} end={getAllProduct.length} />} color='#EC4899' />
						<StatCard name='Total Orders' icon={BarChart2} value={<CountUp duration={5.75} end={orderlength} />} color='#10B981' />
					</motion.div>

					{/* CHARTS */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						<CategoryDistributionChart />
						<SalesChannelChart />
					</div>
				</main>
			</div>
		</AdminLayout>
	);
};

export default OverviewPage;
