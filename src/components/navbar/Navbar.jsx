import { Link, useNavigate, useLocation } from "react-router-dom";
// Import your icons
import { Clock, Phone, Mail, Home, Briefcase, Box, FileText, ShoppingCart, User, Shield } from "lucide-react";
import { motion } from "framer-motion";
import user_logo_male from "/img/profile-pic-male.png";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../helper";
const Navbar = () => {
    const navigate = useNavigate();
    const [showInfo, setShowInfo] = useState({ hours: false, call: false, email: false });
    const [userObject, setUserObject] = useState();
    const [loading, setLoading] = useState(true);

    const toggleInfo = (type) => {
        setShowInfo((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);


    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const token = localStorage.getItem("authToken");
            if (!token) {
              toast.error("No token found. Redirecting to login...");
            //   navigate("/userlogin");
              return;
            }
    
            const response = await axios.get(`${BASE_URL}/user/getUser`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            setUserObject(response.data.userData);
            // console.log(userObject)
          } catch (error) {
            console.error("Error fetching user data:", error);
            // navigate("/userlogin");
          } finally {
            setLoading(false);
          }
        };
        fetchUserData();
      }, [navigate]);
    
    // logout function 
    const logout = () => {
        localStorage.clear('user');
        navigate("/login");
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // State for mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Use Location to get current path
    const location = useLocation();

    // Function to check if the current link is active
    const isActive = (path) => location.pathname === path ? "text-orange-500" : "text-white";

    const fadeInUp = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeInDown = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    // navList Data
    const navList = (
        <ul className="flex flex-col lg:flex-row lg:space-x-3 font-medium text-md px-5">
            <li className="py-2 px-2 lg:py-0">
                <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/')}`} to={'/'}>
                    <Home className="inline mr-1" size={18} strokeWidth={2} />
                    Home
                </Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/company')}`} to={'/company'}>
                    <Briefcase className="inline mr-1" size={18} strokeWidth={2} />
                    Company
                </Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/allproduct')}`} to={'/allproduct'}>
                    <Box className="inline mr-1" size={18} strokeWidth={2} />
                    All Product
                </Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/export')}`} to={'/export'}>
                    <FileText className="inline mr-1" size={18} strokeWidth={2} />
                    Export
                </Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/qualification')}`} to={'/qualification'}>
                    <Shield className="inline mr-1" size={18} strokeWidth={2} />
                    Q&C
                </Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/carrer')}`} to={'/carrer'}>
                    <User className="inline mr-1" size={18} strokeWidth={2} />
                    Carrer
                </Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/contact')}`} to={'/contact'}>
                    <Phone className="inline mr-1" size={18} strokeWidth={2} />
                    Contact
                </Link>
            </li>
            {user?.role === "user" ? (
                <li className="py-2 px-2 lg:py-0">
                    <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/user-dashboard')}`} to={'/user-dashboard'}>
                        User
                    </Link>
                </li>
            ) : (
                <li className="py-2 px-2 lg:py-0">
                    <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/userlogin')}`} to={'/userlogin'}>
                        Login
                    </Link>
                </li>
            )}
            {user?.role === "user" ? (
                <li className="py-2 px-2 lg:py-0">
                    <Link className={`relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 ${isActive('/cart')}`} to={'/cart'}>
                        <ShoppingCart className="inline mr-1" size={18} strokeWidth={2} />
                        Cart ({cartItems.length})
                    </Link>
                </li>
            ) : ('')}
        </ul>
    );

    return (
        <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInDown}
    transition={{ duration: 0.9 }}
    className="px-5 bg-orange-500 z-40"
>
<div className="flex items-center justify-between py-4 px-5">
  {/* Keshav Industries */}
  <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl text-center sm:text-left md:ps-5">
    <span className="block">Keshav Industries</span>
  </h1>

  {/* User Login Name - Visible on larger screens */}
  <div className="hidden sm:block text-white text-sm sm:text-base md:text-lg md:pe-5">
    {/* Replace with dynamic user login name */}
    <span>Welcome, {userObject?userObject?.fname:'user'}</span>
  </div>
</div>


    {/* Main Content (Nav) */}
    <motion.nav
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.9 }}
        className="bg-customBlue mx-10 sticky top-0 z-50 items-center justify-center"
    >
        <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
            <div className="lg:hidden flex justify-center items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <div className={`lg:flex ${isOpen ? "block" : "hidden"} lg:block space-y-3 lg:space-y-0 lg:space-x-3 text-center lg:text-left items-center justify-center mx-auto`}>
                {navList}
            </div>
        </div>
    </motion.nav>
</motion.div>

    );
}

export default Navbar;
