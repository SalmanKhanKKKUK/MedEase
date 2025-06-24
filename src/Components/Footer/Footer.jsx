import React from "react";
import CompanyFooter from "./CompanyFooter/CompanyFooter";
import LinkFooter from "./LinkFooter/LinkFooter";
import './footer.css'
const Footer = () => {
  return (
    <>
      <div className="main__footer">
        <div className="footer__section">
          <CompanyFooter />
          <LinkFooter />
        </div>
      </div>
    </>
  );
};

export default Footer;
