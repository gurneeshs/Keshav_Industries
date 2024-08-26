import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import RelatedProduct from "./RelatedProduct";

const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const { id } = useParams();

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // Fetch product data
    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            const productData = { ...productTemp.data(), id: productTemp.id };
            setProduct(productData);
            setMainImage(productData.productImageUrls[0]);  // Set the first image as the main image
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Trigger getProductData whenever id changes
    useEffect(() => {
        getProductData();
    }, [id]);

    // Handle image thumbnail click
    const handleImageClick = (index) => {
        const newImages = [...product.productImageUrls];
        const temp = newImages[0];
        newImages[0] = newImages[index];
        newImages[index] = temp;
        setMainImage(newImages[0]);
    };

    return (
        <Layout>
            <section className="py-0 lg:py-3 font-poppins dark:bg-customGray">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-1 -mx-4">
                            <div className="w-full px-4 mb-4 md:w-1/2 md:mb-0">
                                <div>
                                    <img
                                        className="w-full lg:h-[30em] rounded-lg object-cover"
                                        src={mainImage}
                                        alt={product?.title}
                                    />
                                    <div className="flex space-x-2 mt-2 justify-center">
                                        {product?.productImageUrls.slice(1).map((url, index) => (
                                            <img
                                                key={index + 1}
                                                onClick={() => handleImageClick(index + 1)}
                                                className="w-16 h-16 object-cover border border-gray-300 rounded-md cursor-pointer"
                                                src={url}
                                                alt={`thumbnail-${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <div className="mt-6 mb-6">
                                        <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-800 md:text-2xl dark:text-gray-300">
                                            {product?.title}
                                        </h2>
                                        <p className="block text-lg font-semibold text-gray-700 dark:text-gray-400">
                                            <span>Price: <span className="text-green-700">₹ {product?.price}</span></span>
                                        </p>
                                        <p className="block text-lg font-semibold text-gray-700 dark:text-gray-400">
                                            <span>MRP: <span className="text-red-700">₹ {product?.mrp}</span></span>
                                        </p>
                                        <p className="block text-lg font-semibold text-gray-700 dark:text-gray-400">
                                            <span>Category: <span className="text-blue-900">{product?.category}</span></span>
                                        </p>
                                    </div>
                                    <div className="mb-6">
                                        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                            Description:
                                        </h2>
                                        <p>{product?.description}</p>
                                    </div>
                                    <div className="mb-6" />
                                    <div className="flex flex-wrap items-center mb-6">
                                        {cartItems.some((p) => p.id === product?.id) ? (
                                            <button
                                                onClick={() => deleteCart(product)}
                                                className="w-full px-4 py-3 text-center text-white bg-red-500 border border--600 hover:bg-red-600 hover:text-gray-100 rounded-xl"
                                            >
                                                Delete from cart
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => addCart(product)}
                                                className="w-full px-4 py-3 text-center text-customBlue bg-yellow-600 border border-yellow-600 hover:bg-yellow-600 rounded-xl"
                                            >
                                                Add to cart
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <section>
                <h2 className="mx-5 font-bold text-3xl">You May Also Like</h2>
                <RelatedProduct category={product?.category} />
            </section>
        </Layout>
    );
};

export default ProductInfo;
