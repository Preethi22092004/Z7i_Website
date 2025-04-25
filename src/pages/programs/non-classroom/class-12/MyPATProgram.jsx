import React from 'react';
import { Container, Card, Accordion } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const MyPATProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">myPAT Online Test Series</h1>
          <h2 className="text-center">For JEE Main & Advanced – Class XII (2025)</h2>
        </Container>
      </div>

      <Container>
        <Accordion defaultActiveKey="0" className="program-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Program Overview</Accordion.Header>
            <Accordion.Body>
              <p>myPAT Online Test Series for JEE Main & Advanced is an advanced web-based learning and assessment platform designed for Class XII students. This platform offers comprehensive test preparation with thousands of questions, detailed analysis, and personalized feedback, helping students gauge their preparation level and improve their performance for competitive exams like JEE Main & Advanced.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Key Features</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Extensive Question Bank: Access to thousands of questions covering all topics in Physics, Chemistry, and Mathematics as per JEE Main & Advanced syllabus.</li>
                <li>Personalized Test Creation: Ability to create custom tests based on specific subjects, topics, or difficulty levels.</li>
                <li>Simulated Exam Environment: Tests conducted in an interface similar to the actual JEE computer-based test, providing realistic exam experience.</li>
                <li>Advanced Analytics: Detailed performance analysis highlighting strengths and areas for improvement.</li>
                <li>Success Potential Index: Specialized metric to track progress and predict performance in actual exams.</li>
                <li>Comparative Analysis: Benchmark performance against peers nationwide to understand competitive standing.</li>
                <li>24/7 Accessibility: Platform accessible anytime, anywhere, allowing for flexible study schedules.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Testing & Evaluation</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Part Tests: Topic-wise tests to evaluate understanding of specific concepts and topics.</li>
                <li>Full Tests: Comprehensive tests covering the entire syllabus, simulating the actual exam pattern and difficulty level.</li>
                <li>Performance Reports: Detailed analysis after each test, including:
                  <ul>
                    <li>Subject-wise and topic-wise performance metrics</li>
                    <li>Time management analysis</li>
                    <li>Question attempt patterns</li>
                    <li>Comparison with toppers and average performers</li>
                    <li>Personalized improvement suggestions</li>
                  </ul>
                </li>
                <li>Improvement Tracking: Track progress over time with trend analysis of performance in various tests.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Study Resources</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Video Solutions: Detailed video explanations for complex problems.</li>
                <li>Concept Notes: Concise theory notes for quick revision of important concepts.</li>
                <li>Formula Sheets: Comprehensive collection of important formulas for quick reference.</li>
                <li>Previous Years' Questions: Access to JEE Main & Advanced questions from past years with detailed solutions.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Enrollment Details</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Eligibility: Students moving from Class XI to XII or those currently in Class XII.</li>
                <li>Enrollment Process:
                  <ol>
                    <li>Visit the official Z7i Non-Classroom Programs website: www.z7inonclassroomprograms.com</li>
                    <li>Select the myPAT Online Test Series.</li>
                    <li>Fill out the application form and complete the payment process to confirm enrollment.</li>
                  </ol>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Fee Structure</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>myPAT Online Test Series (Complete Package): ₹3,539/- (₹2,999 + 18% GST)</li>
                <li>Optional Add-ons:
                  <ul>
                    <li>Video Solutions Package: ₹1,180/- (₹1,000 + 18% GST)</li>
                    <li>Personalized Mentoring Sessions: ₹2,360/- (₹2,000 + 18% GST) for 5 sessions</li>
                  </ul>
                </li>
                <li>Payment Options:
                  <ul>
                    <li>Full Payment at the time of enrollment</li>
                    <li>Various payment methods accepted: Credit Card, Debit Card, Net Banking, UPI</li>
                  </ul>
                </li>
              </ul>
              <p>Note: Special discount of 15% available for students already enrolled in other Z7i programs.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default MyPATProgram; 