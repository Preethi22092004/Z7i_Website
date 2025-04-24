import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './TwoYearCondensedProgram.css';

const TwoYearCondensedProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i Two Year Condensed Classroom Program</h1>
          <h2 className="text-center">For Students of Class XI</h2>
        </Container>
      </div>

      <Container fluid className="program-content">
        <div className="content-wrapper">
          <div className="cards-grid">
            <Card className="program-card overview-card">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  The Two Year Condensed Classroom Program is specially designed for focused and dedicated students aiming for JEE (Main & Advanced). This intensive program offers comprehensive preparation with optimized study hours and accelerated learning techniques.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Intensive preparation for JEE (Main & Advanced)</li>
                  <li>Optimized curriculum coverage</li>
                  <li>Focus on advanced problem-solving techniques</li>
                  <li>Time management skills development</li>
                  <li>Strategic exam preparation</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: Two Years (Condensed Format)</li>
                  <li>Subject Coverage:
                    <ul>
                      <li>Advanced Physics</li>
                      <li>Advanced Chemistry</li>
                      <li>Advanced Mathematics</li>
                    </ul>
                  </li>
                  <li>Intensive Practice Sessions</li>
                  <li>Advanced Problem-Solving Workshops</li>
                  <li>Special Focus on JEE Advanced Pattern</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Features</Card.Title>
                <ul className="feature-list">
                  <li>Expert IIT-JEE Faculty</li>
                  <li>Advanced Study Materials</li>
                  <li>Regular Assessment Tests</li>
                  <li>Performance Tracking System</li>
                  <li>Doubt Clearing Sessions</li>
                  <li>Online Learning Resources</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Additional Benefits</Card.Title>
                <ul className="feature-list">
                  <li>Special Topic Tests</li>
                  <li>Mock Tests for JEE Pattern</li>
                  <li>Individual Performance Analysis</li>
                  <li>Parent-Teacher Meetings</li>
                  <li>Board Exam Support</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TwoYearCondensedProgram;