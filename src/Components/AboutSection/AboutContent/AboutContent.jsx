import React from "react";
const AboutContent = () => {
  return (
    <>
      <div className="about__content">
        <div className="main__content">
          <div className="content__information">
            <i class="uil uil-star"></i>
            <p>Rated #1 for appointments with many professional doctors</p>
          </div>
          <div className="content__intro">
            <p>
              We're revolutingn healthcare with seamless access to trusted
              professionals, prioriting your journey to better health.{" "}
            </p>
            <div className="content__des">
              <div className="content__doctordesc">
                <h1>40+</h1>
                <h5>Dedicated Doctors</h5>
              </div>
              <div className="content__patientdesc">
                <h1>10K+</h1>
                <h5>Hours of Patients Consultations</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
