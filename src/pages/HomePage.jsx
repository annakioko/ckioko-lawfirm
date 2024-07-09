import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/src/assets/court.jpg')",
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
          <p className="text-lg mb-6 text-slate-200">
            We provide personalized legal solutions tailored to your unique
            situation. Our dedicated team of professionals is committed to
            achieving the best possible outcome for your case. We are here to
            help you navigate the legal system and protect your rights.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-amber-500 text-black px-6 py-3 text-lg font-semibold hover:bg-amber-600"
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
                image: "/src/assets/digitalassests.jpg",
              },
              {
                title: "Family Law",
                description:
                  "Christine Kioko Advocates is renowned for its empathetic and personalized approach, providing clients with the support and expertise needed to resolve family disputes while prioritizing the well-being of all parties involved.",
                image: "/src/assets/familylaw.jpg",
              },
              {
                title: "Real Estate and Property Law",
                description:
                  "Known for thorough due diligence and strategic advice, Christine Kioko Advocates ensures clients' property transactions and disputes are handled with the utmost professionalism and attention to detail, safeguarding their investments and interests.",
                image: "/src/assets/realestate.jpg",
              },
              {
                title: "Corporate and Commercial Law",
                description:
                  "With a deep understanding of the corporate landscape in Kenya, Christine Kioko Advocates offers strategic legal counsel that helps businesses thrive, ensuring they remain compliant and competitive in their respective industries.",
                image: "/src/assets/contractdrafts.jpg",
              },
              {
                title: "Employment and Labor Law",
                description:
                  "Christine Kioko Advocates is dedicated to fostering fair and productive workplace environments. Our legal team is adept at resolving disputes and ensuring that both employers and employees understand and adhere to their rights and obligations.",
                image: "/src/assets/ladyofjustice.jpg",
              },
              {
                title: "Environmental and Land Use Law",
                description:
                  "With a commitment to sustainability and environmental stewardship, Christine Kioko Advocates provides clients with the legal expertise needed to navigate environmental regulations and promote responsible land use practices, ensuring projects are both legally compliant and environmentally sound.",
                image: "/src/assets/environmnet.jpg",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white text-slate-700 p-6 ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover mb-4 filter grayscale"
                />
                <h3 className="text-xl  mb-4 text-center text-slate-800">
                  {service.title}
                </h3>
                <p className="mb-6">{service.description}</p>
                <a
                  href="https://wa.me/254714681490"
                  className="inline-flex items-center bg-amber-500 text-black px-4 py-2 text-lg font-semibold hover:bg-amber-600"
                >
                  <FaWhatsapp className="mr-2" />
                  Get Free Consultation
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
