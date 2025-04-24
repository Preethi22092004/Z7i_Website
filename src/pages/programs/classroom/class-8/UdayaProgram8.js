import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './UdayaProgram8.css';

const UdayaProgram8 = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">UDAYA - One Year Classroom Program</h1>
          <h2 className="text-center">For Students of Class VIII</h2>
        </Container>
      </div>

      <Container className="program-content py-5">
        <Row className="g-4">
          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  UDAYA One Year Program is specifically designed for Class VIII students to build strong foundations in Science and Mathematics. This program focuses on developing analytical thinking and problem-solving abilities while ensuring academic excellence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Develop strong foundation in Science and Mathematics</li>
                  <li>Enhance analytical and logical thinking skills</li>
                  <li>Prepare for various competitive examinations</li>
                  <li>Excel in school academics</li>
                  <li>Build problem-solving approach</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: One Academic Year</li>
                  <li>Subjects Covered:
                    <ul>
                      <li>Mathematics</li>
                      <li>Science</li>
                      <li>Mental Ability</li>
                    </ul>
                  </li>
                  <li>Regular Practice Sessions</li>
                  <li>Monthly Tests and Assessments</li>
                  <li>Performance Analysis Reports</li>
                  <li>Parent-Teacher Meetings</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Features</Card.Title>
                <ul className="feature-list">
                  <li>Expert Faculty Members</li>
                  <li>Comprehensive Study Materials</li>
                  <li>Regular Performance Analysis</li>
                  <li>Doubt Clearing Sessions</li>
                  <li>Interactive Learning Methods</li>
                  <li>Online Resources Access</li>
                  <li>Regular Worksheets and Assignments</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UdayaProgram8;