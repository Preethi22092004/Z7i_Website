// components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to Z7i Academy
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Your Launchpad to Success in Competitive Exams
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Explore Courses
            </Link>
            <Link
              to="/admissions"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
