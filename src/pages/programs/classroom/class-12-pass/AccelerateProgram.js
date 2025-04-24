import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './AccelerateProgram.css';

const AccelerateProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">One Year Accelerate Program for JEE (Main & Advanced)</h1>
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
                  The One Year Accelerate Program is a fast-track course designed for ambitious students who have completed Class XII. This program offers accelerated learning with intensive coaching for JEE Main and Advanced.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Rapid JEE Preparation</li>
                  <li>Advanced Problem Solving</li>
                  <li>Quick Concept Mastery</li>
                  <li>Intensive Training</li>
                  <li>Strategic Exam Preparation</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Accelerated Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: One Year (Accelerated)</li>
                  <li>Intensive Coverage:
                    <ul>
                      <li>Advanced Physics</li>
                      <li>Advanced Chemistry</li>
                      <li>Higher Mathematics</li>
                    </ul>
                  </li>
                  <li>Daily Practice Sessions</li>
                  <li>Weekend Tests</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Features</Card.Title>
                <ul className="feature-list">
                  <li>Accelerated Learning Modules</li>
                  <li>Intensive Study Material</li>
                  <li>Frequent Assessments</li>
                  <li>Personal Mentoring</li>
                  <li>Progress Tracking</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Special Components</Card.Title>
                <ul className="feature-list">
                  <li>Rapid Revision Techniques</li>
                  <li>Advanced Problem Banks</li>
                  <li>Daily Practice Tests</li>
                  <li>Error Analysis Sessions</li>
                  <li>Strategy Building Workshops</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccelerateProgram;