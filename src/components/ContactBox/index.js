import React from "react";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function ContactBox(props) {
    return(
        <div className="mt-2 col-sm-12 col-md-5 col-lg-4">
            <div className="info-box mt-3">
                <img className="float-left mb-2" id="headshot" width="200" src={props.image} alt="Aubrey rigby"/>
                <h2>Phone:</h2>
                <br />
                <a  href={`tel:${props.phone}`}>{props.phone}</a>
                <br />
                <h2 className="mt-3">Email:</h2>
                <br />
                <a href={`mailto:${props.email}`}>{props.email}</a>
                <a href={`https://github.com/${props.github}`} rel="noreferrer" target="_blank"><button className="mt-2 contact-button btn"><i className="fab fa-github mr-3"></i>GitHub Profile</button></a>
                <a href="https://www.linkedin.com/in/aubrey-rigby/" rel="noreferrer" target="_blank"><button className="mt-2 contact-button btn"><i className="fab fa-linkedin mr-3"></i>LinkedIn Profile</button></a>
                <a href={props.resume} target="_blank" rel="noreferrer"><button  id="resume-btn" className="my-2 btn"><i className="far fa-file mr-3"></i>Resume</button></a>
            </div>

        </div>
    )
}
export default ContactBox