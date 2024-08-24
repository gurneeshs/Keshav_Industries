import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const Director = () => {
  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x:20 },
    visible: { opacity: 1, x:0 },
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeInDown}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold">From the Desk of Director</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="flex flex-col justify-center space-y-6 px-5 text-justify"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeInLeft}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <strong className='mb-0'>KESHAV is the synonym of QUALITY & TRUST.</strong>

          <p className="text-md leading-relaxed">
            <p>By keeping this vision, we started our journey in the Soya Industry in 2009. Since then, we have been manufacturing the world’s best Soya Refined Oil and Non-GMO Soya Lecithin. In this journey, we have emerged as the fastest-growing organization with a wide range of Edible Oils, Food Ingredients, and Natural Spices. Our two Soya Refined Oil Brands – KASH & PRIDE – have played a vital role in the Indian Market in the growth of our journey. Considering the global demand for different food ingredients like Non-GMO Soya Lecithin, Hydrolyzed Soya Lecithin, Sunflower Lecithin, Rice Lecithin & Indian Spices, we have been exporting our best products to more than 35 countries.</p>
          </p>
          <p className="text-md leading-relaxed">
            <strong>Team:</strong> We, as a team at “KESHAV,” with dedication and honesty, have been able to establish our footprint in the Domestic and International Markets. I have always believed in the people’s power at “KESHAV,” which can make the impossible, possible. The “KESHAV” Spirit has enabled our company to scale greater heights worldwide.
          </p>
          <p className="text-md leading-relaxed">
            <strong>International Buyers:</strong> We thank all our buyers, stakeholders, and partners from around the world for their support in establishing our products in the International Market.
          </p>
          <p className="text-md leading-relaxed">
            <strong>Consumers, Distributors, Retailers, Stakeholders, Partners, Employees, & Well-Wishers:</strong> We thank all our distributors and retailers in the Indian market for their relentless work in expanding our distribution network. Special thanks to housewives for accepting and appreciating KASH & PRIDE in their daily lives as the best Soya Refined Oil & Mustard Oil.
          </p>
          <p className="text-md leading-relaxed">
            Please feel free to reach me with any queries at <a href="mailto:navneet@keshav.co.in" className="text-blue-600">navneet@keshav.co.in</a>.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col"
          initial="hidden"          
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeInRight}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img
            src="../img/director/MD_Keshav_group.jpg"
            alt="Director"
            className="rounded-lg shadow-lg w-full lg:w-3/4 mx-auto"
          />
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-semibold">Navneet Kumar</h3>
            <p className="text-sm text-gray-600">Director, Keshav Industries Private Limited</p>
            <p className="mt-2 text-md text-justify">
              “At KESHAV, we strive for excellence and are committed to delivering the highest quality products to our consumers worldwide.”
            </p>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default Director;
