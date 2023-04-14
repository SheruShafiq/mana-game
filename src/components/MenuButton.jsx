import React from "react";
import "../styles/MenuButton.css";
import Video from "../media/edited.mp4";
function MenuButton(props) {
  const { onClickBlue, onClickRed, onClickGreen } = props;

  const myStylesBlue = {
    color: "white",
    "--color": "#1e9bff",
  };
  const myStylesRed = {
    color: "white",
    "--color": "#ff1867",
  };
  const myStylesGreen = {
    color: "white",
    "--color": "#6eff3e",
  };

  return (
    <div className="container">
      <video className="videoTag" autoPlay loop>
        <source src={Video} type="video/mp4" />
      </video>
      <a className="button" onClick={onClickBlue} style={myStylesBlue}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Play
      </a>
      {/* <a className="button" onClick={onClickRed} style={myStylesRed}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        What is this?
      </a>
      <a className="button" onClick={onClickGreen} style={myStylesGreen}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        No Seriously what is this?
      </a> */}
    </div>
  );
}

export default MenuButton;
