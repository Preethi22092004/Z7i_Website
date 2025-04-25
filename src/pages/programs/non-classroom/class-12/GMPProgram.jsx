import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const GMPProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Grand Masters Package (GMP)</h1>
          <h2 className="text-center">For JEE Main & Advanced – Class XII (2025)</h2>
        </Container>
      </div>

      <Container>
        <Accordion defaultActiveKey="0" className="program-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Program Overview</Accordion.Header>
            <Accordion.Body>
              <p>The Grand Masters Package (GMP) is an elite non-classroom program designed for Class XII students aiming for top ranks in JEE Main & Advanced. This premium package combines the best of Z7i's Rankers Study Material, All India Test Series, and myPAT Online Test Series to provide a comprehensive and holistic preparation platform for serious JEE aspirants.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Key Features</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Comprehensive Study Material: Advanced-level content developed by subject experts, covering all topics in Physics, Chemistry, and Mathematics required for JEE Main & Advanced.</li>
                <li>Topic-wise Discussion Sheets: Focused materials that dive deep into each topic, ensuring thorough understanding and mastery.</li>
                <li>Problem Solving Techniques: Methodical approaches to solve complex problems, enhancing analytical and problem-solving abilities.</li>
                <li>Integrated All India Test Series: National-level tests that benchmark student performance against peers from across the country.</li>
                <li>myPAT Online Testing Platform: Access to thousands of practice questions and mock tests, with advanced analytics to track progress.</li>
                <li>Success Potential Reports: Personalized analysis and feedback on strengths and areas for improvement after each test.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Program Structure</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Duration: 1 Year (Class XII)</li>
                <li>Components:
                  <ul>
                    <li><strong>Rankers Study Material (RSM)</strong>: Comprehensive study material for JEE Main & Advanced</li>
                    <li><strong>All India Test Series (AITS)</strong>: Computer-based national level tests held at regular intervals</li>
                    <li><strong>myPAT Online Test Series</strong>: Web-based platform for additional practice and assessment</li>
                  </ul>
                </li>
                <li>Delivery Schedule:
                  <ul>
                    <li>Materials are dispatched in four phases throughout the academic year</li>
                    <li>Phase 1: April-May</li>
                    <li>Phase 2: July-August</li>
                    <li>Phase 3: October-November</li>
                    <li>Phase 4: December-January</li>
                  </ul>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Eligibility</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Students moving from Class XI to XII who are seriously preparing for JEE Main & Advanced.</li>
                <li>Students who have a strong foundation in Physics, Chemistry, and Mathematics.</li>
                <li>Students who are self-motivated and can maintain a disciplined study schedule with minimal supervision.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Enrollment Process</Accordion.Header>
            <Accordion.Body>
              <ol className="feature-list">
                <li>Visit the official Z7i Non-Classroom Programs website: www.z7inonclassroomprograms.com</li>
                <li>Select the Grand Masters Package (GMP) – Class XII.</li>
                <li>Complete the application form with all required details.</li>
                <li>Pay the program fee online through secure payment gateways (Credit Card, Debit Card, Net Banking, UPI).</li>
                <li>Receive confirmation email with enrollment details and study material dispatch schedule.</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Fee Structure</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Grand Masters Package (Complete): ₹22,500/- (inclusive of all taxes)</li>
                <li>Components:
                  <ul>
                    <li>Rankers Study Material: ₹12,000/-</li>
                    <li>All India Test Series: ₹5,900/- (₹5,000 + 18% GST)</li>
                    <li>myPAT Online Test Series: ₹4,600/- (₹3,900 + 18% GST)</li>
                  </ul>
                </li>
                <li>Payment Options:
                  <ul>
                    <li>Full Payment at the time of enrollment</li>
                    <li>Installment Option: 60% at the time of enrollment, 40% after three months</li>
                  </ul>
                </li>
              </ul>
              <p>Note: Early Bird Discount of 10% is available for enrollments completed before April 30, 2024.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default GMPProgram; 