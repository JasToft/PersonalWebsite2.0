import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa"; // Importing a chevron icon

const Experience = () => {
  const [experience, setExperience] = useState([]);

  // Fetch experience data from the API
  useEffect(() => {
    fetch("/api/experience", {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache", // Disable caching
        Pragma: "no-cache", // Older browsers
        Expires: "0", // Prevent caching
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setExperience(data))
      .catch((error) => {
        console.error("Error fetching experience:", error);
      });
  }, []);

  return (
    <div className="work-experience px-4">
      <h2 className="text-3xl font-bold text-left mb-8 max-w-screen-lg mx-auto">Experience</h2>
      <div className="space-y-6 max-w-screen-lg mx-auto">
        {experience.map((job) => (
          <ExperienceCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-xl shadow-lg text-left">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold text-gray-800">{job.company}</h4>
          <h3 className="text-lg font-medium text-gray-600">{job.jobTitle}</h3>
        </div>
        <p className="text-sm text-gray-500">{job.timePeriod}</p>
      </div>

      <p className="mt-2 text-gray-700 text-sm">{job.description}</p>

      {/* Responsibilities Section */}
      <div
        className="mt-4 flex items-center cursor-pointer"
        onClick={handleToggle}
      >
        <FaChevronDown
          className={`text-blue-500 transition-transform duration-300 ${
            showMore ? "rotate-180" : ""
          }`}
        />
        <span className="ml-2 text-sm font-semibold text-blue-500">
          Responsibilities
        </span>
      </div>

      {/* Bullet Points (Responsibilities List) */}
      {showMore && (
        <ul className="mt-4 list-disc list-inside pl-6 text-sm text-gray-600">
          {job.bulletPoints.map((point, index) => (
            <li key={index} className="mb-1">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Experience;
