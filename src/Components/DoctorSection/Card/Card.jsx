import React from "react";

const Card = () => {
  return (
    <>
      <div className="card__title">
        <div className="card__section">
          <div className="card">
            <i class="uil uil-heartbeat card__icon"></i>
            <div className="card__info">
              <h1>Cardiologist</h1>
              <p>
                Heart speclist focusing on cardiovascular health and disease.
              </p>
            </div>
            <div className="card__btn">
              <h1>
                Book Consultation
                <span>
                  <i class="uil uil-arrow-right"></i>
                </span>
              </h1>
            </div>
          </div>

          <div className="card">
            <i class="uil uil-brain card__icon"></i>
            <div className="card__info">
              <h1>Neorologist</h1>
              <p>
                Doctor specializing in diagnosing and treating nervous system
                disorder.
              </p>
            </div>
            <div className="card__btn">
              <h1>
                Book Consultation{" "}
                <span>
                  <i class="uil uil-arrow-right"></i>
                </span>
              </h1>
            </div>
          </div>

          <div className="card">
            <i class="uil uil-head-side card__icon"></i>
            <div className="card__info">
              <h1>ENT Specialist</h1>
              <p>
                Doctor specializing in ear,nose,throat disorder and surgery.
              </p>
            </div>
            <div className="card__btn">
              <h1>
                Book Consultation{" "}
                <span>
                  <i class="uil uil-arrow-right"></i>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
