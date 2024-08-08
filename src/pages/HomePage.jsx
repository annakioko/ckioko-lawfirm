import React from "react";
import { FaWhatsapp, FaEye, FaBullseye } from "react-icons/fa";
import heroImage from "/src/assets/court.jpg";
import digitalAssetsImage from "/src/assets/digitalassests.jpg";
import familyLawImage from "/src/assets/familylaw.jpg";
import realEstateImage from "/src/assets/realestate.jpg";
import contractDraftsImage from "/src/assets/contractdrafts.jpg";
import ladyOfJusticeImage from "/src/assets/ladyofjustice.jpg";
import environmentImage from "/src/assets/environmnet.jpg";
import gavelImage from "/src/assets/gavel.jpg";
import missionImage from "/src/assets/mission.jpg";
import lawmanImage from "/src/assets/lawman.jpg";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl mb-2 mt-4 bg text-amber-400 underline">
            WELCOME TO
          </h1>
          <h1 className="text-slate-200 text-6xl mb-4">
            CHRISTINE KIOKO ADVOCATES
          </h1>
          <p className="text-xl mb-6 text-slate-200">
            We provide personalized legal solutions tailored to your unique
            situation. Our dedicated team of professionals is committed to
            achieving the best possible outcome for your case. We are here to
            help you navigate the legal system and protect your rights.
          </p>
          <a
            href="https://wa.me/254714681490"
            aria-label="WhatsApp"
            className="mt-4 inline-block bg-amber-500 text-black px-6 py-3 text-xl rounded font-semibold hover:bg-amber-600"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-slate-600 mb-10">
            Christine Kioko Advocates is your one-stop shop for all your legal
            needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Assets and Cyber Law",
                description:
                  "With a blend of legal expertise and technological insight, Christine Kioko Advocates stands out for its proactive approach in addressing digital threats and opportunities, ensuring comprehensive protection and compliance for clients in the digital space.",
                image: digitalAssetsImage,
              },
              {
                title: "Family Law",
                description:
                  "Christine Kioko Advocates is renowned for its empathetic and personalized approach, providing clients with the support and expertise needed to resolve family disputes while prioritizing the well-being of all parties involved.",
                image: familyLawImage,
              },
              {
                title: "Real Estate and Property Law",
                description:
                  "Known for thorough due diligence and strategic advice, Christine Kioko Advocates ensures clients' property transactions and disputes are handled with the utmost professionalism and attention to detail, safeguarding their investments and interests.",
                image: realEstateImage,
              },
              {
                title: "Corporate and Commercial Law",
                description:
                  "With a deep understanding of the corporate landscape in Kenya, Christine Kioko Advocates offers strategic legal counsel that helps businesses thrive, ensuring they remain compliant and competitive in their respective industries.",
                image: contractDraftsImage,
              },
              {
                title: "Employment and Labor Law",
                description:
                  "Christine Kioko Advocates is dedicated to fostering fair and productive workplace environments. Our legal team is adept at resolving disputes and ensuring that both employers and employees understand and adhere to their rights and obligations.",
                image: ladyOfJusticeImage,
              },
              {
                title: "Environmental and Land Use Law",
                description:
                  "With a commitment to sustainability and environmental stewardship, Christine Kioko Advocates provides clients with the legal expertise needed to navigate environmental regulations and promote responsible land use practices, ensuring projects are both legally compliant and environmentally sound.",
                image: environmentImage,
              },
            ].map((service, index) => (
              <div key={index} className="bg-white text-slate-700 p-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover mb-4 filter grayscale"
                />
                <h3 className="text-xl mb-4 text-center text-slate-800">
                  {service.title}
                </h3>
                <p className="mb-6">{service.description}</p>
                <a
                  href="https://wa.me/254714681490"
                  className="inline-flex items-center bg-transparent text-amber-400 px-4 py-2 text-lg font-semibold hover:bg-amber-400 hover:text-black"
                >
                  Get Consultation Today!
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${gavelImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div
              className="bg-cover bg-center p-8 text-slate-200 opacity-80"
              style={{
                backgroundImage: `url(${ladyOfJusticeImage})`,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundBlendMode: "overlay",
              }}
            >
              <FaEye className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p>
                Our vision is to be the leading law firm in Kenya, recognized
                for our commitment to excellence, integrity, and client
                satisfaction.
              </p>
            </div>
            <div
              className="bg-cover bg-center p-8 text-slate-200 opacity-80"
              style={{
                backgroundImage: `url(${missionImage})`,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundBlendMode: "overlay",
              }}
            >
              <FaBullseye className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p>
                Our mission is to provide top-notch legal services that meet the
                unique needs of our clients, ensuring justice and legal
                protection for all.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-slate-200 p-8 tracking-wide">
              <h2 className="text-5xl font-bold mb-4">About Christine Kioko</h2>
              <p className="mb-6 text-xl">
                Christine Kioko is the founding member of Christine Kioko
                Advocates. With years of experience in various fields of law,
                Christine has a passion for justice and a commitment to
                providing the best legal solutions for her clients. Her
                dedication and expertise have made her a respected figure in the
                legal community.
              </p>
            </div>
            <div>
              <img
                src={lawmanImage}
                alt="Founding Partners"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-16 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${ladyOfJusticeImage})`,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">
            GET A FREE CONSULTATION!
          </h1>
          <p className="mb-5 text-slate-700">
            Contact us today to schedule a free consultation with one of our
            lawyers.
          </p>
          <form className="ml-3 mr-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border border-zinc-900 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 mb-4 border border-zinc-900 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-zinc-900 rounded"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 mb-4 border border-zinc-900 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-amber-500 text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="mb-2">
            © 2024 Christine Kioko Advocates. All rights reserved.
          </p>
          <p>Website by Anna Kioko</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
