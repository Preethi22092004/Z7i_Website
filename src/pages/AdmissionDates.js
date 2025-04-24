import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AdmissionDates.css';

const admissionSteps = [
  {
    title: 'Step 1: Select a Program',
    content:
      'Choose the suitable program based on your class and target exam. Z7i offers programs for JEE, NTSE, Olympiads, and school excellence.',
  },
  {
    title: 'Step 2: Fill Application Form',
    content:
      'Fill the online or offline admission form with accurate personal, academic and contact details.',
  },
  {
    title: 'Step 3: Take the Admission Test',
    content:
      'Appear in the Z7i Admission Test on scheduled dates. Performance in the test determines your eligibility and scholarship.',
  },
  {
    title: 'Step 4: Results & Counseling',
    content:
      'Post results, students are guided via counseling sessions about course enrollment, batch allocation, and further instructions.',
  },
  {
    title: 'Step 5: Fee Payment & Enrollment',
    content:
      'Pay the applicable fee through online/offline mode to confirm your seat and start your academic journey with Z7i.',
  },
];

const testDates = [
  { date: '30th March 2025', mode: 'Offline Mode' },
  { date: '2nd April 2025', mode: 'Proctored Online Mode' },
  { date: '6th April 2025', mode: 'Offline Mode', note: 'Backup date for states with extended Board Exams' }
];

const registrationFees = {
  junior: {
    title: 'Classes VI to VIII',
    offline: '₹300/-',
    online: '₹500/-'
  },
  senior: {
    title: 'Classes IX to XII',
    offline: '₹500/-',
    online: '₹800/-'
  }
};

const testStructure = {
  junior: {
    title: 'For Classes VI to VIII',
    papers: [
      {
        title: 'Paper 1',
        sections: [
          { name: 'Mental Ability', duration: '45 minutes' },
          { name: 'Mental Ability - Higher Order Thinking Skills', duration: '60 minutes' }
        ]
      },
      {
        title: 'Paper 2',
        sections: [
          { name: 'Mathematics for NTSE', duration: '20 minutes' },
          { name: 'Physics, Chemistry & Mathematics for JEE Main', duration: '30 minutes' }
        ]
      }
    ]
  },
  senior: {
    title: 'For Classes IX to XII',
    description: 'Two papers focusing on Physics, Chemistry, Mathematics, and Mental Ability'
  }
};

const AdmissionDates = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'dates', label: 'Test Dates' },
    { id: 'registration', label: 'Registration' },
    { id: 'structure', label: 'Test Structure' },
    { id: 'results', label: 'Results & Enrollment' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-z7i-orange text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-z7i-blue">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Z7i conducts Admission Tests to identify and nurture talented students aspiring for excellence in various competitive examinations. These tests serve as a gateway for students to join our Classroom, Integrated School, or Live Online Classroom Programs.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-z7i-blue mb-2">Eligibility</h3>
              <p className="text-gray-600">
                Students currently in Class V to XI (going to Class VI to XII in the upcoming academic session) are eligible to appear for the Admission Test.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'dates' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-z7i-blue mb-4">Upcoming Test Dates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testDates.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="text-xl font-bold text-z7i-orange mb-2">{item.date}</div>
                  <div className="text-gray-600 mb-2">{item.mode}</div>
                  {item.note && (
                    <div className="text-sm text-gray-500 italic">{item.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add remaining tab content sections */}
      </motion.div>

      {/* Contact Information */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-z7i-blue mb-4">Contact Information</h2>
        <div className="space-y-2">
          <p className="text-gray-600">
            <strong>National Admissions Office:</strong><br />
            Z7i House, 29-A, Kalu Sarai, Near Hauz Khas Metro Station<br />
            Sarvapriya Vihar, New Delhi - 110016
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +91 7825895400<br />
            <strong>Email:</strong> info@z7i.com
          </p>
        </div>
      </div>
    </div>
  );
};

function Admissions() {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <>
      {/* Banner Section */}
      <div className="relative h-[40vh] bg-z7i-blue overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/images/admission-banner.jpg")',
            filter: 'brightness(0.6)'
          }}
        />
        
        {/* Content Overlay */}
        <div className="relative h-full flex items-center justify-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Admissions Process
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Join Z7i's legacy of excellence — unlock your academic potential
            </p>
          </motion.div>
        </div>
      </div>

      {/* Steps Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg">
            {admissionSteps.map((step, index) => (
              <div 
                key={index}
                className="border-b last:border-b-0 border-gray-200"
              >
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-z7i-blue">
                    {step.title}
                  </span>
                  <span className="text-2xl text-z7i-orange">
                    {openStep === index ? '−' : '+'}
                  </span>
                </button>
                {openStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 text-gray-600 bg-gray-50"
                  >
                    {step.content}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmissionDates;
