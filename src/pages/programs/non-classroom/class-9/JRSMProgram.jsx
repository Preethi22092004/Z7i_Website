import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const JRSMProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Junior Rankers Study Material (JRSM)</h1>
          <h2 className="text-center">Two Year Foundation Program For Students Moving from Class VIII to IX</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Program Overview</Card.Header>
            <Card.Body>
              <p>The Junior Rankers Study Material (JRSM) is a meticulously designed two-year foundation program aimed at students entering Class IX. This non-classroom correspondence course is tailored to build a strong academic foundation, preparing students for competitive exams such as NEET, JEE Main & Advanced, NTSE, and Junior Science Olympiads, alongside excelling in school and board examinations.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Objectives</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Comprehensive Preparation: Equip students with the knowledge and skills required for various competitive exams.</li>
                <li>Strong Academic Foundation: Develop a deep understanding of core subjects to ensure excellence in school and board exams.</li>
                <li>Flexible Learning: Provide high-quality study materials that allow students to learn at their own pace from the comfort of their homes.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Duration: 2 Years (Classes IX and X)</li>
                <li>Subjects Covered:
                  <ul>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Mathematics</li>
                    <li>Biology</li>
                    <li>Social Studies</li>
                    <li>Mental Ability</li>
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
                <li>Junior All India Test Series (Jr. AITS): A series of computer-based tests conducted at the national level to benchmark performance against peers.</li>
                <li>Test Schedule: Tests are scheduled periodically, covering various subjects and topics to ensure comprehensive evaluation.</li>
                <li>Performance Reports: Students receive detailed analysis of their test performances, including success potential indices and improvement suggestions.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Enrollment Details</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Eligibility: Students moving from Class VIII to IX.</li>
                <li>Enrollment Process:
                  <ol>
                    <li>Visit the official Z7i Non-Classroom Programs website: www.z7inonclassroomprograms.com</li>
                    <li>Select the Junior Rankers Study Material (JRSM) – Two Year Foundation Program.</li>
                    <li>Fill out the application form and complete the payment process to confirm enrollment.</li>
                  </ol>
                </li>
                <li>Program Code: 9094 (for online enrollment)</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Fee Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Books Fee: Rs. 8,400/-</li>
                <li>Junior All India Test Series Fee: Rs. 5,664/- (Rs. 4,800 + 18% GST)</li>
                <li>myPAT Online Test Series Fee: Rs. 3,539/- (Rs. 2,999 + 18% GST)</li>
                <li>Total Amount: Rs. 17,603/-</li>
              </ul>
              <p>Note: For Program Code 9094, the myPAT Online Test Series is not included, and the total amount is Rs. 14,064/-.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Contact Information</Card.Header>
            <Card.Body>
              <p>For more details and assistance:</p>
              <ul className="feature-list">
                <li>Website: www.z7inonclassroomprograms.com</li>
                <li>Email: info@z7i.com</li>
                <li>Phone: 011 - 41828706</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default JRSMProgram; 