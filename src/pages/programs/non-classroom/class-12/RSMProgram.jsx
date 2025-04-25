import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const RSMProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Rankers Study Material (RSM)</h1>
          <h2 className="text-center">One-Year Program for JEE Main & Advanced (Class XII)</h2>
        </Container>
      </div>

      <Container>
        <Accordion defaultActiveKey="0" className="program-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Program Overview</Accordion.Header>
            <Accordion.Body>
              <p>The Rankers Study Material (RSM) – One-Year Program is a meticulously designed non-classroom correspondence course offered by Z7i. Aimed at students in Class 12, this program provides comprehensive study materials and assessments to prepare for competitive exams such as JEE Main, JEE Advanced, BITSAT, NTSE, and KVPY, while also ensuring excellence in school and board examinations.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Program Objectives</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Comprehensive Preparation: Equip students with the knowledge and skills required for various competitive exams.</li>
                <li>Strong Academic Foundation: Develop a deep understanding of core subjects to ensure excellence in school and board exams.</li>
                <li>Flexible Learning: Provide high-quality study materials that allow students to learn at their own pace from the comfort of their homes.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Program Structure</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Duration: 1 Year (Class XII)</li>
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
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Key Features</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Comprehensive Study Material: Well-structured content developed by experts, covering theoretical concepts and practical problems.</li>
                <li>Workbooks for Home Assignments: Additional practice materials to reinforce learning and ensure concept clarity.</li>
                <li>Regular Assessments: Periodic tests to evaluate understanding and readiness, including Part Tests and Full Tests.</li>
                <li>Performance Analysis: Detailed reports highlighting strengths and areas for improvement, aiding in focused preparation.</li>
                <li>Concept Strengthening Sessions: Interactive sessions to address doubts and reinforce learning.</li>
                <li>Flexible Learning: Access to materials and tests from any location, enabling self-paced study.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Testing & Evaluation</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>All India Test Series (AITS): A series of computer-based tests conducted at the national level to benchmark performance against peers.</li>
                <li>Test Schedule: Tests are scheduled periodically, covering various subjects and topics to ensure comprehensive evaluation.</li>
                <li>Performance Reports: Students receive detailed analysis of their test performances, including success potential indices and improvement suggestions.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Enrollment Details</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Eligibility: Students moving from Class XI to XII.</li>
                <li>Enrollment Process:
                  <ol>
                    <li>Visit the official Z7i Non-Classroom Programs website: www.z7inonclassroomprograms.com</li>
                    <li>Select the Rankers Study Material (RSM) – One-Year Program for JEE Main & Advanced.</li>
                    <li>Fill out the application form and complete the payment process to confirm enrollment.</li>
                  </ol>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Fee Structure</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Books Fee: ₹6,000/-</li>
                <li>All India Test Series Fee: ₹3,965/- (₹3,360 + 18% GST)</li>
                <li>myPAT Online Test Series Fee: ₹3,539/- (₹2,999 + 18% GST)</li>
                <li>Total Amount: ₹13,504/-</li>
              </ul>
              <p><em>Note: For Program Code 1095, the myPAT Online Test Series is not included, and the total amount is ₹9,965/-.</em></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default RSMProgram; 