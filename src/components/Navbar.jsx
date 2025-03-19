import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Home", path: "/", sectionId:"home" },
    { name: "About Us", path: "/consumers", sectionId: "consumers" },
    { name: "Legal Services", path: "/services", sectionId: "services" },
    { name: "Legal Consultation", path: "/attorney", sectionId: "attorney" },
    { name: "Contact", path: "/contact", sectionId: "contact" },
  ];

  // Function to detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      navItems.forEach(({ sectionId }) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 text-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-[#003763]">
          KCK Chambers
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ name, path, sectionId }) => (
            <a
              key={name}
              href={path} // Keeps default navigation behavior
              className={`text-gray-700 hover:text-[#008cc9] transition ${
                activeSection === sectionId ? "text-[#393f48] font-semibold border-b-2 border-[#393f48]" : ""
              }`}
            >
              {name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-center">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `block text-gray-700 hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
