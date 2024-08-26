import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";

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

    return (
        <Layout>
            <div className="py-8">
                <div className="">
                    <h1 className="text-center mb-5 text-2xl font-semibold">All Products</h1>
                </div>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex justify-center">
                            {loading && <Loader />}
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {getAllProduct.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    product={item}
                                    addCart={addCart}
                                    deleteCart={deleteCart}
                                    cartItems={cartItems}
                                    navigate={navigate}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

const ProductCard = ({ product, addCart, deleteCart, cartItems, navigate }) => {
    const { id, title, price, productImageUrls, mrp } = product;
    const [mainImage, setMainImage] = useState(productImageUrls[0]);

    const handleImageClick = (index) => {
        const newImages = [...productImageUrls];
        const temp = newImages[0];
        newImages[0] = newImages[index];
        newImages[index] = temp;
        setMainImage(newImages[0]);
    };

    return (
        <div className="p-4 w-full md:w-1/4">
            <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
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
        </div>
    );
};

export default AllProduct;
