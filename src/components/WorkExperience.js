import React, { useState, useEffect, useRef } from "react";
import ExperienceGallery from "./ExperienceGallery";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

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
    <div className="bg-background-light">
      {/* Title Section */}
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-secondary-dark mb-8">Experience</h2>
      </div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 gap-6 max-w-screen-lg mx-auto">
        {experience.map((job, index) => (
          <ExperienceCard
            key={job.id}
            job={job}
            index={index}
            onShowPictures={() => setSelectedExperience(job)}
          />
        ))}
      </div>

      {/* Popup */}
      {selectedExperience && (
        <ExperienceGallery
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
};

const ExperienceCard = ({ job, index, onShowPictures }) => {
  const [showMore, setShowMore] = useState(false); // Default to collapsed
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

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
      className={`bg-white rounded-lg shadow-lg border border-gray-200 p-6 transition-transform duration-500 ease-in-out ${
        isVisible
          ? index % 2 === 0
            ? "opacity-100 translate-x-0"
            : "opacity-100 translate-x-0"
          : index % 2 === 0
          ? "opacity-0 -translate-x-10"
          : "opacity-0 translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-bold text-secondary-dark">{job.company}</h3>
          <h4 className="text-lg font-medium text-primary">{job.jobTitle}</h4>
        </div>
        <div className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          {job.timePeriod || job.year}
        </div>
      </div>

      <p className="text-secondary mb-4">{job.description}</p>

      <div className="flex items-center w-full">
        <button
          className="text-primary font-medium hover:underline"
          onClick={handleToggle}
        >
          {showMore ? "Hide Details" : "Show Details"}
        </button>

        {job.images && job.images.length > 0 && (
          <button
            className="text-primary font-medium hover:underline ml-auto"
            onClick={onShowPictures}
          >
            Show Pictures
          </button>
        )}
      </div>

      {showMore && (
        <div className="mt-4 border-t pt-4">
          <ul className="list-disc list-inside space-y-2">
            {job.bulletPoints.map((point, index) => (
              <li key={index} className="text-secondary">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Experience;