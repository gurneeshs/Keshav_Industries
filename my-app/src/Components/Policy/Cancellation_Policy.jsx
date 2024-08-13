import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "../Navbar/CustomNavbar";
import Footer from "../Footer/CustomFooter";

const Cancellation_Policy = () => {

    return (
        <div className="">

<Container fluid className="p-0">
        <Navbar />
      </Container>

            <Container>
            <h1 className='text-center mt-5 mb-4'>Cancellation Policy</h1>

<p>The cancellation policy is the scheme provided on Keshav Industries' website available at www.keshavindustries.com or the mobile application under the brand name “Keshav Industries” (collectively “Platform”) in relation to the products being sold on the Platform (“Products”). This cancellation policy (“Policy”) lays down the mechanism in which an order placed by the customer or the reseller (“User”) on the Platform can be canceled by the User, the supplier, or by Keshav Industries.</p>

<h3>Cancellation by the User</h3>

<h4>When can the User cancel an order?</h4>

<p>The User can cancel an order after the order has been placed through the Platform and before the order has been dispatched by the supplier.</p>

<h4>How can the User cancel an order?</h4>

<p>In order to cancel, the User can go to ‘My Orders’ in your ‘Profile’. Once you are redirected to the My Orders page, click on the order of the product that you want to cancel. Click on cancel Order and provide the reason for the cancellation from the options provided.</p>

<h4>What are the reasons due to which the User may cancel the order?</h4>

<p>The User may cancel the order for the following reasons:</p>
<ul>
    <li>If the order was placed for testing;</li>
    <li>If the User has placed multiple orders for the same Product;</li>
    <li>If the expected delivery date is not acceptable for the User;</li>
    <li>If the User wants to change the shipping or billing address;</li>
    <li>If the User changes their mind about placing the order;</li>
    <li>If the User wants to update or change the contact details or the payment mode;</li>
    <li>If the User wants to change the size or the color of the Product; or</li>
    <li>For any other reason.</li>
</ul>

<h3>Cancellation by the Supplier</h3>

<h4>When can the supplier cancel an order which has been placed?</h4>

<p>The supplier can only cancel an order within 1 day after the day on which the Supplier was supposed to dispatch the Product.</p>

<h4>What are the reasons due to which the supplier may cancel the order?</h4>

<p>The supplier may cancel the order for the following reasons:</p>
<ul>
    <li>If the ordered Product is not available with the supplier anymore;</li>
    <li>If the ordered Product is out of stock with the supplier; or</li>
    <li>If the supplier is unable to dispatch the order in time.</li>
</ul>

<h3>Cancellation by Keshav Industries</h3>

<h4>When can Keshav Industries cancel an order which has been placed?</h4>

<p>Keshav Industries can cancel the order anytime from the date on which the order has been placed till delivery of the Product to the User.</p>

<h4>What are the reasons due to which Keshav Industries may cancel the order?</h4>

<p>Keshav Industries may cancel the order for the following reasons:</p>
<ul>
    <li>If the address to which the Product is to be delivered is not serviceable;</li>
    <li>If the delivery of the Product has been unsuccessful and the Product has been returned to the seller;</li>
    <li>If the Product has been lost during transit;</li>
    <li>If the payment has been made through online methods by the User and Keshav Industries did not get payment confirmation;</li>
    <li>If the shipping address or billing address provided by the User is incomplete or incorrect;</li>
    <li>If the supplier is unable to dispatch the order because of regulatory lockdown or other restrictions;</li>
    <li>If the order has been auto-canceled by the system due to a high risk of the product returning back to the supplier;</li>
    <li>If the supplier does not meet Keshav Industries' policies of fair business practices;</li>
    <li>If Keshav Industries does not get user confirmation during delivery;</li>
    <li>If the User chose cash on delivery and cash on delivery is not available for the Product ordered; or</li>
    <li>If Keshav Industries is unable to fulfill the order due to other reasons; or</li>
    <li>If Keshav Industries wants to cancel for any reason which Keshav Industries may deem appropriate.</li>
</ul>

<h3>Refunds</h3>

<h4>How will the User get the refund?</h4>

<p>If the User has made payment before cancellation of the order which has been placed, the money paid by the User shall be refunded. The refund will be credited to the same source of payment (bank accounts, UPI, etc.) from which payment was received. If the User has chosen any other method such as wallets, the amount will be credited to the source of origin as well. The User will receive a refund of the entire amount paid by the User. In case of any discrepancies regarding receipt of refund amount, Keshav Industries may request additional information such as a bank statement or any other relevant document.</p>

<h4>Will the discount vouchers or other such promotional offers be reinstated?</h4>

<p>If the User has used any discount vouchers or promotional offers when placing the order which has been canceled, the discount vouchers or promotional offers will be forfeited.</p>

<h4>When will the User get the refund?</h4>

<p>Following are the processing timelines after the product is received by us or when the seller notifies us of the receipt of the products.</p>

<ul>
        <li>Refund Method -  Credit Card, Debit Card, Net Banking, UPI Linked Bank Account</li>
        <li>Refund Time Frame - 3-7 Business Days</li>

</ul>

<h3>Miscellaneous</h3>

<p>Keshav Industries reserves the right, at its sole discretion, to amend, change, modify, add or remove any portion of this policy at any time without any prior written notice to you. It is your responsibility to review this policy periodically for any updates/changes.</p>

<p>For any further queries regarding return, replacement, exchange or refund, please reach out to customer support at <a href="mailto:care.customer@keshav.co.in">care.customer@keshav.co.in</a></p>

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

export default Cancellation_Policy;