import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import myContext from "../../context/myContext";
import { Link, useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../loader/Loader";

const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const ProductsTable = () => {
	const context = useContext(myContext);
	const { loading, setLoading, getAllProduct, getAllProductFunction } = context;
	// console.log(getAllProduct)

	// navigate 
	const navigate = useNavigate();

	// Delete product 
	const deleteProduct = async (id) => {
		setLoading(true)
		try {
			await deleteDoc(doc(fireDB, 'products', id))
			toast.success('Product Deleted successfully')
			getAllProductFunction();
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}
	const [searchTerm, setSearchTerm] = useState("");
	console.log(getAllProduct)
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT_DATA.filter(
			(product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};

	return (
		<motion.div
			className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Product List</h2>

				<div className='relative'>
				
						<input
							type='text'
							placeholder='Search products...'
							className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							onChange={handleSearch}
							value={searchTerm}
						/>
						<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />

						<Link to={'/addproduct'}>
							<button className="px-5 py-2 ml-3 bg-gray-700 text-gray-400  rounded-lg">Add Product</button>
						</Link>

				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<tbody>
						<tr>
							<th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
							<th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold fontPara">Image</th>
							<th scope="col" className="h-12 px-6 text-md font-bold fontPara text-slate-700 bg-slate-100">Title</th>
							<th scope="col" className="h-12 px-6 text-md font-bold fontPara text-slate-700 bg-slate-100">Price</th>
							<th scope="col" className="h-12 px-6 text-md font-bold fontPara text-slate-700 bg-slate-100">Category</th>
							<th scope="col" className="h-12 px-6 text-md font-bold fontPara text-slate-700 bg-slate-100">Action</th>
						</tr>
						{getAllProduct.map((item, index) => {
							const { id, title, price, category, date, productImageUrl } = item
							return (
								<tr key={index} className="">
									<td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 ">
										{index + 1}.
									</td>
									<td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 first-letter:uppercase ">
										<div className="flex justify-center">
											<img className="w-20" src={productImageUrl} alt="" />
										</div>
									</td>
									<td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 first-letter:uppercase ">
										{title}
									</td>
									<td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 first-letter:uppercase ">
										₹{price}
									</td>
									<td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 first-letter:uppercase ">
										{category}
									</td>
									<td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 cursor-pointer ">
										<button onClick={() => navigate(`/updateproduct/${id}`)} className='text-indigo-400 hover:text-indigo-300 mr-2'>
											<Edit size={18} />
										</button>
										<button onClick={() => deleteProduct(id)} className='text-red-400 hover:text-red-300'>
											<Trash2 size={18} />
										</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default ProductsTable;
