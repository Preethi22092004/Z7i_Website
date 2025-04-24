import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './PassOneYearJEE.css';

const PassOneYearJEE = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i One Year Classroom Program for JEE (Main & Advanced)</h1>
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
                  The One Year Classroom Program is meticulously designed for students who have completed Class XII and aspire to secure a top rank in the JEE (Main & Advanced) examinations.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Comprehensive JEE Preparation</li>
                  <li>Conceptual Clarity</li>
                  <li>Holistic Development</li>
                  <li>Continuous Assessment</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: One Year</li>
                  <li>Intensive Coverage of:
                    <ul>
                      <li>Physics</li>
                      <li>Chemistry</li>
                      <li>Mathematics</li>
                    </ul>
                  </li>
                  <li>Regular Practice Sessions</li>
                  <li>Mock Tests and Assessments</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Features</Card.Title>
                <ul className="feature-list">
                  <li>Expert Faculty Team</li>
                  <li>Comprehensive Study Material</li>
                  <li>Regular Test Series</li>
                  <li>Doubt Clearing Sessions</li>
                  <li>Performance Analysis</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PassOneYearJEE;