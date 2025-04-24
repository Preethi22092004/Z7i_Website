import React from 'react';
import { FaBriefcase, FaGraduationCap, FaChartLine, FaGlobe } from 'react-icons/fa';
import './About.css';

const Careers = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Career at Z7i</h1>
        <h2>Join Our Mission of Educational Excellence</h2>
      </div>
      
      <div className="about-container">
        <div className="content-section">
          {/* Introduction */}
          <div className="timeline-item">
            <p>Z7i, established in 1992, has evolved from a forum for IIT-JEE preparation to a comprehensive educational institution. We are committed to nurturing talent and providing an environment that fosters growth, innovation, and excellence.</p>
          </div>

          {/* Vision & Mission */}
          <h2 className="section-title">Vision & Mission</h2>
          <div className="timeline-item">
            <h3>Vision</h3>
            <ul>
              <li>To be a dominant player in the domain of Entrance Exams Training</li>
              <li>To create international standard boarding schools</li>
              <li>To promote a publishing house with innovative content</li>
              <li>To leverage our brand strength for diversified education services</li>
            </ul>
          </div>

          <div className="timeline-item">
            <h3>Mission</h3>
            <ul>
              <li>To provide valued services in education</li>
              <li>To participate in different spheres of education</li>
              <li>To develop efficient tools for better delivery</li>
              <li>To make these tools available to educational enterprises worldwide</li>
            </ul>
          </div>

          {/* Career Tracks */}
          <h2 className="section-title">Career Tracks</h2>
          <div className="timeline-item">
            <h3><FaGraduationCap className="track-icon" /> Teaching Track</h3>
            <p>For passionate educators who want to shape future IITians.</p>
            <ul>
              <li>Competitive salary (₹6L - ₹1.2Cr p.a.)</li>
              <li>Professional development programs</li>
              <li>Performance-based incentives</li>
              <li>Medical & accidental insurance</li>
            </ul>
          </div>
          
          <div className="timeline-item">
            <h3><FaBriefcase className="track-icon" /> Business Track</h3>
            <p>For professionals driving operational excellence.</p>
            <ul>
              <li>Dynamic work environment</li>
              <li>Career progression opportunities</li>
              <li>Comprehensive benefits package</li>
              <li>Children's education allowance</li>
            </ul>
          </div>
          
          <div className="timeline-item">
            <h3><FaChartLine className="track-icon" /> Research & Development Track</h3>
            <p>For innovators and researchers pushing educational boundaries.</p>
            <ul>
              <li>Access to cutting-edge resources</li>
              <li>Collaborative projects</li>
              <li>Research grants</li>
              <li>Publication opportunities</li>
            </ul>
          </div>

          {/* Training & Development */}
          <h2 className="section-title">Training & Development</h2>
          <div className="timeline-item">
            <p>Z7i emphasizes continuous learning and development. Selected faculty undergo rigorous training at our centers to ensure they are well-equipped to deliver quality education.</p>
            <ul>
              <li>Comprehensive training programs</li>
              <li>Mentorship opportunities</li>
              <li>Regular skill development workshops</li>
              <li>Leadership development initiatives</li>
            </ul>
          </div>

          {/* Global Presence */}
          <h2 className="section-title">Our Global Presence</h2>
          <div className="timeline-item">
            <h3><FaGlobe className="track-icon" /> India</h3>
            <p>Present in over 50 cities including Delhi, Mumbai, Chennai, Bangalore</p>
          </div>

          <div className="timeline-item">
            <h3><FaGlobe className="track-icon" /> International</h3>
            <p>Expanding to Bahrain, Dubai, Singapore, and other global locations</p>
          </div>

          {/* Apply Section */}
          <div className="contact-section">
            <h2>Ready to Join Us?</h2>
            <p>Take the first step towards an exciting career with Z7i</p>
            <p className="application-note">The recruitment process includes:</p>
            <ul>
              <li>Online application</li>
              <li>Self-appraisal</li>
              <li>Technical assessment</li>
              <li>Personal interview</li>
            </ul>
            <a href="/careers/apply" className="apply-button">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;