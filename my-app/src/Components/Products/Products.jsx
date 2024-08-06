import React from 'react';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Products.css'; // Make sure to import the CSS file
import Navbar from '../Navbar/CustomNavbar';
import Footer from '../Footer/CustomFooter';

const Products = () => {
  return (
    <div>
        <Container fluid>
            <Navbar />
        </Container>

        
        <Container>
            <div className="row">
                <div className="col-4 border-end border-dark">
                    <div className="row">
                        <h2>Shop By Categories</h2>
                    </div>
                    <div className="row">
                        <h2>Soya Products</h2>
                    </div>
                    <div className="row">

                    </div>
                </div>
                <div className="col-8">
                </div>
            </div>
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

export default Products;
