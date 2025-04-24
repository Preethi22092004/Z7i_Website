import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const location = useLocation();

  // Pages that should display the banner
  const pagesWithBanner = {
    
    '/admissionsdates': {
      title: 'Admission Test Dates',
      subtitle: 'Plan Your Future',
      backgroundImage: '/images/admissions-hero.png',
      imagePosition: {
        y: '20%'  // Adjust this percentage to move image position
      }
    },
    '/resources/downloads': {
      title: 'Downloads',
      subtitle: 'Access Study Materials & Resources',
      backgroundImage: '/images/downloads-hero.png',
      imagePosition: {
        y: '40%'  // Adjust this percentage to move image position
      }
    },
    '/about/centres': {
      title: 'Our Centres',
      subtitle: 'Find a Z7i Near You',
      backgroundImage: '/images/centres.png',
      imagePosition: {
        y: '30%'  // Adjust this percentage to move image position
      }
    },
    '/facilities/hostels': {
      title: 'Hostel Facilities',
      subtitle: 'Your Home Away from Home',
      backgroundImage: '/images/hostel.png',
      imagePosition: {
        y: '25%'  // Adjust this percentage to move image position
      }
    },
    '/schools/world-school': {
      title: 'World School',
      subtitle: 'Global Education Standards',
      backgroundImage: '/images/globalschool.png'
    },
    '/schools/global-school': {
      title: 'Global School',
      subtitle: 'International Learning Environment',
      backgroundImage: '/images/globalschool.png'
    },
    '/resources/must-read': {
      title: 'A Must Read For All',
      subtitle: 'Essential Information for Students & Parents',
      backgroundImage: '/images/mustread.png',
      imagePosition: {
        y: '30%'  // Adjust this percentage to move image position
      }
    },
    '/support/faqs': {
      title: 'Frequently Asked Questions',
      subtitle: 'Get Your Answers Here',
      backgroundImage: '/images/downloads-hero.png',
      imagePosition: {
        y: '40%'  // Adjust this percentage to move image position
      }
    },
    '/about/testimonials': {
      title: 'Student Testimonials',
      subtitle: 'Success Stories That Inspire',
      backgroundImage: '/images/admissions-hero.png',
      imagePosition: {
        y: '-0.6%'  // Adjust this percentage to move image position
      }
    },
    '/resources/eschool': {
      title: 'eSchool',
      subtitle: 'Digital Learning Platform',
      backgroundImage: '/images/globalschool.png'
    },
    '/resources/mypat': {
      title: 'myPAT',
      subtitle: 'Personalized Assessment Tool',
      backgroundImage: '/images/mustread.png',
      imagePosition: {
        y: '30%'  // Adjust this percentage to move image position
      }
    },
    '/results': {
      title: 'Our Results',
      subtitle: 'Track Record of Excellence',
      backgroundImage: '/images/downloads-hero.png',
      imagePosition: {
        y: '40%'  // Adjust this percentage to move image position
      }
    },
    '/why-z7i': {
      title: 'Why Choose Z7i?',
      subtitle: 'Leading the Way in Education',
      backgroundImage: '/images/Z7i-hero.png',
      imagePosition: {
        y: '10%'  // Adjust this percentage to move image position
      }
    },
    '/contact': {
      title: 'Contact Us',
      subtitle: 'Get in Touch with Us',
      backgroundImage: '/images/default-hero.png',
      imagePosition: {
        y: '10%'  // Adjust this percentage to move image position
      }
    }
  };

  const bannerProps = pagesWithBanner[location.pathname];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed navbar with higher z-index */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Banner with increased top margin */}
      {bannerProps && (
        <div className="mt-16">
          <Banner 
            title={bannerProps.title}
            subtitle={bannerProps.subtitle}
            backgroundImage={bannerProps.backgroundImage}
            imagePosition={bannerProps.imagePosition}
          />
        </div>
      )}

      {/* Main content */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex-grow ${!bannerProps ? 'mt-24' : ''} px-4 py-6`}
      >
        {children}
      </motion.main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;