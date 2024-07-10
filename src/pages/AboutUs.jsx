import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="bg-zinc-900 opacity-90">
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
          <h1 className="text-3xl font-bold mb-4 text-white">About Us</h1>
          <p className="text-lg mb-6 text-slate-200">
            Our firm has a rich history of providing exceptional legal services
            and achieving remarkable milestones. We pride ourselves on our
            commitment to justice and our unwavering dedication to our clients.
          </p>
        </div>
      </section>

      {/* About Us Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src="/src/assets/lawman.jpg"
              alt="Founding Partner"
              className="w-full h-full object-cover "
            />
          </div>
          <div className=" p-8">
            <h2 className="text-3xl font-bold mb-4 text-center text-slate-800">
              About Our Firm
            </h2>
            <p className="mb-6 tracking-wider leading-6 text-slate-700">
              Established with a vision of providing top-notch legal services,
              our firm has grown to become one of the most respected law firms
              in the region. Our founding partner, Christine Kioko, has
              spearheaded numerous initiatives and cases, setting a high
              standard for legal practice. Over the years, we have achieved
              significant milestones and accolades, reflecting our dedication
              and expertise. Our team of professionals is committed to upholding
              the highest standards of integrity, excellence, and client
              satisfaction. We have successfully represented clients in various
              legal matters, ranging from family law to corporate and commercial
              disputes. Our firm's success is built on a foundation of hard
              work, perseverance, and a deep understanding of the legal
              landscape. We continue to strive for excellence, ensuring that our
              clients receive the best possible legal solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section
        className="py-20 bg-cover bg-center bg-fixed opacity-80"
        style={{
          backgroundImage: "url('/src/assets/gavel.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4 border-solid border border-white">
          <div className="text-center p-8">
            <FaEye className="text-xl mb-4 text-slate-300 mx-auto" />
            <h3 className="text-xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-lg mb-2 text-slate-300">
              EXCELLENCE, INTEGRITY, LEADERSHIP
            </p>
            <p className="text-slate-200">
              Our vision is to be the leading law firm in Kenya, recognized for
              our commitment to excellence, integrity, and client satisfaction.
              We aim to set new standards in the legal industry and be a
              trailblazer in providing innovative legal solutions.
            </p>
          </div>
          <div className="text-center p-8 mt-8">
            <FaBullseye className="text-xl mb-4 text-slate-300 mx-auto" />
            <h3 className="text-xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-lg mb-2 text-slate-300">
              JUSTICE, PROTECTION, DEDICATION
            </p>
            <p className="text-slate-200">
              Our mission is to provide top-notch legal services that meet the
              unique needs of our clients, ensuring justice and legal protection
              for all. We are dedicated to upholding the rule of law and
              delivering results that exceed our clients' expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
