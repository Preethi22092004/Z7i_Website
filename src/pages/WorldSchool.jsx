import React from 'react';

const WorldSchool = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Z7i World School</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Excellence in Education</h2>
        <p className="text-gray-600 mb-6">
          Z7i World School offers a unique blend of academic excellence and holistic development.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold mb-2">Academic Programs</h3>
            <ul className="space-y-2 text-gray-600">
              <li>CBSE Curriculum</li>
              <li>International Curriculum</li>
              <li>Integrated JEE Preparation</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-lg font-semibold mb-2">Facilities</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Smart Classrooms</li>
              <li>Sports Complex</li>
              <li>Advanced Laboratories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldSchool;
