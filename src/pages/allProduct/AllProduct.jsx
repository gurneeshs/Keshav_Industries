import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";
import { motion } from "framer-motion";

const AllProduct = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Add to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const cardContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    return (
        <Layout>
            <div className="py-8 bg-customNewBack">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 2 }}
                    className=""
                >
                    <h1 className="text-center my-5 text-4xl font-bold">All Products</h1>
                </motion.div>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex justify-center">
                            {loading && <Loader />}
                        </div>
                        <motion.div
                            className="flex flex-wrap -m-4"
                            variants={cardContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            {getAllProduct.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    product={item}
                                    addCart={addCart}
                                    deleteCart={deleteCart}
                                    cartItems={cartItems}
                                    navigate={navigate}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

const ProductCard = ({ product, addCart, deleteCart, cartItems, navigate, index }) => {
    const { id, title, price, productImageUrls, mrp } = product;
    const [mainImage, setMainImage] = useState(productImageUrls[0]);

    const handleImageClick = (index) => {
        const newImages = [...productImageUrls];
        const temp = newImages[0];
        newImages[0] = newImages[index];
        newImages[index] = temp;
        setMainImage(newImages[0]);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="p-4 w-full md:w-1/4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer bg-white">
                <img
                    onClick={() => navigate(`/productinfo/${id}`)}
                    className="lg:h-60 h-96 w-full object-cover"
                    src={mainImage}
                    alt="product"
                />
                <div className="flex space-x-2 mt-2 justify-center">
                    {productImageUrls.slice(1).map((url, index) => (
                        <img
                            key={index + 1}
                            onClick={() => handleImageClick(index + 1)}
                            className="w-16 h-16 object-cover border border-gray-300 rounded-md cursor-pointer"
                            src={url}
                            alt={`thumbnail-${index + 1}`}
                        />
                    ))}
                </div>
                <div className="p-6">
                    <h1 className="title-font text-sm font-bold text-gray-900 mb-3">
                        {title.substring(0, 25)}
                    </h1>
                    <h1 className="title-font text-sm font-medium text-green-900 mb-3">
                        ₹{price}
                        <span className="text-red-500 line-through ml-2">
                            ₹{mrp}
                        </span>
                    </h1>
                    <div className="flex justify-center">
                        {cartItems.some((p) => p.id === product.id) ? (
                            <button
                                onClick={() => deleteCart(product)}
                                className="bg-red-700 hover:bg-red-500 w-full text-white py-[4px] rounded-lg font-bold"
                            >
                                Delete From Cart
                            </button>
                        ) : (
                            <button
                                onClick={() => addCart(product)}
                                className="bg-blue-900 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold"
                            >
                                Add To Cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AllProduct;
