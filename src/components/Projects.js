import React, { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch projects data from the backend API
  useEffect(() => {
    fetch("/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const closePopup = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0); // Reset image index when closing
  };

  // Function to handle previous image
  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + selectedProject.images.length) % selectedProject.images.length
      );
    }
  };

  // Function to handle next image
  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      );
    }
  };

  return (
    <div className="bg-background-light">
      {/* Title Section */}
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-secondary-dark mb-8">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0); // Reset to first image when opening new project
            }}
          />
        ))}
      </div>

      {/* Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closePopup} // Close popup when clicking outside the box
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-5xl w-full h-full md:h-4/5 p-6 relative flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the box
          >
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-blue-500 text-3xl font-extrabold bg-transparent border-none focus:outline-none cursor-pointer transition-colors duration-200" // Reverted to previous version
              onClick={closePopup}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Image Gallery */}
            <div className="flex-grow flex items-center justify-center relative overflow-hidden">
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <>
                  {/* Images Container */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Previous Image Preview */}
                    {selectedProject.images.length > 1 && (
                      <div 
                        className="absolute left-48 h-full flex items-center opacity-70 z-10 cursor-pointer"
                        onClick={handlePrevImage}
                      >
                        <img
                          src={selectedProject.images[(currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length]}
                          alt="Previous"
                          className="max-h-40 max-w-40 object-contain"
                        />
                      </div>
                    )}
                    
                    {/* Current Image */}
                    <div className="flex items-center justify-center z-20">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Current Image`}
                        className="max-w-6xl max-h-[70rem] object-contain transition-all duration-300"
                      />
                    </div>
                    
                    {/* Next Image Preview */}
                    {selectedProject.images.length > 1 && (
                      <div 
                        className="absolute right-48 h-full flex items-center opacity-70 z-10 cursor-pointer"
                        onClick={handleNextImage}
                      >
                        <img
                          src={selectedProject.images[(currentImageIndex + 1) % selectedProject.images.length]}
                          alt="Next"
                          className="max-h-40 max-w-40 object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons - only show if more than one image */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        className="absolute left-0 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-gray-800 z-30"
                        onClick={handlePrevImage}
                        aria-label="Previous image"
                      >
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        className="absolute right-0 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 text-gray-800 z-30"
                        onClick={handleNextImage}
                        aria-label="Next image"
                      >
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
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

            {/* Description and Skills */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-200 hover:shadow-xl hover:scale-105 p-4 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`} // Reduced duration to 200ms for a more immediate animation
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-md mb-3"
      />

      {/* Project Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>

      {/* Project Description */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{project.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;