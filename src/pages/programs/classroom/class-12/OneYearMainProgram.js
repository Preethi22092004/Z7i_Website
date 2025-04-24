import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './OneYearMainProgram.css';

const OneYearMainProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i One Year Classroom Program for JEE (Main)</h1>
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
                  The One Year Classroom Program for JEE (Main) is meticulously designed for students who are in Class XII and aspire to secure a top rank in the JEE (Main) examination.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Comprehensive JEE (Main) Preparation</li>
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
                  <li>Focus on JEE Main Pattern</li>
                  <li>Regular Mock Tests</li>
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

export default OneYearMainProgram;