import React, {useContext} from "react";
import "./style.css";
import ProjectContext from "../../utils/ProjectContext"
import Row from "../Row"
import Col from "../Col"


function Project() {
  const {name, image, login, description, app, repo, utilizes, onClick} =useContext(ProjectContext)
  return (    
    <div className="info-box mt-3">
        <div className="button-container">
          <button onClick={onClick} className="arrow back" aria-label="back arrow" data-value="back"/>          
          <h2 className="p-3 text-center">{name}</h2>
          <button onClick={onClick} className="arrow next" aria-label="next arrow" data-value="next"/>           
        </div>
          <Row>
            <Col size="sm-0 md-1 lg-2" />
            <Col size="sm-12 md-10 lg-8" >
              <img className="mb-3" placeholder="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" src={image} alt={`screenshot of ${name}`}/>
            </Col>
            <Col size="sm-0 md-1 lg-2" />
          </Row>
          <Row className="text-center">
            {login && <p className="login">{login}</p>}
            <p className="project-description">{description}</p>
            <p className="project-utilizes">{utilizes}</p>  
          </Row>
          <Row>
            <Col size="6">
              <a href={app} target="_blank" rel="noreferrer">
                  <button className="portfolio-button deployed btn">Deployed Application</button>
              </a>
            </Col>
            <Col size="6">
              <a href={repo} target="_blank" rel="noreferrer">
                  <button className="portfolio-button repo btn btn2">Repository</button>  
              </a>          
            </Col>
          </Row>      
    </div>
  );
}

export default Project;