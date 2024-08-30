// QualificationCertification.js
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const QualificationCertification = () => {
  const floatUpAnimation = {
    whileHover: { y: -10 },
    whileTap: { y: 0 }
  };

  return (
    <Layout>
      <div className='bg-customNewBack py-5'>
        <motion.h1
          className='text-3xl font-bold text-center'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >Qualification and Certification</motion.h1>
        <div className="container mx-auto p-6 space-y-8">
          {/* First Div */}
          <motion.div
            className="space-y-8 md:flex md:space-y-0 md:space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Quality Section */}
            <motion.div
              className="md:w-1/2 p-4 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Quality</h2>
              <p className='text-gray-700'>
                Keshav is the synonym of Quality & Trust. We are continuously working on Quality & Innovation since the inception of this organization.
              </p>
              <p className='text-gray-700'>
                We have been able to establish a strong brand image for Soya Refined Oil, Mustard Oil & Soya Lecithin due to our unique quality and specifications. This helps us to meet the global demands of different food ingredients, additives, emulsifiers by supplying to more than 35 countries.
              </p>
            </motion.div>

            {/* Laboratory Section */}
            <motion.div
              className="md:w-1/2 p-4 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Laboratory</h2>
              <p className='text-gray-700'>
                We are having our state-of-the-art laboratory infrastructure at Dewas, Madhya Pradesh. We have been well equipped with latest laboratory infrastructure.
              </p>
              <h2 className="text-2xl font-bold my-4 text-gray-900">Labs</h2>
              <p className='text-gray-700'>
                We have installed best equipment to measure different chemical parameters, physical parameters etc. We have our own Molecular Biology & Microbiology lab with latest technology. With the help of Real-Time PCR & ELISA techniques, we are distinguishing the different genes, antibody, antigen from the samples of Soya Refined Oil, Lecithin as well as all other byproducts.
              </p>
            </motion.div>
          </motion.div>

          {/* Second Div */}
          <motion.div
            className="p-4 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.h2
              className="text-2xl font-bold mb-2 text-center text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Certifications
            </motion.h2>
            <motion.h3
              className="text-md text-gray-700 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              Considering our legacy and expertise in this Industry, we have been certified by ISO, APEDA, KOSHER, Indian Organic, USDA Organic, HALAL & Spice Board.
            </motion.h3>

            {/* Images Section */}
            <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
              {Array(8).fill('').map((_, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-200 h-32 rounded-lg shadow-lg cursor-pointer"
                  {...floatUpAnimation}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                >
                  {/* Replace with actual image tags if needed */}
                  <img src={`../img/certificates/image${index + 1}.png`} alt={`Certification ${index + 1}`} className="h-full w-full rounded-lg" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default QualificationCertification;
