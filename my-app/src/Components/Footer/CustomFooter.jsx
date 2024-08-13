import React from 'react';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CustomFooter.css'; // Make sure to import the CSS file
import logo from "../Images/Logo.jpg";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footer" id="end">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-inner-div text-dark">
              <h3 className="fs-2">Keshav Industries</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nemo ratione rerum sit molestias obcaecati alias cum quasi rem, officiis voluptatem nobis aliquam repellendus, quod architecto fugit eum dolores ab.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-2">
            <div className="footer-inner-div text-dark">
              <h3 className="">Know US</h3>
              <ul className="footer-list">
                <li>
                  <a href="" className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Home</a>
                </li>
                <li>
                  <a href="" className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Products</a>
                </li>
                <li>
                  <a href="" className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Export</a>
                </li>
                <li>
                  <a href="" className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-2">
            <div className="footer-inner-div text-dark">
              <h3 className="">Policy</h3>
              <ul className="footer-list">
                <li>
                  <a href="/terms" className="link-offset-2 link-underline link-underline-opacity-0 text-dark"> Terms and Conditions</a>
                </li>
                <li>
                  <a href="/privacy" className="link-offset-2 link-underline link-underline-opacity-0 text-dark"> Privacy Policy</a>
                </li>
                <li>
                  <a href="/cancellation" className="link-offset-2 link-underline link-underline-opacity-0 text-dark"> Cancellation Policy</a>
                </li>
                <li>
                  <a href="/returns" className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Returns, Refunds and Replacement Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-2">
            <div className="footer-inner-div text-dark">
              <h3 className="">Follow US</h3>
              <ul className="footer-list">
                <li>
                  <i className="bi bi-linkedin text-dark"></i><a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-dark"> LinkedIn</a>
                </li>
                <li>
                  <i className="bi bi-whatsapp"></i><a href="https://wa.me/" className="link-offset-2 link-underline link-underline-opacity-0 text-dark"> WhatsApp</a>
                </li>
                <li>
                  <i className="bi bi-instagram text-dark"></i> <a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Instagram</a>
                </li>
                <li>
                  <i className="bi bi-facebook text-dark"></i> <a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Facebook</a>
                </li>
                <li>
                  <i className="bi bi-twitter-x text-dark"></i> <a href="#" className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-inner-div text-dark">
              <h3 className="ms-3">Address</h3>
              <ul className="footer-list fs-0">
                <li>
                  <i className="bi bi-geo-alt-fill"></i> 101, Industrial Area No. 3, A. B. Road, Dewas 455001
                </li>
                <li>
                  <i className="bi bi-envelope-at"></i> <a href="mailto:care.customer@keshav.co.in " className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Email: care.customer@keshav.co.in</a>
                </li>
                <li>
                  <i className="bi bi-phone"></i> <a href="tel:+919109884497" className="link-offset-2 link-underline link-underline-opacity-0 text-dark">Call us: +91-9109884497</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row text-center footer-end text-dark mb-3">
          <span>Copyright © 2023 Keshav Industries. All rights reserved by <label><a href="" className="link-offset-2 link-underline link-underline-opacity-0 text-primary"><b>Keshav Industries</b></a></label></span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
