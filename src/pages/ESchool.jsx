import React from 'react';

const ESchool = () => {
  const features = [
    { title: "Live Classes", description: "Interactive online sessions with expert faculty" },
    { title: "Study Material", description: "Comprehensive digital study resources" },
    { title: "Practice Tests", description: "Regular online assessments and mock tests" }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Z7i eSchool</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Online Learning Platform</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ESchool;
