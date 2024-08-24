import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import missionImage from "../assets/mission.jpg";
import ladyOfJusticeImage from "../assets/ladyofjustice.jpg";

const ContactPage = () => {
  return (
    <div className="bg-zinc-900">
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed opacity-90"
        style={{
          backgroundImage: `url(${missionImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center p-8 max-w-3xl mx-auto">
          <h1 className="text-6xl mb-4 text-slate-300">
            For a quick response via WhatsApp
          </h1>
          <a
            href="https://wa.me/254714681490"
            aria-label="WhatsApp"
            className="mt-4 inline-block bg-amber-500 text-black px-6 py-3 text-lg rounded font-semibold hover:bg-amber-600"
          >
            Click here!
          </a>
          <p className="text-2xl my-6 text-slate-200">
            You can also reach us through the following means below:
          </p>
        </div>
      </section>
      {/* Contact Means Section */}
      <section className="py-32 bg-zinc-900 text-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-around items-center space-y-12 lg:space-y-0">
            <div className="flex items-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
              <FaPhone className="text-4xl lg:text-xl text-amber-400 mb-4 lg:mb-0" />
              <div className="text-center lg:text-left">
                <h3 className="text-3xl lg:text-2xl font-bold">Phone</h3>
                <p className="text-xl lg:text-lg">(+254) 714-681-490</p>
              </div>
            </div>
            <div className="flex items-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
              <FaEnvelope className="text-4xl lg:text-xl text-amber-400 mb-4 lg:mb-0" />
              <div className="text-center lg:text-left">
                <h3 className="text-3xl lg:text-2xl font-bold">Email</h3>
                <p className="text-xl lg:text-lg">christinekioko@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
              <FaMapMarkerAlt className="text-4xl lg:text-xl text-amber-400 mb-4 lg:mb-0" />
              <div className="text-center lg:text-left">
                <h3 className="text-3xl lg:text-2xl font-bold">Location</h3>
                <p className="text-xl lg:text-lg">
                  Transcom Office Suites, 8th floor, View Park Towers, Utalii
                  Lane
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ladyOfJusticeImage})`,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="p-8 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-9 text-zinc-900">
              You can also fill in your details in the form below, we will be in
              touch with you shortly
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-zinc-100 border border-black rounded"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 bg-zinc-100 border border-black rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-zinc-100 border border-black rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 bg-zinc-100 border border-black rounded"
                rows="5"
              ></textarea>
              <button className="w-full py-3 bg-amber-400 text-slate-800 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
