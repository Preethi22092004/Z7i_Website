import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-1/4">
            <nav className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">About Us</h2>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/about/chairman"
                    className="block p-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                  >
                    Chairman's Message
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about/policies"
                    className="block p-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                  >
                    Policies
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about/our-journey"
                    className="block p-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                  >
                    Our Journey
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about/careers"
                    className="block p-3 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="w-full md:w-3/4">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;  // Changed from 'export default Banner' to 'export default About'
