import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 w-full py-16 text-gray-900 px-6 font-Jakarta">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0077c8]">Contact Us</h2>
        <p className="mt-3 text-lg text-gray-700">
          Get in touch with <span className="font-semibold">Kobba & Co. Kekeh Chambers</span> for expert legal assistance.
        </p>

        {/* Contact Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Office Address */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="p-4 bg-red-500 rounded-full flex items-center justify-center text-white text-3xl font-semibold border-4 border-red-600">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-semibold mt-4">Our Office</h3>
            <p className="text-gray-700 text-center mt-2">22 Jones Street, Freetown, Sierra Leone</p>
          </div>

          {/* Phone Number */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="p-4 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-semibold border-4 border-green-600">
              <FaPhone />
            </div>
            <h3 className="text-xl font-semibold mt-4">Call Us</h3>
            <p className="text-gray-700 mt-2">+232 78666645</p>
          </div>

          {/* Email Address */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="p-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-semibold border-4 border-blue-600">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-semibold mt-4">Email Us</h3>
            <p className="text-gray-700 mt-2">sattomkobba@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md text-left max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#0077c8] mb-4 text-center">Send a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Your Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0077c8] text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
