import { useContext, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import cloudinary from "../../config/cloudinary";  // Import Cloudinary config
import AdminLayout from "../../components/layout/AdminLayout";
import Header from "../../components/common/Header";

const categoryList = [
    { name: 'Spices Products' },
    { name: 'Lecithin Products' },
];

const AddExportProduct = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        productImageFile: null,
        category: "Spices Products",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
        productSpecifications: {},
        packagingDetails: {},
        containerCapacity: {},
        healthBenefits: []
    });
    const [specificationKey, setSpecificationKey] = useState("");
    const [specificationValue, setSpecificationValue] = useState("");
    const [packagingDetailKey, setPackagingDetailKey] = useState("");
    const [packagingDetailValue, setPackagingDetailValue] = useState("");
    const [containerCapacityKey, setContainerCapacityKey] = useState("");
    const [containerCapacityValue, setContainerCapacityValue] = useState("");
    const [healthBenefit, setHealthBenefit] = useState("");


    const addSpecification = () => {
        if (specificationKey && specificationValue) {
            setProduct({
                ...product,
                productSpecifications: {
                    ...product.productSpecifications,
                    [specificationKey]: specificationValue,
                },
            });
            setSpecificationKey("");
            setSpecificationValue("");
        }
    };

    const removeSpecification = (key) => {
        const updatedSpecifications = { ...product.productSpecifications };
        delete updatedSpecifications[key];
        setProduct({
            ...product,
            productSpecifications: updatedSpecifications,
        });
    };

    const addPackagingDetail = () => {
        if (packagingDetailKey && packagingDetailValue) {
            setProduct({
                ...product,
                packagingDetails: {
                    ...product.packagingDetails,
                    [packagingDetailKey]: packagingDetailValue,
                },
            });
            setPackagingDetailKey("");
            setPackagingDetailValue("");
        }
    };

    const removePackagingDetail = (key) => {
        const updatedPackaging = { ...product.packagingDetails };
        delete updatedPackaging[key];
        setProduct({
            ...product,
            packagingDetails: updatedPackaging,
        });
    };

    const addContainerCapacity = () => {
        if (containerCapacityKey && containerCapacityValue) {
            setProduct({
                ...product,
                containerCapacity: {
                    ...product.containerCapacity,
                    [containerCapacityKey]: containerCapacityValue,
                },
            });
            setContainerCapacityKey("");
            setContainerCapacityValue("");
        }
    };

    const removeContainerCapacity = (key) => {
        const updatedCapacity = { ...product.containerCapacity };
        delete updatedCapacity[key];
        setProduct({
            ...product,
            containerCapacity: updatedCapacity,
        });
    };

    const addHealthBenefit = () => {
        if (healthBenefit) {
            setProduct({
                ...product,
                healthBenefits: [...product.healthBenefits, healthBenefit],
            });
            setHealthBenefit("");
        }
    };

    const removeHealthBenefit = (benefit) => {
        setProduct({
            ...product,
            healthBenefits: product.healthBenefits.filter(b => b !== benefit),
        });
    };


    const handleFileChange = (e) => {
        setProduct({
            ...product,
            productImageFile: e.target.files[0],
        });
    };

    const addProductFunction = async () => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("file", product.productImageFile);
            formData.append("upload_preset", "ml_default");

            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            const productImageUrl = data.secure_url;
            const newProduct = {
                title: product.title,
                productImageUrl,
                category: product.category,
                description: product.description,
                time: product.time,
                date: product.date,
                productSpecifications: product.productSpecifications,
                packagingDetails: product.packagingDetails,
                containerCapacity: product.containerCapacity,
                healthBenefits: product.healthBenefits

            };

            const productRef = collection(fireDB, 'exportproducts');
            await addDoc(productRef, newProduct);

            toast.success("Product added successfully");
            navigate('/admin-dashboard');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Failed to add product");
        }
    };

    return (
        <AdminLayout>
            <div className="w-full bg-customBackG py-5 justify-center items-center py-5 overflow-auto  ">
                <div className='flex justify-center items-center '>
                    {loading && <Loader />}
                    <div className="login_Form bg-opacity-50 backdrop-blur-md px-8 py-6 rounded-xl shadow-md w-full ">
                        <div className="mb-5">
                            <h2 className='text-center text-2xl font-bold text-gray-100'>
                                Add Export Product
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3 ">
                            <input
                                type="text"
                                name="title"
                                value={product.title}
                                onChange={(e) => setProduct({ ...product, title: e.target.value })}
                                placeholder='Product Title'
                                className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                            />
                            <input
                                type="file"
                                name="productImageFile"
                                onChange={handleFileChange}
                                className='bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full'
                            />

                        </div>


                        <div className="mb-3">
                            <select
                                value={product.category}
                                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                className="w-full px-1 py-2 text-gray-300 bg-customGray border border-gray-200 rounded-md outline-none">
                                <option disabled>Select Product Category</option>
                                {categoryList.map((value, index) => (
                                    <option className="first-letter:uppercase" key={index} value={value.name}>
                                        {value.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <textarea
                                value={product.description}
                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                                name="description"
                                placeholder="Product Description"
                                rows="5"
                                className="w-full px-2 py-1 text-gray-300 bg-customGray border border-gray-200 rounded-md outline-none placeholder-gray-300"
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-100 mb-2">Product Specifications</h3>
                            <input
                                type="text"
                                value={specificationKey}
                                onChange={(e) => setSpecificationKey(e.target.value)}
                                placeholder="Specification Key"
                                className="bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full mb-2"
                            />
                            <input
                                type="text"
                                value={specificationValue}
                                onChange={(e) => setSpecificationValue(e.target.value)}
                                placeholder="Specification Value"
                                className="bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full mb-2"
                            />
                            <button
                                onClick={addSpecification}
                                type='button'
                                className='bg-customGray hover:bg-gray-600 text-white py-2 px-4 rounded-md mb-3'
                            >
                                Add Specification
                            </button>
                            <ul>
                                {Object.entries(product.productSpecifications).map(([key, value]) => (
                                    <li key={key} className="flex justify-between items-center py-1 px-2 bg-gray-700 rounded-md mb-2">
                                        <span>{key}: {value}</span>
                                        <button
                                            onClick={() => removeSpecification(key)}
                                            className="text-red-500"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-100 mb-2">Packaging Details</h3>
                            <input
                                type="text"
                                value={packagingDetailKey}
                                onChange={(e) => setPackagingDetailKey(e.target.value)}
                                placeholder="Packaging Detail Key"
                                className="bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full mb-2"
                            />
                            <input
                                type="text"
                                value={packagingDetailValue}
                                onChange={(e) => setPackagingDetailValue(e.target.value)}
                                placeholder="Packaging Detail Value"
                                className="bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full mb-2"
                            />
                            <button
                                onClick={addPackagingDetail}
                                type='button'
                                className='bg-customGray hover:bg-gray-600 text-white py-2 px-4 rounded-md mb-3'
                            >
                                Add Packaging Detail
                            </button>
                            <ul>
                                {Object.entries(product.packagingDetails).map(([key, value]) => (
                                    <li key={key} className="flex justify-between items-center py-1 px-2 bg-gray-700 rounded-md mb-2">
                                        <span>{key}: {value}</span>
                                        <button
                                            onClick={() => removePackagingDetail(key)}
                                            className="text-red-500"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-100 mb-2">Container Capacity</h3>
                            <input
                                type="text"
                                value={containerCapacityKey}
                                onChange={(e) => setContainerCapacityKey(e.target.value)}
                                placeholder="Container Capacity Key"
                                className="bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full mb-2"
                            />
                            <input
                                type="text"
                                value={containerCapacityValue}
                                onChange={(e) => setContainerCapacityValue(e.target.value)}
                                placeholder="Container Capacity Value"
                                className="bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full mb-2"
                            />
                            <button
                                onClick={addContainerCapacity}
                                type='button'
                                className='bg-customGray hover:bg-gray-600 text-white py-2 px-4 rounded-md mb-3'
                            >
                                Add Container Capacity
                            </button>
                            <ul>
                                {Object.entries(product.containerCapacity).map(([key, value]) => (
                                    <li key={key} className="flex justify-between items-center py-1 px-2 bg-gray-700 rounded-md mb-2">
                                        <span>{key}: {value}</span>
                                        <button
                                            onClick={() => removeContainerCapacity(key)}
                                            className="text-red-500"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-100 mb-2">Health Benefits</h3>
                            <input
                                type="text"
                                value={healthBenefit}
                                onChange={(e) => setHealthBenefit(e.target.value)}
                                placeholder="Health Benefit"
                                className="bg-customGray border text-gray-300 border-gray-200 px-2 py-2 rounded-md outline-none placeholder-gray-300 w-full mb-2"
                            />
                            <button
                                onClick={addHealthBenefit}
                                type='button'
                                className='bg-customGray hover:bg-gray-600 text-white py-2 px-4 rounded-md mb-3'
                            >
                                Add Health Benefit
                            </button>
                            <ul>
                                {product.healthBenefits.map((benefit, index) => (
                                    <li key={index} className="flex justify-between items-center py-1 px-2 bg-gray-700 rounded-md mb-2">
                                        <span>{benefit}</span>
                                        <button
                                            onClick={() => removeHealthBenefit(benefit)}
                                            className="text-red-500"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-3">
                            <button
                                onClick={addProductFunction}
                                type='button'
                                className='bg-customGray hover:bg-gray-600 w-full text-white text-center py-2 font-bold rounded-md'
                            >
                                Add Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AddExportProduct;
