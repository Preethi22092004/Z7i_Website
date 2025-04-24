import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './NonClassroomPrograms.css';

const USCProgram = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Ultimate Success Course (USC)</h1>
          <h2 className="text-center">Class XI</h2>
        </Container>
      </div>

      <Container>
        <div className="cards-grid">
          <Card className="program-card">
            <Card.Header>Program Overview</Card.Header>
            <Card.Body>
              <p>The Ultimate Success Course (USC) is a comprehensive program designed to provide Class XI students with a structured and methodical approach to prepare for JEE (Main & Advanced), NEET, and other competitive examinations. The program integrates study materials, rigorous testing, and performance analytics to ensure students build a strong foundation for their engineering or medical entrance exam preparation journey.</p>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Objectives</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Build Strong Fundamentals: Develop a solid understanding of core concepts in Physics, Chemistry, and Mathematics/Biology.</li>
                <li>Systematic Preparation: Provide a structured approach to competitive exam preparation, aligning with the school curriculum.</li>
                <li>Regular Testing: Implement continuous assessment to ensure learning retention and identify improvement areas.</li>
                <li>Targeted Improvement: Focus on enhancing problem-solving abilities and analytical thinking skills required for competitive exams.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Program Structure</Card.Header>
            <Card.Body>
              <p>The USC program follows a meticulously planned structure:</p>
              <ul className="feature-list">
                <li>Study Materials: Comprehensive coverage of NCERT and additional topics as per the competitive exam syllabus.</li>
                <li>Regular Classes: Both offline and online classes conducted by experienced faculty.</li>
                <li>Doubt Clearing Sessions: Dedicated sessions to address students' academic queries.</li>
                <li>Periodic Testing: Regular tests to evaluate progress and understanding.</li>
                <li>Performance Analysis: Detailed feedback on test performance with actionable insights.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="program-card">
            <Card.Header>Key Features</Card.Header>
            <Card.Body>
              <ul className="feature-list">
                <li>Expert Faculty: Classes conducted by experienced teachers who specialize in preparing students for competitive exams.</li>
                <li>Comprehensive Study Material: Meticulously designed study materials covering the complete syllabus.</li>
                <li>Regular Assessments: Chapter-wise tests, cumulative assessments, and full-length mock exams.</li>
                <li>Personalized Attention: Small batch sizes to ensure individual attention to each student.</li>
                <li>Progress Monitoring: Regular parent-teacher meetings and performance reports.</li>
                <li>Digital Learning Platform: Access to online resources, recorded lectures, and additional practice questions.</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default USCProgram; 