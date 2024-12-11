import { useContext, useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import { fireDB } from "../../firebase/FirebaseConfig";
import { collection } from "firebase/firestore";
import { query, where, getDocs } from 'firebase/firestore';


const UserDashboard = () => {
    // user
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const [userObject, setUserObject] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDocumentByUIDField = async (uid) => {
            try {
                const collectionRef = collection(fireDB, "user");
                const q = query(collectionRef, where("uid", "==", uid));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        setUserObject({ id: doc.id, ...doc.data() });
                        // console.log(doc.data());

                    });
                } else {
                    console.log("No document matches the provided UID field.");
                }
            } catch (error) {
                console.error("Error fetching document by UID field:", error);
            } finally {
                setLoading(false); // Stop the loader after the fetch is complete
            }
        };

        if (user?.uid) {
            fetchDocumentByUIDField(user.uid);
        } else {
            setLoading(false); // If no user, stop the loader
        }
    }, [user?.uid]);


    const context = useContext(myContext);
    // const { loading, getAllOrder } = context;

    const userLogout = () => {
        localStorage.removeItem('users');
        navigate('/')

    }
    // console.log(getAllOrder)

    // console.log(user)
    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                {/* Top  */}
                <div className="top ">
                    {/* main  */}
                    <div className=" bg-pink-50 py-5 rounded-xl border border-pink-100">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            {/* Name  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Name : </span>
                                {user?.name}
                            </h1>

                            {/* Email  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Email : </span>
                                {user?.email}
                            </h1>

                            {/* Date  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Date : </span>
                                {user?.date}
                            </h1>

                            {/* Role  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Role : </span>
                                {user?.role}
                            </h1>

                            <button onClick={userLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* bottom  */}
                <div className="bottom">
                    {/* main 1 */}
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        {/* text  */}
                        <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>

                        <div className="flex justify-center relative top-10">
                            {loading && <Loader />}
                        </div>

                        {/* main 2 */}
                        {/* <div>
                            {userObject.Orders.map((item, index) => {
                                const { id, date, quantity, price, title, productImageUrl, category } = item
                                const { status } = order
                                return (
                                    <div key={index} className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
                                        <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                                            <div className="p-8">
                                                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                                    <div className="mb-4">
                                                        <div className="text-sm font-semibold text-black">Order Id</div>
                                                        <div className="text-sm font-medium text-gray-900">#{id}</div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="text-sm font-semibold">Date</div>
                                                        <div className="text-sm font-medium text-gray-900">{date}</div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="text-sm font-semibold">Total Amount</div>
                                                        <div className="text-sm font-medium text-gray-900">₹ {price * quantity}</div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="text-sm font-semibold">Order Status</div>
                                                        {status === 'pending' ?
                                                            <div className="text-sm font-medium text-red-800 first-letter:uppercase">{status}</div>
                                                            : <div className="text-sm font-medium text-green-800 first-letter:uppercase">{status}</div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="p-8">
                                                <ul className="-my-7 divide-y divide-gray-200">
                                                    <li
                                                        className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                                    >
                                                        <div className="flex flex-1 items-stretch">
                                                            <div className="flex-shrink-0">
                                                                <img
                                                                    className="h-40 w-40 rounded-lg border border-gray-200 object-contain"
                                                                    src={productImageUrl}
                                                                    alt="img"
                                                                />
                                                            </div>

                                                            <div className="ml-5 flex flex-col justify-between">
                                                                <div className="flex-1">
                                                                    <p className="text-sm font-bold text-gray-900">{title}</p>
                                                                    <p className="mt-1.5 text-sm font-medium text-gray-500">{category}</p>
                                                                </div>

                                                                <p className="mt-4 text-sm font-medium text-gray-500">x {quantity}</p>
                                                            </div>
                                                        </div>

                                                        <div className="ml-auto flex flex-col items-end justify-between">
                                                            <p className="text-right text-sm font-bold text-gray-900">₹ {price}</p>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div> */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-700">
                                <tbody>
                                    <tr>
                                        <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                                        <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold fontPara">Order ID</th>
                                        <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold fontPara">Payment ID</th>
                                        <th scope="col" className="h-12 px-6 text-md text-slate-700 bg-slate-100 font-bold fontPara">Status</th>
                                    </tr>
                                    {userObject?.Orders &&
                                        Object.values(userObject.Orders).map((order, index) => {
                                            const { orderId, PaymentID, Status } = order;
                                            return (
                                                <tr key={index}>
                                                    <td className="h-12 px-6 text-sm text-slate-500">
                                                        {index + 1}.
                                                    </td>
                                                    <td className="h-12 px-6 text-sm text-slate-500">
                                                        {orderId}
                                                    </td>
                                                    <td className="h-12 px-6 text-sm text-slate-500">
                                                        {PaymentID}
                                                    </td>
                                                    <td className="h-12 px-6 text-sm text-slate-500">
                                                        <span
                                                            className={`px-3 py-1 rounded-lg ${Status.toLowerCase() === 'pending'
                                                                    ? 'bg-red-200 text-red-600'
                                                                    : 'bg-green-200 text-green-600'
                                                                }`}
                                                        >
                                                            {Status.charAt(0).toUpperCase() + Status.slice(1)}
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDashboard;

