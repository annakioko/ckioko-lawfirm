import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaClock } from "react-icons/fa";
import ladyOfJusticeImage from "../assets/ladyofjustice.jpg";
import gavelImage from "../assets/gavel.jpg";
import contractDraftsImage from "../assets/contractdrafts.jpg";

export default function Copratelaw() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${ladyOfJusticeImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center p-8 max-w-3xl mx-auto tracking-wide">
          <h1 className="text-6xl font-bold mb-4 text-white">
            CORPORATE AND COMMERCIAL LAW
          </h1>
        </div>
      </section>

      {/* Service Description Area */}
      <section className="py-16 bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/4 p-4">
            <h1 className="text-amber-600 mb-5 text-center">OUR SERVICES</h1>
            <div>
              <Link
                to="/copratelaw"
                className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
              >
                Corporate and Commercial Law
              </Link>
              <Link
                to="/labourlaw"
                className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
              >
                Employment and Labor Law
              </Link>
              <Link
                to="/environmentlaw"
                className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
              >
                Environmental and Land Use Law
              </Link>
              <Link
                to="/realestatelaw"
                className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
              >
                Real Estate and Property Law
              </Link>
              <Link
                to="/familylaw"
                className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
              >
                Family Law
              </Link>
              <Link
                to="/digitalassests"
                className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
              >
                Digital Assets and Cyber Law
              </Link>
            </div>

            <div
              className="mt-8 p-4 bg-cover bg-center bg-fixed rounded"
              style={{ backgroundImage: `url(${gavelImage})` }}
            >
              <h2 className="text-amber-600 mb-6">Let us help you!</h2>
              <p className="text-slate-200 mb-5">
                If you need any assistance, please feel free to contact us. We
                will get back to you within 1 business day. For emergencies,
                please text us and we will call you as soon as possible!
              </p>
              <p className="text-lg font-bold text-white mb-4">
                WhatsApp No: +254 714 681 490
              </p>
              <p className="flex items-center text-slate-200">
                <FaEnvelope className="mr-2" />
                Christinekioko@gmail.com
              </p>
              <p className="flex items-center text-slate-200">
                <FaClock className="mr-2" />
                Mon-Fri 9:00-18:00
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-3/4 p-4">
            <div
              className="bg-cover bg-center h-80 mb-6 rounded"
              style={{
                backgroundImage: `url(${contractDraftsImage})`,
              }}
            >
              {/* Card content */}
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2 text-amber-600">
                Corporate and Commercial Law
              </h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  What is Corporate and Commercial Law?
                </h3>
                <p className="mb-4 text-slate-700">
                  Corporate and Commercial Law deals with the legal aspects of
                  business operations and corporate governance. It covers a
                  broad range of topics, including the formation and dissolution
                  of companies, mergers and acquisitions, shareholder rights,
                  corporate finance, and compliance with regulatory
                  requirements. This area of law ensures that businesses operate
                  within the legal framework and helps resolve disputes that
                  arise in the corporate world.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Why Choose Us?
                </h3>
                <p className="mb-4 text-slate-700">
                  Our firm provides unparalleled expertise in corporate and
                  commercial law, offering personalized legal solutions to meet
                  the unique needs of our clients. We understand the
                  complexities of the business environment and are dedicated to
                  helping our clients navigate legal challenges efficiently and
                  effectively. With a focus on building long-term relationships,
                  we are committed to delivering exceptional service and
                  achieving the best outcomes for our clients.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Examples of Corporate and Commercial Law Cases
                </h3>
                <p className="text-slate-700">
                  Our firm has successfully handled a wide array of corporate
                  and commercial law cases, including:
                  <ul className="list-disc ml-5 mt-2">
                    <li>
                      Advising on the formation and structuring of new
                      businesses and startups.
                    </li>
                    <li>
                      Assisting in complex mergers and acquisitions to ensure
                      smooth transitions.
                    </li>
                    <li>
                      Providing legal counsel on corporate governance and
                      compliance issues.
                    </li>
                    <li>
                      Representing clients in shareholder disputes and corporate
                      litigation.
                    </li>
                    <li>
                      Drafting and negotiating commercial contracts to protect
                      our clients' interests.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
