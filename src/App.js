import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/WorkExperience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div id="home" className="pt-20 bg-white">
        <Home />
      </div>
      <div id="about" className="pt-20 bg-white">
        <About />
      </div>
      <div id="projects" className="pt-20 bg-white">
        <Projects />
      </div>
      <div id="experience" className="pt-20 bg-white">
        <Experience />
      </div>
      <div id="contact" className="pt-20 bg-white">
        <Contact />
      </div>
    </div>
  );
}

export default App;
