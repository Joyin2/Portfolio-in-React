import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../images/heartemoji.png";
import Glasses from "../../images/glasses.png";
import Humble from "../../images/humble.png";
import Resume from "../../components/Services/Joyin fullstack.pdf"

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          <br /> aspernatur dolor Lorem ipsum dolor sit amet.{" "}
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* first card */}
        <div style={{ left: "18rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe XD"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, Javascript, React, Vue"}
          />
        </div>
        {/* third card */}
        <div style={{ top: "19rem", left: "14rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={" this is a dummy text bro hello "}
          />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}} >

        </div>
      </div>
    </div>
  );
};

export default Services;
