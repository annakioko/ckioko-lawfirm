import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import DropdownMenu from "../components/Dropdown";

const Navbar = ({ isHeaderVisible }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          <DropdownMenu
            isMenuOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
          />
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
          <div className="w-full">
            <button
              onClick={toggleDropdown}
              className="w-full text-left py-2 px-4 hover:underline flex justify-between items-center"
            >
              Our Services
              {isDropdownOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
            {isDropdownOpen && (
              <div className="bg-zinc-900 text-slate-200 w-full py-2 space-y-2">
                <Link
                  to="/copratelaw"
                  className="block px-4 py-2 hover:bg-amber-400 hover:text-black underline"
                  onClick={toggleMenu}
                >
                  Corporate and Commercial Law
                </Link>
                <Link
                  to="/labourlaw"
                  className="block px-4 py-2 hover:bg-amber-400 hover:text-black underline"
                  onClick={toggleMenu}
                >
                  Employment and Labor Law
                </Link>
                <Link
                  to="/environmentlaw"
                  className="block px-4 py-2 hover:bg-amber-400 hover:text-black underline"
                  onClick={toggleMenu}
                >
                  Environmental and Land Use Law
                </Link>
                <Link
                  to="/realestatelaw"
                  className="block px-4 py-2 hover:bg-amber-400 hover:text-black underline"
                  onClick={toggleMenu}
                >
                  Real Estate and Property Law
                </Link>
                <Link
                  to="/familylaw"
                  className="block px-4 py-2 hover:bg-amber-400 hover:text-black underline"
                  onClick={toggleMenu}
                >
                  Family Law
                </Link>
            
                <Link
                  to="/digitalassests"
                  className="block px-4 py-2 hover:bg-amber-400 hover:text-black underline"
                  onClick={toggleMenu}
                >
                  Digital Assets and Cyber Law
                </Link>
              </div>
            )}
          </div>
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
