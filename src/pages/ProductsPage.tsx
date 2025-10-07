import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Amazing Products</h1>
      <p className="text-lg text-gray-600">Discover a range of solutions crafted for your needs.</p>
      {/* More product content will go here */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Product Alpha</h2>
          <p className="text-gray-600">A cutting-edge solution for modern challenges.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Product Beta</h2>
          <p className="text-gray-600">Reliable and efficient, designed for performance.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Product Gamma</h2>
          <p className="text-gray-600">Tailored for unique requirements with flexibility.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;