import { BarChart2, DollarSign, Home, LogOut, Menu, Settings,Repeat, PauseCircle, ShoppingBag, ShoppingCart, MessageCircle, BriefcaseBusiness, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{ name: "Home", icon: Home, color: "#34D399", href: "/" },
	{ name: "Overview", icon: BarChart2, color: "#6366f1", href: "/admin-dashboard" },
	{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/adminProductPage" },
	{ name: "Pending Orders", icon: PauseCircle, color: "#F59E0B", href: "/adminOrders" },
	{ name: "InProgress Orders", icon: Repeat, color: "#EF4444", href: "/admininProgressOrders" },
	{ name: "Completed Orders", icon: ClipboardCheck, color: "#34D399", href: "/adminCompletedOrders" },
	{ name: "User Messages", icon: MessageCircle, color: "#6366f1", href: "/userMessages" },
	{ name: "Carrer", icon: BriefcaseBusiness, color: "#F59E0B", href: "/userCarrer" },
	// { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/adminSettings" },
];

const Sidebar = () => {
	const navigate = useNavigate();

	// Logout function
	const logout = () => {
		localStorage.clear('users');
		navigate("/");
	};

	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className='h-full bg-customGray bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 overflow-y-scroll'>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
				>
					<Menu size={24} />
				</motion.button>

				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}

					{/* Logout Item */}
					<motion.div
						className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2 cursor-pointer'
						onClick={logout}
					>
						<LogOut size={20} style={{ color: "#EF4444", minWidth: "20px" }} />
						<AnimatePresence>
							{isSidebarOpen && (
								<motion.span
									className='ml-4 whitespace-nowrap'
									initial={{ opacity: 0, width: 0 }}
									animate={{ opacity: 1, width: "auto" }}
									exit={{ opacity: 0, width: 0 }}
									transition={{ duration: 0.2, delay: 0.3 }}
								>
									Logout
								</motion.span>
							)}
						</AnimatePresence>
					</motion.div>
				</nav>
			</div>
		</motion.div>
	);
};

export default Sidebar;
