import React from 'react';

const PartnersPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-green-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-green-800 mb-6">Our Valued Partners</h1>
      <p className="text-lg text-gray-700">Collaborating for mutual success and growth.</p>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {['Partner A', 'Partner B', 'Partner C', 'Partner D', 'Partner E', 'Partner F'].map((partner, index) => (
          <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="text-xl font-medium text-gray-800">{partner}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage;