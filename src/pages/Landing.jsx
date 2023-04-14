import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";
import MenuButtons from "../components/MenuButton";
import Faq from "../components/Faq";

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
  const faqData = [
    {
      question: "What is this?",
      answer: "Idk, press play see what happens",
    },
    {
      question: "What happened to behind the scenes?",
      answer:
        "Too long and boring, mostly just me talking whatever for 4 hours straight with a hideous code montage. So scrapped it for now lmao. ",
    },
    {
      question: "What is in the coming soon?",
      answer:
        "The flask message? Maybe other rewards down the line? Idk but I am deffo gonna be using this alot lol",
    },
  ];

  return (
    <div className="background-video">
      <MenuButtons
        onClickBlue={onClickBlue}
        onClickRed={onClickRed}
        onClickGreen={onClickGreen}
      />
      <div>
        <Faq data={faqData} />
      </div>
    </div>
  );
};

export default Landing;
