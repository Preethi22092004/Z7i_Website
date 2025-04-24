import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const GMPProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Grand Masters Package (GMP)</h1>
          <h2 className="text-center">For JEE Main & Advanced – Class 12 Pass (2025)</h2>
        </Container>
      </div>

      <Container>
        <Accordion defaultActiveKey="0" className="program-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Program Overview</Accordion.Header>
            <Accordion.Body>
              <p>Z7i's Grand Masters Package (GMP) is a premier non-classroom program meticulously designed for Class 12 pass students aspiring to excel in JEE Main and Advanced. This comprehensive preparation package combines cutting-edge study materials, strategic problem-solving techniques, and personalized guidance to optimize your performance. The GMP is tailored to address the specific needs of students who have completed their board exams and are now fully dedicated to cracking India's most challenging engineering entrance examinations.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Key Features</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Comprehensive Study Material: Expertly crafted course material covering the entire JEE syllabus in Physics, Chemistry, and Mathematics.</li>
                <li>Strategic Problem-Solving Techniques: Learn efficient approaches to tackle complex problems across all difficulty levels.</li>
                <li>Periodic Progress Evaluation: Regular assessments aligned with the JEE pattern to track preparation status.</li>
                <li>Doubt Resolution: Access to online doubt-clearing sessions conducted by experienced faculty.</li>
                <li>Performance Analysis: Detailed reports highlighting strengths and improvement areas to refine preparation strategy.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Package Components</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Subject-wise Study Materials: Covers theoretical concepts, examples, and practice problems.</li>
                <li>Problem Banks: Collection of JEE-level questions segregated by topic and difficulty level.</li>
                <li>Mock Tests: Full-length tests simulating the actual JEE environment.</li>
                <li>Previous Years' Questions: Solved papers from past JEE Main and Advanced exams with detailed solutions.</li>
                <li>Formula Books: Comprehensive compilation of important formulas and concepts for quick revision.</li>
                <li>Online Test Platform: Access to Z7i's digital assessment platform for additional practice.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Ideal For</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Class 12 pass students preparing for JEE Main and Advanced in the upcoming session.</li>
                <li>Students who prefer self-study with structured learning materials.</li>
                <li>Aspirants looking for comprehensive preparation material without formal classroom coaching.</li>
                <li>Students preparing for their second attempt at JEE who need focused guidance.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Enrollment Details</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Eligibility: Open to all aspirants of JEE Main and Advanced who have passed Class XII.</li>
                <li>Enrollment Process:
                  <ol>
                    <li>Register through our official website or visit your nearest Z7i center.</li>
                    <li>Complete the registration form with your academic details and contact information.</li>
                    <li>Process the payment online or at the center to confirm your enrollment.</li>
                    <li>Receive your comprehensive study package along with access credentials to our online platform.</li>
                    <li>Attend the orientation session (online/offline) to understand how to maximize the benefits of the program.</li>
                  </ol>
                </li>
                <li>Early Bird Discount: Enroll before June 30th to avail a 10% discount on the program fee.</li>
                <li>Special Offer: Current Z7i students receive a loyalty discount of 15% on the program fee.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Fee Structure</Accordion.Header>
            <Accordion.Body>
              <ul className="feature-list">
                <li>Program Fee: ₹7,080/- (inclusive of GST)</li>
                <li>Payment Options:
                  <ul>
                    <li>One-time payment</li>
                    <li>EMI options available with select banks</li>
                  </ul>
                </li>
              </ul>
              <p>Note: The fee structure is subject to change. Please check the latest fee details on our website or at your nearest Z7i center.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default GMPProgram; 