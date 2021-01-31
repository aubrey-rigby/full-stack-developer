import React from "react";
import "./style.css";


function Project(props) {
  return (
    <div>
      <img className="project-img" src={props.image} alt={`screenshot of ${props.name}`} />
      <h2 className="project-heading">{props.name}</h2>
      <div className="project-description">{props.description}</div>
      <a href={props.appLink} target="_blank" rel="noreferrer">
          <button class="portfolio-button deployed btn">Deployed Application</button>
      </a>
      <a href={props.repoLink} target="_blank" rel="noreferrer">
          <button class="portfolio-button repo btn">Repository</button>  
      </a>   
    </div>
  );
}

export default Project;
