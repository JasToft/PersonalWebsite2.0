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
  const experienceFilePath = path.join(__dirname, "data", "experience.json");
  fs.readFile(experienceFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading experience.json:", err);
      return res.status(500).json({ error: "Failed to load experience data" });
    }
    const experiences = JSON.parse(data);
    res.json(experiences);
  });
});

// Images API
app.use("/images", express.static(path.join(__dirname, "images")));

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
