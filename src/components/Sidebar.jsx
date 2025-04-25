import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';


const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { title: 'Admission Test Dates', link: '/admissionsdates', noHero: true },
    { title: 'Downloads', link: '/resources/downloads', noHero: true },
    { title: 'Centres', link: '/about/centres', noHero: true },
    { title: 'Hostels', link: '/facilities/hostels', noHero: true },
    { title: 'World School', link: '/schools/world-school', noHero: true },
    { title: 'Global School', link: '/schools/global-school', noHero: true },
    { title: 'Must Read', link: '/resources/must-read', noHero: true },
    { title: 'FAQs', link: '/support/faqs', noHero: true },
    { title: 'Testimonials', link: '/about/testimonials', noHero: true },
    { title: 'eSchool', link: '/resources/eschool', noHero: true },
    { title: 'myPAT', link: '/resources/mypat', noHero: true }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sidebar-overlay"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 sidebar-container"
          >
            <div className="flex flex-col h-full sidebar-content">
              <div className="p-4 border-b">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {menuItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors sidebar-item"
                    onClick={onClose}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>

              <div className="p-4 border-t">
                <NavLink
                  to="/login"
                  className="block w-full bg-blue-900 text-white text-center py-3 rounded-lg hover:bg-blue-800 transition-colors"
                  onClick={onClose}
                >
                  Login
                </NavLink>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;