// import React from "react";
// import { Link } from "react-router-dom";
// import HeroSection from "../components/HeroSection";
// import { FaEnvelope, FaClock } from "react-icons/fa";
// import servicesData from "../data/servicesData"; // This should be an array of service objects

// const ServiceTemplate = ({ service }) => {
//   return (
//     <div>
//       <HeroSection title={service.title} />
//       <div className="container mx-auto px-4 py-8 flex">
//         {/* Left Sidebar */}
//         <div className="w-1/4 pr-8">
//           <h2 className="text-2xl font-bold mb-6">Our Services</h2>
//           <ul className="space-y-4 mb-8">
//             {servicesData.map((s) => (
//               <li key={s.path}>
//                 <Link
//                   to={s.path}
//                   className="text-lg text-blue-600 hover:underline"
//                 >
//                   {s.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div
//             className="p-6 bg-cover bg-center text-white"
//             style={{ backgroundImage: "url(/path/to/your/image.jpg)" }} // Replace with the actual image path
//           >
//             <h3 className="text-xl font-bold">Let us help you!</h3>
//             <p className="mt-2">
//               If you need any assistance, please feel free to contact us. We
//               will get back to you within 1 business day. For emergencies,
//               please text us and we will call you as soon as possible!
//             </p>
//             <p className="mt-2">
//               <strong>Whatsapp No:</strong> +254 714 681 490
//             </p>
//             <p className="flex items-center mt-2">
//               <FaEnvelope className="mr-2" />
//               <span>Christinekioko@gmail.com</span>
//             </p>
//             <p className="flex items-center mt-2">
//               <FaClock className="mr-2" />
//               <span>Mon-Fri 9:00-18:00</span>
//             </p>
//           </div>
//         </div>

        {/* Right Content */}
//         <div className="w-3/4">
//           <div
//             className="h-64 bg-cover bg-center mb-6"
//             style={{ backgroundImage: `url(${service.image})` }} // Replace with the actual image path
//           ></div>
//           <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
//           <p className="text-lg mb-6">{service.description}</p>
//           <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
//           <p className="text-lg mb-6">{service.whyChooseUs}</p>
//           {service.examples && (
//             <>
//               <h3 className="text-2xl font-bold mb-4">
//                 Examples of {service.title}
//               </h3>
//               <ul className="list-disc list-inside">
//                 {service.examples.map((example, index) => (
//                   <li key={index} className="text-lg mb-2">
//                     {example}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceTemplate;
