import React, { useEffect, useState } from 'react';
import layout from "../layout/Layout"


const Contacts = () => {
  return (
    <Layout>
      

      <Continer>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <Image src='' />
          </div>
          <div className="col-5">
            <h1>Have questions? <br /> Shoot us an email.</h1>
            <p>We are an industry-leading publication that provides the <br />
              latest news and insights about SEQ search, and how it<br />
              impacts your business -and career.<br />
              Have a question for us or feedback? Please click on the<br />
              most appropriate category and fill out the form to reach us. <br />
            </p>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            
          </div>
          <div className="col-5">
            <h1>Have questions? <br /> Shoot us an email.</h1>
            <p>We are an industry-leading publication that provides the <br />
              latest news and insights about SEQ search, and how it<br />
              impacts your business -and career.<br />
              Have a question for us or feedback? Please click on the<br />
              most appropriate category and fill out the form to reach us. <br />
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </Continer>

    </Layout>
  );
};

export default Contacts;