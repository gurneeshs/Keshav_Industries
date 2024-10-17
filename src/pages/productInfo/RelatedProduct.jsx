import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";


const RelatedProduct = ({ category }) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const fadeInDown = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    const filteredProducts = getAllProduct.filter(product => product.category === category);
    return (
        <div className="py-8">
            {/* Heading  */}

            {/* main  */}
            <section className="text-gray-600 body-font ">
                <div className="container px-5 lg:px-0 py-5 mx-auto">
                    <div className="flex justify-center">
                        {loading && <Loader />}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {filteredProducts.map((item, index) => {
                            const { id, title, price, productImageUrls } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/3 ">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        variants={fadeInUp}
                                        transition={{ duration: 2 }}
                                        className="h-full rounded-xl overflow-hidden shadow-md cursor-pointer bg-white">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="h-30  w-full"
                                            src={productImageUrls[0]}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>
                                            <div
                                                className="flex justify-center ">
                                                {cartItems.some((p) => p.id === item.id)

                                                    ?
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className=" bg-red-700 hover:bg-red-500 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Delete From Cart
                                                    </button>

                                                    :

                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className=" bg-blue-900 hover:bg-blue-800 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Add To Cart
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RelatedProduct;