import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './IntegratedPrograms.css';

const PaniniProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">PANINI – Two Year Integrated School Program</h1>
          <h2 className="text-center">For Students Presently in Class X (going to XI in the year 2025)</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Program Overview</Card.Header>
            <Card.Body>
              <p>The PANINI program is a meticulously crafted two-year integrated school program designed to provide students with a unified and comprehensive educational experience. By seamlessly blending school curriculum with competitive exam preparation, this program aims to eliminate the stress of juggling multiple coaching classes and school responsibilities. Students benefit from synchronized learning that caters to academic excellence and competitive success.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Objectives</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Holistic Education: Integrate school academics with preparation for JEE (Main & Advanced), Olympiads, and other competitive exams.</li>
                <li>Stress Reduction: Eliminate the need for separate coaching by providing all necessary preparation within the school schedule.</li>
                <li>Time Optimization: Maximize productive study time by reducing travel and redundant learning.</li>
                <li>Comprehensive Development: Foster intellectual growth, analytical thinking, and problem-solving skills.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Duration: 2 Years (Classes XI and XII)</li>
                <li>Subjects Covered:
                  <ul>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Mathematics</li>
                  </ul>
                </li>
                <li>Contact Hours: Approximately 1,340 hours, including classroom interactions and tests.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Key Features</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Integrated Curriculum: Seamless blending of school syllabus with competitive exam preparation.</li>
                <li>Expert Faculty: Experienced educators specializing in competitive exam coaching.</li>
                <li>Comprehensive Study Material: Well-researched content covering all necessary topics.</li>
                <li>Regular Assessments: Frequent tests to monitor progress and identify areas for improvement.</li>
                <li>Personalized Mentoring: One-on-one guidance to address individual student needs.</li>
                <li>Stress Management: Programs designed to reduce academic pressure and promote well-being.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Testing & Evaluation</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Phase Tests: Conducted after each phase to assess understanding and retention.</li>
                <li>All India Internal Test Series (AIiTS): National-level tests to benchmark performance against peers.</li>
                <li>Class Learning Improvement Program (CLIP): Additional sessions for students who have completed all assignments to further enhance their performance.</li>
                <li>JEE Archive: Access to a comprehensive question bank with answers from previous years' JEE (Main & Advanced) papers.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Admission Process</Card.Header>
            <Card.Body>
              <ol className="feature-list">
                <li>Application: Obtain and fill out the application form available at Z7i centers or online.</li>
                <li>Entrance Test: Appear for the Z7i Admission Test scheduled for the respective program.</li>
                <li>Selection: Based on test performance, selected candidates will be offered admission.</li>
                <li>Enrollment: Complete the enrollment process by submitting necessary documents and fees.</li>
              </ol>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Fee Structure</Card.Header>
            <Card.Body>
              <p>Z7i's Integrated School Programs are part of our social initiative, and the fees charged are less than the cost of delivery. This ensures that quality education is accessible to deserving students. For detailed fee information, please contact your nearest Z7i center.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Contact Information</Card.Header>
            <Card.Body>
              <p>For more details about the PANINI – Two Year Integrated School Program, admission procedures, or fee structure, please contact your nearest Z7i center or visit the official website: www.Z7i.com</p>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default PaniniProgram; 