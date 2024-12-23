import CountUp from 'react-countup';
import { useEffect, React, useRef, useState, useContext } from 'react';
import myContext from '../../context/myContext';
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";
import { getDocs, collection, query, where } from "firebase/firestore";
import { fireDB } from '../../firebase/FirebaseConfig';


const CountUpComponent = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const fadeInDown = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };
    const orderDB = collection(fireDB, 'payments');
	const inProgressorderDB = collection(fireDB, 'progress');
	const completedorderDB = collection(fireDB, 'completed');
	const userDB = collection(fireDB, 'user');

    const [totalOrder, settotalOrder] = useState();
    const [incompleteOrder, setincompleteOrder] = useState(0);
    const [inprogressOrder, setinprogressOrder] = useState(0);
    const [completeOrder, setcompleteOrder] = useState(0);
    const [totalUser, settotalUser] = useState(0);

    const context = useContext(myContext);
	const { getAllProduct, getAllOrder, getAllUser } = context;


    async function OrderLength() {
		
		const snapshot1 = await getDocs(orderDB);
		const snapshot2 = await getDocs(inProgressorderDB);
		const snapshot3 = await getDocs(completedorderDB);
        const snapshot4 = await getDocs(userDB)

        settotalUser(snapshot4.size - 1);
		settotalOrder(snapshot1.size + snapshot2.size + snapshot3.size);
		setincompleteOrder(snapshot1.size);
		setinprogressOrder(snapshot2.size);
		setcompleteOrder(snapshot3.size);
	}
    useEffect(()=>{
        OrderLength();
    },[])

    return (
        <div className="container mx-auto my-10 z-20 bg-customNewBack">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}

                className="flex flex-wrap justify-center"
            >
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 border-black border-r last:border-r-0 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={9.75} end={totalOrder} /></h1>
                    <p>Total Orders</p>
                </div>
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 border-black border-r last:border-r-0 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={9.75} end={completeOrder} /></h1>
                    <p>Completed Orders</p>
                </div>
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 border-black border-r last:border-r-0 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={9.75} end={totalUser} /></h1>
                    <p>Total Users</p>
                </div>
                <div className="text-center w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-4">
                    <h1 className="text-3xl font-bold"><CountUp duration={9.75} end={getAllProduct.length} /></h1>
                    <p>Total Products</p>
                </div>
            </motion.div>
        </div>
    )
}

export default CountUpComponent
