import React from "react";
import { FaCircle } from "react-icons/fa";
import chat from "../assets/chat.jpg";

const ChatWithAttorney = () => {
  return (
    <section className="bg-[#f2f8fd] w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-6 lg:p-12 max-w-7xl mx-auto">
        
        {/* Left Side - Image with Floating Background */}
        <div className="relative w-full max-w-lg lg:max-w-xl">
          {/* Background Div (Slightly Visible from Left) */}
          <div className="absolute -left-4 top-4 bg-white w-[90%] h-[90%] rounded-2xl shadow-lg"></div>
          {/* Image Overlapping the Background Div */}
          <img 
            src={chat} 
            alt="Chat with Avvo" 
            className="relative w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Text Content (No Shadow) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-16">
          <p className="text-orange-500 font-semibold">Need Legal Assistance?</p>
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
          Get Expert Legal Guidance <br className="hidden md:block" /> From Our Attorneys
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
          Our experienced legal team is here to provide personalized solutions for your legal concerns. Connect with a trusted attorney and get the right advice today.
          
          </p>

          {/* Added separator line */}
          <div className="border-b border-gray-300 my-6"></div>

          <button className="mt-8 bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition flex items-center gap-3">
            <FaCircle className="text-lg" />
            Chat With an Attorney
          </button>
        </div>

      </div>
    </section>
  );
};

export default ChatWithAttorney;
