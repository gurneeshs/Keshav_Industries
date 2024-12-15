import { useContext, useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import { fireDB } from "../../firebase/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Button } from "@material-tailwind/react";
import user_logo from "/img/User_Logo.png";

const UserDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const [userObject, setUserObject] = useState();
    const [loading, setLoading] = useState(true); // Set loading to true initially

    useEffect(() => {
        const fetchDocumentByUIDField = async (uid) => {
            try {
                const collectionRef = collection(fireDB, "user");
                const q = query(collectionRef, where("uid", "==", uid));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        setUserObject({ id: doc.id, ...doc.data() });
                    });
                } else {
                    console.log("No document matches the provided UID field.");
                }
            } catch (error) {
                console.error("Error fetching document by UID field:", error);
            } finally {
                setLoading(false); // Stop the loader after fetching is complete
            }
        };

        if (user?.uid) {
            fetchDocumentByUIDField(user.uid);
        } else {
            setLoading(false); // If no user, stop the loader
        }
    }, [user?.uid]);

    const userLogout = () => {
        localStorage.removeItem('users');
        navigate('/');
    };

    return (
        <Layout>
            {/* Main content section */}
            <div className="relative">
                {/* Background image applied directly to content */}
                <div className="absolute inset-0 bg-[url('../img/bg-image-1.jpg')] bg-cover bg-center z-0"></div>

                {/* Main content */}
                <div className="relative z-10 container mx-auto px-4 py-5 lg:py-8">
                    {/* Top section */}
                    <div className="top">
    {/* Account Details */}
    <div className="bg-amber-700 py-5 rounded-xl border border-black">
        <h2 className="text-2xl lg:text-3xl font-bold ms-3 mb-5">Account Details</h2>
        <div className="flex justify-between items-center gap-x-48">
            {/* Text Column */}
            <div className="text-start ms-5 ps-5 flex-shrink-0">
                <h1 className="text-lg">
                    <span className="font-bold">Name : </span>
                    {userObject?.name}
                </h1>
                <h1 className="text-lg">
                    <span className="font-bold">Email : </span>
                    {userObject?.email}
                </h1>
                <h1 className="text-lg">
                    <span className="font-bold">Address : </span>
                    {userObject?.address} {userObject?.landmark} {userObject?.city} {userObject?.state} {userObject?.country}
                </h1>
                <Button onClick={userLogout} className="my-3">Logout</Button>
            </div>

            {/* Image Column */}
            <div className="flex-1 flex justify-center items-center">
                <img src={user_logo} alt="User Icon" className="w-1/5 h-auto" />
            </div>
        </div>
    </div>
</div>


                    {/* Bottom section */}
                    <div className="bottom mt-5">
                        <div className="bg-amber-700 py-5 rounded-xl border border-black">
                            <h2 className="text-2xl lg:text-3xl font-bold ms-3 mb-5 ">Order Details</h2>

                            {/* Loader */}
                            <div className="flex justify-center relative top-10">
                                {loading && <Loader />}
                            </div>

                            {/* Order Table */}
                            <div className="overflow-x-auto px-4">
    <table className="min-w-full max-w-4xl mx-auto divide-y divide-gray-700 border border-black">
        <tbody>
            <tr>
                <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold border-b border-black text-center">S.No.</th>
                <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold border-b border-black text-center">Order ID</th>
                <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold border-b border-black text-center">Date</th>
                <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold border-b border-black text-center">Payment status</th>
                <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold border-b border-black text-center">Fulfillment status</th>
                <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold border-b border-black text-center">Total</th>
            </tr>
            {userObject?.Orders &&
                Object.values(userObject.Orders).map((order, index) => {
                    const { orderId, PaymentID, Status } = order;
                    return (
                        <tr key={index}>
                            <td className="h-12 px-6 text-sm text-slate-500 border-b border-black text-center">{index + 1}.</td>
                            <td className="h-12 px-6 text-sm text-slate-500 border-b border-black text-center">{orderId}</td>
                            <td className="h-12 px-6 text-sm text-slate-500 border-b border-black text-center">November 15, 2024</td>
                            <td className="h-12 px-6 text-sm text-slate-500 border-b border-black text-center">Paid</td>
                            <td className="h-12 px-6 text-sm text-slate-500 border-b border-black text-center">
                                <span className={`px-3 py-1 rounded-lg ${Status.toLowerCase() === 'pending' ? 'bg-red-200 text-red-600' : Status.toLowerCase() === 'inprogress' ? 'bg-yellow-200 text-yellow-900' : 'bg-green-200 text-green-600'}`}>
                                    {Status.charAt(0).toUpperCase() + Status.slice(1)}
                                </span>
                            </td>
                            <td className="h-12 px-6 text-sm text-slate-500 border-b border-black text-center">Rs. xxxxx</td>
                        </tr>
                    );
                })}
        </tbody>
    </table>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UserDashboard;
