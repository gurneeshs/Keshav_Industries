import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const Carrer = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightToLeftVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Layout>
      <div className="mx-auto px-4 py-6 bg-customNewBack my-0">
        {/* Contact Header */}
        <motion.div
          className="text-center bg-eda72f py-16"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Career With Us
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between py-10 gap-10">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg flex-1"
            initial="hidden"
            animate="visible"
            variants={leftToRightVariants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-800">Fill Out Your Details</h2>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="First name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Message (Optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-eda72f text-white font-bold rounded-lg hover:bg-ffab19"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Customer Care Section */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg flex-1"
            initial="hidden"
            animate="visible"
            variants={rightToLeftVariants}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800">Career With Us</h2>
            <p className="text-gray-600 mt-4 text-justify">
              At Keshav Industries, we always work for employee’s advancement through proper training & handholding to each individual.
            </p>
            <p className="text-gray-600 mt-4 text-justify">
              We nurture our employees by providing proper learning & growth opportunities to balance their work life as well as professional life.
            </p>
            <p className="text-gray-600 mt-4 text-justify">
              We always welcome enthusiastic & dedicated professionals who can add significant value in our journey. Interested candidates can fill up the below form and apply through our portal in specific departments.
            </p>
            <p className="text-gray-600 mt-4 text-justify">
              For any further career-related information, please feel free to reach us at hrd@keshav.co.in
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Carrer;
