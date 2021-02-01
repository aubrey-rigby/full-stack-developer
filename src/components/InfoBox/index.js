import React from "react";
import "./style.css";


function InfoBox(props) {
  return (
    <div className="info-box mt-3">
      <h2>{props.header}</h2>
      <div className="col-sm-12">
          <p>{props.content}</p>
      </div>
    </div>
  );
}

export default InfoBox;
