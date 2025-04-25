import React from 'react';
import './Admissions.css';

const Admissions = () => {
  return (
    <div className="admissions-page">
      <div className="admissions-header">
        <h1>UPCOMING ADMISSION TEST</h1>
        <p>Register for Upcoming Admission Test</p>
      </div>

      <div className="admissions-container">
        {/* Overview Section */}
        <section className="admissions-section">
          <h2>Overview</h2>
          <p>
            Z7i conducts regular Admission Tests to identify and enroll students into its various programs. 
            These tests are designed to assess a student's aptitude and provide them with an opportunity 
            to join Z7i's renowned coaching programs.
          </p>
        </section>

        {/* Test Details Section */}
        <section className="admissions-section">
          <h2>Upcoming Admission Test Details</h2>
          <ul className="test-details">
            <li><strong>Test Name:</strong> Scholarship Cum Admission Test</li>
            <li><strong>Eligibility:</strong> Students of Class VI, VII, VIII, IX, X, XI & XII</li>
            <li><strong>Test Dates:</strong> 27th April 2025, 1st June 2025</li>
            <li><strong>Test Mode:</strong> Offline / Proctored Online</li>
            <li><strong>Registration Fee:</strong> ₹500 (inclusive of GST)</li>
            <li><strong>Registration Deadline:</strong> Refer to the official website for specific deadlines</li>
          </ul>
        </section>

        {/* Registration Process Section */}
        <section className="admissions-section">
          <h2>Registration Process</h2>
          <p>Students can register for the Admission Test through the following methods:</p>
          
          <div className="registration-methods">
            <div className="method">
              <h3>1. Online Registration</h3>
              <ul>
                <li>Visit the official registration portal</li>
                <li>Fill in the required details, including personal information, preferred test date, and mode</li>
                <li>Complete the payment of the registration fee</li>
              </ul>
            </div>
            
            <div className="method">
              <h3>2. Offline Registration</h3>
              <ul>
                <li>Visit any Z7i Centre</li>
                <li>Fill out the registration form available at the centre</li>
                <li>Make the payment in cash for the registration fee</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Test Pattern Section */}
        <section className="admissions-section">
          <h2>Test Pattern</h2>
          <p>The Admission Test consists of multiple papers designed to assess various skills:</p>
          
          <div className="test-papers">
            <div className="paper">
              <h3>Paper 1: I.Q.</h3>
              <p><strong>Duration:</strong> 60 Minutes</p>
              <p>Objective-type questions to gauge raw hidden potential.</p>
            </div>
            
            <div className="paper">
              <h3>Paper 2: Physics, Chemistry & Mathematics</h3>
              <p><strong>Duration:</strong> 90 Minutes</p>
              <p>Objective-type questions to test goal-oriented analytical skills.</p>
            </div>
            
            <div className="paper">
              <h3>Paper 3: Physics, Chemistry & Mathematics</h3>
              <p><strong>Duration:</strong> 90 Minutes</p>
              <p>Objective-type questions to test goal-oriented analytical skills.</p>
            </div>
            
            <div className="paper">
              <h3>Paper 4 (Optional): Mathematics, Physics, Astronomy & Chemistry</h3>
              <p><strong>Duration:</strong> 120 Minutes</p>
              <p>Objective-type questions to test goal-oriented analytical skills.</p>
            </div>
          </div>
        </section>

        {/* Result Declaration Section */}
        <section className="admissions-section">
          <h2>Result Declaration</h2>
          <ul>
            <li>Results will be declared on the official website at 4:00 PM on the specified date</li>
            <li>Students can access their scorecards by logging into the registration portal</li>
          </ul>
        </section>

        {/* Important Notes Section */}
        <section className="admissions-section">
          <h2>Important Notes</h2>
          <ul className="important-notes">
            <li>The test syllabus for all classes (VI to XII) will constitute the full syllabus of the previous class</li>
            <li>Z7i does not accept cash (except for the registration fee for Admission Tests)</li>
            <li>Admission to Z7i programs is done in a transparent manner purely on merit basis</li>
            <li>If anyone demands cash from you to get your child enrolled in Z7i, please report it to info@z7i.com</li>
          </ul>
        </section>

        {/* Contact Information Section */}
        <section className="admissions-section contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Email:</strong> info@z7i.com</li>
            <li><strong>Helpline No:</strong> +91 7825895400</li>
            <li><strong>Website:</strong> www.z7i.com/register-for-upcoming-test</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
