// src/components/ui/accordion.js

import React, { useState } from 'react';

export const Accordion = ({ children }) => {
  return <div className="accordion">{children}</div>;
};

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export const AccordionTrigger = ({ onClick, children }) => {
  return (
    <button className="accordion-trigger" onClick={onClick}>
      {children}
    </button>
  );
};

export const AccordionContent = ({ isOpen, children }) => {
  return isOpen ? <div className="accordion-content">{children}</div> : null;
};
