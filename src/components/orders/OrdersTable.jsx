import { useContext, useState, useEffect } from "react";
import myContext from "../../context/myContext";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { fireDB } from "../../firebase/FirebaseConfig";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { Button } from "@material-tailwind/react";

const OrdersTable = () => {
    const context = useContext(myContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [orderData, setOrderData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [dimensions, setDimensions] = useState({
        length: '',
        breadth: '',
        height: '',
        weight: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDimensions({ ...dimensions, [name]: value });
    };

    const updateOrder = async (orderId) => {
        try {
            const orderRef = doc(fireDB, 'payments', orderId);
            await updateDoc(orderRef, dimensions);
            toast.success("Order Updated Successfully");
            closePopup();
        } catch (error) {
            toast.error("Error in updating order: " + error.message);
            console.error('Error updating order:', error);
        }
    };

    const openPopup = (orderId) => {
        setSelectedOrderId(orderId);
        const selectedOrder = orderData.find(order => order.id === orderId);
        if (selectedOrder) {
            setDimensions({
                length: selectedOrder.length || '',
                breadth: selectedOrder.breadth || '',
                height: selectedOrder.height || '',
                weight: selectedOrder.weight || '',
            });
        }
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setDimensions({
            length: '',
            breadth: '',
            height: '',
            weight: '',
        });
        setIsPopupOpen(false);
    };

    useEffect(() => {
        async function fetchOrders() {
            try {
                const paymentsCollection = collection(fireDB, "payments");
                const querySnapshot = await getDocs(paymentsCollection);
                const fetchedOrders = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setOrderData(fetchedOrders);
                setFilteredOrders(fetchedOrders);
            } catch (error) {
                console.error("Error fetching orders: ", error);
            }
        }

        fetchOrders();
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = orderData.filter(
            (order) =>
                (order.OrderId && order.OrderId.toLowerCase().includes(term)) ||
                (order.userInfo?.name && order.userInfo.name.toLowerCase().includes(term)) ||
                (order.uid && order.uid.toLowerCase().includes(term))
        );
        setFilteredOrders(filtered);
    };

    const placeShiprocketOrder = async (order) => {
        try {
            const response = await fetch('https://api.shiprocket.in/v1/external/orders/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with your Shiprocket access token
                },
                body: JSON.stringify({
                    order_id: order.id,
                    order_items: order.Order, // Adjust this according to the Shiprocket API requirements
                    shipping_address: {
                        name: order.userInfo.name,
                        phone: order.userInfo.phone,
                        // Include other necessary address fields here
                    },
                    // Add any other required parameters here
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            toast.success("Order placed for shipment successfully!");
            console.log("Order placed successfully:", data);
        } catch (error) {
            toast.error("Error placing order for shipment: " + error.message);
            console.error("Error in placing Shiprocket order:", error);
        }
    };

    const handleCancel = async (orderId) => {
        try {
            const orderRef = doc(fireDB, 'payments', orderId);
            await updateDoc(orderRef, { status: 'canceled' });
            toast.success("Order canceled successfully!");
            // Optionally, refresh the orders list
            await fetchOrders();
        } catch (error) {
            toast.error("Error canceling order: " + error.message);
            console.error("Error in canceling order:", error);
        }
    };

    return (
        <motion.div
            className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
                <div className='relative'>
                    <input
                        type='text'
                        placeholder='Enter Order Id'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
                </div>
            </div>
            <div className='space-y-4'>
                {filteredOrders.map((order) => (
                    <motion.div
                        key={order.id}
                        className='bg-customGray rounded-lg p-4 shadow-md border'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isPopupOpen && selectedOrderId === order.id && (
                            <div className="max-w-lg fixed bg-customBlue w-80 ml-8 p-8 mb-10">
                                <h2 className="text-xl font-bold mb-4">Update Order Details</h2>
                                {["length", "breadth", "height", "weight"].map((dim) => (
                                    <input
                                        key={dim}
                                        type="number"
                                        name={dim}
                                        placeholder={`${dim.charAt(0).toUpperCase() + dim.slice(1)} (in cm)`}
                                        value={dimensions[dim]}
                                        onChange={handleChange}
                                        className="border p-2 w-full mb-2 text-black"
                                        required
                                    />
                                ))}
                                <div>
                                    <Button onClick={closePopup} color="red">Cancel</Button>
                                    <Button onClick={() => updateOrder(order.id)} color="green">Update</Button>
                                </div>
                            </div>
                        )}
                        <div className='flex justify-between items-center mb-4'>
                            <div>
                                <p className='text-gray-100 font-semibold'>Order ID: {order.OrderId}</p>
                                <p className='text-gray-100'>Payment ID: {order.PaymentID}</p>
                                <p className='text-gray-100'>User Name: {order.userInfo?.name}</p>
                                <p className='text-gray-100'>User Phone: {order.userInfo?.phone}</p>
                                <p className='text-gray-100'>Created At: {order.Time.toDate().toLocaleString()}</p>
                            </div>
                            <div className='flex flex-col items-center space-x-2'>
                                <button
                                    className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded my-2 w-60'
                                    onClick={() => placeShiprocketOrder(order)}
                                >
                                    Ready for Shipment
                                </button>
                                <button
                                    className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded my-2 w-60'
                                    onClick={() => openPopup(order.id)}
                                >
                                    Update Order
                                </button>
                                <button
                                    className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded my-2 w-60'
                                    onClick={() => handleCancel(order.id)}
                                >
                                    Cancel Order
                                </button>
                            </div>
                        </div>
                        <div className='overflow-x-auto'>
                            <table className='min-w-full divide-y divide-gray-700 bg-gray-800'>
                                <thead>
                                    <tr>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Product Name</th>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Quantity</th>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Price</th>
                                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Description</th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-700'>
                                    {order.Order && order.Order.map((item, index) => (
                                        <tr key={index}>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>{item.ProductName}</td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>{item.Quantity}</td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>${item.Price}</td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>{item.Description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default OrdersTable;
