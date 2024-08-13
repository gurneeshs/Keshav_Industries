import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Products.css';
import Navbar from '../Navbar/CustomNavbar';
import Footer from '../Footer/CustomFooter';
import Image from "react-bootstrap/Image";
import keshav_all_product from '../Images/keshav_all_product.jpg';
import test from '../Images/comming_soon.jpg';
import axios from 'axios';
import { BASE_URL } from '../../helper';

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [category, setCategory] = useState('Kash Products');
  const [categories] = useState(['Kash Products', 'Pride Products', 'Mustard Products', 'Kash Spices']);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/${category}`);
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    setSelectedSubcategory(''); // Reset subcategory when changing category
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const renderProducts = () => {
    return productData
        .filter(product => !selectedSubcategory || product.name.includes(selectedSubcategory))
        .map((product, index) => (
          <div className="col-12 col-md-6 col-lg-4 mt-5" key={index}>
          <div className="custom_card h-100">
              <div className="custom_card-img mb-5">
                  <Image src={product.imgSrc || test} alt={product.name} fluid rounded/>
              </div>
              <div className="custom_card-info">
                  <p className="text-title">{product.name}</p>
                  <p className="text-body">
                      MRP: ₹{product.mrp} <br />
                      Price: ₹{product.price}
                  </p>
              </div>
              <div className="custom_card-footer d-flex justify-content-between align-items-center">
                  <span className="text-title-price">₹{product.price}</span>
                  <div className="custom_card-button">
                      <svg className="svg-icon" viewBox="0 0 20 20">
                          <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                          <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                          <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                      </svg>
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

      <Container fluid className='custom-container'>
        <div className="row m-5">
          <div className="col-3 border-end border-dark shop-by-categories">
            <div className="row my-5">
              <h3>Shop By Categories</h3>
            </div>
            {categories.map(cat => (
              <div className="row my-5" key={cat}>
                <h4 onClick={() => handleCategoryClick(cat)} style={{ cursor: 'pointer' }} >{cat}</h4>
              </div>
            ))}
          </div>

          <div className="col-9">
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
