/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import axios from 'axios'
import React, { useState, useContext } from "react";
import { BASE_URL } from "../../helper";
import { fireDB, auth } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { getFirestore, doc, updateDoc, increment } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import myContext from "../../context/myContext";
import { redirect, useNavigate } from "react-router-dom";


const BuyNowModal = ({ amounttoPay, cartItems }) => {
    const user = JSON.parse(localStorage.getItem('users'));

    const context = useContext(myContext);
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [orderId, setorderId] = React.useState("");
    const [payment_Id, setpaymentId] = React.useState("");
    const [payment_Signature, setSignature] = React.useState("");

    const [responseState, setResponseState] = React.useState([]);
    const [data, setData] = React.useState([]);

    const saveTokenToFirestore = async (tokenData) => {
        const tokenreferrence  = collection(fireDB, 'Token');

        try {
          await addDoc(tokenreferrence, tokenData);
          console.log(`Token for saved in Firestore`);
        } catch (error) {
          console.error('Error saving token to Firestore:', error);
        }
      };
    const generateToken = async () => {
        try {
            const response = await axios.post(
                'https://apiv2.shiprocket.in/v1/external/auth/login',
                { email: "devendra@keshav.co.in", password: "Keshav@123" },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const tokenData = response.data;
            console.log(`Token generated for User:`, tokenData);

            // Save the token in Firestore
            await saveTokenToFirestore(tokenData);
            // Schedule the next token regeneration in 9 days
            // scheduleTokenRegeneration(userEmail, userPassword);
        } catch (error) {
            console.error(`Error generating token :`, error);
        }
    };

    async function updateFirebaseAfterPayment(cartItems, totalAmount) {
        try {
            // Update product sales and price for each item in the cart
            const currentMonth = new Date().getMonth() + 1;
            for (let item of cartItems) {
                const productRef = doc(fireDB, 'products', item.id);
                const salesField = `monthlySales.${currentMonth}`;
                const revenueField = `monthlyRevenue.${currentMonth}`;

                await updateDoc(productRef, {
                    // Update monthly sales and total sales
                    [salesField]: increment(item.quantity),
                    totalSales: increment(item.quantity),

                    // Update monthly revenue and total revenue
                    [revenueField]: increment(item.quantity * item.price),
                    totalRevenue: increment(item.quantity * item.price)
                });
            }
            // Update the admin dashboard data


            console.log('Firebase updated successfully!');
        } catch (error) {
            console.error('Error updating Firebase:', error);
        }
    }
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");

            script.src = src;

            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script);
        })
    }

    const createRazorpayOrder = (amount) => {
        // console.log(cartItems)
        updateFirebaseAfterPayment(cartItems, amount)
        let data = JSON.stringify({
            amount: amount * 100,
            // amount:1,
            currency: "INR"
        })

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${BASE_URL}/orders`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data))
                handleRazorpayScreen(response.data.amount, response.data.order_id)
            })
            .catch((error) => {
                console.log("error at", error)
            })
    }

    const handleRazorpayScreen = async (amount, orderid) => {
        // console.log(orderid);
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("Some error at razorpay screen loading")
            return;
        }

        const options = {
            key: 'rzp_live_w1F1WlXsmUUQMN',
            amount: amount,
            currency: 'INR',
            name: "Keshav Industries",
            description: "Payment to Keshav Industries",
            image: "https://papayacoders.com/demo.png",
            order_id: orderid,
            handler: async function (response) {
                const paymentRef = collection(fireDB, 'payments');
                await addDoc(paymentRef, { UserID: user.uid, UserName: user.name, PaymentID: response.razorpay_payment_id, OrderId: response.razorpay_order_id, Signature: response.razorpay_signature, Order: cartItems});
                navigate('/user-dashboard');

            },
            // callback_url: `$http://localhost:4000/api/paymentverification`,
            prefill: {
                name: "Keshav Industries",
                email: "keshavindustries633@gmail.com"
            },
            theme: {
                color: "#030F27"
            }
        }
        // console.log(data);
        var paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    const paymentFetch = (paymentId) => {

        axios.get(`${BASE_URL}/payment/${paymentId}`)
            .then((response) => {
                console.log(response.data);
                setResponseState(response.data)
            })
            .catch((error) => {
                console.log("error occures", error)
            })
    }

    // useEffect(() => {
    //   let data = JSON.stringify({
    //     amount: amount * 100,
    //   })

    //   let config = {
    //     method: "post",
    //     maxBodyLength: Infinity,
    //     url: `http://localhost:5000/capture/${responseId}`,
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     data: data
    //   }

    //   axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data))
    //   })
    //   .catch((error) => {
    //     console.log("error at", error)
    //   })
    // }, [responseId])

    return (
        <>
            <Button
                type="button"
                onClick={() => createRazorpayOrder(amounttoPay)}
                className="w-full px-4 py-3 text-center text-gray-100 bg-customBlue border border-transparent dark:border-gray-700 hover:border-orange-600 hover:text-white hover:bg-orange-600 rounded-xl"
            >
                Buy now
            </Button>
        </>
    );
}

export default BuyNowModal;
