import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mt-7 mx-5 text-center py-12 bg-sky-600 text-white">
        <h4 className="text-4xl md:text-6xl font-bold">Contact Us</h4>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6 ">
            <h3 className="text-xl font-bold mb-4 ">Contact Details</h3>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-500 mr-2" />
              <p className="text-gray-700">mfvogue@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-blue-500 mr-2" />
              <p className="text-gray-700">+91 8484848484</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkedAlt className="text-blue-500 mr-2" />
              <p className="text-gray-700">
                MF VOGUE,Near Iqbal H S S Ajanur,Kanhangad,Kasaragod
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-center">
              We're Here to Help! Get in Touch with Us Today
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Write Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Send Your Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
