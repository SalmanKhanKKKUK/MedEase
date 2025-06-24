import React from "react";
import FooterImg from './../../../assets/image/Logo - Copy.png'
const CompanyFooter = () => {
  return (
    <>
      <div className="company__footer">
        <div className="footer__desc">
          <img src={FooterImg} alt="" />
          <p>
            MedEase simplifies healthcare with an easy-to-use platform for
            booking appointments, telehealth services, and managing patient
            records.
          </p>
          <div className="footer__icon">
            <i class="uil uil-facebook-f one"></i>
            <i class="uil uil-instagram two "></i>
            <i class="uil uil-twitter-alt three"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyFooter;
