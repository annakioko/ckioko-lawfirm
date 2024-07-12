import React from 'react'
import { Link } from "react-router-dom";
import { FaEnvelope, FaClock } from "react-icons/fa";


export default function Digitalassests() {
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
            DIGITAL ASSESTS AND CYBER LAW
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
                backgroundImage: "url('/src/assets/digitalassests.jpg')",
              }}
            >
              {/* Card content */}
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2 text-amber-600">
                Digital Assests and Cyber Law
              </h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  What is Digital Assets and Cyber Law?
                </h3>
                <p className="mb-4 text-slate-700">
                  Digital Assets and Cyber Law encompasses the legal issues
                  related to digital content, cyber crimes, and the protection
                  of digital assets. This field addresses the legal aspects of
                  the creation, storage, and use of digital information,
                  including cryptocurrencies, NFTs, and other digital
                  properties. It also covers the regulations and legal measures
                  necessary to protect against cyber threats and ensure data
                  privacy and security.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Why Choose Us?
                </h3>
                <p className="mb-4 text-slate-700">
                  Our firm stands out for its deep understanding of the
                  complexities surrounding digital assets and cyber law. We
                  offer comprehensive legal services tailored to meet the needs
                  of individuals and businesses navigating the digital
                  landscape. Our team of experts stays updated with the latest
                  advancements and regulations in this fast-evolving field,
                  ensuring that our clients receive the best possible advice and
                  representation.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Examples of Digital Assets and Cyber Law Cases
                </h3>
                <p className="text-slate-700">
                  Our firm has successfully handled a variety of cases,
                  including:
                  <ul className="list-disc ml-5 mt-2">
                    <li>
                      Protecting clients' intellectual property rights in the
                      digital space.
                    </li>
                    <li>
                      Advising on legal compliance for cryptocurrency
                      transactions and blockchain technologies.
                    </li>
                    <li>
                      Representing businesses in data breach litigations and
                      helping them implement robust cybersecurity measures.
                    </li>
                    <li>
                      Assisting in the legal aspects of launching and managing
                      digital assets such as NFTs.
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
