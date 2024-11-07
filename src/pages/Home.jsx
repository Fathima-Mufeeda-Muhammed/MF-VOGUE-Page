import React from "react";
import Image from "/shirt.jpg";

const Home = () => {
  return (
    <div className="mx-5 flex flex-col md:flex-row md:space-x-6 items-center justify-between h-[calc(100vh-4rem)]">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 font-serif">
          Experience Unmatched Comfort with the Premium Shirt
        </h1>
        <p className="text-lg text-gray-700 mb-8 font-sans">
          Crafted from the finest fabrics, the Ultimate Comfort Premium Shirt
          offers a luxurious feel that lasts all day. Perfect for any occasion,
          it combines style and unparalleled comfort in one elegant design.
        </p>
        <div>
          <button className="bg-sky-600 text-amber-300 border border-sky-600 py-2 px-6 font-semibold hover:bg-sky-800 mr-4">
            EXPLORE NOW
          </button>
          <button className="bg-white text-sky-600 py-2 px-6 font-semibold border border-sky-600 hover:bg-sky-100">
            Learn More
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img src={Image} className="h-96" />
      </div>
    </div>
  );
};

export default Home;
