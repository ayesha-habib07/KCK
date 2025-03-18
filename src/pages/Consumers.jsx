import React from "react";
import { FaStar, FaComments, FaUserAlt } from "react-icons/fa";
import { GoHorizontalRule } from "react-icons/go";
import { Star, User, MessageCircle, Phone, Mail, Calendar, MapPin, QuoteIcon } from "lucide-react"
import img3 from '../assets/img3.jpeg'
import profile from '../assets/profile.png'
import img1 from '../assets/img1.jpeg';


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
      <div className="w-full relative overflow-hidden      px-4 md:px-16 lg:px-24 xl:px-32 py-12 bg-[#f2f8fd] text-center">
        {/* Main container */}
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Content section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
            {/* Attorney card */}
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src={img1}
                    alt="Martha Hale"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg ">Satto M. B. Kobba</h3>
                  <p className="text-gray-600  text-lg text-left pb-1.5">Managing Partner</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                </div>

              </div>


              <div className="h-3 bg-gray-200 rounded-full mb-4 w-60"></div>
              <div className="h-3 bg-gray-200 rounded-full mb-6 w-50"></div>



              <div className="flex  items-center gap-4 mt-4">
                <button className="bg-cyan-500 rounded-full p-3 text-white shadow-lg">
                  <Phone className="h-5 w-5" />
                </button>
                <button className="bg-cyan-500 rounded-full p-3 text-white shadow-lg">
                  <Mail className="h-5 w-5" />
                </button>
                <button className="bg-cyan-500 rounded-full p-3 text-white shadow-lg">
                  <Calendar className="h-5 w-5" />
                </button>
                <button className="bg-cyan-500 rounded-full p-3 text-white shadow-lg">
                  <MapPin className="h-5 w-5" />
                </button>
              </div>


            </div>

            {/* Center image */}
            <div className="relative z-0 -mt-12 md:mt-0">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-sky-200 rounded-t-full opacity-70"></div>
              <img
                src={profile}
                alt="Attorney"
                width={300}
                height={200}
                className="relative z-10"
              />
            </div>

            {/* Testimonial card */}
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full z-10 relative">
              <div className="absolute -top-8 -right-8 bg-cyan-500 rounded-full p-3 text-white" >
                <QuoteIcon />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src={img3}
                    alt="Martha Hale"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium  pb-1.5">Mustapha T. Koroma</h3>
                  <p className="text-gray-600  text-lg text-left pb-1.5">Associate</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700">
                Experienced in Civil and Criminal Law, Corporate Law,
                and Maritime Law, with a strong background in dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </div>

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
