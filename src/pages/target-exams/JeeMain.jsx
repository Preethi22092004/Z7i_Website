import React from 'react';
import '../TargetExams.css';

function JeeMain() {
  return (
    <div className="target-exams-container">
      <h1>JEE Main</h1>
      <div className="exam-content">
        <section className="exam-overview">
          <h2>Overview</h2>
          <p>JEE Main is the national level engineering entrance examination conducted for admission to various NITs, IIITs, and GFTIs across India.</p>
        </section>
        
        <section className="exam-details">
          <h2>Key Features</h2>
          <ul>
            <li>Multiple attempts per year</li>
            <li>Computer-based test format</li>
            <li>Physics, Chemistry, and Mathematics</li>
            <li>Gateway to JEE Advanced</li>
          </ul>
        </section>

        <section className="exam-preparation">
          <h2>Our Preparation Program</h2>
          <ul>
            <li>Structured study plan</li>
            <li>Online test series</li>
            <li>Detailed performance analysis</li>
            <li>Topic-wise practice sessions</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default JeeMain; 