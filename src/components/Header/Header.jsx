import React from "react";
import "./Header.css";
import Toggle from "../Toggle/Toggle";

const Header = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Joyin</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>Exprience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
};

export default Header;
