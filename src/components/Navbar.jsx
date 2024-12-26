import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between ">
        <Link to="/" className="text-lg font-bold">
          Shop
        </Link>
        <div className="">
        <Link to="/" className="hover:text-teal-500 ">
          About Us
        </Link>
        </div>
        <Link to="/cart" className="text-lg">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
