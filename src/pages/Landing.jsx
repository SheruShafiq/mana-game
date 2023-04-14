import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";
import MenuButtons from "../components/MenuButton";

const Landing = () => {
  const navigate = useNavigate();
  const onClickBlue = () => {
    navigate("/Application");
  };
  const onClickRed = () => {
    navigate("/Application");
  };
  const onClickGreen = () => {
    navigate("/Application");
  };

  return (
    <div className="background-video">
      <MenuButtons
        onClickBlue={onClickBlue}
        onClickRed={onClickRed}
        onClickGreen={onClickGreen}
      />
    </div>
  );
};

export default Landing;
