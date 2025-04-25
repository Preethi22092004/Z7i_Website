import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WelcomePopup from '../components/WelcomePopup';
import bannerImage from '/images/banner.png';
import './Home.css';

function Home() {
  return (
    <>
      <WelcomePopup />
      <div className="home-container">
        <div className="hero-banner" style={{ 
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}>
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <h1>Welcome to Z7i Academy</h1>
            <p>Your Launchpad to Success in Competitive Exams</p>
            <div className="hero-buttons">
              <Link to="/admissions" className="hero-btn">Apply Now</Link>
              <Link to="/programs" className="hero-btn secondary">Explore Courses</Link>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="home-container">
            <section className="intro-section">
              <h2>Why Choose Z7i?</h2>
              <p>
                At Z7i, we provide world-class coaching to help students excel in JEE, NEET, NTSE, Olympiads, and school exams.
                With experienced faculty, proven track records, and a student-first approach, we ensure every student reaches their full potential.
              </p>
            </section>

            <section className="feature-section">
              <div className="feature-card">
                <h3>Expert Faculty</h3>
                <p>Learn from highly qualified and experienced teachers.</p>
              </div>
              <div className="feature-card">
                <h3>Comprehensive Material</h3>
                <p>Updated syllabus, notes, and tests modeled on actual exams.</p>
              </div>
              <div className="feature-card">
                <h3>Nationwide Results</h3>
                <p>Consistently producing top rankers across India.</p>
              </div>
            </section>

            <section className="results-section">
              <h2>Celebrating Our Students' Achievements</h2>
              <p>
                Z7i takes immense pride in the outstanding accomplishments of our students across various competitive examinations.
                Our commitment to excellence is reflected in the consistent top performances and selections in prestigious exams like
                IIT-JEE, NTSE, KVPY, and Olympiads.
              </p>

              <div className="results-category">
                <h3>IIT-JEE (Advanced) Results</h3>
                <p>
                  Our students have consistently secured top ranks in the IIT-JEE (Advanced) examination. The rigorous training,
                  comprehensive study materials, and personalized mentorship at Z7i have enabled students to achieve their dreams
                  of entering the IITs.
                </p>
              </div>

              <div className="results-category">
                <h3>NTSE Achievements</h3>
                <p>
                  The National Talent Search Examination (NTSE) is a prestigious scholarship program in India. Z7i students have
                  showcased exceptional performance, with numerous scholars emerging from our classrooms.
                </p>
              </div>

              <div className="results-category">
                <h3>KVPY Success</h3>
                <p>
                  The Kishore Vaigyanik Protsahan Yojana (KVPY) aims to encourage students to pursue research careers in science.
                  Z7i's specialized training programs have resulted in a significant number of our students qualifying for KVPY fellowships.
                </p>
              </div>

              <div className="results-category">
                <h3>Olympiad Excellence</h3>
                <p>
                  Z7i students have represented India in various International Olympiads, bringing laurels to the nation.
                  Our focused training modules prepare students for Mathematics, Physics, Chemistry, and Astronomy Olympiads,
                  ensuring they compete at the highest levels.
                </p>
              </div>

              <div className="results-category">
                <h3>Comprehensive Result Listings</h3>
                <p>
                  For detailed year-wise results, including student names, ranks, and achievements, please visit our official results page:
                  <br />
                  <a href="/results" style={{ color: '#007BFF', textDecoration: 'underline' }}>
                    View Full Results
                  </a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
