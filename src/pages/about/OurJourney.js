import React from 'react';
import './About.css';

const OurJourney = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Our Journey</h1>
        <h2>Building Excellence Since Inception</h2>
      </div>
      
      <div className="about-container">
        <div className="content-section">
          <div className="journey-intro policy-intro">
            <p>Z7i is an institution of excellence preparing committed students for IIT-JEE and many other prestigious entrance and competitive examinations. Started with a vision to provide quality education, we are present across cities and towns to reach excellent students nationwide.</p>
          </div>

          <div className="journey-timeline">
            <div className="timeline-item">
              <h3>The Beginning</h3>
              <p>Started with a vision to provide an ideal launch pad for serious JEE aspirants. We had a very humble beginning as a forum for IIT-JEE. We started to make a difference in the way students think and approach problems.</p>
            </div>

            <div className="timeline-item">
              <h3>Evolution</h3>
              <p>We started to develop ways to enhance students' IQ. We started to leave an indelible mark on the students who have undergone Z7i training. We started changing lives. It was the urge to always aspire for perfection that enabled us to achieve what we have achieved.</p>
            </div>

            <div className="timeline-item">
              <h3>Present Day</h3>
              <p>Today, aiming for the unachievable and continuously raising the bar has become a part of the Z7i DNA. The success of our students was inspiring and so was their faith in Z7i. This journey from just an IIT-JEE coaching institute to the most powerful brand in serious education has been exhilarating.</p>
            </div>
          </div>

          <div className="contact-section">
            <h3>Visit Us</h3>
            <p>Experience the Z7i difference at any of our centers nationwide.</p>
            <ul>
              <li>Email: info@z7i.com</li>
              <li>Phone: +91 7825895400</li>
              <li>Website: www.z7i.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;