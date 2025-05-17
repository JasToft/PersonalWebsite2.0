import React, { useState } from "react";

const ExperienceGallery = ({ experience, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const { images, timePeriod, company, jobTitle, description } = experience;

  if (!images || !Array.isArray(images) || images.length === 0) {
    return null;
  }

  const getPrevIndex = () => (currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  const getNextIndex = () => (currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);

  const handlePrevImage = () => {
    if (sliding) return;
    setDirection("right");
    setSliding(true);
    
    setTimeout(() => {
      setCurrentImageIndex(getPrevIndex());
      setTimeout(() => setSliding(false), 300);
    }, 300);
  };

  const handleNextImage = () => {
    if (sliding) return;
    setDirection("left");
    setSliding(true);
    
    setTimeout(() => {
      setCurrentImageIndex(getNextIndex());
      setTimeout(() => setSliding(false), 300);
    }, 300);
  };

  const getAnimationClass = (position) => {
    if (!sliding) return "";
    
    if (position === "current") {
      return direction === "left" 
        ? "animate-slide-left-out" 
        : "animate-slide-right-out";
    } else if (position === "prev") {
      return direction === "right" 
        ? "animate-slide-right-in" 
        : "animate-slide-left-out-far";
    } else if (position === "next") {
      return direction === "left" 
        ? "animate-slide-left-in" 
        : "animate-slide-right-out-far";
    }
    return "";
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      style={{
        "--slide-distance": "100px",
        "--slide-time": "300ms"
      }}
    >
      <style jsx>{`
        @keyframes slideLeftOut {
          from { transform: translateX(0) scale(1.5); opacity: 1; }
          to { transform: translateX(calc(-1 * var(--slide-distance))) scale(1.5); opacity: 0; }
        }
        @keyframes slideRightOut {
          from { transform: translateX(0) scale(1.5); opacity: 1; }
          to { transform: translateX(var(--slide-distance)) scale(1.5); opacity: 0; }
        }
        @keyframes slideLeftIn {
          from { transform: translateX(var(--slide-distance)) scale(1.5); opacity: 0; }
          to { transform: translateX(0) scale(1.5); opacity: 1; }
        }
        @keyframes slideRightIn {
          from { transform: translateX(calc(-1 * var(--slide-distance))) scale(1.5); opacity: 0; }
          to { transform: translateX(0) scale(1.5); opacity: 1; }
        }
        @keyframes slideLeftOutFar {
          from { transform: translateX(0) scale(0.7); opacity: 0.7; }
          to { transform: translateX(calc(-2 * var(--slide-distance))) scale(0.7); opacity: 0; }
        }
        @keyframes slideRightOutFar {
          from { transform: translateX(0) scale(0.7); opacity: 0.7; }
          to { transform: translateX(calc(2 * var(--slide-distance))) scale(0.7); opacity: 0; }
        }
        
        .animate-slide-left-out {
          animation: slideLeftOut var(--slide-time) ease-in-out forwards;
        }
        .animate-slide-right-out {
          animation: slideRightOut var(--slide-time) ease-in-out forwards;
        }
        .animate-slide-left-in {
          animation: slideLeftIn var(--slide-time) ease-in-out forwards;
        }
        .animate-slide-right-in {
          animation: slideRightIn var(--slide-time) ease-in-out forwards;
        }
        .animate-slide-left-out-far {
          animation: slideLeftOutFar var(--slide-time) ease-in-out forwards;
        }
        .animate-slide-right-out-far {
          animation: slideRightOutFar var(--slide-time) ease-in-out forwards;
        }
      `}</style>

      <div
        className="bg-white rounded-lg shadow-lg max-w-7xl w-full h-full md:h-5/6 p-4 relative flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-blue-500 text-3xl font-extrabold bg-transparent border-none focus:outline-none cursor-pointer transition-colors duration-200"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="flex-grow flex items-center justify-center relative">
          <div className="flex items-center justify-center w-full relative">
            {/* Previous Image */}
            <div 
              className={`absolute transform scale-75 opacity-70 left-1/4 cursor-pointer z-10 ${getAnimationClass("prev")}`}
              onClick={handlePrevImage}
            >
              <img
                src={images[getPrevIndex()]}
                alt="Previous"
                className="max-h-64 max-w-64 object-contain"
              />
            </div>

            {/* Current Image */}
            <div className={`flex items-center justify-center z-20 ${getAnimationClass("current")}`}>
              <img
                src={images[currentImageIndex]}
                alt={`Experience Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-96 object-contain transform scale-150"
              />
            </div>

            {/* Next Image */}
            <div 
              className={`absolute transform scale-75 opacity-70 right-1/4 cursor-pointer z-10 ${getAnimationClass("next")}`}
              onClick={handleNextImage}
            >
              <img
                src={images[getNextIndex()]}
                alt="Next"
                className="max-h-64 max-w-64 object-contain"
              />
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 z-30"
                onClick={handlePrevImage}
                aria-label="Previous image"
                disabled={sliding}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 z-30"
                onClick={handleNextImage}
                aria-label="Next image"
                disabled={sliding}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-2 my-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
                onClick={() => !sliding && setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="mt-2 max-w-lg mx-auto">
          <h3 className="text-xl font-bold text-secondary-dark mb-1">{company}</h3>
          <h4 className="text-lg font-medium text-primary mb-2">{jobTitle}</h4>
          <p className="text-secondary mb-2">{description}</p>
          <div className="text-secondary text-sm font-medium">{timePeriod}</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceGallery;