import { patientsImageURLs as patients } from "../../../data/dummy-data";
import MainHero from "../../../assets/image/pexels-karolina-grabowska-7195432 1.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__section">
          <div className="hero__img">
            <img src={MainHero} alt="" />
          </div>
          <div className="hero__value">
            <h1>10K+</h1>
            <p>Hour of Patients Meeting</p>
          </div>
          {/* <div className="hero__data">
            <div className="hero__det">
              {patients.map((img, index) => (
              <img
                key={index.toString()}
                src={img}
                style={{ height: "40px", width: "40px", borderRadius: "20px" }}
                alt=""
              />
            ))}
             <h1>2.650+</h1>
            </div>
            <p>Patients have trusted us</p>
          </div> */}
          <div className="hero__data">
            <div className="hero__det">
              <div className="image-stack">
                {patients.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Patient ${index + 1}`}
                    className="stacked-image"
                    style={{ zIndex: patients.length - index }}
                  />
                ))}
              </div>
              <h1>2.650+</h1>
            </div>
            <p>Patients have trusted us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
