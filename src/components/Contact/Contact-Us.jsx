import React from 'react';
import Layout from '../layout/Layout';
import contact_us from '../../../public/img/contact-us.png'
const Contacts = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 my-8">
          <div className="col-span-1"></div>
          <div className="col-span-5">
            <img src={contact_us} alt="no" className="w-full h-auto" />
          </div>
          <div className="col-span-5">
            <h1 className="text-3xl font-bold mb-4">
              Have questions? <br /> Shoot us an email.
            </h1>
            <p className="text-lg leading-relaxed">
              We are an industry-leading publication that provides the <br />
              latest news and insights about SEQ search, and how it<br />
              impacts your business -and career.<br />
              Have a question for us or feedback? Please click on the<br />
              most appropriate category and fill out the form to reach us. <br />
            </p>
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className="grid grid-cols-12 gap-4 my-8">
          <div className="col-span-1"></div>
          <div className="col-span-5">
            {/* Add your image or content here */}
          </div>
          <div className="col-span-5">
            <h1 className="text-3xl font-bold mb-4">
              Have questions? <br /> Shoot us an email.
            </h1>
            <p className="text-lg leading-relaxed">
              We are an industry-leading publication that provides the <br />
              latest news and insights about SEQ search, and how it<br />
              impacts your business -and career.<br />
              Have a question for us or feedback? Please click on the<br />
              most appropriate category and fill out the form to reach us. <br />
            </p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
