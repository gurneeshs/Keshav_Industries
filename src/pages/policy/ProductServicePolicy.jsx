import React from 'react';
import Layout from '../../components/layout/Layout';

const ProductServicePolicy = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Product and Service Policy</h1>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p>Welcome to Keshav Industries Private Limited. This policy outlines the terms and conditions for purchasing our high-quality Non-GMO Soya Lecithin, refined oils, and spices online.</p>
                </section>

                {/* Products Offered */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">2. Products Offered</h2>
                    <p>We offer a variety of products, including:</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Non-GMO Lecithin (Soya, Sunflower, Rice)</li>
                        <li>Soya Refined Oil</li>
                        <li>Mustard Oil</li>
                        <li>Indian Spices</li>
                    </ul>
                    <p className="mt-4">All products are manufactured using sustainable technology, ensuring natural flavor and adherence to international quality standards.</p>
                </section>

                {/* Pricing and Payment */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">3. Pricing and Payment</h2>
                    <p>All prices are listed in INR and include applicable taxes. Prices are subject to change without notice, but orders placed before a price change will be honored. We accept payments via credit/debit cards, net banking, and UPI.</p>
                </section>

                {/* Ordering and Delivery */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">4. Ordering and Delivery</h2>
                    <p>Orders can be placed online at our official website. Delivery within India typically takes 5-7 business days. International deliveries may take longer depending on customs. A tracking number will be provided upon shipment.</p>
                </section>

                {/* Returns, Refunds, and Exchanges */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">5. Returns, Refunds, and Exchanges</h2>
                    <p>We accept returns within 15 days of delivery if the product is unopened and in its original packaging. Refunds are processed within 7 days of receiving the returned product. Defective or damaged products can be exchanged within 15 days.</p>
                </section>

                {/* Warranty */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">6. Warranty</h2>
                    <p>All our products are covered by a 1-year warranty against manufacturing defects.</p>
                </section>

                {/* Customer Support */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">7. Customer Support</h2>
                    <p>For any inquiries or support, contact us 24/7 via email at <a href="mailto:kash@keshav.co.in" className="text-blue-500 hover:underline">kash@keshav.co.in</a> or by phone at <a href="tel:07314268890" className="text-blue-500 hover:underline">0731 426 8890</a>.</p>
                </section>

                {/* Privacy and Data Protection */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">8. Privacy and Data Protection</h2>
                    <p>Your data is handled in accordance with our Privacy Policy, ensuring confidentiality and security.</p>
                </section>

                {/* Limitation of Liability */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                    <p>Keshav Industries is not liable for indirect damages resulting from the use of its products.</p>
                </section>

                {/* Governing Law */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
                    <p>This policy is governed by the laws of India. Disputes will be resolved in the courts of Madhya Pradesh.</p>
                </section>

                {/* Changes to This Policy */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
                    <p>Keshav Industries reserves the right to modify this policy. Updates will be posted on our website.</p>
                </section>
            </div>
        </Layout>
    );
};

export default ProductServicePolicy;
