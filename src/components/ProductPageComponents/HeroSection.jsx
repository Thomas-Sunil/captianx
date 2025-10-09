import React from 'react';
import FloatingIcon from '../../assets/Frame 1171276746.svg';
import MainImage from '../../assets/Vector (2).svg';

const HeroSection = () => {
  return (
    <div class="bg-gradient-to-t from-purple-200 to-transparent 
            py-16 px-4       /* Default (mobile) */
            md:py-24 md:px-8 /* Medium screens */
            lg:px-48 lg:pb-0 lg:pt-40 /* Large screens */">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
        {/* Text Section */}
        <div className="md:w-1/2 z-10">
          <h1 className="font-[Fustat] font-medium text-[56px] leading-[64px] text-gray-900">
            <span className="text-purple-600">6+</span> Smarter Solutions
          </h1>
          <p className="text-lg text-gray-500 mt-4 leading-relaxed">
            A complete AI-powered digital suite designed to<br />
            transform the sports ecosystem.
          </p>
          <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-300 group">
            Explore All 
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>

        {/* Image Section with Floating Icons */}
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          {/* Floating Icons Row */}
          <div className="flex justify-center gap-12 mb-8">
            <img 
              src={FloatingIcon} 
              alt="Floating Icon 1" 
              className="w-18 h-18 animate-custom-float"
            />
            <img 
              src={FloatingIcon} 
              alt="Floating Icon 2" 
              className="w-18 h-18 animate-custom-float"
              style={{ animationDelay: '0.3s' }}
            />
            <img 
              src={FloatingIcon} 
              alt="Floating Icon 3" 
              className="w-18 h-18 animate-custom-float"
              style={{ animationDelay: '0.6s' }}
            />
          </div>
          
          {/* Main Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md px-12">
              <img src={MainImage} alt="Main Graphic" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;