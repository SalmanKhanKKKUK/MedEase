import React from "react";
import ImageFeature from "../../../assets/image/iPhone 13 Pro (3) 1.png";
const FeatureImage = () => {
  return (
    <>
      <div className="feature__image">
        <div className="image__section">
          <div className="image__info">
            <i class="uil uil-chat-bubble-user"></i>
            <h1>Secure Virtual Meetings</h1>
            <p>
              Experience secure and convenient virtual consultations from home.
              Our encrypted video conferencing guarantees confidential
              interactions, removing the need for in-person visits.
            </p>
          </div>
          <img src={ImageFeature} alt="" />
        </div>
      </div>
    </>
  );
};

export default FeatureImage;
