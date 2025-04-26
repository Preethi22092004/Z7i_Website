import React from 'react';
import '../TargetExams.css';

function Olympiads() {
  return (
    <div className="target-exams-container">
      <h1>Olympiads</h1>
      <div className="exam-content">
        <section className="exam-overview">
          <h2>Overview</h2>
          <p>National and International Olympiads are prestigious competitions that identify and nurture talented students in various scientific disciplines.</p>
        </section>
        
        <section className="exam-details">
          <h2>Available Olympiads</h2>
          <ul>
            <li>INMO (Indian National Mathematical Olympiad)</li>
            <li>INChO (Indian National Chemistry Olympiad)</li>
            <li>INPhO (Indian National Physics Olympiad)</li>
            <li>INAO (Indian National Astronomy Olympiad)</li>
            <li>INBO (Indian National Biology Olympiad)</li>
          </ul>
        </section>

        <section className="exam-preparation">
          <h2>Our Preparation Program</h2>
          <ul>
            <li>Specialized training modules</li>
            <li>Advanced problem-solving techniques</li>
            <li>One-on-one mentoring</li>
            <li>International level preparation</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Olympiads; 