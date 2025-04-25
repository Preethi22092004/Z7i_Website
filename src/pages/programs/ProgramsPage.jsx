import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Layout from '../../components/Layout';
import FooterLinks from './FooterLinks';
import './ProgramsLayout.css';
import './FooterLinks.css';

const ProgramsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Program data structure
  const programCategories = [
    {
      id: 'classroom',
      title: 'CLASSROOM PROGRAMS',
      programs: [
        {
          id: 'little-genie',
          title: 'Little Genie One Year Foundation Program (Class VI)',
          link: '/programs/classroom/class-6/foundation'
        },
        {
          id: 'udaya-two-year',
          title: 'Udaya Two Year Classroom Program (Class VII)',
          link: '/programs/classroom/class-7/two-year'
        },
        {
          id: 'udaya-one-year',
          title: 'Udaya One Year Classroom Program (Class VIII)',
          link: '/programs/classroom/class-8/one-year'
        },
        {
          id: 'four-year-jee',
          title: 'Four Year Classroom Program for JEE Main & Advanced (Class IX)',
          link: '/programs/classroom/class-9/four-year-jee'
        },
        {
          id: 'ascent-two-year',
          title: 'Ascent Two Year Classroom Program (Class IX)',
          link: '/programs/classroom/class-9/two-year-ascent'
        },
        {
          id: 'three-year-jee',
          title: 'Three Year Classroom Program for JEE Main & Advanced (Class X)',
          link: '/programs/classroom/class-10/three-year-jee'
        },
        {
          id: 'ascent-one-year',
          title: 'Ascent One Year Classroom Program (Class X)',
          link: '/programs/classroom/class-10/one-year-ascent'
        },
        {
          id: 'two-year-jee',
          title: 'Two Year Classroom Program for JEE Main & Advanced (Class XI)',
          link: '/programs/classroom/class-11/two-year-jee'
        },
        {
          id: 'condensed-two-year',
          title: 'Two Year Condensed Classroom Program (Class XI)',
          link: '/programs/classroom/class-11/two-year-condensed'
        },
        {
          id: 'one-year-jee-main-adv-class12',
          title: 'One Year Classroom Program for JEE Main & Advanced (Class XII)',
          link: '/programs/classroom/class-12/one-year-jee'
        },
        {
          id: 'one-year-jee-main-class12',
          title: 'One Year Classroom Program for JEE Main (Class XII)',
          link: '/programs/classroom/class-12/one-year-jee-main'
        },
        {
          id: 'advanced-one-year',
          title: 'Advanced One Year Program for JEE Main & Advanced (XII Pass)',
          link: '/programs/classroom/class-12-pass/one-year-advanced'
        },
        {
          id: 'one-year-extended',
          title: 'One Year Extended Classroom Program for JEE Main & Advanced (XII Pass)',
          link: '/programs/classroom/class-12-pass/one-year-extended'
        },
        {
          id: 'accelerate-condensed',
          title: 'Accelerate – One Year Condensed Classroom Program from JEE Main & Advanced',
          link: '/programs/classroom/class-12-pass/accelerate'
        },
        {
          id: 'special-weekend',
          title: 'Special One Year Weekend Classroom Program for JEE Main & Advanced (Class XII)',
          link: '/programs/classroom/weekend/special'
        },
        {
          id: 'crash-courses',
          title: 'Crash Courses For JEE Main & Advanced',
          link: '/programs/classroom/crash-courses'
        }
      ]
    },
    {
      id: 'integrated',
      title: 'INTEGRATED PROGRAMS',
      programs: [
        {
          id: 'supreme-four-year',
          title: 'SUPREME Four Year Integrated School Program (Class IX)',
          link: '/programs/integrated/class-9/supreme'
        },
        {
          id: 'ramanujan-four-year',
          title: 'RAMANUJAN Four Year Integrated Program (Class IX)',
          link: '/programs/integrated/class-9/ramanujan'
        },
        {
          id: 'udaan-two-year',
          title: 'Udaan- 2 Year Classroom Integrated School Program / Classroom Integrated Program - Class 9',
          link: '/programs/integrated/class-9/udaan'
        },
        {
          id: 'panini-two-year',
          title: 'PANINI Two Year Integrated Program (Class XI)',
          link: '/programs/integrated/class-11/panini'
        },
        {
          id: 'pinnacle-two-year',
          title: 'PINNACLE Two Year Integrated School Program (Class XI)',
          link: '/programs/integrated/class-11/pinnacle'
        }
      ]
    },
    {
      id: 'non-classroom',
      title: 'NON CLASSROOM PROGRAMS',
      programs: [
        {
          id: 'junior-rankers-ix',
          title: 'Junior Rankers Study Material Program for NEET, JEE Main & Advanced (Class IX)',
          link: '/programs/non-classroom/class-9/junior-rankers'
        },
        {
          id: 'junior-rankers-x',
          title: 'Junior Rankers Study Material Program for NEET, JEE Main & Advanced (Class X)',
          link: '/programs/non-classroom/class-10/junior-rankers'
        },
        {
          id: 'computer-based-xi',
          title: 'Computer-Based Two Year All India Integrated Test Series Class XI',
          link: '/programs/non-classroom/class-11/computer-based'
        },
        {
          id: 'rankers-xi',
          title: 'Rankers Study Material (RSM) Two Year Program for JEE Main & JEE Advanced Class XI',
          link: '/programs/non-classroom/class-11/rankers'
        },
        {
          id: 'computer-based-all-india-xi',
          title: 'Computer Based All India Integrated Test Series Class XI',
          link: '/programs/non-classroom/class-11/computer-based-all-india'
        },
        {
          id: 'rankers-xii',
          title: 'Rankers Study Material (RSM) One Year Program for JEE Main & Advanced (Class XII)',
          link: '/programs/non-classroom/class-12/rsm'
        },
        {
          id: 'aits-xii',
          title: 'All India Test Series (AITS) for JEE Main & Advanced (Class XII)',
          link: '/programs/non-classroom/class-12/aits'
        },
        {
          id: 'gmp-xii',
          title: 'Grand Masters Package (GMP) for JEE Main & Advanced (Class XII)',
          link: '/programs/non-classroom/class-12/gmp'
        },
        {
          id: 'mypat-xii',
          title: 'myPAT Online Test Series for JEE Main & Advanced (Class XII)',
          link: '/programs/non-classroom/class-12/mypat'
        },
        {
          id: 'computer-based-xii',
          title: 'Computer Based All India Integrated Test Series Class XII',
          link: '/programs/non-classroom/class-12/computer-based'
        },
        {
          id: 'all-india-test',
          title: 'All India Test Series for JEE Main & Advanced Class XII & XII Pass',
          link: '/programs/non-classroom/class-12/all-india-test'
        },
        {
          id: 'grand-masters',
          title: 'Grand Masters Package (GMP)',
          link: '/programs/non-classroom/gmp'
        },
        {
          id: 'rsm-xii-pass',
          title: 'Rankers Study Material (RSM) One Year Program for JEE Main & Advanced (Class XII Pass)',
          link: '/programs/non-classroom/class-12-pass/rsm'
        },
        {
          id: 'aits-xii-pass',
          title: 'All India Test Series (AITS) for JEE Main & Advanced (Class XII Pass)',
          link: '/programs/non-classroom/class-12-pass/aits'
        },
        {
          id: 'gmp-xii-pass',
          title: 'Grand Masters Package (GMP) for JEE Main & Advanced (Class XII Pass)',
          link: '/programs/non-classroom/class-12-pass/gmp'
        },
        {
          id: 'mypat-xii-pass',
          title: 'myPAT Online Test Series for JEE Main & Advanced (Class XII Pass)',
          link: '/programs/non-classroom/class-12-pass/mypat'
        }
      ]
    }
  ];

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Filter categories for mobile
  const handleFilterChange = (e) => {
    setActiveFilter(e.target.value);
  };

  // Filter categories based on selection
  const filteredCategories = activeFilter === 'all' 
    ? programCategories 
    : programCategories.filter(category => category.id === activeFilter);

  return (
    <Layout>
      <div className="programs-page-wrapper">
        <div className="programs-container">
          <h1 className="main-title">Z7i Programs</h1>
          
          <div className="program-tabs-container">
            <button 
              className={`program-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              ALL PROGRAMS
            </button>
            <button 
              className={`program-tab ${activeFilter === 'classroom' ? 'active' : ''}`}
              onClick={() => setActiveFilter('classroom')}
            >
              CLASSROOM PROGRAMS
            </button>
            <button 
              className={`program-tab ${activeFilter === 'integrated' ? 'active' : ''}`}
              onClick={() => setActiveFilter('integrated')}
            >
              INTEGRATED PROGRAMS
            </button>
            <button 
              className={`program-tab ${activeFilter === 'non-classroom' ? 'active' : ''}`}
              onClick={() => setActiveFilter('non-classroom')}
            >
              NON-CLASSROOM PROGRAMS
            </button>
          </div>
          
          {/* Mobile filter dropdown */}
          <div className="filter-container">
            <select 
              className="filter-select" 
              value={activeFilter} 
              onChange={handleFilterChange}
            >
              <option value="all">All Programs</option>
              <option value="classroom">Classroom Programs</option>
              <option value="integrated">Integrated Programs</option>
              <option value="non-classroom">Non-Classroom Programs</option>
            </select>
          </div>

          {filteredCategories.map(category => (
            <div key={category.id} className="program-category">
              <h2 className="category-title">{category.title}</h2>
              <div className="program-grid">
                {category.programs.map(program => (
                  <Link 
                    key={program.id}
                    to={program.link}
                    className="program-item"
                  >
                    {program.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Links Section */}
        <div className="footer-links-wrapper">
          <FooterLinks />
          
          <div className="copyright-bar">
            <div className="copyright-inner">
              <p className="copyright-text">
                © {new Date().getFullYear()} Z7i Limited. All rights reserved
              </p>
              <Link to="/privacy" className="privacy-link">
                Privacy & Other Info
              </Link>
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <div 
          className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      </div>
    </Layout>
  );
};

export default ProgramsPage; 