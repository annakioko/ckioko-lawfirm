import React, { useEffect, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Header = ({ onHeaderVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos < 50;
      setIsVisible(visible);
      onHeaderVisibilityChange(visible); // Notify parent component about visibility change
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHeaderVisibilityChange]);

  return (
    <div
      className={`bg-zinc-900 bg-opacity-90 text-slate-300 p-2 fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      } hidden md:flex`}
    >
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
            <FaPhone />
            <span>+254 714 681 490</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span>Christinekioko@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaClock />
            <span>Mon-Fri 9:00-18:00</span>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
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
          <a
            href="https://wa.me/254714681490"
            aria-label="WhatsApp"
            className="flex items-center bg-amber-500 text-black px-3 py-2  hover:bg-amber-600"
          >
            <FaWhatsapp className="mr-2" />
            Get a free consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
