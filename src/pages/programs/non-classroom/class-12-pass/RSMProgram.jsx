import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const RSMProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Rankers Study Material (RSM)</h1>
          <h2 className="text-center">One-Year Program for JEE Main & Advanced – Class 12 Pass (2025)</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Program Overview</Card.Header>
            <Card.Body>
              <p>Z7i's Rankers Study Material (RSM) is a premium, comprehensive study resource designed specifically for Class 12 pass students preparing for JEE Main and Advanced. This elite package contains meticulously crafted study materials with emphasis on concept clarity, problem-solving techniques, and strategic exam preparation.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Objectives</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Comprehensive Preparation: Equip students with the knowledge and skills required for various competitive exams.</li>
                <li>Strong Academic Foundation: Develop a deep understanding of core subjects to ensure excellence in competitive exams.</li>
                <li>Flexible Learning: Provide high-quality study materials that allow students to learn at their own pace from the comfort of their homes.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Duration: 1 Year (Class 12 Pass)</li>
                <li>Subjects Covered:
                  <ul>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Mathematics</li>
                    <li>Mental Ability</li>
                    <li>Biology</li>
                  </ul>
                </li>
                <li>Phases: The entire course is divided into multiple phases, each comprising comprehensive study materials and assessments.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Key Features</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Comprehensive Study Material: Well-structured content developed by experts, covering theoretical concepts and practical problems.</li>
                <li>Workbooks for Home Assignments: Additional practice materials to reinforce learning and ensure concept clarity.</li>
                <li>Regular Assessments: Periodic tests to evaluate understanding and readiness, including Part Tests and Full Tests.</li>
                <li>Performance Analysis: Detailed reports highlighting strengths and areas for improvement, aiding in focused preparation.</li>
                <li>Concept Strengthening Sessions: Interactive sessions to address doubts and reinforce learning.</li>
                <li>Flexible Learning: Access to materials and tests from any location, enabling self-paced study.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Testing & Evaluation</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>All India Test Series (AITS): A series of computer-based tests conducted at the national level to benchmark performance against peers.</li>
                <li>Test Schedule: Tests are scheduled periodically, covering various subjects and topics to ensure comprehensive evaluation.</li>
                <li>Performance Reports: Students receive detailed analysis of their test performances, including success potential indices and improvement suggestions.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Enrollment Details</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Eligibility: Students who have passed Class XII.</li>
                <li>Enrollment Process:
                  <ol>
                    <li>Visit the nearest Z7i center or register on our official website.</li>
                    <li>Complete the registration form with your academic details.</li>
                    <li>Make the payment to receive your study package.</li>
                    <li>Receive login credentials for the online resources portal.</li>
                  </ol>
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Fee Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Books Fee: ₹6,000/-</li>
                <li>All India Test Series Fee: ₹3,965/- (₹3,360 + 18% GST)</li>
                <li>myPAT Online Test Series Fee: ₹3,539/- (₹2,999 + 18% GST)</li>
                <li>Total Amount: ₹13,504/-</li>
              </ul>
              <p><em>Note: The fee structure is subject to change. Please refer to the official Z7i website for the most updated information.</em></p>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default RSMProgram; 