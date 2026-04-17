import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ marginTop: "100px" }}>
      <div className="projects">
        <h1>Projects</h1>

        <div className="project-cards">

          <div className="card">
            <p className="title">Portfolio Website</p>
            <p>Need: React Developer</p>
            <button>Apply</button>
          </div>

          <div className="card">
            <p className="title">AI Chatbot</p>
            <p>Need: Python Developer</p>
            <button>Apply</button>
          </div>

          <div className="card">
            <p className="title">E-commerce App</p>
            <p>Need: MERN Developer</p>
            <button>Apply</button>
          </div>

          <div className="card">
            <p className="title">Blog Website</p>
            <p>Need: HTML/CSS Developer</p>
            <button>Apply</button>
          </div>

        </div>
      </div>
    </div>
  );
});

export default Projects;