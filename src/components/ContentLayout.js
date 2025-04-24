import React from 'react';

const ContentLayout = ({ title, children }) => {
  return (
    <div className="content-layout">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout; 