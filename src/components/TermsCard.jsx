import React from "react";
import { Link } from "react-router-dom";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/Terms&Conditions";
import Disclaimer from "../pages/Disclaimer";

export default function Termscard() {
    return (
      <div className="flex justify-center space-x-4">
        <Link to="/terms-and-conditions">
          <button
            className="bg-white shadow-md py-4 px-4 rounded-xl border border-solid border-amber-400 text-center
        mt-9"
          >
            Terms and Conditions
          </button>
        </Link>

        <Link to="/privacy-policy">
          <button
            className="bg-white shadow-md py-4 px-4 rounded-xl border border-solid border-amber-400 text-center
        mt-9"
          >
            Privacy Policy
          </button>
        </Link>

        <Link to="/disclaimer">
          <button
            className="bg-white shadow-md py-4 px-4 rounded-xl border border-solid border-amber-400 text-center
        mt-9"
          >
            Disclaimer
          </button>
        </Link>
      </div>
    );
}