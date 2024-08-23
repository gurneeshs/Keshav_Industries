import { useContext, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import cloudinary from "../../config/cloudinary";  // Import Cloudinary config
import AdminLayout from "../../components/layout/AdminLayout";
import Header from "../../components/common/Header";

const categoryList = [
    { name: 'Kash Products' },
    { name: 'Pride Products' },
    { name: 'Mustard Products' },
    { name: 'Kash Spices' },
];

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        mrp: "",
        productImageFile: null,
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
    });

    const handleFileChange = (e) => {
        setProduct({
            ...product,
            productImageFile: e.target.files[0],
        });
    };

    const addProductFunction = async () => {
        if (!product.title || !product.price || !product.productImageFile || !product.category || !product.description) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("file", product.productImageFile);
            formData.append("upload_preset", "ml_default");

            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            const productImageUrl = data.secure_url;
            const newProduct = {
                title: product.title,
                price: product.price,
                mrp: product.mrp,
                productImageUrl,
                category: product.category,
                description: product.description,
                quantity: product.quantity,
                time: product.time,
                date: product.date
            };

            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, newProduct);

            toast.success("Product added successfully");
            navigate('/admin-dashboard');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Failed to add product");
        }
    };

    return (
        <AdminLayout>
            <div className="w-full bg-customBackG py-5 justify-center items-center py-5 ">
                <div className='flex justify-center items-center h-screen'>
                    {loading && <Loader />}
                    <div className="login_Form bg-opacity-50 backdrop-blur-md px-8 py-6 rounded-xl shadow-md w-full ">
                        <div className="mb-5">
                            <h2 className='text-center text-2xl font-bold text-gray-100 '>
                                Add Product
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                            <input
                                type="text"
                                name="title"
                                value={product.title}
                                onChange={(e) => setProduct({ ...product, title: e.target.value })}
                                placeholder='Product Title'
                                className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                            />
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                placeholder='Product Price'
                                className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                            <input
                                type="number"
                                name="mrp"
                                value={product.mrp}
                                onChange={(e) => setProduct({ ...product, mrp: e.target.value })}
                                placeholder='Product MRP'
                                className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                            />
                            <input
                                type="file"
                                name="productImageFile"
                                onChange={handleFileChange}
                                className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                            />
                        </div>

                        <div className="mb-3">
                            <select
                                value={product.category}
                                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                className="w-full px-1 py-2 text-gray-300 bg-customGray border border-gray-200 rounded-md outline-none">
                                <option disabled>Select Product Category</option>
                                {categoryList.map((value, index) => (
                                    <option className="first-letter:uppercase" key={index} value={value.name}>
                                        {value.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <textarea
                                value={product.description}
                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                                name="description"
                                placeholder="Product Description"
                                rows="5"
                                className="w-full px-2 py-1 text-gray-300 bg-customGray border border-gray-200 rounded-md outline-none placeholder-gray-300 "
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <button
                                onClick={addProductFunction}
                                type='button'
                                className='bg-customGray hover:bg-gray-600 w-full text-white text-center py-2 font-bold rounded-md'
                            >
                                Add Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AddProductPage;
