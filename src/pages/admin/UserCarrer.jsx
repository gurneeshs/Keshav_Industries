import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Header from '../../components/common/Header'
import { fireDB } from '../../firebase/FirebaseConfig'
import { addDoc, collection, doc, updateDoc, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { motion } from "framer-motion";
import { Button } from '@material-tailwind/react'


const UserCarrer = () => {
    const [message, setMessage] = useState([]);
    const formatDateTime = (timestamp) => {
        if (!timestamp) return "N/A";
        return timestamp.toDate().toLocaleString();
    };
    useEffect(() => {
        async function fetchMessage() {
            try {
                const messagesCollection = collection(fireDB, 'Carrer')
                const querySnapshot = await getDocs(messagesCollection);

                const fetchMessages = querySnapshot.docs.map((doc) => {
                    const messageDetail = doc.data();
                    // console.log(messageDetail);
                    return messageDetail;
                })
                setMessage(fetchMessages);

            } catch (error) {
                toast.error("Failed to fetch Messages");
            }

        }
        fetchMessage();
    }, [])

    return (
        <AdminLayout>
            <div className='flex-1 overflow-auto relative z-10'>
                <Header title='Carrer' />
                <motion.div
                    className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8 mx-5 my-5'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-xl font-semibold text-gray-100'>Applications for Jobs</h2>

                        {/* <div className='relative'>

                            <input
                                type='text'
                                placeholder='Search products...'
                                className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                onChange={handleSearch}
                                value={searchTerm}
                            />
                            <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />

                            <Link to={'/addproduct'}>
                                <button className="px-5 py-2 ml-3 bg-gray-700 text-gray-400  rounded-lg">Add Product</button>
                            </Link>
                            <Link to={'/addexport'}>
                                <button className="px-5 py-2 ml-3 bg-gray-700 text-gray-400  rounded-lg">Add Export Product</button>
                            </Link>

                        </div> */}
                    </div>

                    <div className='overflow-x-auto'>
                        <table className='min-w-full divide-y divide-gray-700'>
                            <tbody>
                                <tr>
                                    <th scope="col" className="h-12 px-6 text-left text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                                    <th scope="col" className="h-12 px-6 text-left text-slate-700 bg-slate-100 font-bold fontPara">First Name</th>
                                    <th scope="col" className="h-12 px-6 text-left font-bold fontPara text-slate-700 bg-slate-100">Last Name</th>
                                    <th scope="col" className="h-12 px-6 text-left font-bold fontPara text-slate-700 bg-slate-100">Email</th>
                                    <th scope="col" className="h-12 px-6 text-left font-bold fontPara text-slate-700 bg-slate-100">Phone</th>
                                    <th scope="col" className="h-12 px-6 text-left font-bold fontPara text-slate-700 bg-slate-100">Message</th>
                                    <th scope="col" className="h-12 px-6 text-left font-bold fontPara text-slate-700 bg-slate-100">Resume</th>
                                    <th scope="col" className="h-12 px-6 text-left font-bold fontPara text-slate-700 bg-slate-100">Time</th>

                                </tr>
                                {message.map((item, index) => {
                                    const { firstName, lastName, email, phone, message, time, resumeUrl } = item
                                    return (
                                        <tr key={index} className="">
                                            <td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 ">
                                                {index + 1}.
                                            </td>
                                            <td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                {firstName}
                                            </td>
                                            <td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                {lastName}
                                            </td>
                                            <td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 ">
                                                {email}
                                            </td>
                                            <td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 ">
                                                {phone}
                                            </td>
                                            <td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500  ">
                                                {message}
                                            </td>
                                            <td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500  ">
                                                <a
                                                    href = {`${resumeUrl}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Open PDF
                                                </a>
                                            </td>
                                            <td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500  ">
                                                {formatDateTime(time)}
                                            </td>


                                            {/* <td className="h-12 px-6 text-sm transition duration-300 stroke-slate-500 text-slate-500 cursor-pointer ">
                                                <button onClick={() => navigate(`/updateproduct/${id}`)} className='text-indigo-400 hover:text-indigo-300 mr-2'>
                                                    <Edit size={18} />
                                                </button>
                                                <button onClick={() => deleteProduct(id)} className='text-red-400 hover:text-red-300'>
                                                    <Trash2 size={18} />
                                                </button>
                                            </td> */}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </AdminLayout>
    )
}

export default UserCarrer;
