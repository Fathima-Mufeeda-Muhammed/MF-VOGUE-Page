import React from "react";

const Features = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 mt-5 mx-5">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Explore the Amazing Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Our products are crafted with the finest materials, offering
              unparalleled comfort and durability. Experience the best of luxury
              and functionality.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Innovative Design
            </h3>
            <p className="text-gray-600">
              Sleek, modern, and always in style—our products combine aesthetic
              appeal with functionality. Perfect for any occasion or activity.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Unmatched Comfort
            </h3>
            <p className="text-gray-600">
              Designed with your comfort in mind, our products provide all-day
              wearability with no compromise on style.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Sustainable Materials
            </h3>
            <p className="text-gray-600">
              We are committed to sustainability. Our products use eco-friendly
              materials that help reduce your carbon footprint.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Customizable Options
            </h3>
            <p className="text-gray-600">
              Personalize your product with custom options for fit, style, and
              color. Make it truly yours!
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Affordable Luxury
            </h3>
            <p className="text-gray-600">
              We believe in making luxury accessible. Our products offer
              high-end quality at prices that are within reach.
            </p>
          </div>
        </div>
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to Experience the Best?
          </h3>
          <p className="text-gray-600 mb-6">
            Don't wait any longer. Explore our collection now and discover a new
            level of comfort and style.
          </p>
          <a
            href="/shop"
            className="inline-block bg-sky-600 text-white py-2 px-8 rounded-lg text-lg font-semibold hover:bg-sky-700 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
