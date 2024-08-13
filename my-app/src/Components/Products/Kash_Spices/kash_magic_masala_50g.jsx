import React, { useState } from 'react';
import Navbar from "../../Navbar/CustomNavbar";
import Footer from "../../Footer/CustomFooter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../All_Products.css';

const ProductPage = () => {
    const [mainImage, setMainImage] = useState('image1.jpg'); // Replace with your actual image path
    const [quantity, setQuantity] = useState(1);

    const handleThumbnailClick = (imageSrc) => {
        setMainImage(imageSrc);
    };

    const handleQuantityChange = (amount) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + amount;
            return newQuantity < 1 ? 1 : newQuantity;
        });
    };

    return (
        <div>
            <Container fluid className="p-0">
                <Navbar />
            </Container>
            <Container>
                <Row className="product-container mt-4">
                    <Col xs={12} md={5} className="image-gallery mb-3 mb-md-0">
                        <div className="thumbnail-container d-flex d-md-block">
                            <Image src="image1.jpg" alt="Thumbnail 1" className="thumbnail" onClick={() => handleThumbnailClick('image1.jpg')} />
                            <Image src="image2.jpg" alt="Thumbnail 2" className="thumbnail" onClick={() => handleThumbnailClick('image2.jpg')} />
                            <Image src="image3.jpg" alt="Thumbnail 3" className="thumbnail" onClick={() => handleThumbnailClick('image3.jpg')} />
                            <Image src="image4.jpg" alt="Thumbnail 4" className="thumbnail" onClick={() => handleThumbnailClick('image4.jpg')} />
                        </div>
                        <div className="main-image-container">
                            <Image src={mainImage} alt="Main Image" id="mainImage" fluid />
                        </div>
                    </Col>
                    <Col xs={12} md={7} className="product-details">
                        <h1 className="product-title"> Active, Made with Sundarban Forest Honey, 100% Pure Honey</h1>
                        <p className="price">₹495 <span className="rating">4.5 ★</span> <span className="rating-count">(872 Ratings, 865 Reviews)</span></p>
                        <p className="free-delivery">Free Delivery</p>
                        <div className="quantity-selector d-flex align-items-center mt-3">
                            <h3 className="mr-3">Quantity</h3>
                            <button className="quantity-button" onClick={() => handleQuantityChange(-1)}>-</button>
                            <span className="quantity-number mx-2">{quantity}</span>
                            <button className="quantity-button" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <div className="action-buttons mt-4">
                            <button className="add-to-cart btn btn-success">Add to Cart</button>
                            <button className="buy-now btn btn-primary ml-md-2 mt-2 mt-md-0">Buy Now</button>
                        </div>
                        <div className="product-info mt-4">
                            <ul>
                                <li>Saffola Honey Active is 100% Pure and Natural, No Sugar adulteration</li>
                                <li>Brings Goodness of Forest Honey for your Active life.</li>
                                <li>Saffola Honey Active is pure honey, contains natural antioxidants and it is natural immunity booster.</li>
                                <li>Saffola Honey Active complies with 22 stringent FSSAI parameters to ensure it is free from any adulteration and 100% pure.</li>
                                <li>Saffola Honey Active is a rich source of nutrition for you and your family</li>
                                <li>Can be used with a glass of warm water for weight management, Serves as a natural sweetener in tea, coffee and breakfast cereals.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
        {/* line */}
        <div className="row home_abt_last_row mt-5">
          <div className=""></div>
        </div>
        <Container>
          <Footer />
        </Container>
      </Container>
        </div>
    );
};

export default ProductPage;
