import React from "react";
import "./hero.css";
import Content from "./Content";
import HeroSection from "./HeroSection";
const Hero = () => {
  return (
    <>
      <div className="herosection">
        <div className="main__hero">
          <Content />
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default Hero;
