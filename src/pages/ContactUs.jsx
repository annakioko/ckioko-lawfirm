import React from "react";
import { Link } from "react-router-dom";
import map from "../assets/map.jpg";

export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-28 mx-4 h-80">
      {/* Left Half: Map Section */}
      <div className="flex-1 bg-gray-200 h-80">
        <img src={map} alt="map" className="w-full h-full object-cover" />
      </div>

      {/* Right Half: Form */}
      <form className="flex-1 border-l border-r border-solid border-black mx-4 h-full p-4">
        <h3 className="text-center font-bold my-2 text-2xl">Contact us Via;</h3>
        <p className="font-bold my-2 ml-3">+254 714 681 490</p>

        {/* Name and Email Section */}
        <div className="flex space-x-4 mx-3">
          <div className="w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Phone and Subject Section */}
        <div className="flex space-x-4 mt-4 mx-3">
          <div className="w-1/2">
            <input
              type="text"
              id="phone"
              name="phone"
              className="mt-1 block w-full px-3 py-2 border border-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full px-3 py-2 border border-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter subject"
            />
          </div>
        </div>

        {/* Message Section */}
        <div className="mt-4 mx-3">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your message"
          />
        </div>

        {/* Submit and Book Us Buttons */}
        <div className="flex mt-4 mx-3 mb-2 justify-between items-center">
          <button
            type="submit"
            className="bg-white shadow-md py-2 px-4 border border-solid border-amber-400 text-center hover:bg-amber-400"
          >
            Submit
          </button>
          <p>or</p>
          <Link to="/booking">
            <button
              type="button"
              className="bg-white shadow-md py-2 px-4 border border-solid border-amber-400 text-center hover:bg-amber-400"
            >
              Book Us
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
