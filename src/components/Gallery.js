import React, { useState } from "react";

const ProjectGallery = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { images, skills, timePeriod } = project;

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

        <div className="flex-grow flex items-center justify-center">
          <img
            src={images[currentImageIndex]}
            alt={`Project Image ${currentImageIndex + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            className="text-primary font-medium hover:underline"
            onClick={handlePrevImage}
          >
            Previous
          </button>
          <div className="flex items-center">
            <div className="flex flex-wrap mr-4">
              {skills && skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 text-xs font-medium mr-1 mb-1 px-2 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="text-secondary text-sm font-medium">{timePeriod}</div>
          </div>
          <button
            className="text-primary font-medium hover:underline"
            onClick={handleNextImage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;