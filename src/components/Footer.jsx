// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-logo">
            <Link to="/">
              <img src="/images/z7i-logo-transparent.png" alt="Z7i Logo" className="footer-logo-img" />
            </Link>
          </div>
          
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Contact Details</h4>
              <p>Z7i House, 29-A, Kalu Sarai, Sarvapriya Vihar</p>
              <p>New Delhi -110016</p>
              <p>info@z7i.com</p>
              <p>011-49283471 / 73 / 75</p>
              <p>1800 11 4242</p>
              
              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/images/Facebook4.png" alt="Facebook" className="social-logo-img" /><i className="fab fa-facebook-f"></i></a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/images/Twitter.png" alt="X" className="social-logo-img" /><i className="fab fa-twitter"></i></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/images/Instagram.png" alt="Instagram" className="social-logo-img" /><i className="fab fa-instagram"></i></a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src="/images/ytb.jpeg" alt="Youtube" className="social-logo-img" /><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
            
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/about/centres">Our Centres</Link></li>
                <li><Link to="/facilities/hostels">Hostels</Link></li>
                <li><Link to="/resources/downloads">Downloads</Link></li>
                <li><Link to="/admissionsdates">Admission Test Dates</Link></li>
                <li><Link to="/results">Results</Link></li>
                <li><Link to="/about/testimonials">Testimonials</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Programs</h4>
              <ul className="footer-links">
                <li><Link to="/programs/classroom">Classroom Programs</Link></li>
                <li><Link to="/programs/integrated">Integrated Programs</Link></li>
                <li><Link to="/programs/non-classroom">Non-Classroom Programs</Link></li>
                <li><Link to="/programs/crash-courses">Crash Courses</Link></li>
                <li><Link to="/resources/eschool">eSchool</Link></li>
                <li><Link to="/resources/mypat">myPAT</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Additional Resources</h4>
              <ul className="footer-links">
                <li><Link to="/about/chairman">Chairman's Message</Link></li>
                <li><Link to="/target-exams">Target Exams</Link></li>
                <li><Link to="/support/faqs">FAQs</Link></li>
                <li><Link to="/resources/must-read">Must Read</Link></li>
                <li><Link to="/about/careers">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Z7i. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
