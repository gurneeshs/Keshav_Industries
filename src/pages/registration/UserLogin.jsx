import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Layout from '../../components/layout/Layout';

const UserLogin = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            const q = query(
                collection(fireDB, "user"),
                where('uid', '==', users?.user?.uid)
            );
            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                let user;
                QuerySnapshot.forEach((doc) => user = doc.data());
                localStorage.setItem("users", JSON.stringify(user));
                setUserLogin({ email: "", password: "" });
                toast.success("Login Successfully");
                setLoading(false);
                if (user.role === "admin") {
                    navigate('/admin-dashboard');
                } else {
                    navigate('/user-dashboard');
                }
            });
            return () => unsubscribe();
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    };

    return (
        <Layout>
            <div className='flex justify-center items-center min-h-screen relative'>
                {loading && <Loader />}
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('../img/bg-image-1.jpg')] bg-cover bg-center"></div>
                {/* Login Form */}
                <div className="relative z-10 bg-eda72f px-8 py-8 border border-gray-100 rounded-xl shadow-md w-full max-w-md mx-4 my-16">
                    {/* Top Heading */}
                    <div className="flex items-center justify-center mb-5">
                        <img src='../img/Logo_removebg.png' alt="logo" className="inline-block w-16 h-16 me-5" />
                        <h2 className='mx-3 inline-block text-center text-2xl font-bold text-gray-900'>
                            User Login
                        </h2>
                    </div>
                    {/* <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-gray-900'>
                            User Login
                        </h2>
                    </div> */}

                    {/* Input One */}
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            placeholder='Email Address'
                            value={userLogin.email}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    email: e.target.value
                                });
                            }}
                            className='bg-gray-50 border border-gray-200 px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />
                    </div>

                    {/* Input Two */}
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder='Password'
                            value={userLogin.password}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    password: e.target.value
                                });
                            }}
                            className='bg-gray-50 border border-gray-200 px-2 py-2 w-full rounded-md outline-none placeholder-gray-500'
                        />
                    </div>

                    {/* Login Button */}
                    <div className="mb-5">
                        <button
                            type='button'
                            onClick={userLoginFunction}
                            className='bg-customBlue hover:bg-blue-900 w-full text-white text-center py-2 font-bold rounded-md'
                        >
                            Login
                        </button>
                    </div>
                    <div>
                        <h2 className='text-black'>Don't Have an account? <Link className='text-customBlue font-bold' to={'/signup'}>Register Here</Link></h2>
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default UserLogin;
