import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stringSimilarity from "string-similarity";
import "../styles/Application.css";

function StringMatch(props) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const similarity = stringSimilarity.compareTwoStrings(
      inputValue,
      props.matchData
    );

    if (similarity > 0.5) {
      navigate("/Succesful");
    } else {
      alert("Really bro... my god you really fell off mano");
    }
  };

  return (
    <div id="funzies">
      <h1>{props.question}</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StringMatch;
