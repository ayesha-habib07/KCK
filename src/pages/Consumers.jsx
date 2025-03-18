import React from "react";
import { FaStar, FaComments, FaUserAlt } from "react-icons/fa";
import { GoHorizontalRule } from "react-icons/go";
import Legal from "../components/LegalServices";

const Consumers = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-[#f2f8fd] text-center">
      <h2 className=" md:text-4xl lg:text-5xl font-semibold text-[#003366] mb-6 leading-tight text-3xl  ">
        We are dedicated to providing consumers with unbiased <br /> information about attorneys and the legal process.
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
      Finding a trustworthy lawyer can be overwhelming. Our platform ensures that you get transparent and reliable legal insights, empowering you to make informed decisions with confidence.
      </p>

      {/* Features Section */}
      <div className="flex flex-col items-center mt-12 space-y-10 md:space-y-0 md:flex-row md:justify-center md:space-x-12">
        {/* Avvo Rating */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white text-4xl font-semibold border-4 border-yellow-500">
            <FaStar />
          </div>
          <p className="text-lg font-semibold mt-4">Verified Legal Ratings</p>
        </div>

        <div className="flex gap-6 text-blue-500 font-bold text-2xl">
          <GoHorizontalRule />
          <GoHorizontalRule />
          <GoHorizontalRule />
        </div>

        {/* Attorney Profiles */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-red-400 rounded-full flex items-center justify-center text-white text-4xl font-semibold border-4 border-red-500">
            <FaUserAlt />
          </div>
          <p className="text-lg font-semibold mt-4">Attorney Listings</p>
        </div>

        <div className="flex gap-6 text-blue-500 font-bold text-2xl">
          <GoHorizontalRule />
          <GoHorizontalRule />
          <GoHorizontalRule />
        </div>

        {/* Legal Q&A Forum */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center text-white text-4xl font-semibold border-4 border-blue-500">
            <FaComments />
          </div>
          <p className="text-lg font-semibold mt-4">Legal Assistance Q&A</p>
        </div>
      </div>

      {/* Main Image with Review Cards */}
      <Legal />

      {/* Bottom Feature Cards */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-x-4">
              <div className="p-4 bg-yellow-400 rounded-full flex items-center justify-center text-white text-3xl font-semibold border-4 border-yellow-500">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold">Trustworthy Ratings</h3>
            </div>
            <p className="text-gray-600 mt-4 text-base">
              * Our independent rating system evaluates attorneys based on experience and integrity.
            </p>
            <p className="text-gray-600 text-base mt-2">
              * Ensuring transparency so you can choose a lawyer with confidence.
            </p>
            <button className="mt-6 border px-5 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition w-full">
            Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-x-4">
              <div className="p-4 bg-red-400 rounded-full flex items-center justify-center text-white text-3xl font-semibold border-4 border-red-500">
                <FaUserAlt />
              </div>
              <h3 className="text-xl font-bold">Comprehensive Attorney Listings</h3>
            </div>
            <p className="text-gray-600 mt-4 text-base">
              * Browse detailed profiles of attorneys with real client feedback.
            </p>
            <p className="text-gray-600 text-base mt-2">
              * Find lawyers based on expertise, location, and specialty.
            </p>
            <button className="mt-6 border px-5 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition w-full">
            Find a Lawyer
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-x-4">
              <div className="p-4 bg-blue-400 rounded-full flex items-center justify-center text-white text-3xl font-semibold border-4 border-blue-500">
                <FaComments />
              </div>
              <h3 className="text-xl font-bold">Get Legal Advice</h3>
            </div>
            <p className="text-gray-600 mt-4 text-base">
              * Post legal questions and receive free guidance from qualified attorneys.
            </p>
            <p className="text-gray-600 text-base mt-2">
              * Gain clarity on legal matters with direct lawyer responses.
            </p>
            <button className="mt-6 border px-5 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition w-full">
            Ask a Lawyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consumers;
