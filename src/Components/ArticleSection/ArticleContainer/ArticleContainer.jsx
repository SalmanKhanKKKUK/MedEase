import React from "react";
import Image1 from "./../../../assets/image/Cover.png";
import Image2 from "./../../../assets/image/Cover (1).png";
import Image3 from "./../../../assets/image/Cover (2).png";
const ArticleContainer = () => {
  return (
    <>
      <div className="article__container">
        <div className="article__desc">
          <div className="article__info">
            <img src={Image1} alt="" />
            <div className="article__heading">
              <span>Diest Tips</span>
              <h1>28 April 2024</h1>
            </div>
            <h5>Diet Tips for a Healthier Lifestyle</h5>
            <p>
              Maintaining a healthy diet is crucial for overall well-being and
              can prevent numerous health issues.
            </p>
            <button>
              Read More
              <span>
                <i class="uil uil-arrow-right"></i>
              </span>
            </button>
          </div>
          <div className="article__info">
            <img src={Image2} alt="" />
            <div className="article__heading">
              <span>Diest Tips</span>
              <h1>28 April 2024</h1>
            </div>
            <h5>Diet Tips for a Healthier Lifestyle</h5>
            <p>
              Maintaining a healthy diet is crucial for overall well-being and
              can prevent numerous health issues.
            </p>
            <button>
              Read More
              <span>
                <i class="uil uil-arrow-right"></i>
              </span>
            </button>
          </div>
          <div className="article__info">
            <img src={Image3} alt="" />
            <div className="article__heading">
              <span>Diest Tips</span>
              <h1>28 April 2024</h1>
            </div>
            <h5>Diet Tips for a Healthier Lifestyle</h5>
            <p>
              Maintaining a healthy diet is crucial for overall well-being and
              can prevent numerous health issues.
            </p>
            <button>
              Read More
              <span>
                <i class="uil uil-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleContainer;
