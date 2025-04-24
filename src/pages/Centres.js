import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Centres = () => {
  const centres = [
    { city: "Delhi", locations: ["South Delhi", "East Delhi", "West Delhi"], phone: "+91-1234567890" },
    { city: "Mumbai", locations: ["Andheri", "Borivali", "Chembur"], phone: "+91-9876543210" },
    { city: "Bangalore", locations: ["Whitefield", "Electronic City"], phone: "+91-8765432109" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto py-8 px-4"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Centres</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {centres.map((centre, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <MapPinIcon className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">{centre.city}</h2>
            </div>
            <ul className="space-y-2 mb-4">
              {centre.locations.map((location, idx) => (
                <li key={idx} className="text-gray-600">{location}</li>
              ))}
            </ul>
            <p className="text-blue-600">{centre.phone}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Centres;
