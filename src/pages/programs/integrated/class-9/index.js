import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const IntegratedPrograms = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i Integrated School Programs</h1>
          <h2 className="text-center">Empowering Students for JEE (Main & Advanced), Board Exams, Olympiads, and Beyond</h2>
        </Container>
      </div>

      <Container className="program-content py-5">
        <Row className="g-4 mb-5">
          <Col md={12}>
            <Card className="content-card">
              <Card.Body>
                <Card.Title>Overview</Card.Title>
                <Card.Text>
                  Z7i's Integrated School Programs are meticulously designed to provide students with a unified and comprehensive educational experience. By seamlessly blending school curriculum with competitive exam preparation, these programs aim to eliminate the stress of juggling multiple coaching classes and school responsibilities. Students benefit from synchronized learning that caters to academic excellence and competitive success.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          <Col md={12}>
            <Card className="content-card">
              <Card.Body>
                <Card.Title>Program Objectives</Card.Title>
                <ul className="feature-list">
                  <li>Holistic Education: Integrate school academics with preparation for JEE (Main & Advanced), Olympiads, NTSE, and other competitive exams.</li>
                  <li>Stress Reduction: Eliminate the need for separate coaching by providing all necessary preparation within the school schedule.</li>
                  <li>Time Optimization: Maximize productive study time by reducing travel and redundant learning.</li>
                  <li>Comprehensive Development: Foster intellectual growth, analytical thinking, and problem-solving skills.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="section-heading text-center mb-4">Available Programs for Class IX</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>SUPREME Program</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">Four Year Integrated School Program</Card.Subtitle>
                <Card.Text>
                  A comprehensive four-year program designed for students moving from Class VIII to IX, focusing on JEE (Main & Advanced) preparation along with school curriculum.
                </Card.Text>
                <div className="text-center mt-3">
                  <Button
                    as={Link}
                    to="/programs/integrated/class-9/supreme"
                    variant="primary"
                    className="program-button"
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>RAMANUJAN Program</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">Four Year Integrated School Program</Card.Subtitle>
                <Card.Text>
                  A rigorous four-year program for students moving from Class VIII to IX with strong emphasis on developing problem-solving techniques and exam temperament.
                </Card.Text>
                <div className="text-center mt-3">
                  <Button
                    as={Link}
                    to="/programs/integrated/class-9/ramanujan"
                    variant="primary"
                    className="program-button"
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="content-card h-100">
              <Card.Body>
                <Card.Title>UDAAN Program</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">Two Year Integrated School Program</Card.Subtitle>
                <Card.Text>
                  A focused two-year program for students moving from Class VIII to IX, preparing them for NTSE, Olympiads, and other competitive exams.
                </Card.Text>
                <div className="text-center mt-3">
                  <Button
                    as={Link}
                    to="/programs/integrated/class-9/udaan"
                    variant="primary"
                    className="program-button"
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          <Col md={12}>
            <Card className="content-card">
              <Card.Body>
                <Card.Title>Contact Information</Card.Title>
                <Card.Text>
                  For more details about the Integrated School Programs, admission procedures, or fee structure, please contact your nearest Z7i center or visit the official website: <a href="https://www.Z7i.com" target="_blank" rel="noopener noreferrer">www.Z7i.com</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntegratedPrograms; 