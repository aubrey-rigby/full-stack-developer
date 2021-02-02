import React, { useState } from "react";
import Project from "../Project";
import "./style.css";
import Projects from "../../utils/projects"
import ProjectContext from "../../utils/ProjectContext"

function ProjectContainer() {
  const [projectState, setProjectState] = useState(Projects[0]);
  const [projectIndex, setProjectIndex] = useState(0)

  function nextProject(projectIndex) {
    if (projectIndex >= Projects.length) {
      projectIndex = 0;
    }
    setProjectState(Projects[projectIndex]);
    setProjectIndex(projectIndex);
  }

  function previousProject(projectIndex) {
    if (projectIndex < 0) {
      projectIndex = Projects.length - 1;
    }
    setProjectState(Projects[projectIndex]);
    setProjectIndex(projectIndex);
  }
    

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newProjectIndex = projectIndex + 1;
      nextProject(newProjectIndex);
    } else {
      const newProjectIndex = projectIndex - 1;
      previousProject(newProjectIndex);
    }
  }
  return (

    <div>
      <ProjectContext.Provider value={{...projectState, onClick: handleBtnClick}}>
        <Project />
      </ProjectContext.Provider>
    </div>
  );
}

export default ProjectContainer;
