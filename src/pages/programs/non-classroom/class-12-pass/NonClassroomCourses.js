import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NonClassroomPrograms.css';

const NonClassroomCourses = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <h1>Class XII Pass Non-Classroom Programs</h1>
        <h2>Flexible learning solutions for JEE Main & Advanced preparation</h2>
      </div>

      <Container>
        <Row className="mb-4">
          <Col>
            <p className="lead text-center">
              Our non-classroom programs are designed for Class XII Pass students who need comprehensive preparation for JEE Main & Advanced with focused study materials and test series.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={5}>
            {/* Simple Navigation Menu */}
            <div className="program-nav">
              <h4 className="program-category">Class XII Pass Programs</h4>
              <Link to="/programs/non-classroom/class-12-pass/rsm" className="program-item">
                Rankers Study Material (RSM)
              </Link>
              <Link to="/programs/non-classroom/class-12-pass/aits" className="program-item">
                All India Test Series (AITS)
              </Link>
              <Link to="/programs/non-classroom/class-12-pass/gmp" className="program-item">
                Grand Masters Package (GMP)
              </Link>
              <Link to="/programs/non-classroom/class-12-pass/mypat" className="program-item">
                myPAT Online Test Series
              </Link>
            </div>
            
            <div className="program-nav mt-4">
              <h4 className="program-category">Other Classes</h4>
              <Link to="/programs/non-classroom/class-9" className="program-item">
                Class IX
              </Link>
              <Link to="/programs/non-classroom/class-10" className="program-item">
                Class X
              </Link>
              <Link to="/programs/non-classroom/class-11" className="program-item">
                Class XI
              </Link>
              <Link to="/programs/non-classroom/class-12" className="program-item">
                Class XII
              </Link>
            </div>
          </Col>
          
          <Col lg={8} md={7}>
            <div className="content-section p-4">
              <h3>Available Programs</h3>
              <p>Please select a program from the menu on the left to view details.</p>
              
              <div className="info-box mt-4 p-4">
                <h4>Why Choose Our Non-Classroom Programs?</h4>
                <ul>
                  <li>Focused preparation for JEE Main & Advanced for students who have passed Class XII</li>
                  <li>Comprehensive study materials designed by JEE experts</li>
                  <li>Intensive test series with detailed analytics</li>
                  <li>Online testing platform with detailed performance tracking</li>
                  <li>Flexible learning options for students focusing solely on entrance exams</li>
                  <li>Access to high-quality content without attending physical classes</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NonClassroomCourses; 