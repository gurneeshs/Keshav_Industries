import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.9 }}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="flex flex-col justify-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm text-justify">
              We, Keshav Industries Private Limited started our journey in 2009 by manufacturing world’s best Soya Refined Oil and Non-GMO Soya Lecithin.
            </p>
            <p className="text-sm text-justify">
              With a long term and sustainable mission of delivering quality edible oil & related food products, we started to export Non-GMO Soya Lecithin from the year of 2011 and we have been considered as a leading exporter of Non-GMO Soya Lecithin, Organic Lecithin as well as Hydrolyzed Soya Lecithin by exporting to more than 35 countries.
            </p>
            <p className="text-sm text-justify">
              After the legacy of more than a decade in Soya Industry, we have started to manufacture Mustard Oil and providing our best Mustard Oil in Indian Domestic Market.
            </p>
            <p className="text-sm text-justify">
              Considering the rice agricultural diversity in India, we have been ventured into Spices segment and we are exporting best quality of Spices to all the key destinations.
            </p>
            <p className="text-sm text-justify">
              We are having state of the art Infrastructure Production Unit as well as Laboratory with latest technology at Dewas, Madhya Pradesh. We have been certified by ISO, FSSAI, Kosher, Indian Organic, USDA Organic, APEDA, Halal and Indian Spice Board.
            </p>
          </motion.div>
          <motion.div 
            className="mx-10 flex items-center justify-center w-3/4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="../img/Logo.jpg"
              alt="Keshav Industries"
              className="rounded-lg shadow-lg w-full h-full"
            />
          </motion.div>
        </div>
      </div>
      <div className='container mx-auto'>
        <motion.h2 
          className='text-3xl font-bold justify-center text-center my-3 mt-9'
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Manufacturing Industry
        </motion.h2>
        <motion.p 
          className='text-md justify-center text-center my-3'
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          We are having state of the art Infrastructure Production Unit as well as Laboratory with latest technology at Dewas, Madhya Pradesh.
        </motion.p>
        {/* <MainScreen /> */}
        {/* <ImageSliderNew/> */}
      </div>
    </Layout>
  );
}

export default AboutUs;
