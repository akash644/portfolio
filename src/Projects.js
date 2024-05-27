// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>TuneHub</h3>
          <p>Music streaming platform developed with Java and Spring Boot.</p>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
};

export default Projects;
