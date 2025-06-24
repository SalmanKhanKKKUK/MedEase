import React from "react";
import "./testimonal.css";
import TestiFemaleSection from "./TestiFemaleSection/TestiFemaleSection";
import TestiMenSection from "./TestiMenSection/TestiMenSection";
const Testimonal = () => {
  return (
    <>
      <div className="testimonal">
        <div className="testimonal__text">
          <h1>
            Testimonal from our <span>Satisfied</span> Patients
          </h1>
        </div>
        <div className="testimonal__section">
          <TestiMenSection />
          <TestiFemaleSection />
        </div>
      </div>
    </>
  );
};

export default Testimonal;
