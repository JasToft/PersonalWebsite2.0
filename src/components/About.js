import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-section px-4 py-8 bg-background-light">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-2/3 md:pr-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">
            About Me
          </h2>
          <p className="text-secondary mb-6">
           Hi, I'm Jason Toft, a second-year biomedical engineering student. My journey into biomedical engineering began with 
           a fascination for how the human body works and a desire to make a long-lasting impact on people’s lives through science and design. 
           I've always been drawn to math and biology, and biomedical engineering seemed like the perfect blend of both worlds: 
           applying engineering concepts to solve problems in healthcare.
          </p>
          <p className="text-secondary mb-6">
            At the University of Waterloo, I've had the opportunity to learn through co-op, 
            design teams, and undergraduate research assistantships. It makes my time here busy, 
            but I'm loving every second of it!
          </p>
          <p className="text-secondary">
           Outside of school and internships, you'll find me playing beach volleyball, 
           learning a new instrument, or reading a book. I'm also currently on exchange in Madrid,
           learning Spanish! Feel free to connect with me through the links below!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <a
              href="https://linkedin.com/in/jasontoft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/jastoft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-dark hover:text-secondary text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:j2toft@uwaterloo.ca"
              className="text-accent hover:text-accent-dark text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end md:pl-20 md:ml-12">
          <div className="shadow-xl rounded-lg">
            <img
              src="/images/about/AnotherAboutPhoto.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg max-w-xs w-full h-auto"
              style={{ aspectRatio: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
