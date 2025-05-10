import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

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

  return (
    <div className="projects px-4">
      {/* Title Section */}
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-left mb-8">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-xl shadow-lg">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-md mb-3"
        style={{ aspectRatio: "1 / 1" }}
      />

      {/* Project Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>

      {/* Project Description */}
      <p className="text-gray-700 text-sm mb-4">{project.description}</p>

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