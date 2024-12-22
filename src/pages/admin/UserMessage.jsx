import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Header from '../../components/common/Header'
import { fireDB } from '../../firebase/FirebaseConfig'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { motion } from "framer-motion";
import { Button } from '@material-tailwind/react'

const UserMessage = () => {
    const [message, setMessage] = useState([]);

    const formatDateTime = (timestamp) => {
        if (!timestamp) return "N/A";
        return timestamp.toDate().toLocaleString();
    };

    useEffect(() => {
        async function fetchMessage() {
            try {
                const messagesCollection = collection(fireDB, 'Messages');
                const querySnapshot = await getDocs(messagesCollection);

                const fetchMessages = querySnapshot.docs.map((doc) => {
                    const messageDetail = doc.data();
                    return { id: doc.id, ...messageDetail }; // Include document ID
                });

                setMessage(fetchMessages);
            } catch (error) {
                toast.error("Failed to fetch Messages");
            }
        }

        fetchMessage();
    }, []);

    const handleDeleteMessage = async (id) => {
        try {
            await deleteDoc(doc(fireDB, 'Messages', id));
            setMessage((prevMessages) => prevMessages.filter((msg) => msg.id !== id)); // Update state
            toast.success("Message marked as seen and deleted successfully.");
        } catch (error) {
            toast.error("Failed to delete the message.");
        }
    };

    return (
        <AdminLayout>
            <div className='flex-1 overflow-auto relative z-10'>
                <Header title='User Messages' />
                <motion.div
                    className='bg-customGray bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8 mx-5 my-5'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-xl font-semibold text-gray-100'>User Messages</h2>
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
                                    <th scope="col" className="h-12 px-6 text-left font-bold fontPara text-slate-700 bg-slate-100">Time</th>
                                    <th scope="col" className="h-12 px-6 text-left font-bold fontPara text-slate-700 bg-slate-100">Action</th>
                                </tr>
                                {message.map((item, index) => {
                                    const { id, firstName, lastName, email, phone, message, time } = item;
                                    return (
                                        <tr key={id}>
                                            <td className="h-12 px-6 text-sm text-slate-500">
                                                {index + 1}.
                                            </td>
                                            <td className="h-12 px-6 text-sm text-slate-500 first-letter:uppercase">
                                                {firstName}
                                            </td>
                                            <td className="h-12 px-6 text-sm text-slate-500 first-letter:uppercase">
                                                {lastName}
                                            </td>
                                            <td className="h-12 px-6 text-sm text-slate-500">
                                                {email}
                                            </td>
                                            <td className="h-12 px-6 text-sm text-slate-500">
                                                {phone}
                                            </td>
                                            <td className="h-12 px-6 text-sm text-slate-500">
                                                {message}
                                            </td>
                                            <td className="h-12 px-6 text-sm text-slate-500">
                                                {formatDateTime(time)}
                                            </td>
                                            <td className="h-12 px-6 text-sm text-slate-500">
                                                <Button className='bg-green-500' onClick={() => handleDeleteMessage(id)}>
                                                    Seen
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </AdminLayout>
    );
};

export default UserMessage;
