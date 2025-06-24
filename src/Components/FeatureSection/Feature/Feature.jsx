import React from "react";
import FeatureContent from "../FeatureContent/FeatureContent";
import FeatureImage from "../FeatureImage/FeatureImage";
import "./feature.css";
const Feature = () => {
  return (
    <>
      <div className="feature__section">
        <div className="feature__text">
          <h1>
            Explore Our App's <span> Features</span>
          </h1>
        </div>
        <div className="main__feature">
          <FeatureContent />
          <FeatureImage />
        </div>
      </div>
    </>
  );
};

export default Feature;
