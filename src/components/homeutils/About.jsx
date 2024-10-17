import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Yellow from '../YellowStrip/Yellow';

const About = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger animations again when scrolling back into view
    });

    React.useEffect(() => {
        if (inView) {
            controls.start({
                rotateY: 0,
                rotateX: 0,
                opacity: 1,
                transition: { duration: 2, type: 'spring', stiffness: 50 },
            });
        } else {
            controls.start({
                rotateY: 90,
                rotateX: 10,
                opacity: 0,
            });
        }
    }, [controls, inView]);

    return (
        <div>
            <motion.div
                ref={ref}
                initial={{ rotateY: 90, rotateX: 10, opacity: 0 }}
                animate={controls}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full pt-20 pb-24 home_abt bg-[url('../img/Home_abt_img.jpg')] bg-cover bg-center"
                style={{ perspective: 1000 }}
            >
                <div className="flex ps-72 ">
                    <div className="w-1/2"></div>
                    <motion.div
                        className="w-5/12 ps-5 py-3 h-full bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-black-100"
                        initial={{ rotateY: -90 }}
                        animate={controls}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 2, type: 'spring', stiffness: 50 }}
                    >
                        <motion.div className="flex flex-col items-start space-y-4" viewport={{ once: true, amount: 0.2 }}>
                            <motion.img
                                className="h-20"
                                src="../img/Logo_removebg.png"
                                alt="Logo"
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 2, ease: 'easeInOut' }}
                            />
                            <motion.h1
                                className="mt-5 text-4xl font-bold"
                                initial={{ rotateX: 45 }}
                                animate={{ rotateX: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 2, ease: 'easeInOut' }}
                            >
                                Welcome to Keshav <br /> Industry
                            </motion.h1>
                            <motion.p
                                className="text-lg"
                                initial={{ rotateX: 45 }}
                                animate={{ rotateX: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 2, ease: 'easeInOut' }}
                            >
                                We, Keshav Industries Private Limited started <br />
                                our journey in 2009 by manufacturing the world's <br />
                                best Soya Refined Oil and Non-GMO Soya<br />
                                Lecithin.<br /><br />
                                After the legacy of more than a decade in the Soya<br />
                                Industry, we have started to manufacture<br />
                                Mustard Oil and provide our best Mustard Oil<br />
                                in the Indian Domestic Market.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <Yellow />
        </div>
    );
}

export default About;
