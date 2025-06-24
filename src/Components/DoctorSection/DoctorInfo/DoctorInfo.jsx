import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Title from "../Title/Title";
import './doctorinfo.css'
const DoctorInfo = () => {
  return (
    <>
      <div className="doctorinfo">
        <div className="doctorsection">
          <Title />
          <Card />
          <Button />
        </div>
      </div>
    </>
  );
};

export default DoctorInfo;
