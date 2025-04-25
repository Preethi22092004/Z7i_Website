import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './TwoYearJEEProgram.css';

const TwoYearJEEProgram = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i Two-Year Classroom Program for JEE (Main & Advanced)</h1>
          <h2 className="text-center">For Students of Class XI</h2>
        </Container>
      </div>

      <Container fluid className="program-content">
        <div className="content-wrapper">
          <div className="cards-grid">
            <Card className="program-card overview-card">
              <Card.Body>
                <Card.Title>Program Overview</Card.Title>
                <Card.Text>
                  The Two-Year Classroom Program is an intensive preparation course designed for students entering Class XI. This program provides comprehensive coverage of JEE syllabus along with school curriculum to ensure success in both JEE and Board examinations.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Thorough preparation for JEE (Main & Advanced)</li>
                  <li>Excellence in Board Examinations</li>
                  <li>Development of conceptual understanding</li>
                  <li>Enhancement of problem-solving abilities</li>
                  <li>Time management and exam techniques</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Course Structure</Card.Title>
                <ul className="feature-list">
                  <li>Duration: Two academic years</li>
                  <li>Extensive coverage of:
                    <ul>
                      <li>Physics</li>
                      <li>Chemistry</li>
                      <li>Mathematics</li>
                    </ul>
                  </li>
                  <li>Regular practice sessions</li>
                  <li>Phase-wise learning approach</li>
                  <li>Periodic assessments and tests</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Program Features</Card.Title>
                <ul className="feature-list">
                  <li>Experienced faculty team</li>
                  <li>Comprehensive study material</li>
                  <li>Regular test series</li>
                  <li>Performance analysis</li>
                  <li>Special doubt clearing sessions</li>
                  <li>Online learning resources</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="program-card">
              <Card.Body>
                <Card.Title>Additional Benefits</Card.Title>
                <ul className="feature-list">
                  <li>All India Test Series (AITS)</li>
                  <li>Rank Improvement Program (RIP)</li>
                  <li>Grand Masters Package (GMP)</li>
                  <li>Board exam preparation support</li>
                  <li>Career guidance sessions</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TwoYearJEEProgram;