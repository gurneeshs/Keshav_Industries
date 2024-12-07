import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc, updateDoc, increment, collection, setDoc, arrayUnion, arrayRemove, query, where } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import RelatedProduct from "./RelatedProduct";
import { motion } from "framer-motion";

const ProductInfo = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const fadeInDown = {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    };
    const fadeInLeft = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    };
    const fadeInRight = {
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0 },
    };

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const { id } = useParams();

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

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
        // toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        getProductData();
    }, [id]);

    const handleImageClick = (index) => {
        const newImages = [...product.productImageUrls];
        const temp = newImages[0];
        newImages[0] = newImages[index];
        newImages[index] = temp;
        setMainImage(newImages[0]);
    };

    // Define images for each category
    const categoryImages = {
        "kash products": [
            "../img/ProductInfo/kashimage1.jpeg",
            "../img/ProductInfo/kashimage2.jpeg",
            "../img/ProductInfo/kashimage3.jpeg"
        ],
        "pride products": [
            "../img/ProductInfo/prideimage1.jpeg",
            "../img/ProductInfo/prideimage2.jpeg"
        ],
        // Add more categories and images as needed
    };

    // Determine images to display based on the product category
    const imagesToDisplay = categoryImages[product?.category?.toLowerCase()] || [];

    return (
        <Layout>
            <section className="py-0 lg:py-11 font-poppins dark:bg-customGray bg-customNewBack ">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInDown}
                        transition={{ duration: 2 }}
                        className="max-w-6xl px-4 mx-auto"
                    >
                        <div className="flex flex-wrap mb-1 -mx-4">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInLeft}
                                transition={{ duration: 2 }}
                                className="w-full px-4 mb-4 md:w-1/2 md:mb-0"
                            >
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
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInRight}
                                transition={{ duration: 2 }}
                                className="w-full px-4 md:w-1/2"
                            >
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
                                                className="w-full px-4 py-3 text-center text-customBlue bg-orange-500 hover:bg-orange-400 rounded-xl"
                                            >
                                                Add to cart
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </section>

            {/* New Section with Category-Specific Images */}
            {imagesToDisplay.length > 0 && (
                <section className="bg-customNewBack py-10 dark:bg-customGray">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-6xl px-4 mx-auto my-2 gap-6"
                    >
                        {imagesToDisplay.map((image, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInUp}
                                transition={{ duration: 1 }}
                                className="overflow-hidden rounded-lg shadow-lg h-full cursor-pointer my-6"
                            >
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            )}

            <section className="bg-customNewBack">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInDown}
                    transition={{ duration: 2 }}
                    className="mx-5 font-bold text-3xl"
                >
                    You May Also Like
                </motion.h2>
                <RelatedProduct category={product?.category} />
            </section>
        </Layout>
    );
};

export default ProductInfo;
