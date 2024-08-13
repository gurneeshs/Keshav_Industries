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
        <div className="col-4 mt-5" key={index}>
          <div className="custom_card mx-auto h-100">
            <div className="custom_card-image">
              <Image src={product.imgSrc || test} alt={product.name} fluid />
            </div>
            <a className="product_category" href="/kmm">{category}</a>
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
            {categories.map(cat => (
              <div className="row my-5" key={cat}>
                <h4 onClick={() => handleCategoryClick(cat)} style={{ cursor: 'pointer' }}>{cat}</h4>
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
