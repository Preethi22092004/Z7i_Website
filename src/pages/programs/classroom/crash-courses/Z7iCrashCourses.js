import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Z7iCrashCourses.css';

const Z7iCrashCourses = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i Crash Courses for JEE (Main & Advanced)</h1>
          <h2 className="text-center">For Students Currently in Class XII</h2>
        </Container>
      </div>

      <Container className="program-content py-5">
        <Row className="g-4">
          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  The Crash Courses are intensive programs designed to provide a final boost to students preparing for the JEE (Main & Advanced) examinations. These courses focus on reinforcing key concepts, enhancing problem-solving skills, and improving exam temperament in a short span of time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Rapid Revision of fundamental concepts</li>
                  <li>Problem-Solving Techniques development</li>
                  <li>Exam Strategy optimization</li>
                  <li>Performance Analysis and feedback</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: 100-138 hours of classroom instruction</li>
                  <li>Subjects: Physics, Chemistry, and Mathematics</li>
                  <li className="with-sublist">Special Programs:
                    <ul>
                      <li>Rank Improvement Program (RIP) - 54 additional hours</li>
                      <li>Grand Masters Package (GMP) - 1800 quality problems</li>
                      <li>All India Test Series (AITS)</li>
                    </ul>
                  </li>
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
                  <li>Regular Testing and Analytics</li>
                  <li>Detailed Feedback Sessions</li>
                  <li>Doubt Clearing Sessions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Z7iCrashCourses;