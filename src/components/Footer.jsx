import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="text-slate-200 bg-zinc-900 p-7">
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div className=" items-start md:items-center">
          <img src={logo} alt="logo" className="h-10 w-auto mb-6" />
          <p>With years of experience in various fields of law,</p>
          <p>Christine has a passion for justice and a commitment</p>
          <p className="mb-5">to providing the best legal solutions for her clients.</p>
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

        {/* About Us Section */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <Link to="/aboutus" className="hover:underline">
            About Us
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>

          <Link to="/downloadables" className="hover:underline">
            Downloadables
          </Link>
        </div>

        {/* Policies Section */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="font-bold">Policies</h3>
          <Link to="/termsandconditions">
            <button className="">Terms and Conditions</button>
          </Link>
          <Link to="/privacypolicy">
            <button className="">Privacy Policy</button>
          </Link>
          <Link to="/disclaimer">
            <button className="">Disclaimer</button>
          </Link>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="font-bold">Contact Us</h3>
          <p>+254 720 856 222</p>
          <p>chrsitinekioko@gmail.com</p>
          <p>View Park Towers 10th Floor</p>
        </div>
      </div>
    </div>
  );
}
