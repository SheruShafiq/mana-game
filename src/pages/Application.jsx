import React, { useState } from "react";
import Question from "../components/Question";
import "../styles/Application.css";

function Application() {
  const questions = [
    { question: "If 3x + 7 = 22, what is the value of x?", answer: "5" },
    { question: "Solve for x: 2x - y = 5, 3x + 2y = 11", answer: "3" },
    {
      question: "LUCKY! EASY: What is the smallest planet in our solar system?",
      answer: "Mercury",
    },
    {
      question: "LUCKY! EASY: What is the highest mountain in the world?",
      answer: "Mount Everest",
    },
    { question: "If 4x - 9 = 27, what is the value of x?", answer: "9" },
    { question: "Solve for y: x + 2y = 6, 3x - y = 7", answer: "1" },
    {
      question: "LUCKY! EASY: What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
    {
      question: "LUCKY! EASY: What is the longest river in the world?",
      answer: "The Nile",
    },
    { question: "If 5x + 8 = 33, what is the value of x?", answer: "5" },
    { question: "Solve for x: 4x - 3y = 6, 2x + y = 9", answer: "3" },
    {
      question: "LUCKY! EASY: Which planet is known as the 'Red Planet'?",
      answer: "Mars",
    },
    {
      question: "LUCKY! EASY: What is the largest ocean on Earth?",
      answer: "Pacific Ocean",
    },
    { question: "If 6x - 4 = 32, what is the value of x?", answer: "6" },
    { question: "Solve for x: 3x + 4y = 10, x - y = 2", answer: "2" },
    {
      question: "LUCKY! EASY: What gas makes up most of Earth's atmosphere?",
      answer: "Nitrogen",
    },
  ];

  const [randomQuestion, setRandomQuestion] = useState(
    questions[Math.floor(Math.random() * questions.length)]
  );

  const handleNextQuestion = () => {
    setRandomQuestion(questions[Math.floor(Math.random() * questions.length)]);
  };

  return (
    <>
      <Question
        matchData={randomQuestion.answer}
        question={randomQuestion.question}
        onNextQuestion={handleNextQuestion}
      />
    </>
  );
}

export default Application;
