import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './LittleGenieProgram.css';

const LittleGenieProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Little Genie – One Year Foundation Program</h1>
          <h2 className="text-center">For Students Entering Class VI</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Program Overview</Card.Header>
            <Card.Body>
              <p>The Little Genie program is a meticulously designed one-year foundation course for students entering Class VI. It aims to bridge the gap between elementary education and the more analytical and concept-based learning approaches required in higher classes.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Objectives</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Early Development of Analytical Skills</li>
                <li>Smooth Academic Transition</li>
                <li>Foundation for Competitive Exams</li>
                <li>Holistic Development</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Course Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Duration: Approximately 175 hours</li>
                <li>4-phase structured learning</li>
                <li>Subjects: Science, Mathematics, Mental Ability</li>
                <li>Regular assessments and feedback</li>
                <li>Class Learning Improvement Program (CLIP)</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Benefits</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Expert faculty guidance</li>
                <li>Comprehensive study materials</li>
                <li>Regular progress monitoring</li>
                <li>Interactive learning sessions</li>
                <li>Focus on concept clarity</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default LittleGenieProgram;