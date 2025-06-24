import React from "react";

const Content = () => {
  return (
    <>
      <div className="main__content">
        <div className="content">
            <div className="badge__desc">
              <i class="uil uil-favorite"></i>
              <p>Rated #1 Choice of healthcare appointments by Users</p>
            </div>
            <div className="badge__heading">
              <h1>
                Connecting You <span>to</span> Better Health
              </h1>
              <p>
                We're here to link you directly to improved health outcomes,
                effortlessly Connecting you with the care you need.
              </p>
            </div>
             <div className="content__btn">
              <div className="btn">
                <button>Book Consultation</button>
              </div>
              <div className="badge__btn">
                <button>Learn More <span><i class="uil uil-arrow-right"></i></span></button>
              </div>
             </div>
          </div>
        </div>
    </>
  );
};

export default Content;
