import React, { useState } from 'react';
import './Dropdown.css'; // You can create a separate CSS file for styling

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-title" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
