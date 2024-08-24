import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { pathname } = useLocation();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-slate-200 bg-zinc-900 p-7">
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div className="items-start md:items-center">
          <img src={logo} alt="logo" className="h-10 w-auto mb-6" />
          <p>With years of experience in various fields of law,</p>
          <p>Christine has a passion for justice and a commitment</p>
          <p className="mb-5">
            to providing the best legal solutions for her clients.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-gray-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="hover:text-gray-400"
            >
              <FaYoutube />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-gray-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="font-bold text-2xl mb-5">Contact Us</h3>
          <p className="text-slate-200 mb-3">+254 714 681 490</p>
          <p className="text-slate-200 mb-3">christinekioko@gmail.com</p>
          <p>PO-Box 455-00517, Nairobi</p>
          <p className="text-slate-200">
            Transcom Office Suites, 8th floor, View Park Towers, Utalii Lane
          </p>

        </div>

        {/* Services Section */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h1 className="text-white mb-5 text-center text-2xl">OUR SERVICES</h1>
          <div>
            <Link
              to="/copratelaw#top"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-slate-200 hover:text-amber-600 underline"
            >
              Corporate and Commercial Law
            </Link>
            <Link
              to="/labourlaw#top"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-slate-200 hover:text-amber-600 underline"
            >
              Employment and Labor Law
            </Link>
            <Link
              to="/environmentlaw#top"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-slate-200 hover:text-amber-600 underline"
            >
              Environmental and Land Use Law
            </Link>
            <Link
              to="/realestatelaw#top"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-slate-200 hover:text-amber-600 underline"
            >
              Real Estate and Property Law
            </Link>
            <Link
              to="/familylaw#top"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-slate-200 hover:text-amber-600 underline"
            >
              Family Law
            </Link>
            <Link
              to="/digitalassests#top"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-slate-200 hover:text-amber-600 underline"
            >
              Digital Assets and Cyber Law
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
