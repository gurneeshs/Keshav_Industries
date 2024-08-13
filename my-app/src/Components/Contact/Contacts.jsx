import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Products.css';
import Image from "react-bootstrap/Image";
import Navbar from '../Navbar/CustomNavbar';
import Footer from '../Footer/CustomFooter';


const Contacts = () => {
    return (
        <div>
                <Container fluid className='p-0'>
        <Navbar />
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

export default Contacts;