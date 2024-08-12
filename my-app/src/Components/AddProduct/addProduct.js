
import { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    // const CreationSuccess = () => toast.success("Candidate Created Successfully \n Click Anywhere to exit this screen", {
    //     // position: toast.POSITION.TOP_CENTER,
    //     className: "toast-message",
    // });
    // const CreationFailed = () => toast.error("Invalid Details \n Please Try Again!",{
    //     // position: toast.POSITION.TOP_CENTER,
    //     className: "toast-message",
    // });


    const [formData, setFormData] = useState({
        name: '',
        price: '',
        mrp: '',
        category: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0]
        });
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        // console.log(formData);

        try {
            const response = await axios.post(`http://localhost:5000/api/uploadproduct`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)
        }
        catch (error) {
            // CreationFailed();
            console.error(error);
        }
        finally {
            setLoading(false);
          }
    };


    return (
        <div >
            <section className="Candidatesignup">
                <div className="FormTitle">
                    <h2>New Candidate</h2>
                </div>

                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                        {/* <ToastContainer /> */}

                            <form method="POST" enctype="multipart/form-data" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Product Name" />
                                </div>
                                
                                <div className="form-group">
                                    <label for="price"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} placeholder="Price" />
                                </div>
                                <div className="form-group">
                                    <label for="mrp"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="number" name="mrp" id="mrp" value={formData.mrp} onChange={handleChange} placeholder="MRP" />
                                </div>
                                <div className="form-group">
                                    <label for="category"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="category" id="category" value={formData.category} onChange={handleChange} placeholder="Category" />
                                </div>

                                <div className="form-group">
                                    <label for="image"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="file" name="image" id="image" onChange={handleFileChange} placeholder="Candidate's Photo" />
                                </div>

                                <div className="form-group form-button">
                                    {/* <input type="submit" name="signup" id="signup" className="form-submit" value="Create Candidate" /> */}
                                    <button onClick={handleSubmit} disabled={loading} className="form-submit">{loading ? <div className="spinner"></div> : 'Create Candidate'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default AddProduct;