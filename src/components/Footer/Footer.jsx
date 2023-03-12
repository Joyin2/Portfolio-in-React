import React from "react";
import Wave from "../../images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>joyil.las.2000@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem " />
          <Linkedin color="white" size="3rem " />
          <Github color="white" size="3rem " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
