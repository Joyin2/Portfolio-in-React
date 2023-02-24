import React from "react";
import "./Header.css";

const Header = () => {
    
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Joyin</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Exprience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Header;
