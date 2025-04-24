import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AscentOneYear.css';

const AscentOneYear = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i ASCENT One-Year Classroom Program</h1>
          <h2 className="text-center">For Students of Class X</h2>
        </Container>
      </div>

      <Container className="program-content py-5">
        <Row className="g-4">
          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  The ASCENT One-Year Classroom Program is meticulously designed to lay a strong foundation for students aiming to excel in competitive examinations such as NTSE, IOQJS (NSEJS & IJSO), IOQM, and to achieve academic excellence in school and board examinations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Comprehensive Preparation for boards and competitive exams</li>
                  <li>Conceptual Clarity across all subjects</li>
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
                  <li>Duration: One academic year (Class X)</li>
                  <li>Comprehensive coverage of all subjects</li>
                  <li>Special Programs: CLIP, SPI, and NSEJS support</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AscentOneYear;