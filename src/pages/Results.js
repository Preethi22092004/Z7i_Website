// src/pages/Results.js
import React from 'react';
import './Results.css';

const Results = () => {
  return (
    <div className="results-page">
      <h1>Celebrating Our Students' Achievements</h1>
      <p>Z7i takes immense pride in the outstanding accomplishments of our students across various competitive examinations. Our commitment to excellence is reflected in the consistent top performances and remarkable achievements of our students.</p>

      <section className="results-category">
        <h2>IIT-JEE (Advanced) Results</h2>
        <p>The Joint Entrance Examination (JEE) is one of India's most challenging engineering entrance exams. Our structured coaching, comprehensive study materials, and personalized mentorship at Z7i have enabled students to achieve their dreams of entering the IITs.</p>
      </section>

      <section className="results-category">
        <h2>NTSE Achievements</h2>
        <p>The National Talent Search Examination (NTSE) is a prestigious scholarship program in India. Z7i students have showcased exceptional performance, with numerous scholars emerging from our classrooms.</p>
      </section>

      <section className="results-category">
        <h2>KVPY Success</h2>
        <p>The Kishore Vaigyanik Protsahan Yojana (KVPY) aims to encourage students to pursue research careers in science. Z7i's specialized training programs have resulted in a significant number of our students qualifying for KVPY fellowships.</p>
      </section>

      <section className="results-category">
        <h2>Olympiad Excellence</h2>
        <p>Z7i students have represented India in various International Olympiads, bringing laurels to the nation. Our focused training modules prepare students for Mathematics, Physics, Chemistry, and Astronomy Olympiads.</p>
      </section>

      <section className="results-link">
        <h2>Comprehensive Result Listings</h2>
        <p>For a more detailed view of our achievements, please visit our official results page: <a href="https://www.z7i.com/z7i-results" target="_blank" rel="noopener noreferrer">Z7i Results</a></p>
      </section>
    </div>
  );
}

export default Results;
