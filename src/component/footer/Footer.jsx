import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="#header" className="footer-logo">
        NHD.DEV
      </a>
      <ul className="footer-link">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-copyright">
        <small> &copy; 2023 NHD.DEV. All right reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
