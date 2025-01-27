import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import user_logo_male from "/img/profile-pic-male.png";
import user_logo_female from "/img/profile-pic-female.png";
import account_icon from "/img/account-icon.png";
import order_img from "/img/purchase-order.png";
import logout_img from "/public/img/Logout.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../helper";


const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false); // Added missing state
  const navigate = useNavigate();
  const [userObject, setUserObject] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          toast.error("No token found. Redirecting to login...");
          navigate("/userlogin");
          return;
        }

        const response = await axios.get(`${BASE_URL}/user/getUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserObject(response.data.userData);
        console.log(response.data.userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/userlogin");
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [navigate]);

  const userLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user")
    navigate("/");
  };


  // Sample Orders
  const orders = [
    {
      title: "The Compound Effect Book By Darren Hardy",
      price: 285,
      status: "delivered",
      date: "Mar 19, 2024",
    },
    {
      title: "The Seven Spiritual Laws Of Success (English)",
      price: 297,
      status: "delivered",
      date: "Mar 17, 2024",
    },
    {
      title: "MyTech With Charger M3 Smart Band Fitness",
      price: 410,
      status: "cancelled",
      date: "Oct 23, 2020",
    },
    {
      title: "Realme 7 Pro (Mirror Silver, 128 GB)",
      price: 19999,
      status: "cancelled",
      date: "Oct 21, 2020",
    },
    {
        title: "The Compound Effect Book By Darren Hardy",
        price: 285,
        status: "delivered",
        date: "Mar 19, 2024",
      },
      {
        title: "The Seven Spiritual Laws Of Success (English)",
        price: 297,
        status: "delivered",
        date: "Mar 17, 2024",
      },
      {
        title: "MyTech With Charger M3 Smart Band Fitness",
        price: 410,
        status: "cancelled",
        date: "Oct 23, 2020",
      },
      {
        title: "Realme 7 Pro (Mirror Silver, 128 GB)",
        price: 19999,
        status: "cancelled",
        date: "Oct 21, 2020",
      },
  ];

  // Filter orders based on search term
  const filteredOrders = orders.filter((order) =>
    order.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex flex-wrap mx-auto p-6">
          {/* Left Pane */}
          <div className="w-full lg:w-1/4 bg-gray-100 p-0 lg:p-6 space-y-6">
            {/* User Info */}
            <div className="bg-white p-4 rounded-sm shadow-md flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center">
                  {userObject?.gender == 'male' ? <img src={user_logo_male} alt="Logo" /> : <img src={user_logo_female} alt="Logo" /> }
              </div>
              <div>
                <p className="text-sm text-gray-600">Hello,</p>
                <h2 className="text-lg font-semibold text-gray-800">{userObject?.fname}</h2>
              </div>
            </div>

            {/* Options */}
            <div className="bg-white p-4 rounded-sm shadow-md border-b-4 border-blue-500">
              {/* Dropdown Button for Mobile */}
              <div className="block lg:hidden">
                <button
                  className="w-full flex items-center justify-between p-2 text-gray-700 font-semibold bg-gray-200 rounded-md"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  More Options
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform transition-transform ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Content */}
                {dropdownOpen && (
                  <ul className="mt-2 space-y-4 text-gray-700">
                    <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex items-center">
                      <img src={order_img} alt="" className="w-8 h-8 inline-block" />
                      <span className="text-lg font-semibold ps-4"><Link to={'/UserTable'}>My Orders</Link></span>
                    </li>
                    <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex items-center">
                      <img src={account_icon} alt="" className="w-8 h-8 inline-block" />
                      <span className="text-lg font-semibold ps-4">
                        <Link to={'/user-dashboard'}>Account Settings</Link>
                      </span>
                    </li>
                    <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex items-center">
                      <img src={logout_img} alt="" className="w-8 h-8 inline-block" />
                      <span className="text-lg font-semibold ps-4"><button onClick={userLogout}>Logout</button></span>
                    </li>
                  </ul>
                )}
              </div>

              {/* Static Options for Larger Screens */}
              <ul className="hidden lg:block space-y-4 text-gray-700">
                <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex items-center">
                  <img src={order_img} alt="" className="w-8 h-8 inline-block" />
                  <span className="text-lg font-semibold ps-4"><Link to={'/UserTable'}>My Orders</Link></span>
                </li>
                <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex items-center">
                  <img src={account_icon} alt="" className="w-8 h-8 inline-block" />
                  <span className="text-lg font-semibold ps-4"><Link to={'/user-dashboard'}>Account Settings</Link></span>
                </li>
                <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer flex items-center">
                  <img src={logout_img} alt="" className="w-8 h-8 inline-block" />
                  <span className="text-lg font-semibold ps-4"><button onClick={userLogout}>Logout</button></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Pane */}
          <div className="flex-1 bg-gray-100 p-0 lg:p-6 space-y-6">
            {/* Search Bar */}
            <div className="flex flex-wrap items-center mb-6 mt-5 w-full">
              <input
                type="text"
                placeholder="Search your orders here"
                className="flex-grow ps-3 py-2 border border-gray-300 rounded-l-sm focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r-sm flex items-center justify-center w-full lg:w-auto mt-2 lg:mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m-1.9 1.9A7.5 7.5 0 1110.75 3.5a7.5 7.5 0 014.95 12.95z"
                  />
                </svg>
                Search Orders
              </button>
            </div>

            {/* Orders List */}
            <div className="w-full mx-auto">
              {filteredOrders.length === 0 ? (
                <p>No orders found.</p>
              ) : (
                filteredOrders.map((order, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-3 items-center p-4 mb-6 bg-white border border-gray-300 rounded-sm shadow-md gap-y-4 lg:gap-y-0"
                  >
                    {/* First Column: Title and Order ID */}
                    <div className="text-left">
                      <h3 className="text-sm font-semibold mb-1">{order.title}</h3>
                      <p className="text-gray-500 text-sm">Order ID: {`#ORD${index + 1001}`}</p>
                    </div>

                    {/* Second Column: Price */}
                    <div className="text-left lg:text-center">
                      <p className="text-gray-600 text-sm font-medium">₹{order.price}</p>
                    </div>

                    {/* Third Column: Status and Cancellation Info */}
                    <div className="text-left lg:text-right">
                      <p className="text-sm flex items-center lg:justify-end mb-1">
                        {order.status === "delivered" ? (
                          <span className="text-green-500 font-medium mr-2">● Delivered</span>
                        ) : (
                          <span className="text-red-500 font-medium mr-2">● Cancelled</span>
                        )}
                        on {order.date}
                      </p>
                      {order.status === "cancelled" && (
                        <p className="text-gray-500 text-sm mt-2">
                          As per request, your item has been cancelled
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserTable;
