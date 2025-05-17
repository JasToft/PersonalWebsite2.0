import React, { useRef, useEffect, useState } from "react";

const ECGAnimation = () => {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div className="absolute top-0 right-0 h-full w-full pointer-events-none">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 opacity-10"
        width="300"
        height="300"
      >
        <path
          ref={pathRef}
          d="M0,70 L10,70 L15,50 L20,90 L25,70 L40,70 L45,60 L50,80 L55,70 L100,70"
          fill="none"
          stroke="primary"
          strokeWidth="1"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          style={{
            animation: "draw 2s ease-in-out infinite",
          }}
        />
      </svg>

      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dashoffset: ${pathLength};
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: ${pathLength};
          }
        }
      `}</style>
    </div>
  );
};

export default ECGAnimation;
