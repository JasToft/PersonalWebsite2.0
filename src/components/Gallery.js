import React, { useState } from "react";

const ProjectGallery = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const { images, skills, timePeriod, title, description } = project;

  if (!images || !Array.isArray(images) || images.length === 0) {
    return null;
  }

  const getPrevIndex = () =>
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  const getNextIndex = () =>
    currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

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
        ? "animate-gallery-slide-left-out"
        : "animate-gallery-slide-right-out";
    } else if (position === "prev") {
      return direction === "right" ? "animate-gallery-slide-right-in" : "";
    } else if (position === "next") {
      return direction === "left" ? "animate-gallery-slide-left-in" : "";
    }
    return "";
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <style jsx>{`
        @keyframes gallerySlideLeftOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0.5;
          }
        }
        @keyframes gallerySlideRightOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.5;
          }
        }
        @keyframes gallerySlideLeftIn {
          0% {
            transform: translateX(100%);
            opacity: 0.5;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes gallerySlideRightIn {
          0% {
            transform: translateX(-100%);
            opacity: 0.5;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-gallery-slide-left-out {
          animation: gallerySlideLeftOut 0.3s ease-in-out forwards;
        }
        .animate-gallery-slide-right-out {
          animation: gallerySlideRightOut 0.3s ease-in-out forwards;
        }
        .animate-gallery-slide-left-in {
          animation: gallerySlideLeftIn 0.3s ease-in-out forwards;
        }
        .animate-gallery-slide-right-in {
          animation: gallerySlideRightIn 0.3s ease-in-out forwards;
        }
      `}</style>

      <div
        className="bg-white rounded-lg shadow-lg max-w-5xl w-full h-[90vh] p-4 relative flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-blue-500 text-3xl font-extrabold bg-transparent border-none focus:outline-none cursor-pointer transition-colors duration-200"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Gallery */}
        <div className="flex-grow flex items-center justify-center relative">
          <div className="flex items-center justify-center w-full relative h-[60vh] gap-2">
            {/* Previous Image */}
            <div
              className={`transform cursor-pointer z-10 transition-all duration-300 opacity-50 scale-75 -mr-4 ${getAnimationClass(
                "prev"
              )}`}
              onClick={handlePrevImage}
            >
              <img
                src={images[getPrevIndex()]}
                alt="Previous"
                className="object-contain max-h-[40vh] w-auto"
              />
            </div>

            {/* Current Image */}
            <div
              className={`z-20 transition-all duration-300 flex justify-center items-center ${getAnimationClass(
                "current"
              )}`}
              style={{ width: "100%", height: "1100%" }}
            >
              <img
                src={images[currentImageIndex]}
                alt={`Project Image ${currentImageIndex + 1}`}
                className="object-contain transform scale-[1.8] transition-transform duration-300 max-h-[60vh]"
              />
            </div>

            {/* Next Image */}
            <div
              className={`transform cursor-pointer z-10 transition-all duration-300 opacity-50 scale-75 -mr-4 ${getAnimationClass(
                "prev"
              )}`}
              onClick={handlePrevImage}
            >
              <img
                src={images[getPrevIndex()]}
                alt="Previous"
                className="object-contain max-h-[40vh] w-auto"
              />
            </div>
          </div>

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-gray-800 z-30"
                onClick={handlePrevImage}
                aria-label="Previous image"
                disabled={sliding}
              >
                <svg
                  className="w-16 h-16"
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
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-gray-800 z-30"
                onClick={handleNextImage}
                aria-label="Next image"
                disabled={sliding}
              >
                <svg
                  className="w-16 h-16"
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

        {/* Image dots */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 mb-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => !sliding && setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Text Section (Centered) */}
        <div className="mt-4 max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 mb-2">{description}</p>
          <div className="flex justify-center flex-wrap mb-2">
            {skills &&
              skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 mb-1 px-2 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
          </div>
          <div className="text-gray-500 text-sm font-medium">{timePeriod}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
