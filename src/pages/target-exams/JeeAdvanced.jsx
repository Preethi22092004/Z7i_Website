import React from 'react';
import '../TargetExams.css';

function JeeAdvanced() {
  return (
    <div className="target-exams-container">
      <h1>JEE Advanced</h1>
      <div className="exam-content">
        <section className="exam-overview">
          <h2>Overview</h2>
          <p>JEE Advanced is the second phase of the Joint Entrance Examination conducted for admission to various Indian Institutes of Technology (IITs) across the country.</p>
        </section>
        
        <section className="exam-details">
          <h2>Key Features</h2>
          <ul>
            <li>Gateway to 23 IITs across India</li>
            <li>Two papers of 3 hours each</li>
            <li>Covers Physics, Chemistry, and Mathematics</li>
            <li>Requires JEE Main qualification</li>
          </ul>
        </section>

        <section className="exam-preparation">
          <h2>Our Preparation Program</h2>
          <ul>
            <li>Comprehensive study material</li>
            <li>Regular mock tests</li>
            <li>Expert faculty guidance</li>
            <li>Previous year paper analysis</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default JeeAdvanced; 