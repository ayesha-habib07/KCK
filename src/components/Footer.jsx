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
            <h3 className="text-lg md:text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Family Law</li>
              <li>Business & Company Law</li>
              <li>Shipping & Maritime Law</li>
              <li>Land Law & Property Disputes</li>
              <li>Arbitration & Mediation</li>
              <li>Contract Law</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Our Office</h3>
            <ul className="space-y-2">
              <li>22 Jones Street, Freetown</li>
              <li>Sierra Leone</li>
              <li>Phone: +232 78666645</li>
              <li>Email: info@kobbafirm.com</li>
              <li>Monday - Friday: 9 AM - 5 PM</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Lawyers</li>
              <li>Case Studies</li>
              <li>Client Testimonials</li>
              <li>Legal Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Legal Resources</h3>
            <ul className="space-y-2">
              <li>Legal Advice</li>
              <li>Free Consultation</li>
              <li>Law Updates</li>
              <li>Know Your Rights</li>
              <li>Legal FAQs</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 my-8"></div>

        {/* Bottom Section: Policies & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          
          {/* Policies */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-gray-300">
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hidden md:block">|</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hidden md:block">|</span>
            <span className="hover:text-white cursor-pointer">Disclaimer</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 mt-4 md:mt-0">© 2025 Kobba & Co. – Kekeh Chambers. All Rights Reserved.</p>

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