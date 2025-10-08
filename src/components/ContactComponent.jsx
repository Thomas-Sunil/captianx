// ContactComponent.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const ContactComponent = () => {
  return (
    <div className="relative bg-white py-20 px-4 sm:px-8 overflow-hidden">
      {/* Top-left blurred gradient circle */}
      <div
        className="absolute hidden lg:block"
        style={{
          background: 'radial-gradient(circle at center, #6843EC 0%, rgba(104, 67, 236, 0) 70%)',
          filter: 'blur(150px)',
          width: '600px',
          height: '600px',
          opacity: '0.2',
          top: '-300px',
          left: '-300px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      ></div>

      {/* Bottom-right blurred gradient circle */}
      <div
        className="absolute hidden lg:block"
        style={{
          background: 'radial-gradient(circle at center, #6843EC 0%, rgba(104, 67, 236, 0) 70%)',
          filter: 'blur(150px)',
          width: '600px',
          height: '600px',
          opacity: '0.2',
          bottom: '-300px',
          right: '-300px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2
          className="font-fustat font-normal text-gray-900 tracking-normal mb-6"
          style={{
            fontSize: '56px',
            lineHeight: '64px',
          }}
        >
          Ready to Lead the Future <br className="hidden sm:inline" />of Sport?
        </h2>
        <p className="font-fustat text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Explore CaptainX and discover how AI can elevate your game, your team, and your legacy.
        </p>
        <Link
          to="/contact"
          className="group inline-flex items-center justify-center px-4 py-3 h-14
                     bg-[#6843EC] rounded-full text-white text-lg font-medium shadow-lg
                     transition-all duration-300 ease-in-out hover:scale-105"
        >
          Lets Talk
          <div className="ml-4 h-10 w-10 bg-white rounded-full flex items-center justify-center">
            <svg
              className="h-5 w-5 text-[#6843EC] transition-transform duration-300 ease-in-out group-hover:translate-x-1"
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

export default ContactComponent;