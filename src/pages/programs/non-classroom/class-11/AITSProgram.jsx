import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const AITSProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Computer-Based All India Integrated Test Series (AITS-CBT)</h1>
          <h2 className="text-center">Class XI</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Program Overview</Card.Header>
            <Card.Body>
              <p>The Computer-Based All India Integrated Test Series (AITS-CBT) is a flagship non-classroom program offered by Z7i, designed specifically for students entering Class XI. This program provides a simulated examination environment that mirrors the actual JEE Main & Advanced patterns, offering students an authentic experience of competitive exams.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Objectives</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Simulate Real Exam Conditions: Familiarize students with the actual examination environment to reduce exam-related stress.</li>
                <li>Develop Examination Temperament: Help students build confidence and improve their performance under timed conditions.</li>
                <li>Provide Realistic Ranking: Offer authentic All India level rankings to assess student performance on a national scale.</li>
                <li>Enhance Time Management Skills: Enable students to manage their time effectively during exams.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Key Features</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>National-Level Computer-Based Tests: Tests are conducted on the present and expected patterns of JEE Main & Advanced, providing a realistic exam experience.</li>
                <li>Comprehensive Subject Coverage: Includes tests for Physics, Chemistry, Mathematics, and Mental Ability, covering the entire Class XI syllabus.</li>
                <li>Detailed Performance Analysis: After each test, students receive a comprehensive analysis, including their score, percentile, All India Rank, and suggestions for improvement.</li>
                <li>Success Potential Index (SPI): A unique metric developed by Z7i to predict a student's success potential in competitive exams.</li>
                <li>Open Test for JEE Main & Advanced: Conducted in more than 65 cities, providing students with an opportunity to assess their preparation level.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Enrollment Details</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Eligibility: Students moving from Class X to XI.</li>
                <li>Enrollment Process:
                  <ol>
                    <li>Visit the official Z7i AITS Registration Portal: https://reg.z7i.com/</li>
                    <li>Sign up and create an account.</li>
                    <li>Select the desired test series and complete the registration process.</li>
                  </ol>
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Fee Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>AITS-CBT Fee: ₹8,260 (₹7,000 + 18% GST)</li>
                <li>myPAT Online Test Series Fee: ₹4,719 (₹3,999 + 18% GST)</li>
                <li>Total Amount: ₹12,979</li>
              </ul>
              <p>Note: The myPAT Online Test Series is optional and can be availed separately.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Contact Information</Card.Header>
            <Card.Body>
              <p>For more details and assistance:</p>
              <ul className="feature-list">
                <li>Website: https://www.z7i.com/programs/non-classroom/computer-based-aiits-class11</li>
                <li>Email: sales.ncrp@z7i.com</li>
                <li>Phone: 011-46104000 / 1800 11 4242 (Toll-Free)</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default AITSProgram; 