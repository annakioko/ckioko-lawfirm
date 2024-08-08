import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaClock } from "react-icons/fa";
import ladyOfJusticeImg from "../assets/ladyofjustice.jpg";
import gavelImg from "../assets/gavel.jpg";
import familyLawImg from "../assets/familylaw.jpg";

export default function Familylaw() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${ladyOfJusticeImg})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center p-8 max-w-3xl mx-auto tracking-wide">
          <h1 className="text-6xl font-bold mb-4 text-white">FAMILY LAW</h1>
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
              style={{ backgroundImage: `url(${gavelImg})` }}
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
                backgroundImage: `url(${familyLawImg})`,
              }}
            >
              {/* Card content */}
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2 text-amber-600">
                Family Law
              </h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  What is Family Law?
                </h3>
                <p className="mb-4 text-slate-700">
                  Family Law encompasses the legal aspects of relationships
                  among family members. This includes marriage, divorce, child
                  custody, adoption, and other matters affecting families.
                  Family Law aims to provide fair and just resolutions to
                  familial disputes, ensuring the welfare and rights of all
                  parties involved, especially children.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Why Choose Us?
                </h3>
                <p className="mb-4 text-slate-700">
                  Our firm offers compassionate and experienced legal services
                  in Family Law. We understand the emotional and personal nature
                  of family disputes and are committed to providing supportive
                  and effective solutions. Our team is dedicated to guiding you
                  through every step of the legal process, ensuring that your
                  rights and interests are protected.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-amber-600">
                  Examples of Family Law Cases
                </h3>
                <p className="text-slate-700">
                  We have successfully handled a variety of Family Law cases,
                  including:
                  <ul className="list-disc ml-5 mt-2">
                    <li>Negotiating fair and amicable divorce settlements.</li>
                    <li>
                      Securing child custody and visitation rights for parents.
                    </li>
                    <li>Facilitating smooth and legal adoptions.</li>
                    <li>
                      Providing legal support in cases of domestic violence.
                    </li>
                    <li>Ensuring equitable division of marital property.</li>
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
