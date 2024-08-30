// Export.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const Export = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <Layout>
      <div className="mx-auto p-6 bg-customNewBack">
        <motion.h1
          className="text-3xl font-bold text-center mt-8 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Keshav Industries – Reliable Exporter of Non-GMO Lecithin & Indian Spices
        </motion.h1>

        <motion.p
          className="text-md text-gray-700 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          We are the fastest growing Non-GMO Lecithin manufacturer with latest sustainable technologies & modern laboratory infrastructure. We are providing the best products of Non-GMO Soya Lecithin, Sunflower Lecithin, Rice Lecithin & Indian Spices to our customers with a distinctive combination of nutritional, technical & sustainable benefits with boundaryless support & commitments.
        </motion.p>

        <motion.p
          className="text-md text-gray-700 mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Since the year of 2011, we have been considered as fastest growing exporter of different soya products like Non-GMO Soya Lecithin, Hydrolyzed Soya Lecithin, Soya Meal, Soya Refined Oil etc. Considering our legacy in the domain of Soya Industry, we have been ventured into a new segment of Indian Spices and started our services to global fraternity with our quality Indian Spices.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="relative h-screen bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
            style={{ backgroundImage: `url('../img/export/image1.jfif')` }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95, rotateY: -10 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => handleCardClick('/spicesProduct')}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl font-bold mb-4">Spices Products</h2>
              <motion.button
                className="px-4 py-2  rounded hover:bg-gray-900 "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Click Here
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative h-screen bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
            style={{ backgroundImage: `url('../img/export/image2.jfif')` }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95, rotateY: -10 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => handleCardClick('/lecithinProduct')}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl font-bold mb-4">Lecithin Products</h2>
              <motion.button
                className="px-4 py-2 rounded hover:bg-gray-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Click Here
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

    </Layout>
  );
};

export default Export;
