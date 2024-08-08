import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Products.css';
import Navbar from '../Navbar/CustomNavbar';
import Footer from '../Footer/CustomFooter';
import Image from "react-bootstrap/Image";
import keshav_all_product from '../Images/keshav_all_product.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL PRODUCTS');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const productData = {
    "SOYA PRODUCTS": ["Soya Refined Oil", "Soya Kash Oil", "Soya Pride Oil", "Soya Chunks", "Kash Soya Chunks"],
    "MUSTARD PRODUCTS": ["Mustard Oil"],
    "LECITHIN": ["Soya Lecithin", "Non-GMO Soya Lecithin -Fluid", "Non-GMO Soya De-Oiled Lecithin – Food Grade", "Non-GMO Soya De-oiled Lecithin – Feed Grade", "Hydrolysed Soya Lecithin", "Sunflower Lecithin", "Standard Sunflower Lecithin", "Sunflower De-Oiled Lecithin", "Rice Lecithin", "Rice Bran Lecithin"],
    "INDIAN SPICES": ["Asafoetida", "Black Pepper", "Cumin", "Clove", "Coriander (Seed & Powder)", "Fenugreek", "Garlic Flakes", "Hulled Sesame Seed", "Isabgol", "Nigella Seed", "Natural Sesame Seed", "Onion Flakes", "Red Chili (Whole)", "Red Chili (Powder)", "Turmeric", "Saffron"]
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
      .filter(product => !selectedSubcategory || product.includes(selectedSubcategory))
      .map((product, index) => (
        <div className="col-5" key={index}>
          <div className="product_categorie mx-auto">
            <div className="product_categorie_card-image">
              <Image />
            </div>
            <a className="product_category" href="/MustardOil">{selectedCategory}</a>
            <div className="product_heading">{product}
              <div className="product_author">Price: $X<span className="product_name"> Updated</span> X days ago</div>
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
                  <div className="row my-2" key={subcategory}>
                    <h5 onClick={() => handleSubcategoryClick(subcategory)} style={{cursor: 'pointer', marginLeft: '20px'}}>{subcategory}</h5>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="col-8">
            <div className="row">
              {renderProducts()}
            </div>
          </div>
        </div>
      </Container>

       <Container fluid>{/* agr check krna ho na hua ki nhi alg css then ye home_abt_last_row isko hata dena ye home.css se juda hai */}
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
