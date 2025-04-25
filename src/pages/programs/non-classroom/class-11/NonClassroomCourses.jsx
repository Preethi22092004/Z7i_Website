import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NonClassroomPrograms.css';

const NonClassroomCourses = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <h1>Class 11 Non-Classroom Programs</h1>
        <h2>Flexible learning solutions for JEE & NEET preparation</h2>
      </div>

      <Container>
        <Row className="mb-4">
          <Col>
            <p className="lead text-center">
              Our non-classroom programs are designed for Class 11 students who prefer self-paced learning or need additional support alongside their regular studies.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={5}>
            {/* Simple Navigation Menu */}
            <div className="program-nav">
              <h4 className="program-category">Class XI Programs</h4>
              <Link to="/programs/non-classroom/class-11/rsm-program" className="program-item">
                Rankers Study Material (RSM)
              </Link>
              <Link to="/programs/non-classroom/class-11/aits-program" className="program-item">
                AITS Test Series
              </Link>
              <Link to="/programs/non-classroom/class-11/mypat-program" className="program-item">
                myPAT
              </Link>
              <Link to="#" className="program-item">
                Ultimate Success Course
              </Link>
              <Link to="#" className="program-item">
                Rank Booster Program
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
              <Link to="/programs/non-classroom/class-12" className="program-item">
                Class XII
              </Link>
              <Link to="/programs/non-classroom/class-12-pass" className="program-item">
                Class XII Pass
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
                  <li>Flexibility to learn at your own pace</li>
                  <li>Comprehensive study materials developed by experts</li>
                  <li>Regular assessments to track progress</li>
                  <li>Access to online resources and doubt clearing</li>
                  <li>Preparation for both board exams and competitive entrance tests</li>
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