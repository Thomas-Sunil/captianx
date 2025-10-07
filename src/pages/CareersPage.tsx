import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-red-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-red-800 mb-6">Join Our Team!</h1>
      <p className="text-lg text-gray-700">Explore exciting opportunities to grow with us.</p>
      <button className="mt-8 px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300">
        View Open Positions
      </button>
    </div>
  );
};

export default CareersPage;