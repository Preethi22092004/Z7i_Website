import React from 'react';

const GlobalSchool = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Z7i Global School</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">International Education Standards</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Programs</h3>
            <ul className="space-y-2 text-gray-600">
              <li>International Baccalaureate (IB)</li>
              <li>Cambridge International</li>
              <li>Global Exchange Programs</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>International Faculty</li>
              <li>Global Exposure</li>
              <li>Modern Infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSchool;
