import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = ({ isHeaderVisible }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.pageYOffset > 50); // Change to desired scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-full transition-all duration-300 z-40 ${
        isScrolling || !isHeaderVisible
          ? "bg-zinc-900 text-slate-200 fixed top-0 shadow-md"
          : "bg-transparent text-slate-200 absolute top-[56px] md:top-[56px]"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>
        <div className="hidden md:flex space-x-9">
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
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-zinc-900 text-slate-200 w-full py-4">
          <Link
            to="/homepage"
            className="hover:underline py-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="hover:underline py-2"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="hover:underline py-2"
            onClick={toggleMenu}
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="hover:underline py-2"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/blog"
            className="hover:underline py-2"
            onClick={toggleMenu}
          >
            Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
