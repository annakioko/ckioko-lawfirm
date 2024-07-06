import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
      <div>
            <div className="flex justify-center bg-sky-950 text-white">
                <img src="../assets/logo.png" alt='logo' height='' width='' />
          <Link to="/homepage">
            <Home />
          </Link>
          <Link to="/aboutus">
            <About_Us />
          </Link>
          <Link to="/booking">
            <Booking />
          </Link>
          <Link to="/blog">
            <Blog />
          </Link>
          <Link to="/downloadables">
            <Downloadables />
          </Link>
          <Link to="/Contact">
            <Contact_Us />
          </Link>
        </div>
      </div>
    );
}
