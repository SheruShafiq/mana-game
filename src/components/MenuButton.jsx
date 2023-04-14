import React, { useState } from "react";
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
    cursor: "not-allowed",
  };
  const myStylesGreen = {
    color: "white",
    "--color": "#6eff3e",
    cursor: "not-allowed",
  };
  const [muted, setMuted] = useState(true);

  function handleVideoLoaded() {
    setMuted(false);
  }
  return (
    <div className="container">
      <video
        className="videoTag"
        id="videoTag"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoaded}
      >
        <source src={Video} type="video/mp4" />
      </video>

      <a className="button" onClick={onClickBlue} href="" style={myStylesBlue}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Play
      </a>
      <a className="button" disabled style={myStylesRed}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        COMING SOON
      </a>
      <a className="button" disabled style={myStylesGreen}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        COMING SOON
      </a>
    </div>
  );
}

export default MenuButton;
