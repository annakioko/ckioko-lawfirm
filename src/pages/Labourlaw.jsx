import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaClock } from "react-icons/fa";

export default function Labourlaw() {
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
            EMPLOYMENT AND LABOUR LAW
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
                backgroundImage: "url('/src/assets/ladyofjustice.jpg')",
              }}
            >
              {/* Card content */}
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2 text-amber-600">
                Employment and Labour Law
              </h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  What is Employment and Labour Law?
                </h3>
                <p className="mb-4 text-slate-700">
                  Employment and Labour Law governs the relationship between
                  employers and employees. It encompasses a wide range of issues
                  including hiring practices, workplace safety, wages,
                  discrimination, wrongful termination, and employee rights.
                  This area of law ensures fair treatment in the workplace and
                  aims to balance the interests of both employers and employees.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Why Choose Us?
                </h3>
                <p className="mb-4 text-slate-700">
                  Our firm specializes in providing expert legal services in
                  Employment and Labour Law. We are committed to advocating for
                  the rights of both employers and employees, ensuring
                  compliance with labour regulations and promoting fair
                  workplace practices. Our team is experienced in handling
                  complex employment disputes and is dedicated to achieving the
                  best outcomes for our clients.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Examples of Employment and Labour Law Cases
                </h3>
                <p className="text-slate-700">
                  We have successfully represented clients in various Employment
                  and Labour Law cases, including:
                  <ul className="list-disc ml-5 mt-2">
                    <li>
                      Negotiating severance agreements and employment contracts.
                    </li>
                    <li>
                      Addressing workplace discrimination and harassment claims.
                    </li>
                    <li>Advocating for fair wages and overtime pay.</li>
                    <li>Resolving wrongful termination disputes.</li>
                    <li>
                      Ensuring compliance with health and safety regulations.
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
