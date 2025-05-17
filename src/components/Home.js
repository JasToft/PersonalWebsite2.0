import React from "react";

// Home Component - With adjusted padding to align with navbar
const Home = () => {
  return (
    <div id="home" className="bg-background-light min-h-screen flex items-center pt-8 pb-4">
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