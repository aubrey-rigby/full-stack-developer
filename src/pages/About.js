import React from "react";
import ContactBox from "../components/ContactBox"
import InfoBox from "../components/InfoBox"
import Col from "../components/Col"
import Row from "../components/Row"
import Aubrey from "../utils/aubrey.png"
import Resume from "../utils/resume.pdf"

function About() {

  return (
    <div className="row">
        <ContactBox phone="(509) 949-9025" email="aubrey.l.heim@gmail.com" github="aubrey-heim" linkedin="aubreyheim" resume={Resume} image={Aubrey}/>
      <div className="mt-2 col-sm-12 col-md-7 col-lg-8">       
        <InfoBox header="About Aubrey" content="Front-end web developer with a degree in Business Administration from the University of Washington, including concentrations in Marketing and Retail Management. Completing certification in Full Stack Web Development from the University of Washington with experience in HTML, CSS and JavaScript. Passionate about the user experience and what drives user interaction. Experienced in working with and managing teams. Earned Leadership Foundation, Administrative Professional, and Customer Service certifications while working for Central Washington University. Recognized twice in this role for service-excellence. Recently collaborated on a project to update the institution’s website to provide a cohesive user experience, standardize branding, and focus on accessibility across multiple department pages. Also developed and maintained the CWU COVID-19 Contract Tracing Database. Motivated by ongoing learning and personal growth. Excited to employ skills as a web developer while continuing to adapt to new technologies, developments, and user preferences."/>
        <Row>
            <Col size="sm-12 lg-5">
                <InfoBox header="Languages" content="HTML, CSS, JavaScript, SQL"/>
            </Col>
            <Col size="sm-12 lg-7">
                <InfoBox header="Technologies" content="GitHub, Heroku, VSCode, Bootstrap, Node.js, JQuery, React, Handlebars, MySQL, MongoDB, APIs, Express.js, Mongoose, Sequelize"/>
            </Col>
        </Row>

      </div>                
      </div>
  );
}

export default About;
