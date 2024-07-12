import React, { useState } from "react";
import { FaTimes, FaEnvelope, FaWhatsapp, FaComments } from "react-icons/fa";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 ${
        isOpen ? "w-64 sm:w-72 h-auto rounded-lg" : "w-16 h-16 rounded-full"
      } bg-zinc-900 flex items-center justify-center text-slate-200 cursor-pointer transition-all duration-300 z-50`}
    >
      <div
        className="flex items-center justify-center w-full h-full"
        onClick={toggleChatBox}
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </div>
      {isOpen && (
        <div className="flex flex-col items-center p-4 space-y-2 w-full">
          <a
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full p-2 bg-transparent text-slate-200 hover:bg-amber-400 transition-colors duration-300 text-lg font-bold"
          >
            <FaEnvelope className="mr-2" /> Email
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full p-2 bg-transparent text-slate-200 hover:bg-amber-400 transition-colors duration-300 text-lg font-bold"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <a
            href="https://m.me/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full p-2 bg-transparent text-slate-200 hover:bg-amber-400 transition-colors duration-300 text-lg font-bold"
          >
            <FaComments className="mr-2" /> Messenger
          </a>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
