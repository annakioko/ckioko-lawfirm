import React from 'react'
import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <div className="flex mt-28">
      <div className="ml-9 ">
        <p className="font-bold text-2xl mb-3">
          We are Your Trusted Legal Partners for all your legal needs
        </p>
        <p>
          At Christine Kioko Advocates, we provide personilized legal solutions
          tailored to your unique solution. Our dedicated team of professionals
          is commited to achiving the best possible outcome for your case. We
          are here to help you navigate the legal system and protect your
          rights.
        </p>

        <Link to="/Booking">
          <button
            className="bg-white shadow-md py-4 px-4 rounded-xl border border-solid border-amber-400 text-center
        mt-9 hover:bg-amber-400"
          >
            Book An Appointment Today!
          </button>
        </Link>
      </div>
      <div>
        <img src="" alt="Home page" className="w-full h-auto rounded-xl" />
      </div>
    </div>
  );
}
