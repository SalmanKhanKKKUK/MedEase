import React from "react";
import maleImage from "./../../assets/image/unsplash_KIPqvvTOC1s.png";
const TestiMenSection = () => {
  return (
    <>
      <div className="male__section">
        <div className="male__info">
          <img src={maleImage} alt="" />
          <div className="male__desc">
            <p>
              "I've been using this site for a few months, and it's incredibly
              reliable. I appreciate the convenience of booking and canceling
              appointments anytime, anywhere”
            </p>
            <h3>David Panjaitan</h3>
            <h4>Software Engineer</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestiMenSection;
