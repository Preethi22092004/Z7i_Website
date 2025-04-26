import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
      <Container>
        <Row className="g-4">
          {[
            {
              header: "Head Office",
              content: (
                <>
                <div className="contact-content-wrapper">
                  <div className="info-section">
                    <div className="address-section">
                  <p>
                        <strong>Z7i LTD.</strong>
                        <br />
                        Z7i House, 29-A, Kalu Sarai,
                        <br />
                        Sarvapriya Vihar,
                    <br />
                        (Near Hauz Khas Bus Terminal),
                    <br />
                        New Delhi-110016
                  </p>
                  <ul className="feature-list">
                        <li>E-mail: info@fiitjee.com</li>
                        <li>For Admissions: 7825895400</li>
                  </ul>
                    </div>
                    <div className="location-text">
                      <strong>Location:</strong> Near Hauz Khas Metro Station, South Delhi
                    </div>
                  </div>
                  <div className="map-section">
                    <div className="map-responsive">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5983521526355!2d77.19219491508094!3d28.5457850825337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dad79cad16f%3A0x27cade20cf0e14c4!2sFIITJEE%20House!5e0!3m2!1sen!2sin!4v1620898253129!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
                </>
              ),
            },
            {
            header: "Prayagraj Centre",
              content: (
                <>
                <div className="contact-content-wrapper">
                  <div className="info-section">
                    <div className="address-section">
                      <p>
                        <strong>Z7i Prayagraj</strong>
                        <br />
                        11E, 9 A Edmonston Road,
                        <br />
                        Opposite NIP, Near Patrika Chowk,
                        <br />
                        Civil Lines, 2, Tashkent Marg,
                        <br />
                        near Z7i Coaching, Civil Lines,
                        <br />
                        Prayagraj, Uttar Pradesh 211001
                  </p>
                  <ul className="feature-list">
                        <li>Website: <a href="https://www.fiitjeeallahabad.com/" target="_blank" rel="noopener noreferrer">www.fiitjeeallahabad.com</a></li>
                  </ul>
                    </div>
                    <div className="location-text">
                      <strong>Location:</strong> Near Civil Lines Metro Station, Prayagraj
                    </div>
                  </div>
                  <div className="map-section">
                    <div className="map-responsive">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4731106091333!2d81.84058937538559!3d25.45573947759655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acad38971bf7f%3A0x6f121dd2a7952675!2sFIITJEE%20Prayagraj%20Centre!5e0!3m2!1sen!2sin!4v1709641611754!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                  </div>
                </>
              ),
            },
          ].map((item, index) => (
          <Col key={index} xs={12} className="d-flex">
              <Card className="program-card flex-fill">
                <Card.Header>{item.header}</Card.Header>
                <Card.Body>{item.content}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  );
};

export default Contact;