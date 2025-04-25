import React from 'react';
import { HomeIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Hostels = () => {
  const facilities = [
    { icon: HomeIcon, title: "AC Accommodation", description: "Well-furnished AC rooms with modern amenities" },
    { icon: ShieldCheckIcon, title: "24/7 Security", description: "Round-the-clock security with CCTV surveillance" },
    { icon: AcademicCapIcon, title: "Study Environment", description: "Dedicated study rooms with mentor support" }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Hostel Facilities</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {facilities.map((facility, index) => {
          const Icon = facility.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h2>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hostels;
