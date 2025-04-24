import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './FourYearJEEProgram.css';

const FourYearJEEProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i Four-Year Classroom Program for JEE (Main & Advanced)</h1>
          <h2 className="text-center">For Students of Class IX</h2>
        </Container>
      </div>

      <Container className="program-content py-5">
        <Row className="g-4">
          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  The Four-Year Classroom Program is meticulously crafted for students transitioning into Class IX, aiming to build a strong foundation for success in JEE (Main & Advanced) and other competitive examinations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Comprehensive Preparation for JEE (Main & Advanced)</li>
                  <li>Conceptual Clarity in Physics, Chemistry, and Mathematics</li>
                  <li>Holistic Development</li>
                  <li>Continuous Assessment and Improvement</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: Four academic years (Class IX to XII)</li>
                  <li>13 phases of structured learning</li>
                  <li>Comprehensive coverage of all subjects</li>
                  <li>Special Programs: RIP and GMP</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Features</Card.Title>
                <ul className="feature-list">
                  <li>Comprehensive Study Material</li>
                  <li>Regular Assignments and CPP</li>
                  <li>Online Testing through myPAT</li>
                  <li>Dedicated Doubt Clearing Sessions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FourYearJEEProgram;