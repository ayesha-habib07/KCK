import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm md:text-base">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Browse Our Site</h3>
            <ul className="space-y-2">
              <li>Find a Lawyer</li>
              <li>Review Your Lawyer</li>
              <li>Legal Advice</li>
              <li>Browse Practice Areas</li>
              <li>Avvo Stories Blog</li>
              <li>For Lawyers</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              <li>New York City Lawyers</li>
              <li>Los Angeles Lawyers</li>
              <li>Chicago Lawyers</li>
              <li>Houston Lawyers</li>
              <li>Washington, DC Lawyers</li>
              <li>Philadelphia Lawyers</li>
              <li>Phoenix Lawyers</li>
              <li>San Antonio Lawyers</li>
              <li>San Diego Lawyers</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Popular Practice Areas</h3>
            <ul className="space-y-2">
              <li>Bankruptcy & Debt Lawyers</li>
              <li>Business Lawyers</li>
              <li>Criminal Defense Lawyers</li>
              <li>DUI & DWI Lawyers</li>
              <li>Estate Planning Lawyers</li>
              <li>Car Accident Lawyers</li>
              <li>Divorce & Separation Lawyers</li>
              <li>Intellectual Property Lawyers</li>
              <li>Speeding & Traffic Lawyers</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>About Avvo</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Avvo Rating Explained</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 my-8"></div>

        {/* Bottom Section: Policies & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          
          {/* Policies */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-gray-300">
            <span className="hover:text-white cursor-pointer">Terms of Use</span>
            <span className="hidden md:block">|</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hidden md:block">|</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 mt-4 md:mt-0">© Avvo Inc. All Rights Reserved 2025</p>

          {/* Social Links */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 text-xl"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400 text-xl"><FaXTwitter /></a>
            <a href="#" className="hover:text-blue-400 text-xl"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 text-xl"><FaYoutube /></a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
