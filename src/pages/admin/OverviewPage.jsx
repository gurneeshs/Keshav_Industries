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

const OverviewPage = () => {
	const context = useContext(myContext);
	const { getAllProduct, getAllOrder, getAllUser } = context;
	const [totalSalesInINR, setTotalSalesInINR] = useState(0);
	const [totalSales, setTotalSales] = useState(0);

	useEffect(() => {
		if (getAllProduct.length > 0) {
			// Calculate the total sales by summing up the sales field of each product
			const salesSum = getAllProduct.reduce((acc, product) => acc + product.sales, 0);
			setTotalSales(salesSum);
		}
	}, [getAllProduct]);
	useEffect(() => {
		if (getAllProduct.length > 0) {
			// Calculate the total sales in INR by summing up sales * price for each product
			const salesSumInINR = getAllProduct.reduce(
				(acc, product) => acc + product.sales * product.price,
				0
			);
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
						<StatCard name='Conversion Rate%' icon={BarChart2} value={<CountUp duration={5.75} end={2500} />} color='#10B981' />
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
