import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ isHeaderVisible }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.pageYOffset > 50); // Change to desired scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full transition-all duration-300 z-40 ${
        isScrolling || !isHeaderVisible
          ? "bg-zinc-900  text-slate-200 fixed top-0 shadow-md"
          : "bg-transparent text-slate-200 absolute top-[56px]"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>
        <div className="flex space-x-9">
          <Link to="/homepage" className="hover:underline hover:scale-110">
            Home
          </Link>
          <Link to="/aboutus" className="hover:underline hover:scale-110">
            About Us
          </Link>
          <Link to="/services" className="hover:underline hover:scale-110">
            Our Services
          </Link>
          <Link to="/contact" className="hover:underline hover:scale-110">
            Contact Us
          </Link>
          <Link to="/blog" className="hover:underline hover:scale-110">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
