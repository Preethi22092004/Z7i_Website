// src/pages/Programs.js
import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <div className="programs-page">
      <h1>Our Programs</h1>
      <p>Choose from a variety of programs that suit your needs and goals:</p>
      <ul>
        <li><Link to="/programs/classroom-programs">Classroom Programs</Link></li>
        <li><Link to="/programs/integrated-school-programs">Integrated School Programs</Link></li>
        <li><Link to="/programs/non-classroom-programs">Non-Classroom Programs</Link></li>
      </ul>
    </div>
  );
}

export default Programs;
