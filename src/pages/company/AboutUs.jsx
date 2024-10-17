import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const images = [
    '../img/about/image1.jpg',
    '../img/about/image2.jpg',
    '../img/about/image3.jpg',
    '../img/about/image4.jpg',
    '../img/about/image5.jpg',
    '../img/about/image6.jpg',
    '../img/about/image7.jpg',
    '../img/about/image8.jpg',
    '../img/about/image9.jpg',
  ];

  const scrollUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const zoomVariants = {
    hover: { scale: 1.1 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x:40 },
    visible: { opacity: 1, x:0 },
  };
  const fadeIn = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.9 }}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInLeft}
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
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInRight}
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
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Manufacturing Industry
        </motion.h2>
        <motion.p
          className='text-md justify-center text-center my-3'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.9 }}
        >
          We are having state of the art Infrastructure Production Unit as well as Laboratory with latest technology at Dewas, Madhya Pradesh.
        </motion.p>
        <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={scrollUpVariants}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                variants={zoomVariants}
                whileHover="hover"
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
