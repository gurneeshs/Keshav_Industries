import { useContext, useState, useEffect } from "react";
import myContext from "../../context/myContext";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";
import { fireDB } from "../../firebase/FirebaseConfig";
import { collection, getDocs, doc, updateDoc, getDoc, deleteDoc, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import UpdateOrder from "./UpdateOrder";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import axios from "axios";

const pickupLocation = {
    name: "Primary",
    address: "101, Industrial Area No. 3",
    city: "Dewas",
    state: "Madhya Pradesh",
    pin_code: "455001",
    country: "India",
    phone: "9425923509"
};

const OrdersTable = () => {
    const context = useContext(myContext);
    const { getAllProduct, getAllOrder, getAllUser } = context;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [orderData, setOrderData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState([]);
    const SHIPROCKET_EMAIL = 'devendra@keshav.co.in'; // Replace with your Shiprocket email
    const SHIPROCKET_PASSWORD = 'Keshav@123'; // Replace with your Shiprocket password
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
            await updateDoc(orderRef, {
                length: dimensions.length,
                breadth: dimensions.breadth,
                height: dimensions.height,
                weight: dimensions.weight,
            });
            toast.success("Order Updated Successfully");
            setIsPopupOpen(false);
            console.log('Order updated successfully!');
        } catch (error) {
            toast.error("Error in updating order");
            setIsPopupOpen(false);
            console.error('Error updating order:', error);
        }
    };

    const openPopup = (orderId) => {
        setSelectedOrderId(orderId);
        setIsPopupOpen(true);
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

    const validateOrderItems = (items) => {
        return items.every(item => 
            item.name && 
            item.sku && 
            typeof item.units === 'number' && 
            !isNaN(Number(item.selling_price)) // Check for valid selling price
        );
    };

    const placeShiprocketOrder = async (orderDetails) => {
    try {
        // Validate dimensions and log order details
        if (!orderDetails.length || !orderDetails.breadth || !orderDetails.height || !orderDetails.weight) {
            toast.error("Please Update the order dimensions First");
            return;
        }

        console.log("Order Details:", orderDetails.Order);

        const validateOrderItems = (items) => {
            return items.every(item => 
                item.name && 
                item.sku && 
                typeof item.units === 'number' && 
                !isNaN(Number(item.selling_price))
            );
        };

        if (!validateOrderItems(orderDetails.Order)) {
            toast.error("Order items structure is invalid.");
            return;
        }

        const authResponse = await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', {
            email: SHIPROCKET_EMAIL,
            password: SHIPROCKET_PASSWORD,
        });

        const totalCost = orderDetails.Order.reduce((sum, item) => sum + (Number(item.selling_price) * item.units), 0);
        const fullName = orderDetails.userInfo.name.split(" ");
        const firstName = fullName[0];
        const lastName = fullName.slice(1).join(" ");
        const token = authResponse.data.token;

        const orderData = {
            order_id: orderDetails.OrderId,
            order_date: new Date().toISOString().split('T')[0],
            pickup_location: "101, Industrial Area No. 3, A.B. Road,, Dewas, Madhya Pradesh, India, 455001",
            billing_customer_name: firstName,
            billing_last_name: lastName,
            billing_address: orderDetails.userInfo.addressLane,
            billing_city: orderDetails.userInfo.city,
            billing_pincode: orderDetails.userInfo.pincode,
            billing_state: orderDetails.userInfo.state,
            billing_country: orderDetails.userInfo.country,
            billing_email: orderDetails.userInfo.email,
            billing_phone: orderDetails.userInfo.phone,
            shipping_is_billing: true,
            order_items: orderDetails.Order.map(item => ({
                name: item.name,
                sku: item.sku,
                units: item.units,
                selling_price: Number(item.selling_price)
            })),
            payment_method: 'prepaid',
            sub_total: totalCost,
            length: orderDetails.length,
            breadth: orderDetails.breadth,
            height: orderDetails.height,
            weight: orderDetails.weight,
        };

		// const orderData = {
        //     order_id: 'order_PBhPx2zIHIg9Ka',
        //     order_date: '2024-10-28',
        //     pickup_location: '265 Mukharji Nagar Dewas',
        //     billing_customer_name: 'Divyansh',
        //     billing_last_name: 'Rana',
        //     billing_address: ,
        //     billing_city: ,
        //     billing_pincode: ,
        //     billing_state: ,
        //     billing_country: ,
        //     billing_email: ,
        //     billing_phone: ,
        //     shipping_is_billing: true,
        //     order_items: orderDetails.Order.map(item => ({
        //         name: ,
        //         sku: ,
        //         units: ,
        //         selling_price:
        //     })),
        //     payment_method: 'prepaid',
        //     sub_total: ,
        //     length: ,
        //     breadth: ,
        //     height: ,
        //     weight: ,
        // };

        console.log('Order Data to Shiprocket:', orderData);

        const createOrderResponse = await axios.post(
            'https://apiv2.shiprocket.in/v1/external/orders/create/adhoc',
            orderData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        // console.log('Create Order Response:', createOrderResponse.data, token);

        if (createOrderResponse.data.status === 200) {
            console.log('Order placed successfully:', createOrderResponse.data);
            // Handle successful order placement
        } else {
            console.error('API Error Status:', createOrderResponse.data, token);
            toast.error("Failed to Place Order");
        }
    } catch (error) {
        toast.error("Error in placing order");
        console.error('Error placing order:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
            toast.error(`Error: ${error.response.data.message || 'Unknown error'}`);
        } else {
            console.error('Error message:', error.message);
            toast.error(`Error: ${error.message}`);
        }
    }
};

    
    

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = orderData.filter(
            (order) =>
                order.OrderId.toLowerCase().includes(term) ||
                order.User.name.toLowerCase().includes(term) ||
                order.uid.toLowerCase().includes(term)
        );
        setFilteredOrders(filtered);
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
						{isPopupOpen && (
							<div className="max-w-lg  fixed bg-customBlue w-80 ml-8 p-8 mb-10 ">
								<div>
									<h2 className="text-xl font-bold mb-4">Update Order Details</h2>
									<input
										type="number"
										name="length"
										placeholder="Length (in cm)"
										value={dimensions.length}
										onChange={handleChange}
										className="border p-2 w-full mb-2 text-black"
										required
									/>
									<input
										type="number"
										name="breadth"
										placeholder="Breadth (in cm)"
										value={dimensions.breadth}
										onChange={handleChange}
										className="border p-2 w-full mb-2 text-black"
										required
									/>
									<input
										type="number"
										name="height"
										placeholder="Height (in cm)"
										value={dimensions.height}
										onChange={handleChange}
										className="border p-2 w-full mb-2 text-black"
										required
									/>
									<input
										type="number"
										name="weight"
										placeholder="Weight"
										value={dimensions.weight}
										onChange={handleChange}
										className="border p-2 w-full mb-2 text-black"
										required
									/>
								</div>
								<div>
									<Button onClick={() => setIsPopupOpen(false)} color="red">Cancel</Button>
									<Button onClick={() => updateOrder(order.id)} color="green">Update</Button>
								</div>
							</div>
						)}

						<div className='flex justify-between items-center mb-4'>
							<div>
								<p className='text-gray-100 font-semibold'>Order ID: {order.OrderId}</p>
								<p className='text-gray-100'>Payment ID: {order.PaymentID}</p>
								<p className='text-gray-100'>User Name: {order.userInfo.name}</p>
								<p className='text-gray-100'>User Phone: {order.userInfo.phone}</p>
								<p className='text-gray-100'>Created At: {order.Time.toDate().toLocaleString()}</p>

							</div>
							<div className='flex flex-col items-center space-x-2'>
								<button
									className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded my-2 w-60'
									onClick={() => placeShiprocketOrder(order)} // Add your shipment handler here
								>
									Ready for Shipment
								</button>
								<button
									className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded my-2 w-60'
									onClick={() => openPopup(order.id)} // Add your update handler here
								>
									Update Order
								</button>
								<button
									className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded my-2 w-60'
									onClick={() => handleCancel(order.id)} // Add your cancel handler here
								>
									Cancel Order
								</button>
							</div>

							{/* <Eye className='text-indigo-400 hover:text-indigo-300 cursor-pointer' size={24} /> */}
						</div>

						{/* Nested table for order details */}
						<div className='overflow-x-auto'>
							<table className='min-w-full divide-y divide-gray-700 bg-gray-800'>
								<thead>
									<tr>
										<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
											Product Name
										</th>
										<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
											Quantity
										</th>
										<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
											Price
										</th>
										<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
											Description
										</th>
									</tr>
								</thead>
								<tbody className='divide-y divide-gray-700'>
									{order.Order.map((item, index) => (
										<tr key={index}>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												{item.name}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												{item.units}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												${item.selling_price}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
												{item.Description}
											</td>
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