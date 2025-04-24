import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AscentProgram.css';

const AscentProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">ASCENT – Two Year Classroom Program</h1>
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
                  The ASCENT Two Year Program is designed for students moving to Class IX, providing a comprehensive preparation platform for NTSE, Olympiads, and other competitive examinations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Prepare for NTSE & Olympiads</li>
                  <li>Strengthen core concepts in Science & Mathematics</li>
                  <li>Develop competitive exam temperament</li>
                  <li>Excel in school academics</li>
                  <li>Build analytical thinking abilities</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: Two Academic Years</li>
                  <li>Comprehensive Coverage:
                    <ul>
                      <li>Science (Physics, Chemistry, Biology)</li>
                      <li>Mathematics</li>
                      <li>Mental Ability</li>
                      <li>Social Studies (for NTSE)</li>
                    </ul>
                  </li>
                  <li>Regular Mock Tests & Assessments</li>
                  <li>NTSE & Olympiad Pattern Practice</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Features</Card.Title>
                <ul className="feature-list">
                  <li>Expert Faculty Team</li>
                  <li>Comprehensive Study Material</li>
                  <li>Regular Performance Analysis</li>
                  <li>Special Focus on NTSE & Olympiads</li>
                  <li>Online Learning Resources</li>
                  <li>Doubt Clearing Sessions</li>
                  <li>Parent-Teacher Meetings</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Additional Benefits</Card.Title>
                <ul className="feature-list">
                  <li>Academic Performance Tracking</li>
                  <li>Personalized Attention</li>
                  <li>Regular Worksheets & Assignments</li>
                  <li>Mock Test Series</li>
                  <li>Special Problem-Solving Sessions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AscentProgram;