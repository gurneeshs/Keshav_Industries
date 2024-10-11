/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import axios from 'axios'
import React, { useState } from "react";
import { BASE_URL } from "../../helper";

const BuyNowModal = ({amounttoPay}) => {

    const checkoutHandler = async (amount) => {
    const { data: { key } } = await axios.get(`${BASE_URL}/api/getkey`)
    const { data:{order}} = await axios.post(`${BASE_URL}/api/checkout`, {
      amount
    }) }
    console.log(order);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [responseId, setResponseId] = React.useState("");
    const [responseState, setResponseState] = React.useState([]);
    const [data, setData] = React.useState([]);

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
        let data = JSON.stringify({
            amount: amount * 100,
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
                handleRazorpayScreen(response.data.amount)
            })
            .catch((error) => {
                console.log("error at", error)
            })
    }

    const handleRazorpayScreen = async (amount) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("Some error at razorpay screen loading")
            return;
        }

        const options = {
            key: 'rzp_test_GcZZFDPP0jHtC4',
            amount: amount,
            currency: 'INR',
            name: "Keshav Industries",
            description: "Payment to Keshav Industries",
            image: "https://papayacoders.com/demo.png",
            // handler: function (response) {
            //     setResponseId(response.razorpay_payment_id);
            //     setData(response);
                
            // },
            callback_url: `$http://localhost:4000/api/paymentverification`,
            prefill: {
                name: "Keshav Industries",
                email: "keshavindustries633@gmail.com"
            },
            theme: {
                color: "#030F27"
            }
        }
        console.log(data);
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    const paymentFetch = (e) => {
        e.preventDefault();

        const paymentId = e.target.paymentId.value;

        axios.get(`https://razorpayserver-4g2y.onrender.com/payment/${paymentId}`)
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
