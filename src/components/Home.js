import React from "react";

// Home Component - With adjusted padding to align with navbar
const Home = () => {
  return (
    <div id="home" className="bg-background-light min-h-screen flex items-center pt-8">
      <div className="relative max-w-screen-lg mx-auto w-full">
        <div className="max-w-2xl">
          {/* Left-justified Content */}
          <p className="text-lg text-primary font-medium mb-3">
            Software Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-secondary-dark mb-6">
            Hi, I'm <span className="text-primary">John Cena</span>
          </h1>

          <p className="text-xl text-secondary mb-10 max-w-xl">
            A student at Harvard University passionate about creating impactful
            software solutions.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {/* GitHub Icon */}
            <a
              href="#"
              className="p-2 bg-secondary-dark text-background rounded-full inline-flex items-center justify-center w-10 h-10 hover:bg-primary transition-colors duration-300"
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
              className="p-2 bg-secondary-dark text-background rounded-full inline-flex items-center justify-center w-10 h-10 hover:bg-primary transition-colors duration-300"
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
              className="p-2 bg-secondary-dark text-background rounded-full inline-flex items-center justify-center w-10 h-10 hover:bg-primary transition-colors duration-300"
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

        {/* ECG Animation - Same width but higher amplitude waves and faster animation */}
        <div className="absolute right-0 top-1/4 h-24 w-1/2 opacity-10 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 175 40"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" stroke="#3B82F6" strokeWidth="1.5">
              {/* ECG Line Animation - Higher amplitude waves */}
              <path
                d="M0,20 L20,20 L25,20 L30,5 L33,35 L36,20 L40,20 L50,20 L55,16 L60,24 L65,20 L75,20 L85,20 L90,5 L93,35 L96,20 L100,20 L110,20 L115,16 L120,24 L125,20 L135,20 L145,20 L150,5 L153,35 L156,20 L160,20 L170,20 L175,16 L180,24 L185,20 L195,20"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                style={{
                  animation: "dash 8s linear infinite",
                }}
              />
            </g>
          </svg>

          {/* Adding animation styles */}
          <style jsx>{`
            @keyframes dash {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Home;