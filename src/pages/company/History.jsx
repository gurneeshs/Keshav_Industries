import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const phases = [
  {
    heading: "Keshav Industry Private Limited",
    image: "../img/historyimg/image1.jpg",
    description: "Established Keshav Industry by manufacturing Soya Refined Oil",
  },
  {
    heading: "Export to International Market",
    image: "../img/historyimg/image2.jpg",
    description: "Initiated lecithin production and exported to the international market. In 2011, the first consignment was sent to Poland, and by 2015, we marked ourselves in the global Lecithin market, being considered a key exporter of Non-GMO Soya Lecithin to more than 35 countries.",
  },
  {
    heading: "Mustard Product Launch",
    image: "../img/historyimg/image3.jpg",
    description: "Launched Mustard Oil brand 'KASH MUSTARD OIL' in the Indian Market.",
  },
  {
    heading: "Spices",
    image: "../img/historyimg/image4.jpg",
    description: "Ventured into the new business of Indian Organic Spices.",
  },
];

const History = () => {
  return (
      <div className="relative container mx-auto w-screen px-4 py-8">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(../img/historyimg/back.jpg)', 
            zIndex: '-2',
            backgroundAttachment: 'fixed',
            opacity: '0.5' 
          }}
        />
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 ">Our History</h2>
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, delay: index * 0.5, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-semibold text-gray-800">{phase.heading}</h3>
              <p className="text-sm text-justify text-gray-700">{phase.description}</p>
            </motion.div>
            <motion.div
              className="mx-auto flex items-center justify-center w-full h-64 lg:h-auto"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, delay: index * 0.7, ease: "easeOut" }}
            >
              <img
                src={phase.image}
                alt={phase.heading}
                className="rounded-lg shadow-lg w-50 h-2/3 object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
  );
};

export default History;
