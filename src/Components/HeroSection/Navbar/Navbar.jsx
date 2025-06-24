import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../../assets/image/Logo - Copy.png";
const Navbar = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="index.html" className="nav__logo">
            <img src={Logo} alt="" />
          </a>
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__list">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav__list">
                <a href="#service" className="nav__link">
                  <i class="uil uil-briefcase-alt nav__icon"></i>Service
                </a>
              </li>

              <li className="nav__list">
                <a href="#doctor" className="nav__link">
                  <i class="uil uil-users-alt nav__icon"></i>find a Doctor
                </a>
              </li>

              <li className="nav__list">
                <a href="#about" className="nav__link">
                  <i class="uil uil-info-circle nav__icon"></i>About
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="nav__btn">
            <button>Register</button>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
