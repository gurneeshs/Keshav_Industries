import { useContext, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import cloudinary from "../../config/cloudinary";  // Import Cloudinary config

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
        productImageFile: null,  // File instead of URL
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

    // Function to handle file change
    const handleFileChange = (e) => {
        setProduct({
            ...product,
            productImageFile: e.target.files[0],
        });
    };

    // Add Product Function
    const addProductFunction = async () => {
        if (!product.title || !product.price || !product.productImageFile || !product.category || !product.description) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            // Upload image to Cloudinary
            const formData = new FormData();
            formData.append("file", product.productImageFile);
            formData.append("upload_preset", "ml_default");

            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log(data.secure_url)
            const productImageUrl = data.secure_url;
            const newProduct = {
                title: product.title,
                price: product.price,
                mrp:product.mrp,
                productImageUrl, // URL from Cloudinary
                category: product.category,
                description: product.description,
                quantity: product.quantity,
                time: product.time,
                date: product.date
            };

            // Add product to Firebase with the Cloudinary URL
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
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-pink-500 '>
                            Add Product
                        </h2>
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => setProduct({ ...product, title: e.target.value })}
                            placeholder='Product Title'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                            placeholder='Product Price'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            name="mrp"
                            value={product.mrp}
                            onChange={(e) => setProduct({ ...product, mrp: e.target.value })}
                            placeholder='Product MRP'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="file"
                            name="productImageFile"
                            onChange={handleFileChange}
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) => setProduct({ ...product, category: e.target.value })}
                            className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none  ">
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => (
                                <option className=" first-letter:uppercase" key={index} value={value.name}>
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
                            className=" w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 "
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <button
                            onClick={addProductFunction}
                            type='button'
                            className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;
