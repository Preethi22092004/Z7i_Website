import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const MyPATProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">MyPAT Online Test Series</h1>
          <h2 className="text-center">For JEE Main & Advanced – Class 12 Pass (2025)</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Program Overview</Card.Header>
            <Card.Body>
              <p>The MyPAT Online Test Series for Class 12 Pass students is a comprehensive online assessment platform designed by Z7i to provide realistic JEE Main and Advanced test experience. It offers a wide range of tests with detailed analytics, helping students identify their strengths and areas needing improvement.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Key Features</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Comprehensive Test Series: Cover all subjects with tests designed according to the latest JEE pattern.</li>
                <li>Realistic Exam Environment: Simulates actual exam conditions to build familiarity and confidence.</li>
                <li>In-depth Analytics: Detailed performance reports showing strengths, weaknesses, and progress over time.</li>
                <li>National Ranking System: Compare your performance with peers across the country.</li>
                <li>Adaptive Learning: Personalized recommendations based on performance to target weak areas.</li>
                <li>24/7 Accessibility: Access tests anytime, anywhere using the online platform.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Testing & Evaluation</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Subject-wise Tests: Focus on individual subjects for targeted preparation.</li>
                <li>Full-length Mock Tests: Comprehensive tests covering all subjects to assess overall readiness.</li>
                <li>Chapter-wise Tests: Detailed assessment of understanding at the chapter level.</li>
                <li>Previous Years' Papers: Practice with actual JEE questions from past years.</li>
                <li>Customizable Tests: Create your own tests based on specific topics or difficulty levels.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Study Resources</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Detailed Solutions: Comprehensive explanations for all questions.</li>
                <li>Video Solutions: Visual explanations for complex problems (available as an add-on).</li>
                <li>Concept Notes: Quick revision materials for key topics.</li>
                <li>Performance Insights: Advanced analytics to track progress and identify improvement areas.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Enrollment Details</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Eligibility: Open to all JEE aspirants who have passed Class XII.</li>
                <li>Enrollment Process:
                  <ol>
                    <li>Visit the official Z7i website or MyPAT portal.</li>
                    <li>Register with your email ID and personal details.</li>
                    <li>Select the appropriate test package.</li>
                    <li>Complete the payment process to gain access to the tests.</li>
                  </ol>
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Fee Structure</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Complete MyPAT Package: ₹3,000/- + GST</li>
                <li>Total Amount (including 18% GST): ₹3,540/-</li>
                <li>Optional Add-ons:
                  <ul>
                    <li>Video Solutions Package: ₹1,000/- + GST</li>
                    <li>Personalized Mentoring Sessions: ₹2,000/- + GST per session</li>
                  </ul>
                </li>
              </ul>
              <p><em>Note: Special discounts are available for students already enrolled in other Z7i programs. The fee structure is subject to change. Please refer to the official Z7i website for the most accurate and updated details.</em></p>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default MyPATProgram; 