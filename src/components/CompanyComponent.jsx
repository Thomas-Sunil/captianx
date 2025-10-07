import React from 'react';
import { useNavigate } from 'react-router-dom';
import companyImage from '../assets/Oracle_Riyadh-Innovation-Hub.png'; // Adjust path if necessary

const CompanyComponent = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/company');
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Left Text Section */}
      <div className="lg:w-1/2 max-w-lg lg:pr-16 mb-10 lg:mb-0">
        <p className="text-purple-700 font-medium mb-2 text-base sm:text-lg">Company</p>
        <h2 className="font-fustat text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-[-0.58px] text-gray-900 mb-6">
          Redefining Sports
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
          We are transforming the sports ecosystem with AI-powered technology that empowers academies and
          federations to streamline operations, enhance athlete performance, and elevate every sporting experience.
        </p>
        <button
          onClick={handleLearnMoreClick}
          // Added hover effects and transition for smoothness
          className="flex items-center text-purple-700 font-medium text-lg 
                     hover:text-purple-800 hover:translate-x-1 
                     transition-all duration-200 ease-in-out" 
        >
          Learn More
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={companyImage}
          alt="Sports data analysis hub"
          className="rounded-xl shadow-lg object-cover"
          style={{ width: '695px', height: '464px' }} // Apply the specified dimensions
        />
      </div>
    </div>
  );
};

export default CompanyComponent;