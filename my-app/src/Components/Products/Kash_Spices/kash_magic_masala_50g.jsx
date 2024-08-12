import React from 'react';
import Navbar from "../../Navbar/CustomNavbar";
import Footer from "../../Footer/CustomFooter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'react-bootstrap/Image';
import '../All_Products.css';
import Container from 'react-bootstrap/esm/Container';
import productData from '../Products'; 

const K_M_M = () => { 

    const renderRecommendedProducts = () => {
        const recommendedProducts = Object.values(productData).flat().slice(0, 4); // Select 4 products

        return recommendedProducts.map((product, index) => (
            <div className="col-4 mt-4" key={index}>
                <div className="custom_card mx-auto h-100">
                    <div className="custom_card-image">
                        <Image src={product.imgSrc} alt={product.name} fluid />
                    </div>
                    <div className="product_heading">
                        {product.name}
                        <div className="product_author">
                            Price: ₹{product.price} <br />
                            MRP: ₹{product.mrp}
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div>
            <Container fluid className="p-0">
                <Navbar />
            </Container>
            <Container>
                <div className="product-container">
                    <div className="image-gallery">
                        <div className="thumbnail-container">
                            <Image src="thumbnail1.jpg" alt="Thumbnail 1" className="thumbnail" />
                            <Image src="thumbnail2.jpg" alt="Thumbnail 2" className="thumbnail" />
                            <Image src="thumbnail3.jpg" alt="Thumbnail 3" className="thumbnail" />
                            <Image src="thumbnail4.jpg" alt="Thumbnail 4" className="thumbnail" />
                        </div>
                        <div className="main-image-container">
                            <Image src="main_image.jpg" alt="Main Image" id="mainImage" />
                        </div>
                    </div>
                    <div className="product-details">
                        <h1 className="product-title">Heavy Silver Embroidery Work With Full Silver Stone Work Beautiful Saree</h1>
                        <p className="price">₹699 <span className="rating">3.9 ★</span> <span className="rating-count">(6954 Ratings, 2030 Reviews)</span></p>
                        <p className="free-delivery">Free Delivery</p>
                        <div className="select-size">
                            <h3>Select Size</h3>
                            <button className="size-button">Free Size</button>
                        </div>
                        <div className="action-buttons">
                            <button className="add-to-cart">Add to Cart</button>
                            <button className="buy-now">Buy Now</button>
                        </div>
                        <div className="product-info">
                            <h3>Product Details</h3>
                            <p>Name: Heavy Silver Embroidery Work With Full Silver Stone Work Beautiful Saree</p>
                            <p>Saree Fabric: Georgette</p>
                            <p>Blouse: Saree with Multiple Blouse</p>
                            <p>Blouse Fabric: Georgette</p>
                            <p>Pattern: Embroidered</p>
                            <p>Blouse Pattern: Same as Border</p>
                            <p>Net Quantity (N): Single</p>
                            <p>Heavy Silver Embroidery Work With Full Silver Stone Work Rich Pallu Beautiful Saree</p>
                        </div>
                    </div>
                </div>

                <h3 className="mt-5">Recommended Products</h3>
                <div className="row">
                    {renderRecommendedProducts()}
                </div>
            </Container>

            <Container fluid>
                <div className="row home_abt_last_row mt-5">
                    <div className=""></div>
                </div>
                <Container>
                    <Footer />
                </Container>
            </Container>
        </div>
    )
};

export default K_M_M;
