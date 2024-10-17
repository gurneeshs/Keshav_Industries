import CountUp from 'react-countup';
import { useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";


const CountUpComponent = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const fadeInDown = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="container mx-auto my-10 z-20 bg-customNewBack">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.9 }}

                className="flex flex-wrap justify-center"
            >
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 border-r last:border-r-0 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={9.75} end={2200} /></h1>
                    <p>Wallets Connected</p>
                </div>
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 border-r last:border-r-0 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={9.75} end={2500} /></h1>
                    <p>Wallets Connected</p>
                </div>
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 border-r last:border-r-0 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={9.75} end={1900} /></h1>
                    <p>Creative artists</p>
                </div>
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={9.75} end={2700} /></h1>
                    <p>Estimated value</p>
                </div>
            </motion.div>
        </div>
    )
}

export default CountUpComponent
