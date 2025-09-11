import React, { useState, useEffect } from "react";
import exoskeletonIcon from "../exoLogo.png";



const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  // Scroll to the appropriate section with animation
  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setHoveredSection(null); // Remove hover state when clicked
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "About", "Projects", "Experience", "Contact"];
      let currentSection = "Home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      // Highlight the last section (Contact) when scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentSection = "Contact";
      }

      setActiveSection(currentSection);

      // Check if the user has scrolled down
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-screen-lg mx-auto flex items-center justify-between py-2">
        {/* Logo with Exoskeleton Icon */}
        <div className="flex items-center space-x-1">
          <div className="w-12 h-13 flex-shrink-0 mt-2">
            <img src={exoskeletonIcon} alt="Exoskeleton Icon" className="w-full h-full" />
          </div>
          <div className="leading-none">
            <div className="text-2xl font-bold text-gray-800">
              Jason <span className="text-blue-600">Toft</span>
            </div>
            <div className="text-xs font-semibold text-gray-500">
              BIOMEDICAL ENGINEER
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleScrollTo(section)}
                onMouseEnter={() => setHoveredSection(section)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  activeSection === section ? "text-primary-dark" : "text-secondary-dark"
                }`}
              >
                {section}
                {activeSection !== section && (
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-700 ease-in-out ${
                      hoveredSection === section ? "w-full" : "w-0"
                    }`}
                  ></span>
                )}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
