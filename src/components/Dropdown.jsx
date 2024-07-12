import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ isMenuOpen, toggleDropdown }) => {
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="hover:underline hover:scale-110 flex items-center"
      >
        Our Services
      </button>
      {isMenuOpen && (
        <div className="absolute bg-zinc-900 text-slate-200 mt-2 w-56  md:mt-2">
          <Link
            to="/copratelaw"
            className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
            onClick={toggleDropdown}
          >
            Corporate and Commercial Law
          </Link>
          <Link
            to="/labourlaw"
            className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
            onClick={toggleDropdown}
          >
            Employment and Labor Law
          </Link>
          <Link
            to="/environmentlaw"
            className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
            onClick={toggleDropdown}
          >
            Environmental and Land Use Law
          </Link>
          <Link
            to="/realestatelaw"
            className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
            onClick={toggleDropdown}
          >
            Real Estate and Property Law
          </Link>
          <Link
            to="/familylaw"
            className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
            onClick={toggleDropdown}
          >
            Family Law
          </Link> 
          <Link
            to="/digitalassests"
            className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
            onClick={toggleDropdown}
          >
            Digital Assets and Cyber Law
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
