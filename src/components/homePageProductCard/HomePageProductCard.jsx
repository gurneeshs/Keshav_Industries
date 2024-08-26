import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    };
    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 2} },
    };


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="my-10">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }} // Reset when the user scrolls out and back in
                variants={headingVariants}

            >
                <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </motion.div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex justify-center">
                        {loading && <Loader />}
                    </div>

                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrls } = item;

                            return (
                                <motion.div
                                    key={index}
                                    className="p-4 w-full md:w-1/4"
                                    whileHover={{
                                        scale: 1.05,
                                        rotateY: 10,
                                        rotateX: 5,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.1 }} // Reset when the user scrolls out and back in
                                    variants={cardVariants}
                                >
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <motion.img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-60 h-96 w-full"
                                            src={productImageUrls[0]}
                                            alt="img"
                                            whileHover={{ scale: 1.1 }}
                                        />
                                        <div className="p-6">
                                            <h1 className="title-font font-medium text-md text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-md font-medium text-gray-900 mb-3 text-green-600">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center">
                                                {cartItems.some((p) => p.id === item.id) ? (
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="bg-red-900 hover:bg-red-800 w-full text-white py-[4px] rounded-lg font-bold"
                                                    >
                                                        Delete From Cart
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className="bg-blue-900 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold"
                                                    >
                                                        Add To cart
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePageProductCard;
