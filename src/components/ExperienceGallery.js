import React, { useState } from "react";

const ExperienceGallery = ({ experience, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { images, timePeriod, company, jobTitle, description } = experience;

  if (!images || !Array.isArray(images)) {
    return null; // Return null if images is undefined or not an array
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-5xl w-full h-full md:h-4/5 p-6 relative flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-blue-500 text-3xl font-extrabold bg-transparent border-none focus:outline-none cursor-pointer transition-colors duration-200"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="flex-grow flex flex-col items-center justify-start relative overflow-hidden">
          {images && images.length > 0 ? (
            <>
              <div className="relative w-full h-2/3 flex items-center justify-center">
                {images.length > 1 && (
                  <div
                    className="absolute left-48 h-full flex items-center opacity-70 z-10 cursor-pointer"
                    onClick={handlePrevImage}
                  >
                    <img
                      src={
                        images[
                          (currentImageIndex - 1 + images.length) % images.length
                        ]
                      }
                      alt="Previous"
                      className="max-h-40 max-w-40 object-contain"
                    />
                  </div>
                )}

                <div className="flex items-center justify-center z-20">
                  <img
                    src={images[currentImageIndex]}
                    alt={`Experience Image ${currentImageIndex + 1}`}
                    className="max-w-6xl max-h-[50rem] object-contain transition-all duration-300"
                  />
                </div>

                {images.length > 1 && (
                  <div
                    className="absolute right-48 h-full flex items-center opacity-70 z-10 cursor-pointer"
                    onClick={handleNextImage}
                  >
                    <img
                      src={images[(currentImageIndex + 1) % images.length]}
                      alt="Next"
                      className="max-h-40 max-w-40 object-contain"
                    />
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/3 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-gray-800 z-30"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                    style={{ top: "33%" }} // Adjusted slightly lower
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
                    className="absolute right-4 top-1/3 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-gray-800 z-30"
                    onClick={handleNextImage}
                    aria-label="Next image"
                    style={{ top: "33%" }} // Adjusted slightly lower
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

              {images.length > 1 && (
                <div className="absolute top-[70%] left-0 right-0 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex
                          ? "bg-blue-500"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">No images available</p>
            </div>
          )}
        </div>

        <div className="absolute bottom-10 left-6">
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