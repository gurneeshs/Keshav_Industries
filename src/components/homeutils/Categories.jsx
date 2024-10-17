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
        <div className="bg-white p-8 md:p-16 mx-auto">
            {/* Categories Section */}
            <motion.div
                className="text-center mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} // Reset when the user scrolls out and back in
                variants={headingVariants}
            >
                <h1 className="text-3xl md:text-5xl mb-4 font-bold">Categories</h1>
                <p className="mt-2 text-base md:text-lg text-gray-700">
                    We are leading manufacturer & Exporter of Soya Refined Oil, Mustard Oil, Non-GMO Lecithin <br />
                    (Soya, Sunflower & Rice) and a variety of Quality Spices with Natural Flavour.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                {['Mustard_Seed', 'Soyabeans', 'Spices'].map((item) => (
                    <motion.div
                        key={item}
                        className="mx-auto shadow-lg rounded-lg overflow-hidden bg-gray-300 flex flex-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }} // Reset when the user scrolls out and back in
                        variants={cardVariants}
                    >
                        <img
                            src={`../img/${item}.png`}
                            alt={item}
                            className="w-full h-70 object-cover"
                        />
                        <div className="flex-grow text-center p-4">
                            <h4 className="text-lg md:text-xl font-semibold">
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
