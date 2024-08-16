import React from 'react';
import Layout from '../layout/Layout';
import contact_us from '../../../public/img/contact-us.png'
const Contacts = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
      {/* Contact Header */}
      <div className="text-center mt-5 bg-yellow-500 py-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          Contact Us
        </h1>
        <p className="text-md md:text-xl lg:text-2xl text-white mt-4">
          Our team of customer care ninjas is ready to hear from you.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between py-10 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Reach out to us!</h2>
          <p className="text-gray-600 mt-4">
            Got a question about Keshav Industries? Are you interested in
            partnering with us? Have some suggestions or just want to say hi?
            Contact us:
          </p>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="First name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Customer Care Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Customer Care</h2>
          <p className="text-gray-600 mt-4">
            Not sure where to start? Need help adding that extra mojo to your
            business? Just visit our{' '}
            <a href="#" className="text-yellow-600 hover:underline">
              help center
            </a>{' '}
            or get in touch with us:
          </p>

          <div className="mt-6 space-y-6">
            <div className="flex items-center">
              <img
                src="profile1.jpg"
                alt="Claudio Pierantonio"
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full mr-4"
              />
              <div>
                <strong>Claudio Pierantonio</strong>
                <p className="text-gray-600">
                  Customer Care
                  <br />
                  Toll free +1 855.780.6050
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="profile2.jpg"
                alt="Noelia Rosemberg"
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full mr-4"
              />
              <div>
                <strong>Noelia Rosemberg</strong>
                <p className="text-gray-600">
                  Customer Care Lead
                  <br />
                  +1 210.807.3540 ext. 1046
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mt-8">
            Other ways to connect
          </h2>
          <p className="text-gray-600 mt-4">
            Be the first on your block to get product updates, announcements,
            news, and lots of really good content,{' '}
            <a href="#" className="text-yellow-600 hover:underline">
              like us on Facebook
            </a>{' '}
            today!
          </p>
          <p className="text-gray-600 mt-2">
            Want the best tips on business optimization, marketing strategies,
            and industry insights? Then{' '}
            <a href="#" className="text-yellow-600 hover:underline">
              follow us on Twitter
            </a>{' '}
            at @keshavindustries
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contacts;
