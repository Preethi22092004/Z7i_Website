import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './UdayaProgram.css';

const UdayaProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">UDAYA - Two-Year Classroom Program</h1>
          <h2 className="text-center">For Students of Class VII</h2>
        </Container>
      </div>

      <Container className="program-content py-5">
        <Row className="g-4">
          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  UDAYA Two-Year Classroom Program is designed to nurture young minds and build a strong foundation in Science & Mathematics. This program prepares students for future competitive examinations while ensuring excellence in school academics.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Build strong foundation in Science & Mathematics</li>
                  <li>Develop analytical thinking skills</li>
                  <li>Excel in school academics</li>
                  <li>Prepare for future competitive exams</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: Two Years</li>
                  <li>Subjects Covered:
                    <ul>
                      <li>Mathematics</li>
                      <li>Science</li>
                      <li>Mental Ability</li>
                    </ul>
                  </li>
                  <li>Regular Classes & Assessments</li>
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
                  <li>Regular practice tests</li>
                  <li>Parent-teacher meetings</li>
                  <li>Academic performance tracking</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UdayaProgram;