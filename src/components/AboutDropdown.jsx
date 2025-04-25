import React from 'react';
import { Link } from 'react-router-dom';

const AboutDropdown = () => {
  return (
    <div className="relative group">
      <button className="text-white hover:text-yellow-300 px-4 py-2">About Us</button>
      <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg z-50 mt-2">
        <Link to="/about/chairman" className="block px-4 py-2 hover:bg-gray-100 text-black">Chairman’s Message</Link>
        <Link to="/about/policies" className="block px-4 py-2 hover:bg-gray-100 text-black">Policies & Other Info</Link>
        <Link to="/about/journey" className="block px-4 py-2 hover:bg-gray-100 text-black">Our Journey</Link>
        <Link to="/about/careers" className="block px-4 py-2 hover:bg-gray-100 text-black">Careers</Link>
      </div>
    </div>
  );
};

export default AboutDropdown;
