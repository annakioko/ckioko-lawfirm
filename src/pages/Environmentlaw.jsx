import React from 'react'
import { Link } from "react-router-dom";
import { FaEnvelope, FaClock } from "react-icons/fa";

export default function Environmentlaw() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/src/assets/ladyofjustice.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center p-8 max-w-3xl mx-auto tracking-wide">
          <h1 className="text-6xl font-bold mb-4 text-white">
            ENVIRONEMENT AND LAND USE LAW
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
                className="block px-4 py-2 text-slate-700 hover:text-amber-600 underline transition-transform transform hover:translate-x-2"
              >
                Corporate and Commercial Law
              </Link>
              <Link
                to="/laborlaw"
                className="block px-4 py-2 text-slate-700 hover:text-amber-600 underline transition-transform transform hover:translate-x-2"
              >
                Employment and Labor Law
              </Link>
              <Link
                to="/services/environmentallaw"
                className="block px-4 py-2 text-slate-700 hover:text-amber-600 underline transition-transform transform hover:translate-x-2"
              >
                Environmental and Land Use Law
              </Link>
              <Link
                to="/realestatelaw"
                className="block px-4 py-2 text-slate-700 hover:text-amber-600 underline transition-transform transform hover:translate-x-2"
              >
                Real Estate and Property Law
              </Link>
              <Link
                to="/familylaw"
                className="block px-4 py-2 text-slate-700 hover:text-amber-600 underline transition-transform transform hover:translate-x-2"
              >
                Family Law
              </Link>
              <Link
                to="/digitalassets"
                className="block px-4 py-2 text-slate-700 hover:text-amber-600 underline transition-transform transform hover:translate-x-2"
              >
                Digital Assets and Cyber Law
              </Link>
            </div>

            <div
              className="mt-8 p-4 bg-cover bg-center bg-fixed  rounded"
              style={{ backgroundImage: "url('/src/assets/gavel.jpg')" }}
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
                backgroundImage: "url('/src/assets/environmnet.jpg')",
              }}
            >
              {/* Card content */}
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2 text-amber-600">
                Environment and Land Use Law
              </h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  What is Environment and Property Law?
                </h3>
                <p className="mb-4 text-slate-700">
                  Environment and Property Law encompasses legal aspects related
                  to the protection of the environment and the use of land and
                  natural resources. This area of law covers a wide range of
                  issues including environmental regulations, land use planning,
                  natural resource management, and property rights. It ensures
                  that environmental impacts are considered in property
                  development and that land use is sustainable and compliant
                  with legal standards.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Why Choose Us?
                </h3>
                <p className="mb-4 text-slate-700">
                  Our firm offers specialized legal services in Environment and
                  Property Law. With extensive experience in handling
                  environmental compliance and property-related legal matters,
                  we provide clients with expert advice and representation. Our
                  team is dedicated to ensuring that your property use is
                  sustainable and compliant with environmental laws and
                  regulations.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Examples of Environment and Property Law Cases
                </h3>
                <p className="text-slate-700">
                  We have successfully represented clients in various
                  Environment and Property Law cases, including:
                  <ul className="list-disc ml-5 mt-2">
                    <li>
                      Advising on environmental compliance for property
                      development projects.
                    </li>
                    <li>
                      Handling disputes related to land use and zoning
                      regulations.
                    </li>
                    <li>
                      Assisting with natural resource management and
                      conservation efforts.
                    </li>
                    <li>
                      Representing clients in environmental impact assessment
                      proceedings.
                    </li>
                    <li>Negotiating land use agreements and easements.</li>
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
