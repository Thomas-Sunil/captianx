import React from 'react';

const CompanyPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-blue-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-blue-800 mb-6">About Our Company</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Innovate Technologies is dedicated to pushing the boundaries of what's possible.
        We believe in innovation, collaboration, and creating impactful solutions for our clients and the world.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To empower businesses with cutting-edge technology and foster a culture of continuous improvement and excellence.
          </p>
          <a href="/mission-details" className="text-blue-600 hover:underline mt-2 inline-block">Learn More</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Our Values</h2>
          <p className="text-gray-600">
            Innovation, Integrity, Customer Focus, Teamwork, and Social Responsibility.
          </p>
          <a href="/values-details" className="text-blue-600 hover:underline mt-2 inline-block">Explore Our Values</a>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Our History</h2>
        <p className="text-gray-700 max-w-3xl text-center">
          Founded in [Year], we've grown from a small startup into a leading technology provider,
          consistently delivering innovative solutions and building strong partnerships.
        </p>
      </div>
    </div>
  );
};

export default CompanyPage;