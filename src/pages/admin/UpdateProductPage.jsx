import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import AdminLayout from "../../components/layout/AdminLayout";

const categoryList = [
    { name: 'Kash Products' },
    { name: 'Pride Products' },
    { name: 'Mustard Products' },
    { name: 'Kash Spices' },
];

const UpdateProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProductFunction } = context;

    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    });

    const getSingleProductFunction = async () => {
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            const productData = productTemp.data();
            setProduct({
                title: productData?.title || "",
                price: productData?.price || "",
                productImageUrl: productData?.productImageUrls || "",
                category: productData?.category || "",
                description: productData?.description || "",
                ...productData,
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const updateProduct = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'products', id), product);
            toast.success("Product Updated successfully");
            getAllProductFunction();
            navigate('/adminProductPage');
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSingleProductFunction();
    }, []);

    return (
        <AdminLayout>
            <div className="w-full max-w-md mx-auto bg-customBackG py-5 h-screen flex justify-center items-center">
                {loading && <Loader />}
                <div className="login_Form bg-opacity-50 backdrop-blur-md px-8 py-6 rounded-xl shadow-md w-full">
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-gray-100'>
                            Update Product
                        </h2>
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => setProduct({ ...product, title: e.target.value })}
                            placeholder='Product Title'
                            className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                            placeholder='Product Price'
                            className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
                            placeholder='Product Image Url'
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
                            value={product.sku}
                            onChange={(e) => setProduct({ ...product, sku: e.target.value })}
                            name="sku"
                            placeholder="Product SKU"
                            className="w-full px-2 py-1 text-gray-300 bg-customGray border border-gray-200 rounded-md outline-none placeholder-gray-300"
                        ></textarea>
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
                            onClick={updateProduct}
                            type='button'
                            className='bg-customGray hover:bg-gray-600 w-full text-white text-center py-2 font-bold rounded-md'
                        >
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default UpdateProductPage;
