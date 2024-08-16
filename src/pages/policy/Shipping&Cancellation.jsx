import React from 'react';
import Layout from '../../components/layout/Layout';

const Shipping = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Policies</h1>

                {/* Shipping Policy */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Shipping Policy</h2>
                    <p>
                        We always ship your order on the same day or within 24 hours of you placing it. Once shipped, you will receive an email with your shipment details. Under normal circumstances, your order will reach you within 7 working days. If you have any queries or concerns related to your shipment, please contact our support team at <a href="mailto:care.customer@keshav.co.in" className="text-blue-500">care.customer@keshav.co.in</a> within 24 hours of receiving the product(s).
                    </p>
                </section>

                {/* Cancellation Policy */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
                    <p>
                        The cancellation policy is the scheme provided on Keshav Industries' website available at <a href="https://www.keshavindustries.com" className="text-blue-500">www.keshavindustries.com</a> or the mobile application under the brand name “Keshav Industries” (collectively “Platform”) in relation to the products being sold on the Platform (“Products”). This cancellation policy (“Policy”) lays down the mechanism in which an order placed by the customer or the reseller (“User”) on the Platform can be canceled by the User, the supplier, or by Keshav Industries.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Cancellation by the User</h3>
                    <p>The User can cancel an order after the order has been placed through the Platform and before the order has been dispatched by the supplier.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">How to cancel an order?</h4>
                    <p>In order to cancel, the User can go to ‘My Orders’ in your ‘Profile’. Once you are redirected to the My Orders page, click on the order of the product that you want to cancel. Click on cancel Order and provide the reason for the cancellation from the options provided.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Reasons for cancellation:</h4>
                    <ul className="list-disc ml-6">
                        <li>If the order was placed for testing;</li>
                        <li>If the User has placed multiple orders for the same Product;</li>
                        <li>If the expected delivery date is not acceptable for the User;</li>
                        <li>If the User wants to change the shipping or billing address;</li>
                        <li>If the User changes their mind about placing the order;</li>
                        <li>If the User wants to update or change the contact details or the payment mode;</li>
                        <li>If the User wants to change the size or the color of the Product;</li>
                        <li>For any other reason.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Cancellation by the Supplier</h3>
                    <p>The supplier can only cancel an order within 1 day after the day on which the Supplier was supposed to dispatch the Product.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Reasons for supplier cancellation:</h4>
                    <ul className="list-disc ml-6">
                        <li>If the ordered Product is not available with the supplier anymore;</li>
                        <li>If the ordered Product is out of stock with the supplier;</li>
                        <li>If the supplier is unable to dispatch the order in time.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Cancellation by Keshav Industries</h3>
                    <p>Keshav Industries can cancel the order anytime from the date on which the order has been placed till delivery of the Product to the User.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Reasons for cancellation by Keshav Industries:</h4>
                    <ul className="list-disc ml-6">
                        <li>If the address to which the Product is to be delivered is not serviceable;</li>
                        <li>If the delivery of the Product has been unsuccessful and the Product has been returned to the seller;</li>
                        <li>If the Product has been lost during transit;</li>
                        <li>If the payment has been made through online methods by the User and Keshav Industries did not get payment confirmation;</li>
                        <li>If the shipping address or billing address provided by the User is incomplete or incorrect;</li>
                        <li>If the supplier is unable to dispatch the order because of regulatory lockdown or other restrictions;</li>
                        <li>If the order has been auto-canceled by the system due to a high risk of the product returning back to the supplier;</li>
                        <li>If the supplier does not meet Keshav Industries' policies of fair business practices;</li>
                        <li>If Keshav Industries does not get user confirmation during delivery;</li>
                        <li>If the User chose cash on delivery and cash on delivery is not available for the Product ordered;</li>
                        <li>If Keshav Industries is unable to fulfill the order due to other reasons;</li>
                        <li>If Keshav Industries wants to cancel for any reason which Keshav Industries may deem appropriate.</li>
                    </ul>
                </section>

                {/* Refunds */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Refunds</h2>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">How will the User get the refund?</h3>
                    <p>If the User has made payment before cancellation of the order which has been placed, the money paid by the User shall be refunded. The refund will be credited to the same source of payment (bank accounts, UPI, etc.) from which payment was received. If the User has chosen any other method such as wallets, the amount will be credited to the source of origin as well. The User will receive a refund of the entire amount paid by the User. In case of any discrepancies regarding receipt of refund amount, Keshav Industries may request additional information such as a bank statement or any other relevant document.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Will the discount vouchers or other such promotional offers be reinstated?</h3>
                    <p>If the User has used any discount vouchers or promotional offers when placing the order which has been canceled, the discount vouchers or promotional offers will be forfeited.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">When will the User get the refund?</h3>
                    <p>Following are the processing timelines after the product is received by us or when the seller notifies us of the receipt of the products.</p>
                    <table className="min-w-full mt-4 bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refund Method</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refund Time Frame</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Credit Card, Debit Card, Net Banking, UPI Linked Bank Account</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3-7 Business Days</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <p>
                    Keshav Industries reserves the right, at its sole discretion, to amend, change, modify, add or remove any portion of this policy at any time without any prior written notice to you. It is your responsibility to review this policy periodically for any updates/changes.
                </p>
                <p className="mt-4">
                    For any further queries regarding return, replacement, exchange, or refund, please reach out to customer support at <a href="mailto:care.customer@keshav.co.in" className="text-blue-500">care.customer@keshav.co.in</a>.
                </p>
            </div>
        </Layout>
    );
};

export default Shipping;
