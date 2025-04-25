import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const AITSProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">All India Test Series (AITS)</h1>
          <h2 className="text-center">For JEE Main & Advanced – Class 12 Pass (2025)</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Program Overview</Card.Header>
            <Card.Body>
              <p>Z7i's All India Test Series (AITS) is a prestigious national-level testing program designed for Class 12 pass students preparing for JEE Main and Advanced. This program simulates the actual JEE environment through a series of carefully designed tests that match the pattern, difficulty level, and time constraints of the actual examinations.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Key Features</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Comprehensive Test Series: Well-structured tests developed by experts, covering all topics required for JEE Main and Advanced.</li>
                <li>Realistic Exam Environment: Tests are conducted in a setting similar to the actual JEE environment.</li>
                <li>Regular Assessments: Periodic tests to evaluate understanding and readiness, including Part Tests and Full Tests.</li>
                <li>Performance Analysis: Detailed reports highlighting strengths and areas for improvement, aiding in focused preparation.</li>
                <li>All India Ranking: Benchmark your performance against peers across the country.</li>
                <li>Flexible Learning: Access to tests and performance analytics from any location, enabling self-paced study.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Testing & Evaluation</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>All India Test Series (AITS): A series of computer-based tests conducted at the national level to benchmark performance against peers.</li>
                <li>Test Schedule: Tests are scheduled periodically, covering various subjects and topics to ensure comprehensive evaluation.</li>
                <li>Performance Reports: Students receive detailed analysis of their test performances, including:
                  <ul>
                    <li>Success potential indices</li>
                    <li>Detailed topic-wise analysis</li>
                    <li>Time management analysis</li>
                    <li>Comparison with all India toppers</li>
                    <li>Improvement suggestions</li>
                  </ul>
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Test Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Full Tests: Comprehensive exams covering the entire JEE syllabus</li>
                <li>Part Tests: Topic-specific tests focusing on particular areas</li>
                <li>JEE Main Pattern Tests: Tests following the exact pattern of JEE Main</li>
                <li>JEE Advanced Pattern Tests: Tests designed as per JEE Advanced format</li>
                <li>Revision Tests: Tests for last-minute preparation and revision</li>
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
                    <li>Register on the Z7i official website or visit your nearest Z7i center.</li>
                    <li>Complete the registration form with your academic credentials.</li>
                    <li>Make the payment for your chosen test package.</li>
                    <li>Receive access credentials for the online testing platform.</li>
                    <li>Schedule and take tests according to the published calendar.</li>
                  </ol>
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Fee Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>All India Test Series Fee: ₹3,965/- (₹3,360 + 18% GST)</li>
                <li>myPAT Online Test Series Fee: ₹3,539/- (₹2,999 + 18% GST) (Optional)</li>
                <li>Total Amount: ₹7,504/- (with myPAT)</li>
              </ul>
              <p><em>Note: The fee structure is subject to change. Please refer to the official Z7i website for the most updated information.</em></p>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default AITSProgram; 