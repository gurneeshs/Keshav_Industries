import React from 'react';
import Layout from '../../components/layout/Layout';

const ReturnsExchangeRefunds = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Returns, Exchange, and Refunds Policy</h1>

                {/* Returns */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Returns</h2>
                    <p>
                        Returns, Refunds, and Exchange is the scheme provided by Keshav Industries in relation to specific products. Returns, refund, and exchange policy gives you an option to return or exchange items purchased on our platform, within the specified return/exchange period, as detailed on the product details page, subject to applicable terms and conditions set out under this Policy and/or such other policies as may be applicable from time to time.
                    </p>
                    
                    <p>
                        At the time of purchasing any products that are listed on the Platform, you will be visiting the product description page which will set out whether the product is returnable or not. The products that are explicitly identified as ‘not returnable’ on the product detail page cannot be returned while the products which are identified as ‘returnable’ are eligible for return with the conditions as specified in the product description page and this policy. The Platform at its discretion may not accept returns of any Product for reasons, including but not limited to, the products being sold under any offer, promotion or discount, if the product being returned is not in good condition, etc.
                    </p>

                    <p>
                        Keshav Industries shall not be liable or accountable for accepting returns in the circumstances where you have: (a) not followed the process of initiating returns as provided in this Policy and in other communications to you, (b) returned a shipment with wrong product, extra product or missing products, and (c) acted in a bad faith or fraudulent manner. Further, in the event of abuse of the Platform or the Platform policies which include excessive returns, high claim percentage or refusal to accept shipments, indication of any fraudulent or suspicious activity or behavior on our Platform or association with any such activity or behavior, including where your user metrics such as your claim rate, return rate etc., are higher than the average rate of the other users on our platform (“Abuse of Platform Policies”); Keshav Industries shall at its sole discretion not accept any return initiated by you or compensate you for wrong/damaged/missing products.
                    </p>

                    <p>
                        With respect to products that are identified as ‘non-returnable’ on the product display page, you will be allowed to exchange such products subject to applicable policies of the platform. In the event that a product for which only exchange is available as per the product description page, the user can opt for a ‘call me back’ option and the returns will be enabled for that user if it is found that the return has been initiated for genuine reasons, at the sole discretion of Keshav Industries.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Return Options</h3>
                    <p>Certain products on Keshav Industries will have two return options available: (a) wrong/defective items return option, and (b) all return option. If a product does not have the aforementioned options for return, the return option available for the Product in the product description page will be applicable. All return options are subject to the product being identified as returnable in the product description page.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">What is the ‘Only wrong/defect item return option’ and ‘all issue easy return’ options?</h4>
                    <p>
                        Subject to applicable policies, Keshav Industries provides an ‘all return option’ to its users, wherein users will be able to enjoy certain privileges on a specific product in lieu of payment of a premium on the product cost. Features of an all return option are as follows:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>The user will be allowed to return an already purchased product, if the said product is eligible for returns.</li>
                        <li>The user will be eligible to return the specific product for reasons other than the product being wrong or damaged.</li>
                        <li>The all return option is available only for specific products and may not be available for all products which are listed on the Platform.</li>
                    </ul>
                    <p>If you are not availing an all return option, you may avail the ‘Wrong/Defect item return option’. If you opt for the Wrong/Defect item return option, then subject to applicable policies:</p>
                    <ul className="list-disc ml-6">
                        <li>The user will be allowed to return an already purchased product, if the said product is eligible for return/exchange.</li>
                        <li>The user will only be eligible to return the product if the product received is defective, damaged, wrong or incomplete due to the seller's fault.</li>
                    </ul>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Cost of Return</h4>
                    <p>
                        If you have opted for an all return option and are eligible to return the product as per applicable policies, you may return the product free of cost no matter what the reason.
                    </p>
                    <p>
                        If you have opted for the Wrong/Defect return option and are eligible to return the product as per applicable policies, you may return the product free of cost if fault with the product lies with the supplier. The following are the faults that lie with the supplier:
                    </p>
                    <table className="min-w-full mt-4 bg-white border border-gray-200 divide-y divide-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Return Reason Category</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Actual Return Reason</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="px-6 py-4 text-sm text-gray-900">Wrong Product</td>
                                <td className="px-6 py-4 text-sm text-gray-800">Wrong Size Delivered, Same product in different colour, Completely different product from the product shown</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm text-gray-900">Defective Product</td>
                                <td className="px-6 py-4 text-sm text-gray-800">Product is dirty or with stains, Product is broken, Product is torn</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm text-gray-900">Received Incomplete Product</td>
                                <td className="px-6 py-4 text-sm text-gray-800">Part of the product is missing, Less quantity than ordered</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-4">The following aspects in relation to the product will need to be verified before arranging return free of cost:</p>
                    <ul className="list-disc ml-6">
                        <li>Whether the quality of the product returned is merchantable;</li>
                        <li>Whether the product had degraded in performance, if applicable.</li>
                    </ul>
                </section>

                {/* Exchange */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Exchange</h2>
                    <p>You can check whether the product is exchangeable or not after the product has been delivered in the order details page in the ‘My Orders’ section. If the product can be exchanged, you may exchange the product, subject to applicable policies.</p>
                    
                    <p>Eligibility of a product for exchange is subject to various aspects including but not limited to stock availability, address being serviceable, seller rating, catalog quality metric, and such other aspects at the sole discretion of the Platform. Further, the eligibility of the product to be exchanged will depend upon the reason for exchange provided by the customer. The product will not be eligible for exchange if the reason for exchange is either of: (a) the customer is not interested in the product, or (b) quality issues with the product.</p>

                    <p>Keshav Industries will not be accepting any exchanges if: (a) the product which is being exchanged is not the same product that was purchased originally, (b) you have not followed the process of initiating returns as provided in this Policy and in other communications to you, (c) in a bad faith or fraudulent manner. Further, in the event of any Abuse of Platform Policies, Keshav Industries shall at its sole discretion not fulfill any exchange initiated by you.</p>

                    <p>The exchange request must be raised within the return window period specified on the product detail page.</p>

                    <p>In case you have requested for an exchange, the platform will arrange for a replacement of the product if the product is eligible for exchange and a replacement is available in stock. You can also check the availability of the replacement product by contacting customer support.</p>
                </section>

                {/* Refunds */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Refunds</h2>
                    <p>Refunds will be processed for any product that is eligible for refunds as per this Policy and as specified on the product detail page. Refunds will be processed based on the original payment method used to purchase the product. The processing of refunds will be subject to verification of the returned product and receipt of the product by the Platform.</p>
                    
                    <p>The refund for the product may be subject to deductions as per applicable policies, which will include but not limited to charges related to shipping and handling. The refund will be credited to your account as per the payment method used during the purchase.</p>

                    <p>If you are eligible for a refund, the refund amount will be credited to your account in the original payment method used during the purchase. In case of any issues with the payment gateway or system, the refund may be delayed. The refund processing time will also depend on the bank or payment provider.</p>
                </section>
            </div>
        </Layout>
    );
};

export default ReturnsExchangeRefunds;
