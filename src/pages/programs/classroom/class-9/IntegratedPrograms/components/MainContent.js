import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const MainContent = () => {
  return (
    <div className="program-details">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Z7i Integrated School Programs</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">
            Empowering Students for JEE (Main & Advanced), Board Exams, Olympiads, and Beyond
          </Card.Subtitle>
          <Card.Text>
            Z7i's Integrated School Programs are meticulously designed to provide students with a unified and comprehensive educational experience. By seamlessly blending school curriculum with competitive exam preparation, these programs aim to eliminate the stress of juggling multiple coaching classes and school responsibilities. Students benefit from synchronized learning that caters to academic excellence and competitive success.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Program Objectives</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Holistic Education: Integrate school academics with preparation for JEE (Main & Advanced), Olympiads, NTSE, and other competitive exams.</ListGroup.Item>
            <ListGroup.Item>Stress Reduction: Eliminate the need for separate coaching by providing all necessary preparation within the school schedule.</ListGroup.Item>
            <ListGroup.Item>Time Optimization: Maximize productive study time by reducing travel and redundant learning.</ListGroup.Item>
            <ListGroup.Item>Comprehensive Development: Foster intellectual growth, analytical thinking, and problem-solving skills.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Program Offerings</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>SUPREME – Four Year Integrated School Program</strong><br />
              Eligibility: Students moving from Class VIII to IX.<br />
              Duration: 4 Years (Classes IX to XII).<br />
              Focus: Preparation for JEE (Main & Advanced), Excellence in Class X and XII Board Exams, Training for Olympiads, NTSE, IOQM, IOQJS, and other scholastic exams.<br />
              Features: Synchronized study plan covering school and competitive syllabi, Regular assessments and feedback mechanisms, Emphasis on mental ability and analytical skills development.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>RAMANUJAN – Four Year Integrated School Program</strong><br />
              Eligibility: Students moving from Class VIII to IX.<br />
              Duration: 4 Years (Classes IX to XII).<br />
              Focus: In-depth preparation for JEE (Main & Advanced), Strong foundation in Physics, Chemistry, and Mathematics, Development of problem-solving techniques and exam temperament.<br />
              Features: Comprehensive study material and workbooks, All India Internal Test Series (AIiTS) and Phase Tests, Regular doubt-clearing sessions and personalized mentoring.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>PINNACLE – Two Year Integrated School Program</strong><br />
              Eligibility: Students moving from Class X to XI.<br />
              Duration: 2 Years (Classes XI and XII).<br />
              Focus: Targeted preparation for JEE (Main & Advanced), Achieving top ranks in Class XII Board Exams, Participation and success in Olympiads and other competitive exams.<br />
              Features: Integrated curriculum aligning school and competitive exam syllabi, Approximately 1,364 hours of classroom instruction, Access to Rank Improvement Programs and Grand Masters Package.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>PANINI – Two Year Integrated School Program</strong><br />
              Eligibility: Students moving from Class X to XI.<br />
              Duration: 2 Years (Classes XI and XII).<br />
              Focus: Comprehensive preparation for JEE (Main & Advanced), Strengthening conceptual understanding and application skills, Balancing academic rigor with extracurricular activities.<br />
              Features: Customized study plans catering to individual learning needs, Regular performance tracking and feedback, Emphasis on developing a strong academic foundation.
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Key Features Across All Programs</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Integrated Curriculum: Seamless blending of school syllabus with competitive exam preparation.</ListGroup.Item>
            <ListGroup.Item>Expert Faculty: Experienced educators specializing in competitive exam coaching.</ListGroup.Item>
            <ListGroup.Item>Comprehensive Study Material: Well-researched content covering all necessary topics.</ListGroup.Item>
            <ListGroup.Item>Regular Assessments: Frequent tests to monitor progress and identify areas for improvement.</ListGroup.Item>
            <ListGroup.Item>Personalized Mentoring: One-on-one guidance to address individual student needs.</ListGroup.Item>
            <ListGroup.Item>Stress Management: Programs designed to reduce academic pressure and promote well-being.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Admission Process</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Application: Obtain and fill out the application form available at Z7i centers or online.</ListGroup.Item>
            <ListGroup.Item>Entrance Test: Appear for the Z7i Admission Test scheduled for the respective program.</ListGroup.Item>
            <ListGroup.Item>Selection: Based on test performance, selected candidates will be offered admission.</ListGroup.Item>
            <ListGroup.Item>Enrollment: Complete the enrollment process by submitting necessary documents and fees.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Fee Structure</Card.Title>
          <Card.Text>
            Z7i's Integrated School Programs are part of our social initiative, and the fees charged are less than the cost of delivery. This ensures that quality education is accessible to deserving students. For detailed fee information, please contact your nearest Z7i center.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Contact Information</Card.Title>
          <Card.Text>
            For more details about the Integrated School Programs, admission procedures, or fee structure, please contact your nearest Z7i center or visit the official website: <a href="https://www.Z7i.com" target="_blank" rel="noopener noreferrer">www.Z7i.com</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainContent;
