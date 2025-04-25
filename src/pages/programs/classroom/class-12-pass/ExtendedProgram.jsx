import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './ExtendedProgram.css';

const ExtendedProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i One Year Extended Program for JEE (Advanced)</h1>
          <h2 className="text-center">For Class XII Passed Students</h2>
        </Container>
      </div>

      <Container fluid className="program-content">
        <div className="content-wrapper">
          <div className="cards-grid">
            <Card className="program-card overview-card">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  The One Year Extended Program is specifically designed for students who have completed Class XII and want extensive preparation for JEE Advanced. This program provides additional time and focused training for advanced concepts.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>In-depth JEE Advanced Preparation</li>
                  <li>Focus on Problem Solving Techniques</li>
                  <li>Advanced Concept Building</li>
                  <li>Strategic Time Management Training</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Extended Duration: One Year+</li>
                  <li>Advanced Topics Coverage:
                    <ul>
                      <li>Higher Level Physics</li>
                      <li>Advanced Chemistry</li>
                      <li>Complex Mathematics</li>
                    </ul>
                  </li>
                  <li>Intensive Problem Solving Sessions</li>
                  <li>Advanced Mock Tests</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Special Features</Card.Title>
                <ul className="feature-list">
                  <li>Extended Study Hours</li>
                  <li>Advanced Study Materials</li>
                  <li>Special JEE Advanced Focus</li>
                  <li>One-on-One Mentoring</li>
                  <li>Topic-wise Assessment</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExtendedProgram;