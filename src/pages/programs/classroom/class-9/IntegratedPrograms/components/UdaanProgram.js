import React from 'react';
import { Card, Table, ListGroup } from 'react-bootstrap';

const UdaanProgram = () => {
  return (
    <div className="program-details">
      <h3>UDAAN – Two Year Integrated School Program</h3>
      <p className="subtitle">For Students Moving from Class VIII to IX</p>

      <Card>
        <Card.Body>
          <h4>Program Structure</h4>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Duration</th>
                <th>Classes</th>
                <th>Subjects Covered</th>
                <th>Contact Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 Years</td>
                <td>IX and X</td>
                <td>Physics, Chemistry, Mathematics, Biology, Social Studies, Mental Ability</td>
                <td>Approximately 586 hours</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h4>Program Objectives</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>Holistic Education: Integrate school academics with preparation for NTSE, Olympiads, and other competitive exams.</ListGroup.Item>
            <ListGroup.Item>Stress Reduction: Eliminate the need for separate coaching by providing all necessary preparation within the school schedule.</ListGroup.Item>
            <ListGroup.Item>Time Optimization: Maximize productive study time by reducing travel and redundant learning.</ListGroup.Item>
            <ListGroup.Item>Comprehensive Development: Foster intellectual growth, analytical thinking, and problem-solving skills.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h4>Key Features</h4>
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

      <Card>
        <Card.Body>
          <h4>Testing & Evaluation</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>Phase Tests: Conducted after each phase to assess understanding and retention.</ListGroup.Item>
            <ListGroup.Item>All India Internal Test Series (AIiTS): National-level tests to benchmark performance against peers.</ListGroup.Item>
            <ListGroup.Item>Class Learning Improvement Program (CLIP): Additional sessions for students who have completed all assignments to further enhance their performance.</ListGroup.Item>
            <ListGroup.Item>JEE Archive: Access to a comprehensive question bank with answers from previous years' JEE (Main & Advanced) papers.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h4>Admission Process</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>Application: Obtain and fill out the application form available at Z7i centers or online.</ListGroup.Item>
            <ListGroup.Item>Entrance Test: Appear for the Z7i Admission Test scheduled for the respective program.</ListGroup.Item>
            <ListGroup.Item>Selection: Based on test performance, selected candidates will be offered admission.</ListGroup.Item>
            <ListGroup.Item>Enrollment: Complete the enrollment process by submitting necessary documents and fees.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h4>Fee Structure</h4>
          <Card.Text>
            Z7i's Integrated School Programs are part of our social initiative, and the fees charged are less than the cost of delivery. This ensures that quality education is accessible to deserving students. For detailed fee information, please contact your nearest Z7i center.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h4>Contact Information</h4>
          <Card.Text>
            For more details about the UDAAN – Two Year Integrated School Program, admission procedures, or fee structure, please contact your nearest Z7i center or visit the official website: <a href="https://www.Z7i.com" target="_blank" rel="noopener noreferrer">www.Z7i.com</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UdaanProgram;
