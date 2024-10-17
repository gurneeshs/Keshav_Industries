import { Link, useNavigate } from "react-router-dom";
// import { Clock, Phone, Mail } from "lucide-react";
import { Clock, Phone, Mail, Home, Briefcase, Box, FileText, ShoppingCart, User, Shield } from "lucide-react";
import { motion } from "framer-motion";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
    const [showInfo, setShowInfo] = useState({ hours: false, call: false, email: false });

    const toggleInfo = (type) => {
        setShowInfo((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
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
        <ul className="flex flex-col lg:flex-row lg:space-x-3 text-white font-medium text-md px-5">
            <li className="py-2 px-2 lg:py-0">
                <Link className="text-eda72f hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/'}>
                    <Home className="inline mr-1" size={18} strokeWidth={2} />

                    Home</Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/company'}><Briefcase className="inline mr-1" size={18} strokeWidth={2} />Company</Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/allproduct'}><Box className="inline mr-1" size={18} strokeWidth={2} />All Product</Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/export'}><FileText className="inline mr-1" size={18} strokeWidth={2} />Export</Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/qualification'}><Shield className="inline mr-1" size={18} strokeWidth={2} />Q&C</Link>
            </li>
            <li className="py-2 px-2 lg:py-0">
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/carrer'}><User className="inline mr-1" size={18} strokeWidth={2} />Carrer</Link>
            </li>

            <li className="py-2 px-2 lg:py-0">
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/contact'}><Phone className="inline mr-1" size={18} strokeWidth={2} />Contact</Link>
            </li>
            {user?.role === "user" ? (
                <li className="py-2 px-2 lg:py-0">
                    <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/user-dashboard'}>User</Link>
                </li>
            ) : (
                <li className="py-2 px-2 lg:py-0">
                    <Link
                        className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0"
                        to={'/userlogin'}
                    >
                        Login
                    </Link>
                </li>
            )}
            {/* <li className="py-2 lg:py-0">
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/admin-dashboard'}>Admin</Link>
            </li> */}
            <li className="py-2 px-2 lg:py-0">
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/cart'}>
                    <ShoppingCart className="inline mr-1" size={18} strokeWidth={2} />
                    Cart ({cartItems.length})
                </Link>
            </li>
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
            {/* Contact Information */}

            {/* Contact Information */}
            <div className="hidden lg:flex flex-col md:flex-row justify-around items-start py-5 text-black text-xs md:text-sm space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex flex-col items-center md:items-start py-0 text-black text-xs md:text-sm">
                    <h1 className="text-3xl font-bold text-center md:text-left md:flex md:flex-col md:items-start md:space-y-1">
                        <span className="block md:hidden">Keshav Industries</span>
                        <span className="hidden md:block">Keshav</span>
                        <span className="hidden md:block">Industries</span>
                    </h1>
                </div>
                <div className="py-2 flex items-center space-x-2">
                    <Clock size={30} className="md:h-10" />
                    <div className="flex flex-col items-start">
                        <h3 className="text-base font-semibold">Opening Hours</h3>
                        <h5 className="text-sm">Mon-Fri: 8:00 - 21:00</h5>
                    </div>
                </div>
                <div className="py-2 flex items-center space-x-2">
                    <Phone size={30} className="md:h-10" />
                    <div className="flex flex-col items-start">
                        <h3 className="text-base font-semibold">Call Us</h3>
                        <h5 className="text-sm">+91-9109884497</h5>
                    </div>
                </div>
                <div className="py-2 flex items-center space-x-2">
                    <Mail size={30} className="md:h-10" />
                    <div className="flex flex-col items-start">
                        <h3 className="text-base font-semibold">Email Us</h3>
                        <h5 className="text-sm">info@keshavindustries.com</h5>
                    </div>
                </div>
            </div>
            <h1 className="lg:hidden xl:hidden 2xl:hidden font-bold text-3xl py-2 text-center">Keshav Industries</h1>
            <div className="flex flex-col md:flex-row justify-around items-start text-black text-xs md:text-sm space-y-2 md:space-y-0 md:space-x-6 block lg:hidden xl:hidden 2xl:hidden">

                <div className="w-full flex md:flex-row items-center md:space-x-2">
                    <div
                        className="w-1/3 py-2 px-5 flex items-center cursor-pointer lg:border-0 border-r-2 border-black"
                        onClick={() => toggleInfo('hours')}
                    >
                        <Clock size={20} className="md:h-6 text-center mx-auto" />
                    </div>

                    <div
                        className="w-1/3 py-2 px-5 flex items-center cursor-pointer lg:border-0 border-r-2 border-black"
                        onClick={() => toggleInfo('call')}
                    >
                        <Phone size={20} className="md:h-6 mx-auto" />
                    </div>

                    <div
                        className="w-1/3 py-2 px-5 flex items-center cursor-pointer lg:border-0"
                        onClick={() => toggleInfo('email')}
                    >
                        <Mail size={20} className="md:h-6 mx-auto" />
                    </div>
                </div>

                {/* Display info below icons only if clicked */}
                {showInfo.hours && (
                    <div className="text-center w-full mt-4">
                        <h3 className="text-base font-semibold">Opening Hours</h3>
                        <h5 className="text-sm">Mon-Fri: 8:00 - 21:00</h5>
                    </div>
                )}

                {showInfo.call && (
                    <div className="mt-4 text-center w-full ">
                        <h3 className="text-base font-semibold">Call Us</h3>
                        <h5 className="text-sm">+91-9109884497</h5>
                    </div>
                )}

                {showInfo.email && (
                    <div className="mt-4 text-center w-full ">
                        <h3 className="text-base font-semibold">Email Us</h3>
                        <h5 className="text-sm">info@keshavindustries.com</h5>
                    </div>
                )}



            </div>



            {/* Main Navigation */}
            <motion.nav
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.9 }}
                className="bg-customBlue mx-10 sticky top-0 z-50 items-center justify-center"
            >
                {/* Main Content */}
                <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                    {/* Hamburger Menu for Mobile */}
                    <div className="lg:hidden flex justify-center items-center">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Nav Links and Search Bar */}
                    <div className={`lg:flex ${isOpen ? "block" : "hidden"} lg:block space-y-3 lg:space-y-0 lg:space-x-3 text-center lg:text-left items-center justify-center mx-auto`}>
                        {navList}
                        {/* <div className="lg:hidden px-5">
                            <SearchBar />
                        </div> */}
                    </div>

                    {/* Search Bar for Large Screens */}
                    {/* <div className="hidden lg:block">
                        <SearchBar />
                    </div> */}
                </div>
            </motion.nav>
        </motion.div>
    );
}

export default Navbar;
