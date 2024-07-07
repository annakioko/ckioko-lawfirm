import React from "react";
import { Link } from "react-router-dom";

export default function Termscard() {
  return (
    <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8">
      <Link to="/termsandconditions">
        <button className="bg-white shadow-md py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-xl border border-solid border-amber-400 text-center mt-4 md:mt-6 lg:mt-8 hover:bg-amber-400 ">
          Terms and Conditions
        </button>
      </Link>

      <Link to="/privacypolicy">
        <button className="bg-white shadow-md py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-xl border border-solid border-amber-400 text-center mt-4 md:mt-6 lg:mt-8 hover:bg-amber-400 ">
          Privacy Policy
        </button>
      </Link>

      <Link to="/disclaimer">
        <button className="bg-white shadow-md py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-xl border border-solid border-amber-400 text-center mt-4 md:mt-6 lg:mt-8 hover:bg-amber-400">
          Disclaimer
        </button>
      </Link>
    </div>
  );
}
