import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './styles.css';

const UdaanProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">UDAAN - Two-Year Integrated School Program</h1>
          <h2 className="text-center">For Students of Class IX</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Program Overview</Card.Header>
            <Card.Body>
              <p>
                The UDAAN program is a meticulously crafted two-year integrated school program designed to provide students with a unified and comprehensive educational experience. By seamlessly blending school curriculum with competitive exam preparation, this program aims to eliminate the stress of juggling multiple coaching classes and school responsibilities.
              </p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Objectives</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Holistic Education: Integrate school academics with preparation for NTSE, Olympiads, and other competitive exams</li>
                <li>Stress Reduction: Eliminate the need for separate coaching by providing all necessary preparation within the school schedule</li>
                <li>Time Optimization: Maximize productive study time by reducing travel and redundant learning</li>
                <li>Comprehensive Development: Foster intellectual growth, analytical thinking, and problem-solving skills</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Duration: 2 Years (Class IX and X)</li>
                <li>Contact Hours: Approximately 586 hours</li>
                <li>Subjects Covered: Physics, Chemistry, Mathematics, Biology, Social Studies, Mental Ability</li>
                <li>Regular assessments and feedback</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Key Features</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Integrated Curriculum: Seamless blending of school syllabus with competitive exam preparation</li>
                <li>Expert Faculty: Experienced educators specializing in competitive exam coaching</li>
                <li>Comprehensive Study Material: Well-researched content covering all necessary topics</li>
                <li>Regular Assessments: Frequent tests to monitor progress and identify areas for improvement</li>
                <li>Personalized Mentoring: One-on-one guidance to address individual student needs</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default UdaanProgram; 