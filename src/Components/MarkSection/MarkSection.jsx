import React from "react";
import './marksection.css'
const MarkSection = () => {
  return (
    <>
      <div className="mark__section">
        <div className="main__mark">
          <div className="mark">
            <h1>Start Your Health <br /> Journey Here</h1>
            <div className="mark__btn">
              <button className="book__btn">Book Consultations Now </button>
              <button className="button__btn">
                Learn More
                <span>
                  <i class="uil uil-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkSection;
