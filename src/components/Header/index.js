import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  const location = useLocation();
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="nav">
        <li className="nav-item">
          <Link id="brand" to="/full-stack-developer" className={location.pathname === "/full-stack-developer" ? "nav-link active " : "nav-link"}>
          Aubrey Rigby
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/full-stack-developer/portfolio" className={location.pathname === "/full-stack-developer/portfolio" ? "nav-link active portfolio-link" : "nav-link portfolio-link"}>
            Portfolio
          </Link>
        </li>
      </ul>
      <div className="collapse navbar-collapse justify-content-end">
          <ul className="header-languages navbar-nav">
              <i className="fab fa-html5 fa-3x mr-4"></i>
              <i className="fab fa-css3-alt fa-3x mr-4"></i>
              <i className="fab fa-js fa-3x mr-4"></i>
              <i className="fab fa-git-alt fa-3x mr-4"></i>
              <i className="fab fa-node-js fa-3x mr-4"></i>
          </ul>
      </div>
    </header>
  );
}

export default Header;
