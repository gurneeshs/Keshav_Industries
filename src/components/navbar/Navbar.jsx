import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/'}>Home</Link>
            </li>
            {/* Company */}
            <li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/'}>Company</Link>
            </li>

            {/* All Product */}
            <li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/allproduct'}>All Product</Link>
            </li>
            {/* Export */}
            <li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/'}>Export</Link>
            </li>
            {/* Contact */}
            <li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/contact'}>Contact</Link>
            </li>



            {/* Signup */}
            {/* {!user ? <li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/signup'}>Signup</Link>
            </li> : ""} */}

            {/* Signup */}
            {/* {!user ? <li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/login'}>Login</Link>
            </li> : ""} */}

            {/* User */}
            {/* {user?.role === "user" && <li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/user-dashboard'}>User</Link>
            </li>} */}

            {/* Admin */}
            {<li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {/* {user && <li className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0 cursor-pointer" onClick={logout}>
                logout
            </li>}
 */}
            {/* Cart */}
            <li>
                <Link className="hover:text-eda72f relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:right-0" to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-customBlue sticky top-0 z-50">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-bold text-white text-2xl text-center">Keshav Industries</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
