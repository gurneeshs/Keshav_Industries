import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="text-gray-600 body-font bg-customBlue">
                {/* Main Container */}
                <div className="container mx-auto py-5">
                    <div className="bg-customBlue text-white py-8" id="end">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap justify-center gap-8">
                                {/* Know Us */}
                                <div className="w-full sm:w-1/2 lg:w-1/5">
                                    <div className="text-gray-300">
                                        <h3 className="text-xl font-bold">Know Us</h3>
                                        <ul className="mt-2 space-y-2">
                                            <li><a href="/" className="text-blue-400 hover:underline">Home</a></li>
                                            <li><a href="/allproduct" className="text-blue-400 hover:underline">Products</a></li>
                                            <li><a href="/UserTable" className="text-blue-400 hover:underline">Order Table</a></li>
                                            <li><a href="/export" className="text-blue-400 hover:underline">Export</a></li>
                                            <li><a href="/contact" className="text-blue-400 hover:underline">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Policy */}
                                <div className="w-full sm:w-1/2 lg:w-1/5">
                                    <div className="text-gray-300">
                                        <h3 className="text-xl font-bold">Policy</h3>
                                        <ul className="mt-2 space-y-2">
                                            <li><Link to={"/terms"} className="text-blue-400 hover:underline">Terms and Conditions</Link></li>
                                            <li><Link to={"/privacy"} className="text-blue-400 hover:underline">Privacy Policy</Link></li>
                                            <li><Link to={"/cancellation"} className="text-blue-400 hover:underline">Shipping and Cancellation Policy</Link></li>
                                            <li><Link to={"/returns"} className="text-blue-400 hover:underline">Returns, Refunds and Replacement Policy</Link></li>
                                            <li><Link to={"/Products_and_Service"} className="text-blue-400 hover:underline">Product/Service Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Follow Us */}
                                <div className="w-full sm:w-1/2 lg:w-1/5">
                                    <div className="text-gray-300">
                                        <h3 className="text-xl font-bold">Follow Us</h3>
                                        <ul className="mt-2 space-y-2">
                                            <li><i className="bi bi-whatsapp text-green-600"></i><a href="https://wa.me/" className="text-blue-400 hover:underline ml-2">WhatsApp</a></li>
                                            <li><i className="bi bi-instagram text-pink-600"></i><a href="https://www.instagram.com/industries.keshav/" className="text-blue-400 hover:underline ml-2">Instagram</a></li>
                                            <li><i className="bi bi-facebook text-blue-600"></i><a href="https://www.facebook.com/share/19dyzFGvSe/?mibextid=LQQJ4d" className="text-blue-400 hover:underline ml-2">Facebook</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="w-full sm:w-1/2 lg:w-1/4">
                                    <div className="text-gray-300">
                                        <h3 className="text-xl font-bold">Address</h3>
                                        <ul className="mt-2 space-y-2 text-sm">
                                            <li><h4 className="font-semibold">Factory</h4> <i className="bi bi-geo-alt-fill"></i> Plot No. 101, Industrial Area No: 3, A.B. Road, Dewas, Madhya Pradesh - 455001, India</li>
                                            <li><h4 className="font-semibold">Corporate Office</h4><i className="bi bi-geo-alt-fill"></i> 402, Pukhraj Corporate, Navlakha Main Road, Janki Nagar, Indore, Madhya Pradesh-452001, India</li>
                                            <li><i className="bi bi-envelope-at"></i> <a href="mailto:care.customer@keshav.co.in" className="text-blue-400 hover:underline">Email: care.customer@keshav.co.in</a></li>
                                            <li><i className="bi bi-phone"></i> <a href="tel:+919109884497" className="text-blue-400 hover:underline">Call us: +91-9109884497</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Copyright Section */}
                            <div className="text-center text-gray-400 mt-8">
                                <span>Copyright © 2023 Keshav Industries. All rights reserved by <a href="/" className="text-blue-400 hover:underline font-bold">Keshav Industries</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
