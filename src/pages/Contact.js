import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="program-container">
      <div className="program-header text-center">
        <Container>
          <h1>CONTACT US</h1>
          <h2>Get in touch with us</h2>
        </Container>
      </div>

      <Container>
        <Row className="g-4">
          {[
            {
              header: "Head Office",
              content: (
                <>
                  <p>
                    <strong>FIITJEE LTD.</strong>
                    <br />
                    FIITJEE House, 29-A, Kalu Sarai, Sarvapriya Vihar
                    <br />
                    (Near Hauz Khas Bus Terminal), New Delhi – 110016
                  </p>
                  <ul className="feature-list">
                    <li>Phone: 011-49283471 / 73 / 74 / 75</li>
                    <li>All India Toll-Free No.: 1800 11 4242</li>
                    <li>Email: info@fiitjee.com</li>
                    <li>Fax: 011-26513942</li>
                    <li>Website: www.fiitjee.com</li>
                  </ul>
                </>
              ),
            },
            {
              header: "For Admissions Related Queries",
              content: (
                <>
                  <p>
                    Please contact the respective FIITJEE Centres or reach out
                    to us at:
                  </p>
                  <ul className="feature-list">
                    <li>Phone: 7825895400</li>
                    <li>Email: info@fiitjee.com</li>
                  </ul>
                </>
              ),
            },
            {
              header: "For Enquiries Related to FIITJEE eSchool",
              content: (
                <ul className="feature-list">
                  <li>Email: query@fiitjee-eschool.com</li>
                </ul>
              ),
            },
            {
              header: "For Distance Education Queries",
              content: (
                <ul className="feature-list">
                  <li>Email: dist.edu@fiitjee.com</li>
                </ul>
              ),
            },
            {
              header: "For Online Registration Queries",
              content: (
                <ul className="feature-list">
                  <li>Email: online@fiitjee.com</li>
                </ul>
              ),
            },
            {
              header: "For Career Opportunities",
              content: (
                <ul className="feature-list">
                  <li>Visit: www.fiitjeehr.com</li>
                </ul>
              ),
            },
            {
              header: "For IT Grievance",
              content: (
                <ul className="feature-list">
                  <li>Name: Renu Agrawal</li>
                  <li>Email: cs@z7i.com</li>
                  <li>Phone: 011-46106000</li>
                </ul>
              ),
            },
            {
              header: "Centre Locator",
              content: (
                <>
                  <p>Find a FIITJEE Centre Near You:</p>
                  <div className="text-center mt-3">
                    <a href="#" className="btn btn-primary">
                      FIITJEE Centre Locator
                    </a>
                  </div>
                </>
              ),
            },
          ].map((item, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="d-flex">
              <Card className="program-card flex-fill">
                <Card.Header>{item.header}</Card.Header>
                <Card.Body>{item.content}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Col md={6} lg={4} id="map">
            <div className="map-container">
              <h3 className="text-center mb-4">Our Location</h3>
              <div className="map-responsive">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5983521526355!2d77.19219491508094!3d28.5457850825337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dad79cad16f%3A0x27cade20cf0e14c4!2sFIITJEE%20House!5e0!3m2!1sen!2sin!4v1620898253129!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </Col> */}

      </Container>
    </div>
  );
};

export default Contact;