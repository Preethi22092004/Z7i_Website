import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../../../styles/ProgramStyles.css';

const OneYearJEEProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">One Year Classroom Program for JEE (Main & Advanced)</h1>
          <h2 className="text-center">For Students Currently in Class XII</h2>
        </Container>
      </div>

      <Container className="program-content">
        <Row className="g-4">
          <Col md={6}>
            <Card className="content-card">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  The One Year Classroom Program is meticulously designed for students who have completed Class XI and are moving into Class XII. This program aims to prepare students for JEE (Main & Advanced) with a comprehensive curriculum that also supports excellence in Class XII Board examinations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Comprehensive JEE Preparation</li>
                  <li>Conceptual Clarity in Physics, Chemistry & Mathematics</li>
                  <li>Holistic Development through regular assessments</li>
                  <li>Excellence in Board Examinations</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: One Year</li>
                  <li>Regular classroom sessions</li>
                  <li>Comprehensive study materials</li>
                  <li>Special Programs:
                    <ul>
                      <li>Rank Improvement Program (RIP)</li>
                      <li>Grand Masters Package (GMP)</li>
                      <li>All India Test Series (AITS)</li>
                    </ul>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card">
              <Card.Body>
                <Card.Title>Program Features</Card.Title>
                <ul className="feature-list">
                  <li>Expert faculty team</li>
                  <li>Regular practice tests and assignments</li>
                  <li>Periodic performance analysis</li>
                  <li>Doubt clearing sessions</li>
                  <li>Online learning resources</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card">
              <Card.Body>
                <Card.Title>Admission Process</Card.Title>
                <ol className="feature-list">
                  <li>Fill application form</li>
                  <li>Submit required documents</li>
                  <li>Appear for admission test</li>
                  <li>Complete enrollment process</li>
                </ol>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card">
              <Card.Body>
                <Card.Title>Contact Information</Card.Title>
                <Card.Text>
                  For more details about admissions and fee structure, please contact your nearest Z7i center or visit our website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OneYearJEEProgram;