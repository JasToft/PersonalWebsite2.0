import React, { useState, useRef, useEffect } from "react";
import ProjectGallery from "./Gallery";
import projectsData from '../data/projects.json';

const Projects = () => {
  // Use the imported data directly
  const [selectedProject, setSelectedProject] = useState(null);

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-background-light">
      {/* Title Section */}
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-secondary-dark mb-8">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => {
              setSelectedProject(project);
            }}
          />
        ))}
      </div>

      {/* Popup */}
      {selectedProject && (
        <ProjectGallery
          project={selectedProject}
          onClose={closePopup}
        />
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
      {/* Project Image - Square container with centered, fitted image */}
      <div className="w-full h-64 bg-white rounded-md mb-3 flex items-center justify-center overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>

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