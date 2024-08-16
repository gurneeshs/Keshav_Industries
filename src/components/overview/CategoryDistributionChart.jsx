import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const CategoryDistributionChart = () => {
	const [categoryData, setCategoryData] = useState([]);
	const { setLoading, loading } = useContext(myContext);

	useEffect(() => {
		const fetchCategoryData = async () => {
			setLoading(true);
			try {
				const querySnapshot = await getDocs(collection(fireDB, "products"));
				const categoryCount = {};

				querySnapshot.forEach((doc) => {
					const product = doc.data();
					const category = product.category || "Unknown";
					if (categoryCount[category]) {
						categoryCount[category] += 1;
					} else {
						categoryCount[category] = 1;
					}
				});

				const formattedData = Object.keys(categoryCount).map((key) => ({
					name: key,
					value: categoryCount[key],
				}));

				setCategoryData(formattedData);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching category data: ", error);
				setLoading(false);
			}
		};

		fetchCategoryData();
	}, [setLoading]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-full">
				<Loader />
			</div>
		);
	}

	return (
		<motion.div
			className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl lg:col-span-2 p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Category Distribution</h2>
			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart>
						<Pie
							data={categoryData}
							cx={"50%"}
							cy={"50%"}
							labelLine={false}
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{categoryData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default CategoryDistributionChart;
