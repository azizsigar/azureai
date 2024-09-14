// src/Accordion.jsx

import React, { useState } from "react";
import "./Accordion.css"; // CSS dosyasını import edin

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggleAccordion}>
        {title}
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem
        title="error"
        content="Açıklama 1. Bu alan, başlığa tıklandığında açılır."
      />
      <AccordionItem
        title="error"
        content="Açıklama 2. Bu alan da başlığa tıklandığında açılır."
      />
      {/* Daha fazla AccordionItem ekleyebilirsiniz */}
    </div>
  );
};

export default Accordion;
