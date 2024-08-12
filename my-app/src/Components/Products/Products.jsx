import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Products.css';
import Navbar from '../Navbar/CustomNavbar';
import Footer from '../Footer/CustomFooter';
import Image from "react-bootstrap/Image";
import keshav_all_product from '../Images/keshav_all_product.jpg';
import test from '../Images/comming_soon.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL PRODUCTS');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const productData = {
    "Kash Products": [
      { name: "Kash 15 Kg Jar", price: 1664.25, mrp: 2150, imgSrc: test },
      { name: "Kash 15 Ltr Cute Jar (New)", price: 1512.00, mrp: 1950, imgSrc: test },
      { name: "KASH 15 LTR. UNIQUE JAR (New)", price: 1543.50, mrp: 2000, imgSrc: test },
      { name: "Kash 2 Ltr Mini Jar (New) (1x8)", price: 220.50, mrp: 300, imgSrc: test },
      { name: "Kash 450 GM R/P (C/B) (1x24)", price: 49.35, mrp: 70, imgSrc: test },
      { name: "Kash 450 GM R/P (C/B) (1x32)", price: 49.35, mrp: 70, imgSrc: test },
      { name: "KASH 5 LTR SMART JAR NEW (1x4)", price: 521.06, mrp: 650, imgSrc: test },
      { name: "KASH 5 LTR UNIQUE NEW", price: 532.35, mrp: 675, imgSrc: test },
      { name: "Kash 500 ML Bottle (C/B) (1x20)", price: 53.55, mrp: 75, imgSrc: test },
      { name: "Kash 900 GM R/P (C/B) (1x12)", price: 99.75, mrp: 130, imgSrc: test },
      { name: "Kash 900 GM R/P (C/B) (1x16)", price: 99.75, mrp: 130, imgSrc: test },
    ],
    "Pride Products": [
      { name: "Pride 15 Kg Jar", price: 1664.25, mrp: 2150, imgSrc: test },
      { name: "Pride 15 Ltr Cute Jar (New)", price: 1512.00, mrp: 1950, imgSrc: test },
      { name: "Pride 5 Ltr Smart Jar (C/B) (1x4)", price: 521.06, mrp: 650, imgSrc: test },
      { name: "Pride 500 ML R/P (C/B) (1x24)", price: 53.55, mrp: 75, imgSrc: test },
      { name: "Pride 900 GM R/P (C/B) (1x12)", price: 99.75, mrp: 130, imgSrc: test },
    ],
    "Mustard Products": [
      { name: "Kash MUSTD 450 GM Pet Bottle (C/B) (1x20)", price: 62.35, mrp: 75, imgSrc: test },
      { name: "Kash MUSTD 900 GM Pet Bottle (C/B) (1x15)", price: 119.75, mrp: 135, imgSrc: test },
    ],
    "Kash Spices": [
      { name: "Kash Magic Masala 50g (1x200)", price: 30, mrp: 50, imgSrc: test },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('');
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const renderProducts = () => {
    const products = productData[selectedCategory] || [];
    return products
      .filter(product => !selectedSubcategory || product.name.includes(selectedSubcategory))
      .map((product, index) => (
        <div className="col-4 mt-5" key={index}>
  <div className="custom_card mx-auto h-100">
    <div className="custom_card-image">
      <Image src={product.imgSrc} alt={product.name} fluid />
    </div>
    <a className="product_category" href="/kmm">{selectedCategory}</a>
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
    <div className='products-div p-0 m-0'> 
      <Container fluid className='p-0'>
        <Navbar />
      </Container>

      <Container fluid className='hero-head p-0'>
        <Image src={keshav_all_product} width='100%' />
      </Container>

      <Container className='custom-container'>
        <div className="row m-5">
          <div className="col-4 border-end border-dark shop-by-categories">
            <div className="row my-5">
              <h3>Shop By Categories</h3>
            </div>
            {Object.keys(productData).map(category => (
              <div className="row my-5" key={category}>
                <h4 onClick={() => handleCategoryClick(category)} style={{cursor: 'pointer'}}>{category}</h4>
                {selectedCategory === category && productData[category].map(subcategory => (
                  <div className="row my-2" key={subcategory.name}>
                    <h5 onClick={() => handleSubcategoryClick(subcategory.name)} style={{cursor: 'pointer', marginLeft: '20px'}}>{subcategory.name}</h5>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="col-8">
            <div className="row ms-2">
              {renderProducts()}
            </div>
          </div>
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
  );
};

export default Products;