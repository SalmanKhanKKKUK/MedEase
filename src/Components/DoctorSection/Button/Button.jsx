import React from "react";
import SlideImg from "../../../assets/icons/Slider.png";
import ICONS from "../../../constants/icons";
const Button = () => {
  return (
    <>
      <div className="button__title">
        <div className="button__section">
          <div className="btns">
            <img src={ICONS.arrowCircleLeft} alt="" />
            <div className="btn__img">
              <img src={ICONS.slider} alt="" />
            </div>
            <img src={ICONS.arrowCircleRight} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
