import React from "react";
import "./about.css";
import AboutContent from "../AboutContent/AboutContent";
import AboutImage from "../AboutImage/AboutImage";
const About = () => {
  return (
    <>
      <div className="about__container">
        <div className="main__container">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </>
  );
};

export default About;
