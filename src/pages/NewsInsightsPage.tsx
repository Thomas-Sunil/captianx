import React from 'react';

const NewsInsightsPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-yellow-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-yellow-800 mb-6">News & Insights</h1>
      <p className="text-lg text-gray-700">Stay updated with our latest developments and thoughts.</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">Article Title 1</h2>
          <p className="text-gray-600">A brief summary of the exciting news...</p>
          <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-orange-700 mb-2">Insightful Post 2</h2>
          <p className="text-gray-600">Deep dive into industry trends...</p>
          <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsInsightsPage;