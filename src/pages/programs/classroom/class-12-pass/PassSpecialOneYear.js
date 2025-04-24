import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './PassSpecialOneYear.css';

const PassSpecialOneYear = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Special One Year Classroom Program for JEE (Main & Advanced)</h1>
          <h2 className="text-center">For Class XII Passed Students</h2>
        </Container>
      </div>

      <Container fluid className="program-content">
        <div className="content-wrapper">
          <div className="cards-grid">
            <Card className="program-card overview-card">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  The Special One Year Program is an intensive course designed specifically for students who have completed Class XII and aim to excel in both JEE Main and Advanced. This program offers specialized preparation with advanced study techniques.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Advanced JEE Preparation</li>
                  <li>Specialized Problem Solving</li>
                  <li>Enhanced Analytical Skills</li>
                  <li>Strategic Exam Techniques</li>
                  <li>Time Management Skills</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: One Year (Special Format)</li>
                  <li>Subject Coverage:
                    <ul>
                      <li>Advanced Physics</li>
                      <li>Advanced Chemistry</li>
                      <li>Higher Mathematics</li>
                    </ul>
                  </li>
                  <li>Specialized Practice Sessions</li>
                  <li>Advanced Problem Sets</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Special Features</Card.Title>
                <ul className="feature-list">
                  <li>Expert IIT-JEE Faculty</li>
                  <li>Advanced Study Materials</li>
                  <li>Regular Assessment Tests</li>
                  <li>One-on-One Mentoring</li>
                  <li>Performance Analytics</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Additional Benefits</Card.Title>
                <ul className="feature-list">
                  <li>Special Topic Tests</li>
                  <li>Advanced Mock Tests</li>
                  <li>Personalized Feedback</li>
                  <li>Online Learning Support</li>
                  <li>Doubt Resolution Sessions</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PassSpecialOneYear;