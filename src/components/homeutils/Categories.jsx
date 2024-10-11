import { React } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Categories = () => {
    // Variants for animations
    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
    };

    return (
        <div className="p-16 pb-5 mx-auto bg-slate-100">
            {/* Categories Section */}
            <motion.div
                className="text-center mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }} // Reset when the user scrolls out and back in
                variants={headingVariants}
            >
                <h1 className="text-5xl mb-8 font-bold">Categories</h1>
                <p className="mt-2 text-lg text-gray-700">
                    We are leading manufacturer & Exporter of Soya Refined Oil, Mustard Oil, Non-GMO Lecithin <br />
                    (Soya, Sunflower & Rice) and a variety of Quality Spices with Natural Flavour.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Mustard_Seed', 'Soyabeans', 'Spices'].map((item, index) => (
                    <motion.div
                        key={item}
                        className="mx-auto shadow-lg rounded-lg overflow-hidden bg-gray-300"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }} // Reset when the user scrolls out and back in
                        variants={cardVariants}
                    >
                        <img src={`../img/${item}.png`} alt={item} className="w-full h-68 object-cover" />
                        <div className="text-center p-4">
                            <h4 className="text-xl font-semibold">
                                {item}{' '}
                                <Link
                                    to="/allproduct"
                                    className="text-white bg-orange-600 border border-orange-600 rounded-3xl p-2 hover:bg-white hover:text-orange-600"
                                >
                                    Check all
                                </Link>
                            </h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
