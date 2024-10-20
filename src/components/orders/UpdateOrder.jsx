import React, { useState } from 'react';
import { fireDB } from '../../firebase/FirebaseConfig';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";

const UpdateOrder = ({ orderId, onClose }) => {
    const [dimensions, setDimensions] = useState({
        length: '',
        breadth: '',
        height: '',
        weight: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDimensions({ ...dimensions, [name]: value });
    };

    const updateOrder = async () => {
        try {
            // Reference to the order document in Firestore
            const orderRef = doc(fireDB, 'payments', orderId);

            // Update the order document with the new dimensions and weight
            await updateDoc(orderRef, {
                length: dimensions.length,
                breadth: dimensions.breadth,
                height: dimensions.height,
                weight: dimensions.weight,
            });

            toast.success("Order Updated Successfully");
            console.log('Order updated successfully!');
            onClose()
            // You might want to add a success message or redirect after this
        } catch (error) {
            toast.error("Error in updating order");
            console.error('Error updating order:', error);
        }
    };

    return (
        <Dialog className="max-w-lg absolute">
            <DialogBody>
                <h2 className="text-xl font-bold mb-4">Update Order Details</h2>
                <input
                    type="number"
                    name="length"
                    placeholder="Length"
                    value={dimensions.length}
                    onChange={handleChange}
                    className="border p-2 w-full mb-2"
                    required
                />
                <input
                    type="number"
                    name="breadth"
                    placeholder="Breadth"
                    value={dimensions.breadth}
                    onChange={handleChange}
                    className="border p-2 w-full mb-2"
                    required
                />
                <input
                    type="number"
                    name="height"
                    placeholder="Height"
                    value={dimensions.height}
                    onChange={handleChange}
                    className="border p-2 w-full mb-2"
                    required
                />
                <input
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    value={dimensions.weight}
                    onChange={handleChange}
                    className="border p-2 w-full mb-2"
                    required
                />
            </DialogBody>
            <DialogFooter>
                <Button onClick={() => setIsOpen(false)} color="red">Cancel</Button>
                <Button onClick={updateOrder} color="green">Update</Button>
            </DialogFooter>
        </Dialog>);
};

export default UpdateOrder;
