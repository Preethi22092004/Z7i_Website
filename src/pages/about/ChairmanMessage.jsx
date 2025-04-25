import React from 'react';
import './About.css';

const Chairman = () => {
  return (
    <div className="about-page">
      <div className="about-header chairman-header">
        <h1>From the desk of the Chairman</h1>
        <h2>A Legacy Of Ethics Emanating From The Greatest Beacon</h2>
      </div>

      <div className="about-container">
        <section className="chairman-message">
          <div className="chairman-container">
            <div className="chairman-profile">
              <img src="/images/chairman image.jpg" alt="Chairman D.K. Goel" className="chairman-img" />
              <div className="chairman-name">
                <h3>D.K. Goel</h3>
                <p>Founder Chairman and Chief Mentor</p>
                <p>Z7i Group</p>
              </div>
            </div>
            
            <div className="message-content">
              <p className="message-highlight">
                Every Moment In Life Is A Fresh Beginning That Brings With It The Boundless Joy 
                Of New Possibilities. And The Pleasure Is Compounded When You Know That You 
                Are About To Realise A Lofty Goal.
              </p>

              <p>Since the time we began in 1992, we have constantly strived for excellence. 
              Like for the many young minds we have shaped, it is the winning spirit that has 
              been of the essence. Even quintessential, if you look at it from our perspective. 
              And winning is possible only when one has the power to perceive the need of the hour.</p>

              <p>Z7i has always been innovating to create excellence. I am sure the varied 
              services that we offer to our existing and aspiring Students will be a great boon. 
              Today Z7i, the first 'corporatised' institute for IIT-JEE and other engineering 
              entrance exams training, enjoys a track record of unparalleled results.</p>

              <p>Needless to say, the endeavour to nurture and even further enrich the quality 
              of education will be our constant feature. As for the rest, there will always be 
              changes. Undoubtedly, for the better.</p>

              <div className="signature">
                <p>Wishing the very best</p>
                <h3>D.K. Goel</h3>
                <p className="designation">Founder Chairman and Chief Mentor</p>
                <p className="company">Z7i Group</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Chairman;