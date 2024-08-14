import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "../Navbar/CustomNavbar";
import Footer from "../Footer/CustomFooter";

const Products_And_Service = () => {

  return (
    <div className="">

      <Container fluid className="p-0">
        <Navbar />
      </Container>
      
        <Container>
        <h1 className='text-center mt-5 mb-4'>Product and Service Policy</h1>
        <h2>1. Introduction</h2>
        <p>Welcome to Keshav Industries Private Limited. This policy outlines the terms and conditions for purchasing our high-quality Non-GMO Soya Lecithin, refined oils, and spices online.</p>

        <h2>2. Products Offered</h2>
        <p>We offer a variety of products, including:</p>
        <ul>
            <li>Non-GMO Lecithin (Soya, Sunflower, Rice)</li>
            <li>Soya Refined Oil</li>
            <li>Mustard Oil</li>
            <li>Indian Spices</li>
        </ul>
        <p>All products are manufactured using sustainable technology, ensuring natural flavor and adherence to international quality standards.</p>

        <h2>3. Pricing and Payment</h2>
        <p>All prices are listed in INR and include applicable taxes. Prices are subject to change without notice, but orders placed before a price change will be honored. We accept payments via credit/debit cards, net banking, and UPI.</p>

        <h2>4. Ordering and Delivery</h2>
        <p>Orders can be placed online at our official website. Delivery within India typically takes 5-7 business days. International deliveries may take longer depending on customs. A tracking number will be provided upon shipment.</p>

        <h2>5. Returns, Refunds, and Exchanges</h2>
        <p>We accept returns within 15 days of delivery if the product is unopened and in its original packaging. Refunds are processed within 7 days of receiving the returned product. Defective or damaged products can be exchanged within 15 days.</p>

        <h2>6. Warranty</h2>
        <p>All our products are covered by a 1-year warranty against manufacturing defects.</p>

        <h2>7. Customer Support</h2>
        <p>For any inquiries or support, contact us 24/7 via email at <a href="mailto:kash@keshav.co.in">kash@keshav.co.in</a> or by phone at 0731 426 8890.</p>

        <h2>8. Privacy and Data Protection</h2>
        <p>Your data is handled in accordance with our Privacy Policy, ensuring confidentiality and security.</p>

        <h2>9. Limitation of Liability</h2>
        <p>Keshav Industries is not liable for indirect damages resulting from the use of its products.</p>

        <h2>10. Governing Law</h2>
        <p>This policy is governed by the laws of India. Disputes will be resolved in the courts of Madhya Pradesh.</p>

        <h2>11. Changes to This Policy</h2>
        <p>Keshav Industries reserves the right to modify this policy. Updates will be posted on our website.</p>
    
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

export default Products_And_Service;