import React from "react";

const About = () => {
  return (
    <div className="mx-5 flex flex-col md:flex-row md:space-x-6 items-center justify-between h-[calc(100vh-4rem)]">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 font-serif">
          About Our Brand
        </h1>
        <p className="text-lg text-gray-700 mb-8 font-sans">
          Our brand is dedicated to providing premium-quality clothing that
          combines elegance, comfort, and durability. With a focus on
          craftsmanship and attention to detail, we create pieces that elevate
          your wardrobe and make every day feel exceptional. Join us in
          experiencing luxury at its finest.
        </p>
        <div>
          <button className="bg-sky-600 text-amber-300 border border-sky-600 py-2 px-6 font-semibold hover:bg-sky-800 mr-4">
            Discover More
          </button>
          <button className="bg-white text-sky-600 py-2 px-6 font-semibold border border-sky-600 hover:bg-sky-100">
            Our Values
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img src="/logo.jpg" className="h-96" />
      </div>
    </div>
  );
};

export default About;
