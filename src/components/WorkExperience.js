import React, { useState, useEffect } from "react";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  // Fetch experience data from the backend API  
  useEffect(() => {
    fetch("/api/experience")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch experience data");
        }
        return response.json();
      })
      .then((data) => setExperience(data))
      .catch((error) => console.error("Error fetching experiences:", error));
  }, []);
  
  return (
    <div className="projects px-4 bg-gray-50 py-16">
      {/* Title Section */}
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-left mb-8">Experience</h2>
      </div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 gap-6 max-w-screen-lg mx-auto">
        {experience.map((job) => (
          <ExperienceCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ job }) => {
  const [showMore, setShowMore] = useState(true); // Default to open
  
  const handleToggle = () => {
    setShowMore(!showMore);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
      {/* Company and time header with colored top bar */}
      <div className="border-t-4 border-blue-600 pt-1"></div>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{job.company}</h3>
            <h4 className="text-lg font-medium text-blue-600">{job.jobTitle}</h4>
          </div>
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
            {job.timePeriod}
          </div>
        </div>
        
        <p className="text-gray-700">{job.description}</p>
        
        {/* Responsibilities Toggle Button */}
        <div 
          className="mt-6 flex items-center cursor-pointer group"
          onClick={handleToggle}
        >
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 text-blue-600 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span className="ml-2 font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
            {showMore ? "Hide Responsibilities" : "Show Responsibilities"}
          </span>
        </div>
        
        {/* Responsibilities Content */}
        {showMore && (
          <div className="mt-4 pl-8 border-l-2 border-blue-100">
            <ul className="space-y-3">
              {job.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;