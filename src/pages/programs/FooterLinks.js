import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterest } from 'react-icons/fa';

const FooterLinks = () => {
  return (
    <div className="footer-links-container">
      <div className="footer-column">
        <h3>About Z7i</h3>
        <p className="about-text">
          Z7i, Forum for IIT-JEE, is an institution of excellence 
          preparing committed Students for IIT-JEE and many other 
          prestigious entrance and competitive examinations. Started 
          in Delhi in 1992, it is present across cities and towns to 
          reach excellent Students nationwide.
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/fiitjeeindia123?_gl=1*q3lynf*_gcl_au*MTY2NTQ5MzQ0My4xNzQ1MjEyMzI2*_ga*OTE0OTIyNDExLjE3NDUyMTIzMjc.*_ga_0BGV4R5C6D*MTc0NTQ5MDM5Ny40LjEuMTc0NTQ5MTY2NS4wLjAuMA.." target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://x.com/fiitjee?_gl=1*t35g0g*_gcl_au*MTY2NTQ5MzQ0My4xNzQ1MjEyMzI2*_ga*OTE0OTIyNDExLjE3NDUyMTIzMjc.*_ga_0BGV4R5C6D*MTc0NTQ5MDM5Ny40LjEuMTc0NTQ5MTY3Mi4wLjAuMA.." target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/fiitjee.india/?_gl=1*17r0ssk*_gcl_au*MTY2NTQ5MzQ0My4xNzQ1MjEyMzI2*_ga*OTE0OTIyNDExLjE3NDUyMTIzMjc.*_ga_0BGV4R5C6D*MTc0NTQ5MDM5Ny40LjEuMTc0NTQ5MTY4OC4wLjAuMA.." target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGdDRL9elqX2AAAAZZnag6w48_Q_j5rzE406NEnC9IsaAmBIOanjv3MA-X8KfPNSBX_5BdkhbLdW3fMSE02d80_HDW4mJHQ1CKm8ozQ_lF_oHujXw6L2nHxOt1N1blgpAqWcl8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ffiitjee%2F%3F_gl%3D1*1m38ap6*_gcl_au*MTY2NTQ5MzQ0My4xNzQ1MjEyMzI2*_ga*OTE0OTIyNDExLjE3NDUyMTIzMjc.*_ga_0BGV4R5C6D*MTc0NTQ5MDM5Ny40LjEuMTc0NTQ5MTcwNS4wLjAuMA.." target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/user/fiitjeeltd" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaYoutube />
          </a>
          <a href="https://in.pinterest.com/fiitjee0550/?_gl=1*1l6owfy*_gcl_au*MTY2NTQ5MzQ0My4xNzQ1MjEyMzI2*_ga*OTE0OTIyNDExLjE3NDUyMTIzMjc.*_ga_0BGV4R5C6D*MTc0NTQ5MDM5Ny40LjEuMTc0NTQ5MTc0Mi4wLjAuMA.." target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaPinterest />
          </a>
        </div>
      </div>

      <div className="footer-column">
        <h3>ADDRESS</h3>
        <address className="address-info">
          Z7i HOUSE, 29-A, KALU SARAI,<br />
          SARVAPRIYA VIHAR, NEW DELHI -110016<br /><br />
          Helpline Number: +91 7825895400<br />
          E-MAIL: <a href="mailto:INFO@Z7i.COM">INFO@Z7i.COM</a>
        </address>
      </div>

      <div className="footer-column">
        <h3>QUICK LINKS</h3>
        <ul className="footer-links">
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/centres">Centres</Link></li>
          <li><Link to="/hostels">Hostels</Link></li>
          <li><Link to="/downloads">Download Centre</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/terms/enrolment">Terms & Condition for Enrolment</Link></li>
          <li><Link to="/terms/registration">Terms & Condition for Registration</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/cancellation">Cancellation and Refund</Link></li>
          <li><Link to="/shipping">Shipping and Delivery</Link></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>ABOUT US</h3>
        <ul className="footer-links">
          <li><Link to="/about/chairman">Chairman's Message</Link></li>
          <li><Link to="/about/why-z7i">Why Only Z7i?</Link></li>
          <li><Link to="/results">Z7i Results</Link></li>
          <li><Link to="/must-read">A MUST Read for All</Link></li>
        </ul>

        <h3 className="mt-4">Z7i EXAMS</h3>
        <ul className="footer-links">
          <li><Link to="/exams/talent-reward">Z7i Talent Reward Exam</Link></li>
          <li><Link to="/exams/big-bang">Big Bang Edge Test</Link></li>
          <li><Link to="/exams/dronacharya-1">DRONACHARYA (I)</Link></li>
          <li><Link to="/exams/dronacharya-2">DRONACHARYA (II)</Link></li>
          <li><Link to="/exams/escape-velocity">Escape Velocity Test (EVT)</Link></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>TARGET EXAMS</h3>
        <ul className="footer-links">
          <li><Link to="/target-exams/jee-advanced">JEE Advanced</Link></li>
          <li><Link to="/target-exams/jee-main">JEE Main</Link></li>
          <li><Link to="/target-exams/olympiads">Olympiads</Link></li>
        </ul>

        <h3 className="mt-4">OTHER VERTICALS</h3>
        <ul className="footer-links">
          <li><Link to="/resources/mypat">myPAT</Link></li>
          <li><Link to="/resources/eschool">e-School</Link></li>
          <li><Link to="/schools/global">Z7i Global School</Link></li>
          <li><Link to="/schools/world">Z7i World School</Link></li>
        </ul>

        <h3 className="mt-4">PROGRAMS</h3>
        <ul className="footer-links">
          <li><Link to="/programs/classroom">CLASSROOM PROGRAMS</Link></li>
          <li><Link to="/programs/integrated">INTEGRATED PROGRAMS</Link></li>
          <li><Link to="/programs/non-classroom">NON CLASSROOM PROGRAMS</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks; 