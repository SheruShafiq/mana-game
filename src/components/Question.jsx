import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stringSimilarity from "string-similarity";
import "../styles/Application.css";
import b1 from "../media/snap/b1.jpg";
import b2 from "../media/snap/b2.jpg";
import b3 from "../media/snap/b3.jpg";

function StringMatch(props) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [imageVisible, setImageVisible] = useState(false);
  const [randomIndex, setRandomIndex] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const similarity = stringSimilarity.compareTwoStrings(
      inputValue,
      props.matchData
    );

    if (similarity > 0.3) {
      navigate("/Succesful");
    } else {
      setInputValue("");
      setImageVisible(true);
      const randomIndex = Math.floor(Math.random() * 3);
      setRandomIndex(randomIndex);
      alert(props.error);
    }
  };

  const images = [b1, b2, b3];

  return (
    <div id="funzies">
      <h1>{props.question}</h1>
      {imageVisible && (
        <img src={images[randomIndex]} id="sadgeImg" alt="Incorrect answer" />
      )}
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StringMatch;
