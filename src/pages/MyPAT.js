import React from 'react';

const MyPAT = () => {
  const features = [
    {
      title: "Online Tests",
      points: ["Subject-wise tests", "Full-length JEE mock tests", "Performance analytics"]
    },
    {
      title: "Study Resources",
      points: ["Video solutions", "Detailed reports", "Personalized feedback"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">myPAT - Online Testing Platform</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">{feature.title}</h2>
            <ul className="space-y-2">
              {feature.points.map((point, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPAT;
