import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const MyPATProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">myPAT – India's Largest Online Learning & Assessment Platform</h1>
          <h2 className="text-center">Advanced Online Preparation for Competitive Exams</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Overview</Card.Header>
            <Card.Body>
              <p>myPAT is India's premier online learning and assessment platform, meticulously designed to cater to students preparing for competitive exams such as JEE Main, JEE Advanced, BITSAT, NTSE, and KVPY. With a user base exceeding 700,000 aspirants, myPAT offers a real-test environment complemented by powerful analytics-driven test results, focusing on individual weaknesses and areas of improvement.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Real-Test Environment</Card.Header>
            <Card.Body>
              <p>myPAT provides a simulated test environment that mirrors the actual examination setting, helping students acclimate to the exam format and manage time effectively.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Comprehensive Test Series</Card.Header>
            <Card.Body>
              <p>The platform offers a wide range of test series, including full-length mock tests, chapter-wise concept tests, and previous year papers, covering subjects like Physics, Chemistry, Mathematics, Biology, and Mental Ability.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Detailed Performance Analytics</Card.Header>
            <Card.Body>
              <p>After each test, students receive in-depth analytics, including:</p>
              <ul className="feature-list">
                <li>Strengths and Weaknesses: Identifying areas of proficiency and topics requiring attention.</li>
                <li>Success Potential Index (SPI): A metric indicating the likelihood of success in the actual exam.</li>
                <li>Time Management Analysis: Insights into time spent per question and section.</li>
                <li>Concept Coverage Meter: Tracking the extent of syllabus covered.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Personalized Learning Pathways</Card.Header>
            <Card.Body>
              <p>Based on performance data, myPAT suggests personalized study plans, remedial measures, and additional resources to address individual learning gaps.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Accessibility Across Devices</Card.Header>
            <Card.Body>
              <p>Students can access myPAT's features seamlessly across various devices, including desktops, tablets, and smartphones, ensuring uninterrupted learning.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Exams Covered</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>JEE Main & Advanced: For engineering aspirants aiming for IITs and NITs.</li>
                <li>BITSAT: For admission to BITS Pilani and its campuses.</li>
                <li>NTSE: National Talent Search Examination for scholarships.</li>
                <li>KVPY: Kishore Vaigyanik Protsahan Yojana for science students.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Enrollment Process</Card.Header>
            <Card.Body>
              <ol className="feature-list">
                <li>Visit the official myPAT website: mypat.in</li>
                <li>Select the desired test series or subscription plan.</li>
                <li>Create an account or log in.</li>
                <li>Complete the payment process to activate the subscription.</li>
              </ol>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Pricing</Card.Header>
            <Card.Body>
              <p>myPAT offers various subscription plans tailored to different needs. For detailed pricing information, please refer to the Pricing Page.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Contact Information</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Website: mypat.in</li>
                <li>Email: support@mypat.in</li>
                <li>Phone: +91-11-41828706</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default MyPATProgram; 