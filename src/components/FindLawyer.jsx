import React from "react";
import { FaSearch } from "react-icons/fa";

const FindLawyer = () => {
  return (
    <section className="bg-[#008cc9] w-full py-16 text-white text-center px-4 font-Jakarta">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Need Legal Assistance?</h2>
        <p className="mt-3 text-lg">
        Find experienced legal professionals at Kobba & Co. Kekeh Chambers for expert consultation and representation.
        </p>

        {/* Search Bar */}
        <div className="mt-6 bg-white rounded-xl flex items-center justify-center py-2 px-4">
          <div className="relative w-full max-w-3xl">
            <FaSearch className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
            <input
              type="text"
              placeholder="What type of lawyer do you need?"
              className="w-full h-14 p-4 pl-12 pr-44 text-gray-700 font-medium text-lg rounded-xl focus:outline-none "
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-12 px-6 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
            Get Legal Help
            </button>
          </div>
        </div>

        
        {/* Example Links */}
        <p className="mt-4 text-sm">
          For example, try searching for {" "}
          <span className="text-blue-300 font-semibold cursor-pointer hover:underline">
            Business Law
          </span>
          , {" "}
          <span className="text-blue-300 font-semibold cursor-pointer hover:underline">
            Arbitration
          </span>
          , or {" "}
          <span className="text-blue-300 font-semibold cursor-pointer hover:underline">
            Family Law
          </span>.
        </p>
      </div>
    </section>
  );
};

export default FindLawyer;
