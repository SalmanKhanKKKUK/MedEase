import React from "react";
import MobileImg from "../../../assets/image/Mobile.png";
const FeatureContent = () => {
  return (
    <>
      <div className="feature__content">
        <div className="feature">
          <div className="feature__intro">
            <i class="uil uil-folder-heart"></i>
            <h3>Convenient Online Booking</h3>
            <p>
              Easily scheme consultations and meeting with healthcare
              professionals through our user-friendly online booking platform.
            </p>
          </div>
          <img src={MobileImg} alt="" />
        </div>
        <div className="feature__record">
          <div className="record__management">
            <i class="uil uil-adobe-alt"></i>
            <h2>Records Management</h2>
            <p>
              Effortlessly store and access patient medical records, ensuring
              vital information is available for healthcare providers during
              appointments.
            </p>
          </div>
          <div className="record__management">
            <i class="uil uil-check-square"></i>
            <h2>Install Confirmation</h2>
            <p>
              Receive instant confirmation of your booked appointments, along
              with timely reminders to ensure you never miss a meeting.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureContent;
