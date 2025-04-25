import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import Sidebar from './Sidebar';
import transparentLogo from '../assets/z7i-logo-transparent.png';

const NavigationBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar expand="lg" sticky="top" className="custom-navbar">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="brand-logo">
            <img src={transparentLogo} alt="Z7i Education" className="nav-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto main-nav">
              <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
              
              <NavDropdown title="ABOUT US" id="about-dropdown" className="custom-dropdown">
                <div className="mega-menu">
                  <NavDropdown.Item as={NavLink} to="/about/chairman">Chairman's Message</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/about/policies">Policies & Info</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/about/journey">Our Journey</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/about/careers">Careers at Z7i</NavDropdown.Item>
                </div>
              </NavDropdown>

              <NavDropdown title="TARGET EXAMS" id="target-exams-dropdown" className="custom-dropdown">
                <div className="mega-menu">
                  <div className="menu-section">
                    <h6>JEE PROGRAMS</h6>
                    <NavDropdown.Item as={NavLink} to="/target-exams/jee-advanced">JEE Advanced</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/target-exams/jee-main">JEE Main</NavDropdown.Item>
                  </div>
                  <NavDropdown.Divider />
                  <div className="menu-section">
                    <h6>MEDICAL PROGRAMS</h6>
                    <NavDropdown.Item as={NavLink} to="/target-exams/neet">NEET-UG</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/target-exams/aiims">AIIMS</NavDropdown.Item>
                  </div>
                  <NavDropdown.Divider />
                  <div className="menu-section">
                    <h6>MODE OF STUDY</h6>
                    <NavDropdown.Item as={NavLink} to="/target-exams/classroom">Classroom Programs</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/target-exams/online">Online Programs</NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>

              <NavDropdown title="PROGRAMS" id="programs-dropdown" className="custom-dropdown">
                <div className="mega-menu">
                  <div className="menu-section">
                    <NavLink to="/programs" className="program-link view-all-link">
                      <strong>View All Programs</strong>
                    </NavLink>
                    <NavDropdown.Divider />
                    <h6>CLASSROOM PROGRAMS</h6>
                    
                    {/* Class VI dropdown */}
                    <div className="class-dropdown-item">
                      Class VI <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/classroom/class-6/little-genie" 
                          className="program-link"
                        >
                          LITTLE GENIE - One Year Foundation Program
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class VII dropdown */}
                    <div className="class-dropdown-item">
                      Class VII <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/classroom/class-7/udaya" 
                          className="program-link"
                        >
                          UDAYA - Two-Year Classroom Program
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class VIII dropdown */}
                    <div className="class-dropdown-item">
                      Class VIII <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/classroom/class-8/udaya" 
                          className="program-link"
                        >
                          UDAYA - One-Year Classroom Program
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class IX dropdown */}
                    <div className="class-dropdown-item">
                      Class IX <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/classroom/class-9/four-year-jee" 
                          className="program-link"
                        >
                          Z7i Four-Year Classroom Program for JEE (Main & Advanced)
                        </NavLink>
                        <NavLink 
                          to="/programs/classroom/class-9/ascent" 
                          className="program-link"
                        >
                          ASCENT – Two Year Classroom Program
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class X dropdown */}
                    <div className="class-dropdown-item">
                      Class X <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/classroom/class-10/three-year-jee" 
                          className="program-link"
                        >
                          Z7i Three-Year Classroom Program for JEE (Main & Advanced)
                        </NavLink>
                        <NavLink 
                          to="/programs/classroom/class-10/ascent-one-year" 
                          className="program-link"
                        >
                          Z7i ASCENT One-Year Classroom Program
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class XI dropdown */}
                    <div className="class-dropdown-item">
                      Class XI <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/classroom/class-11/two-year-jee" 
                          className="program-link"
                        >
                          Z7i Two-Year Classroom Program for JEE (Main & Advanced)
                        </NavLink>
                        <NavLink 
                          to="/programs/classroom/class-11/condensed" 
                          className="program-link"
                        >
                          Z7i Two Year Condensed Classroom Program
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class XII dropdown */}
                    <div className="class-dropdown-item">
                      Class XII <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/classroom/class-12/one-year-jee" 
                          className="program-link"
                        >
                          One Year Classroom Program for JEE (Main & Advanced)
                        </NavLink>
                        <NavLink 
                          to="/programs/classroom/class-12/one-year-main" 
                          className="program-link"
                        >
                          One Year Classroom Program for JEE (Main)
                        </NavLink>
                        <NavLink 
                          to="/programs/classroom/class-12/special-one-year" 
                          className="program-link"
                        >
                          Special One Year Classroom Program for JEE (Main & Advanced)
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class XII Pass dropdown */}
                    <div className="class-dropdown-item">
                      Class XII Pass <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/classroom/class-12-pass/extended" 
                          className="program-link"
                        >
                          One Year Extended Program for JEE (Advanced)
                        </NavLink>
                        <NavLink 
                          to="/programs/classroom/class-12-pass/one-year-jee" 
                          className="program-link"
                        >
                          One Year Program for JEE (Main & Advanced)
                        </NavLink>
                        <NavLink 
                          to="/programs/classroom/class-12-pass/special-one-year" 
                          className="program-link"
                        >
                          Special One Year Program for JEE (Main & Advanced)
                        </NavLink>
                        <NavLink 
                          to="/programs/classroom/class-12-pass/accelerate" 
                          className="program-link"
                        >
                          One Year Accelerate Program for JEE (Main & Advanced)
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Crash Courses dropdown */}
                    <div className="class-dropdown-item">
                      Z7i Crash Courses <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/classroom/crash-courses" 
                          className="program-link"
                        >
                          Z7i Crash Courses for JEE (Main & Advanced)
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <NavDropdown.Divider />
                  <div className="menu-section">
                    <h6>INTEGRATED SCHOOL PROGRAMS</h6>
                    
                    {/* Class IX dropdown with child programs */}
                    <div className="class-dropdown-item">
                      Class IX <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/integrated/class-9/supreme" 
                          className="program-link"
                        >
                          SUPREME – Four Year Integrated School Program
                        </NavLink>
                        <NavLink 
                          to="/programs/integrated/class-9/ramanujan" 
                          className="program-link"
                        >
                          RAMANUJAN – Four Year Integrated School Program
                        </NavLink>
                        <NavLink 
                          to="/programs/integrated/class-9/udaan" 
                          className="program-link"
                        >
                          UDAAN – Two Year Integrated School Program
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class XI dropdown with child programs */}
                    <div className="class-dropdown-item">
                      Class XI <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/integrated/class-11/panini" 
                          className="program-link"
                        >
                          PANINI – Two Year Integrated Program
                        </NavLink>
                        <NavLink 
                          to="/programs/integrated/class-11/pinnacle" 
                          className="program-link"
                        >
                          PINNACLE – Two Year Integrated School Program
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <NavDropdown.Divider />
                  <div className="menu-section">
                    <h6>NON CLASSROOM PROGRAMS</h6>
                    
                    {/* Class IX dropdown with child programs */}
                    <div className="class-dropdown-item">
                      Class IX <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/non-classroom/class-9/jrsm" 
                          className="program-link"
                        >
                          Junior Rankers Study Material (JRSM) – Two Year Foundation Program
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-9/mypat" 
                          className="program-link"
                        >
                          myPAT – India's Largest Online Learning & Assessment Platform
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class X dropdown with child programs */}
                    <div className="class-dropdown-item">
                      Class X <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/non-classroom/class-10/jrsm" 
                          className="program-link"
                        >
                          Junior Rankers Study Material (JRSM) – One Year Foundation Program
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-10/mypat" 
                          className="program-link"
                        >
                          myPAT – India's Largest Online Learning & Assessment Platform
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class XI dropdown with child programs */}
                    <div className="class-dropdown-item">
                      Class XI <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/non-classroom/class-11/rsm" 
                          className="program-link"
                        >
                          Rankers Study Material (RSM) – Two-Year Program for JEE Main & Advanced
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-11/aits" 
                          className="program-link"
                        >
                          Computer-Based All India Integrated Test Series (AITS-CBT)
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-11/mypat" 
                          className="program-link"
                        >
                          myPAT – India's Largest Online Learning & Assessment Platform
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class XII dropdown with child programs */}
                    <div className="class-dropdown-item">
                      Class XII <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/non-classroom/class-12/rsm" 
                          className="program-link"
                        >
                          Rankers Study Material (RSM) – One-Year Program for JEE Main & Advanced
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-12/aits" 
                          className="program-link"
                        >
                          All India Test Series (AITS) for JEE Main & Advanced
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-12/gmp" 
                          className="program-link"
                        >
                          Grand Masters Package (GMP) for JEE Main & Advanced
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-12/mypat" 
                          className="program-link"
                        >
                          myPAT Online Test Series for JEE Main & Advanced
                        </NavLink>
                      </div>
                    </div>
                    
                    {/* Class XII Pass dropdown with child programs */}
                    <div className="class-dropdown-item">
                      Class XII Pass <span className="arrow-icon">›</span>
                      <div className="program-submenu">
                        <NavLink 
                          to="/programs/non-classroom/class-12-pass/rsm" 
                          className="program-link"
                        >
                          Rankers Study Material (RSM) – One-Year Program for JEE Main & Advanced
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-12-pass/aits" 
                          className="program-link"
                        >
                          All India Test Series (AITS) for JEE Main & Advanced
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-12-pass/gmp" 
                          className="program-link"
                        >
                          Grand Masters Package (GMP) for JEE Main & Advanced
                        </NavLink>
                        <NavLink 
                          to="/programs/non-classroom/class-12-pass/mypat" 
                          className="program-link"
                        >
                          myPAT Online Test Series for JEE Main & Advanced
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </NavDropdown>

              <Nav.Link as={NavLink} to="/admissions" className="admission-button">
                UPCOMING&nbsp;ADMISSION&nbsp;TEST
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/results">RESULTS</Nav.Link>
              
              <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>
            </Nav>
            
            <button className="toggle-button" onClick={() => setIsSidebarOpen(true)}>
            
              <FaBars size={20} />
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default NavigationBar;
