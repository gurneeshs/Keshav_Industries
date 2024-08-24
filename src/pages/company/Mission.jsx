import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

const MissionVisionValue = () => {
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
        <motion.h2
          className='justify-center text-center text-3xl font-bold my-8'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount:0.1 }}
          variants={cardVariants}
        >
          Mission, Vision and Values
        </motion.h2>
        <div className="space-y-12">
          {/* Mission Card */}
          <motion.div
            className="flex flex-col lg:flex-row bg-blue-50 shadow-lg rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount:0.1 }}
            variants={cardVariants}
          >
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-sm text-justify">
                Contribute for sustainable agriculture by manufacturing world’s best Edible Oil & Food Ingredients by optimizing a unique manufacturing process.
              </p>
            </div>
            <img
              src="../img/Mission/mission.gif"
              alt="Mission"
              className="lg:w-1/2 h-64 lg:h-auto object-cover"
            />

          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="flex flex-col lg:flex-row bg-blue-50 shadow-lg rounded-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount:0.1 }}
            variants={cardVariants}
          >
            <img
              src="../img/Mission/vision.gif"
              alt="Vision"
              className="lg:w-1/2 h-64 lg:h-auto object-cover"
            />
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-sm text-justify">
                To be a global leader for diverse agricultural products like Soya derivatives (Soya Refined Oil, Non-GMO Lecithin – Soya, Sunflower & Rice, Soya DOC, Soya Chunks), Mustard Oil & Indian Quality Spices.
              </p>
            </div>
          </motion.div>

          {/* Values Card */}
        </div>
      </div>
  );
};

export default MissionVisionValue;
