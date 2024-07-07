import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="bg-sky-950 text-white fixed top-0 left-0 right-0 shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>
        <div className="flex space-x-6">
          <Link to="/homepage" className="hover:underline hover:scale-110">
            Home
          </Link>
          <Link to="/aboutus" className="hover:underline hover:scale-110">
            About Us
          </Link>
          <Link to="/booking" className="hover:underline hover:scale-110">
            Booking
          </Link>
          <Link to="/blog" className="hover:underline hover:scale-110">
            Blog
          </Link>
          <Link to="/downloadables" className="hover:underline hover:scale-110">
            Downloadables
          </Link>
          <Link to="/contact" className="hover:underline hover:scale-110">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
