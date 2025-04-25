import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './SpecialOneYearProgram.css';

const SpecialOneYearProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i Special One Year Classroom Program for JEE (Main & Advanced)</h1>
          <h2 className="text-center">For Students of Class XII</h2>
        </Container>
      </div>

      <Container fluid className="program-content">
        <div className="content-wrapper">
          <div className="cards-grid">
            <Card className="program-card overview-card">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  The Special One Year Classroom Program is meticulously designed for students who are in Class XII and aspire to secure a top rank in the JEE (Main & Advanced) examinations.
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
                <Card.Title>Key Features</Card.Title>
                <ul className="feature-list">
                  <li>Advanced Study Material</li>
                  <li>Regular Practice Tests</li>
                  <li>Performance Analysis</li>
                  <li>Doubt Clearing Sessions</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOneYearProgram;