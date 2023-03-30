import React from "react";
import "./FloatingDiv.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const FloatingDiv = ({ image, txt1, txt2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode || false;
  return (
    <div
      className="floatingdiv"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <img src={image} alt="" />
      <span
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
