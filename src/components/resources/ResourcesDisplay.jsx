

import React, { useState } from "react";
import resources from "./resources.json";
import ResourcesPage from "./ResourcesPage";
import "./resourcesDisplay.css";

function ResourcesDisplay() {
  const [hovered, setHovered] = useState(null);

  const handleHover = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div>
      <section id="resources" className="jumbotron text-center">
        <h1 id="projects-heading" className="display-3 white-text">
          PROJECTS
        </h1>
        <p className="lead white-text">My individual and collaborative projects</p>
      </section>
      <div className="row justify-content-center" id="rows">
        <div className="container-fluid my-container">
          <div className="row">
            {resources.map((resource) => (
              <div className="col-4" key={resource.id}>
                <ResourcesPage
                  image={resource.image}
                  title={resource.title}
                  description={resource.description}
                  projectUrl={resource.projectUrl}
                  githubLink={resource.githubLink}
                  urlLink={resource.urlLink}
                  isHovered={resource.id === hovered}
                  handleHover={handleHover}
                  handleMouseLeave={handleMouseLeave}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesDisplay;
