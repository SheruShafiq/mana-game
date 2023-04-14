import React, { useState } from "react";
import Question from "../components/Question";
import "../styles/Application.css";

function Application() {
  const questions = [
    {
      question: "If 3x + 7 = 22, what is the value of x?",
      answer: "5",
      error: "My god... really humaa... wow.",
    },
    {
      question: "Solve for x: 2x - y = 5, 3x + 2y = 11",
      answer: "3",
      error: "My god... really humaa... wow.",
    },
    {
      question: "LUCKY! EASY: What is the smallest planet in our solar system?",
      answer: "Mercury",
      error:
        "You of all people should know this mate... unless u r telling me u r more of a Jupiter person...?",
    },
    {
      question: "LUCKY! EASY: What is the highest mountain in the world?",
      answer: "Mount Everest",
      error: "Its litterally the highest mountain in the world... come on.",
    },
    {
      question: "If 4x - 9 = 27, what is the value of x?",
      answer: "9",
      error: "My god... really humaa... wow.",
    },
    {
      question: "Solve for y: x + 2y = 6, 3x - y = 7",
      answer: "1",
      error: "My god... really humaa... wow.",
    },
    {
      question: "LUCKY! EASY: What is the largest planet in our solar system?",
      answer: "Jupiter",
      error:
        "Its litterally the largest planet in the solar system... come on. Unless u r more of a Mercury person...?",
    },
    {
      question: "LUCKY! EASY: What is the longest river in the world?",
      answer: "The Nile",
      error:
        "Nile, Nile Dock, the military corps command- wait ofc u dont know, not like u watch attack on titan or anything...",
    },
    {
      question: "If 5x + 8 = 33, what is the value of x?",
      answer: "5",
      error: "My god... really humaa... wow.",
    },
    {
      question: "Solve for x: 4x - 3y = 6, 2x + y = 9",
      answer: "3",
      error: "My god... really humaa... wow.",
    },
    {
      question: "LUCKY! EASY: Which planet is known as the 'Red Planet'?",
      answer: "Mars",
      error:
        "Its liiteraly the GOAT of planets... come on. If am Jupiter and u r ma biggest moon, then Blos would be??",
    },
    {
      question: "LUCKY! EASY: What is the largest ocean on Earth?",
      answer: "Pacific Ocean",
      error:
        "And paaacificaaa is well... pacifica... Cyberpunk Refrence, and my god I will watch you playthrough the whole thing",
    },
    {
      question: "If 6x - 4 = 32, what is the value of x?",
      answer: "6",
      error:
        "My god... really humaa... wow. I am honestly more shocked than disapointed",
    },
    {
      question: "Solve for x: 3x + 4y = 10, x - y = 2",
      answer: "2",
      error:
        "My god... really humaa... wow. Its a 2... its a 2 just uhh hun.. go ahead.. wow",
    },
    {
      question: "LUCKY! EASY: What gas makes up most of Earth's atmosphere?",
      answer: "Nitrogen",
      error: "INHALE IT AND TALK LIKE MY TOM!",
    },
  ];

  const [randomQuestion, setRandomQuestion] = useState(
    questions[Math.floor(Math.random() * questions.length)]
  );

  const handleNextQuestion = () => {
    setRandomQuestion(questions[Math.floor(Math.random() * questions.length)]);
  };

  return (
    <div id="funziesParent">
      <Question
        matchData={randomQuestion.answer}
        question={randomQuestion.question}
        onNextQuestion={handleNextQuestion}
        error={randomQuestion.error}
      />
    </div>
  );
}

export default Application;
