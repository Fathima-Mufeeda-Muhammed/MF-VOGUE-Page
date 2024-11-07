import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-4 mb-8 md:mb-0 mx-5">
      <div className="flex items-center justify-between">
        <h4 className="text-3xl font-bold text-sky-600 italic">MF VOGUE</h4>
        <div className="space-x-6 hidden md:block">
          <Link to="/" className="hover:underline font-medium">
            Home
          </Link>
          <Link to="/features" className="hover:underline font-medium">
            Features
          </Link>
          <Link to="/contact" className="hover:underline font-medium">
            Contact
          </Link>
          <Link to="/about" className="hover:underline font-medium">
            About
          </Link>
        </div>
        <button className="hidden md:block px-4 py-1.5 bg-sky-600 text-amber-300 font-medium hover:bg-sky-800">
          Login
        </button>
        <button
          className="md:hidden font-medium text-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          |||
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-2 space-y-3">
          <Link to="/" className="hover:underline font-medium">
            Home
          </Link>
          <Link to="/features" className="hover:underline font-medium">
            Features
          </Link>
          <Link to="/about" className="hover:underline font-medium">
            About
          </Link>
          <Link to="/contact" className="hover:underline font-medium">
            Contact
          </Link>
          <button className="px-4 py-1.5 bg-sky-600 text-amber-300 font-medium hover:bg-sky-800">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
