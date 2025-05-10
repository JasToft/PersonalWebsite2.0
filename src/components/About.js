import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-section px-4 py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-6">
            Hi, I'm John Cena, a passionate software developer with experience
            in building web applications, solving complex problems, and creating
            impactful projects. I enjoy learning new technologies and applying
            them to real-world challenges.
          </p>
          <p className="text-gray-700">
            When I'm not coding, you can find me exploring new places, reading
            books, or working on personal projects. Feel free to connect with me
            through the links below!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-red-500 hover:text-red-700 text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src="/images/profile.jpg" // Replace with your image path
            alt="Profile"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;