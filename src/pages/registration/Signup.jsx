/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import Layout from '../../components/layout/Layout';

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        address: "",
        landmark: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
        role: "user"
    });

    const userSignupFunction = async () => {
        const { name, mobile, email, password, address, pincode, city, state, country } = userSignup;
        if (name === "" || mobile === "" || email === "" || password === "" || address === "" || pincode === "" || city === "" || state === "" || country === "") {
            toast.error("All Fields are required except Landmark");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            const user = {
                name,
                mobile,
                email: users.user.email,
                uid: users.user.uid,
                address,
                landmark: userSignup.landmark,
                pincode,
                city,
                state,
                country,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })
            };

            const userReference = collection(fireDB, "user");
            await addDoc(userReference, user);

            setUserSignup({
                name: "",
                mobile: "",
                email: "",
                password: "",
                address: "",
                landmark: "",
                pincode: "",
                city: "",
                state: "",
                country: ""
            });

            toast.success("Signup Successfully");
            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <Layout>
            <div className='flex justify-center items-center min-h-screen relative'>
                {/* Background Images */}
                <div className="absolute inset-0 bg-[url('../img/bg-image-1.jpg')] bg-cover bg-center "></div>
                {loading && <Loader />}
                
                {/* Signup Form */}
                <div className="relative z-10 bg-eda72f px-6 py-8 border border-gray-100 rounded-xl shadow-md w-full max-w-lg mx-4 my-16">
                    {/* Top Heading */}
                    <div className="mb-5">
                        <h2 className='text-center text-4xl font-bold'>Signup</h2>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 gap-4">
                        {/* Full Name */}
                        <input
                            type="text"
                            placeholder='Full Name'
                            value={userSignup.name}
                            onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />

                        {/* Mobile Number */}
                        <input
                            type="text"
                            placeholder='Mobile Number'
                            value={userSignup.mobile}
                            onChange={(e) => setUserSignup({ ...userSignup, mobile: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />

                        {/* Email Address */}
                        <input
                            type="email"
                            placeholder='Email Address'
                            value={userSignup.email}
                            onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />

                        {/* Password */}
                        <input
                            type="password"
                            placeholder='Password'
                            value={userSignup.password}
                            onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />

                        {/* Complete Address */}
                        <input
                            type="text"
                            placeholder='Complete Address'
                            value={userSignup.address}
                            onChange={(e) => setUserSignup({ ...userSignup, address: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />

                        {/* Landmark (optional) */}
                        <input
                            type="text"
                            placeholder='Landmark (optional)'
                            value={userSignup.landmark}
                            onChange={(e) => setUserSignup({ ...userSignup, landmark: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />

                        {/* Pincode */}
                        <input
                            type="text"
                            placeholder='Pincode'
                            value={userSignup.pincode}
                            onChange={(e) => setUserSignup({ ...userSignup, pincode: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />

                        {/* City */}
                        <input
                            type="text"
                            placeholder='City'
                            value={userSignup.city}
                            onChange={(e) => setUserSignup({ ...userSignup, city: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />

                        {/* State */}
                        <input
                            type="text"
                            placeholder='State'
                            value={userSignup.state}
                            onChange={(e) => setUserSignup({ ...userSignup, state: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />

                        {/* Country */}
                        <input
                            type="text"
                            placeholder='Country'
                            value={userSignup.country}
                            onChange={(e) => setUserSignup({ ...userSignup, country: e.target.value })}
                            className='bg-fafafa border border-black px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />
                    </div>

                    {/* Signup Button */}
                    <div className="mt-2 mb-5">
                        <button
                            type='button'
                            onClick={userSignupFunction}
                            className='bg-black hover:bg-blue-600 w-full text-white text-center py-2 font-bold rounded-md transition duration-300'
                        >
                            Signup
                        </button>
                    </div>

                    <div className='text-center'>
                        <h2 className='text-black'>Have an account? <Link className='text-blue-500 font-bold' to={'/login'}>Login</Link></h2>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Signup;
