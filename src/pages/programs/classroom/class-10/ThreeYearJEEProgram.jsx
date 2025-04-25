import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ThreeYearJEEProgram.css';

const ThreeYearJEEProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i Three-Year Classroom Program for JEE (Main & Advanced)</h1>
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
                  The Three-Year Classroom Program is designed for students entering Class X, providing comprehensive preparation for JEE (Main & Advanced). This program ensures thorough coverage of Class X, XI & XII syllabi along with JEE preparation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Build strong foundation for JEE (Main & Advanced)</li>
                  <li>Excel in Board Examinations</li>
                  <li>Develop analytical thinking and problem-solving skills</li>
                  <li>Master competitive exam techniques</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: Three academic years</li>
                  <li>Integrated preparation for Boards and JEE</li>
                  <li>Subject coverage:
                    <ul>
                      <li>Physics</li>
                      <li>Chemistry</li>
                      <li>Mathematics</li>
                    </ul>
                  </li>
                  <li>Regular practice tests and assignments</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Features</Card.Title>
                <ul className="feature-list">
                  <li>Expert faculty team</li>
                  <li>Comprehensive study materials</li>
                  <li>Online testing through myPAT</li>
                  <li>Regular doubt clearing sessions</li>
                  <li>Performance tracking and analysis</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThreeYearJEEProgram;