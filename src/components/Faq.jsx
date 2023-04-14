import React, { useState } from "react";
import "../styles/Faq.css";

const Faq = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderAccordion = () => {
    return data.map((item, index) => {
      const active = index === activeIndex ? "active" : "";

      return (
        <div className={`accordion-item ${active}`} key={index}>
          <div
            className="accordion-title"
            onClick={() => handleAccordionClick(index)}
          >
            <h3>{item.question}</h3>
            <span className="icon">{active ? "-" : "+"}</span>
          </div>
          <div
            className="accordion-content"
            style={{ display: active ? "block" : "none" }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      );
    });
  };

  return <div className="accordion">{renderAccordion()}</div>;
};

export default Faq;
