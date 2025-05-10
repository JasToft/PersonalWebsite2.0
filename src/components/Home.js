import React from "react";

const Home = () => {
  return (
    <div className="home-section px-4 py-24 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex items-center">
      <div className="relative max-w-screen-lg mx-auto w-full">
        <div className="max-w-2xl">
          {/* Left-justified Content */}
          <p className="text-lg text-blue-600 font-medium mb-3">
            Software Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">John Cena</span>
          </h1>

          <p className="text-xl text-gray-700 mb-10 max-w-xl">
            A student at Harvard University passionate about creating impactful
            software solutions.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {/* GitHub Icon */}
            <a
              href="#"
              className="p-2 bg-gray-800 text-white rounded-full inline-flex items-center justify-center w-10 h-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="#"
              className="p-2 bg-gray-800 text-white rounded-full inline-flex items-center justify-center w-10 h-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Email Icon */}
            <a
              href="#"
              className="p-2 bg-gray-800 text-white rounded-full inline-flex items-center justify-center w-10 h-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* ECG Animation Positioned Higher */}
        <div className="absolute right-0 top-0 transform translate-y-[-55%] h-full w-1/3 opacity-10 pointer-events-none">
          <svg
            width="150%"
            height="150%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <g fill="none" stroke="#3B82F6" strokeWidth="0.5">
              {/* Clean ECG waveform */}
              <path d="M0,70 L10,70 L15,50 L20,90 L25,70 L40,70 L45,60 L50,80 L55,70 L100,70" />

              {/* Node points (sensors or molecule atoms) */}
              <circle cx="15" cy="50" r="1.2" fill="#3B82F6" />
              <circle cx="20" cy="90" r="1.2" fill="#3B82F6" />
              <circle cx="45" cy="60" r="1.2" fill="#3B82F6" />
              <circle cx="50" cy="80" r="1.2" fill="#3B82F6" />

              {/* Connecting lines between nodes */}
              <line x1="15" y1="50" x2="20" y2="90" />
              <line x1="45" y1="60" x2="50" y2="80" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
