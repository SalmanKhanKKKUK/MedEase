import React from "react";
import "./App.css";
import Navbar from "./Components/HeroSection/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero/Hero";
import DoctorInfo from "./Components/DoctorSection/DoctorInfo/DoctorInfo";
import About from "./Components/AboutSection/About/About";
import Feature from "./Components/FeatureSection/Feature/Feature";
import Testimonal from "./TestimonalSection/Testimonal";
import Article from "./Components/ArticleSection/Article";
import MarkSection from "./Components/MarkSection/MarkSection";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      {/* ----------------Hero-Section----------- */}
      <Navbar />
      <Hero />
      <DoctorInfo />
      <About />
      <Feature />
      <Testimonal />
      <Article />
      <MarkSection />
      <Footer />
    </>
  );
};

export default App;
