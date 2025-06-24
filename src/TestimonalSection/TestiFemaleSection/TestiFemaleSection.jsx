import React from "react";
import FemaleImage from "./../../assets/image/unsplash_IF9TK5Uy-KI.png";
const TestiFemaleSection = () => {
  return (
    <>
      <div className="female__section">
        <div className="female__info">
          <img src={FemaleImage} alt="" />
          <div className="female__desc">
            <p>
              "Managing appointments for my entire family used to be chaotic.
              This site makes it so much easier to keep track of everyone’s
              schedules in one place."
            </p>
            <h3>Ester Howard</h3>
            <h4>Project Manager</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestiFemaleSection;
