const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (e.g., images)
app.use("/images", express.static(path.join(__dirname, "images")));

// Projects API
app.get("/api/projects", (req, res) => {
  const projectsFilePath = path.join(__dirname, "data", "projects.json");
  fs.readFile(projectsFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading projects.json:", err);
      return res.status(500).json({ error: "Failed to load projects data" });
    }
    const projects = JSON.parse(data);
    res.json(projects);
  });
});

// Experience API
app.get("/api/experience", (req, res) => {
  res.setHeader("Cache-Control", "no-store"); // No caching
  console.log("Received request for /api/experience");

  const experience = [
    {
      id: 1,
      jobTitle: "Clinical Assistant",
      company: "Thompson Medical Center",
      timePeriod: "Jul - Aug 2023",
      description:
        "Interacting with medical equipment and patients, and conducting research projects.",
      bulletPoints: ["Point 1", "Point 2", "Point 3"],
    },
    {
      id: 2,
      jobTitle: "Software Developer Intern",
      company: "atVenu",
      year: "Spring 2024",
      description:
        "Creating sales reporting software using Ruby on Rails and SQL.",
      bulletPoints: ["Point 1", "Point 2", "Point 3"],
    },
    {
      id: 3,
      jobTitle: "Research Assistant",
      company: "University of Waterloo - Motion Research Group",
      year: "Fall 2025",
      description: "Data acquisition, prototyping, and 3D-printing.",
      bulletPoints: ["Point 1", "Point 2", "Point 3"],
    },
    {
      id: 4,
      jobTitle: "Software Developer Intern / Medical Assistant",
      company: "Guelph Eye MD",
      year: "Winter 2025",
      description:
        "Fullstack software development, IT support, and medical assistance in a medical clinic.",
      bulletPoints: ["Point 1", "Point 2", "Point 3"],
    },
  ];
  res.json(experience);
  console.log("Sent response:", experience); // Log the response being sent
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
