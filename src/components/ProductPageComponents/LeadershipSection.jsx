import React from 'react';
import { Link } from 'react-router-dom';

const LeadershipSection = () => {
  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-8 lg:py-28 lg:px-48 overflow-hidden">
      {/* Top-right blurred gradient circle */}
      <div
        className="absolute hidden lg:block"
        style={{
          background: 'radial-gradient(circle at center, #4A90E2 0%, rgba(74, 144, 226, 0) 70%)',
          filter: 'blur(150px)',
          width: '500px',
          height: '500px',
          opacity: '0.2',
          top: '-250px',
          right: '-250px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      ></div>

      {/* Bottom-left blurred gradient circle */}
      <div
        className="absolute hidden lg:block"
        style={{
          background: 'radial-gradient(circle at center, #4A90E2 0%, rgba(74, 144, 226, 0) 70%)',
          filter: 'blur(150px)',
          width: '500px',
          height: '500px',
          opacity: '0.2',
          bottom: '-250px',
          left: '-250px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2
          className="font-fustat font-normal text-gray-900 tracking-normal mb-8"
          style={{
            fontSize: '56px',
            lineHeight: '64px',
          }}
        >
          Ready to Power Your <br className="hidden sm:inline" />Sports Future?
        </h2>
        <p className="font-fustat text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Join the next generation of sports using SportX One to transform tournaments, and fan experiences.
        </p>
        <Link
          to="/leadership"
          className="group inline-flex items-center justify-center px-6 py-3 h-14 bg-[#683FEA] rounded-full text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
          style={{
            fontFamily: 'Fustat',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '20px',
            leadingTrim: 'none',
            lineHeight: '30px',
            letterSpacing: '0%',
            textAlign: 'center',
            verticalAlign: 'middle',
            textTransform: 'capitalize',
          }}
        >
          Explore Solutions
          <div className="ml-5 h-10 w-10 bg-white rounded-full flex items-center justify-center">
            <svg
              className="h-5 w-5 text-[#683FEA] transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LeadershipSection;