import React from 'react';
import './About.css';

const Journey = () => {
  return (
    <div className="about-page">
      <div className="about-header journey-header">
        <h1>Our Journey</h1>
        <h2>An Exhilarating Journey of Excellence</h2>
      </div>

      <div className="about-container">
        <section className="journey-content">
          <div className="journey-intro">
            <p>Z7i is an institution of excellence preparing committed students for IIT-JEE and many other prestigious entrance examinations. Started in Delhi in 1992, it is present across cities and towns to reach excellent students nationwide.</p>
          </div>

          <div className="journey-timeline">
            <div className="timeline-item">
              <h3>The Beginning - 1992</h3>
              <p>Founded by Mr. D. K. Goel, a Mechanical Engineering graduate from IIT Delhi, with a vision to provide an ideal launch pad for serious JEE aspirants.</p>
            </div>

            <div className="timeline-item">
              <h3>Evolution</h3>
              <p>We went beyond just coaching for IIT-JEE. We started to make a difference in the way students think and approach problems. We developed ways to enhance students' IQ.</p>
            </div>

            <div className="timeline-item">
              <h3>Growth & Innovation</h3>
              <p>Launched integrated school programs like UDAYA Plus, Supreme & Pinnacle, creating an ideal school education platform for students aiming for IITs & US Universities.</p>
            </div>

            <div className="timeline-item">
              <h3>Global Vision</h3>
              <p>Introduced USA UnivQuest - a comprehensive program for students aspiring for admission to US Universities, maintaining the trusted Z7i methodology.</p>
            </div>

            <div className="timeline-item">
              <h3>Present Day</h3>
              <p>Today, Z7i stands as the most powerful brand in serious education, constantly innovating and setting new benchmarks of excellence.</p>
            </div>
          </div>

          <div className="journey-conclusion">
            <p>This journey from just an IIT-JEE coaching institute to the most powerful brand in serious education has been exhilarating. However, the journey is not over yet. For us at Z7i, the journey will never be over... For us, this journey itself is the destination.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Journey;