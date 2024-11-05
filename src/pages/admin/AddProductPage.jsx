import { useContext, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import cloudinary from "../../config/cloudinary";  // Import Cloudinary config
import AdminLayout from "../../components/layout/AdminLayout";

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
        productImages: [], // Array to hold multiple images
        category: "Kash Products",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
    });

    const handleFileChange = (e, index) => {
        const files = Array.from(e.target.files);
        setProduct((prevState) => {
            const newImages = [...prevState.productImages];
            newImages[index] = files[0]; // Replace or add new image at the specified index
            return {
                ...prevState,
                productImages: newImages,
            };
        });
    };

    const addMoreImages = () => {
        setProduct((prevState) => ({
            ...prevState,
            productImages: [...prevState.productImages, null], // Add a new empty slot for image
        }));
    };

    const deleteImage = (index) => {
        setProduct((prevState) => {
            const newImages = prevState.productImages.filter((_, imgIndex) => imgIndex !== index);
            return {
                ...prevState,
                productImages: newImages,
            };
        });
    };

    const addProductFunction = async () => {
        if (!product.title || !product.price || !product.productImages.length || !product.category || !product.description) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const imageUploadPromises = product.productImages.map(async (imageFile) => {
                if (!imageFile) return null;

                const formData = new FormData();
                formData.append("file", imageFile);
                formData.append("upload_preset", "ml_default");

                const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`, {
                    method: "POST",
                    body: formData,
                });

                const data = await response.json();

                // Apply optimizations
                const optimizedImageUrl = data.secure_url
                    .replace('/upload/', '/upload/c_scale,w_1000,q_auto,f_auto/');

                return optimizedImageUrl; // Return the optimized URL of the uploaded image
            });

            const productImageUrls = (await Promise.all(imageUploadPromises)).filter((url) => url); // Filter out null entries

            const newProduct = {
                title: product.title,
                price: product.price,
                mrp: product.mrp,
                productImageUrls, // Store the array of optimized image URLs
                category: product.category,
                description: product.description,
                quantity: product.quantity,
                time: product.time,
                date: product.date,
                monthlySales: {},
                monthlyRevenue: {},
                totalSales: 0,
                totalRevenue: 0
            };

            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, newProduct);

            toast.success("Product added successfully");
            navigate('/adminProductPage');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Failed to add product");
        }
    };

    return (
        <AdminLayout>
            <div className="w-full bg-customBackG py-5 h-screen flex justify-center items-center">
                {loading && <Loader />}
                <div className="login_Form bg-opacity-50 backdrop-blur-md px-8 py-6 rounded-xl shadow-md w-full max-w-lg overflow-y-auto">
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-gray-100'>
                            Add Product
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <input
                            type="number"
                            name="mrp"
                            value={product.mrp}
                            onChange={(e) => setProduct({ ...product, mrp: e.target.value })}
                            placeholder='Product MRP'
                            className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                        />
                    </div>

                    <div className="mb-3">
                        {product.productImages.map((image, index) => (
                            <div key={index} className="mb-3 flex items-center">
                                <input
                                    type="file"
                                    name={`productImageFile-${index}`}
                                    onChange={(e) => handleFileChange(e, index)}
                                    className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                                />
                                {image && (
                                    <button
                                        type="button"
                                        onClick={() => deleteImage(index)}
                                        className="ml-3 bg-red-500 text-white px-2 py-1 rounded-md"
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addMoreImages}
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-3"
                        >
                            Add Image
                        </button>
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
                            className="w-full px-2 py-1 text-gray-300 bg-customGray border border-gray-200 rounded-md outline-none placeholder-gray-300"
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
        </AdminLayout>
    );
};

export default AddProductPage;
