import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-white bg-zinc-900 p-7">
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div className="flex items-start md:items-center">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>

        {/* About Us Section */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <Link to="/aboutus" className="hover:underline">
            About Us
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/booking" className="hover:underline">
            Booking
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
