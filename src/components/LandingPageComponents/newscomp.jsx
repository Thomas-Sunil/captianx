import React, { useState } from 'react';

const NewsInsightsCard = ({ title, description, date, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-[358px] p-4 flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative w-full h-[334px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out"
        style={{
          maxWidth: '358px',
          // Apply gradient directly to the card when hovered
          background: isHovered
            ? 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)' // Solid linear gradient
            : '#FFFFFF',
          border: isHovered ? 'none' : '1px solid #E5E7EB',
          // Card tilt effect remains
          transform: isHovered ? 'rotateZ(-2deg) translateX(-5px)' : 'rotateZ(0deg) translateX(0)',
        }}
      >
        <div className="p-6 flex flex-col justify-between h-full" style={{ fontFamily: 'Fustat, sans-serif' }}>
          {/* Index */}
          <div
            className="text-3xl font-bold mb-2 transition-colors duration-500"
            style={{ color: isHovered ? 'rgba(196, 181, 253, 0.8)' : '#9CA3AF' }}
          >
            {`0${index + 1}`}
          </div>

          {/* Title and Description */}
          <div>
            <h3
              className="font-semibold mb-2 transition-colors duration-500"
              style={{
                fontSize: '20px',
                lineHeight: '31px',
                letterSpacing: '-0.58px',
                color: isHovered ? '#FFFFFF' : '#1F2937',
              }}
            >
              {title}
            </h3>
            <p
              className="transition-colors duration-500"
              style={{
                fontSize: '20px',
                lineHeight: '31px',
                letterSpacing: '-0.58px',
                color: isHovered ? 'rgba(224, 231, 255, 0.9)' : '#6B7280',
              }}
            >
              {description}
            </p>
          </div>

          {/* Date */}
          <div className="flex justify-between items-end mt-auto pt-4">
            <span
              className="text-sm transition-colors duration-500"
              style={{
                fontFamily: 'Fustat, sans-serif',
                color: isHovered ? 'rgba(196, 181, 253, 0.8)' : '#9CA3AF',
              }}
            >
              {date}
            </span>
          </div>
        </div>

        {/* Separated Arrow Button */}
        <div
          className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300"
          style={{
            // Background color changes based on hover state
            background: isHovered ? '#FFFFFF' : '#F3F4F6',
            // Border changes based on hover state
            border: isHovered ? 'none' : '1px solid #E5E7EB',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-colors duration-300"
            style={{
              // Color changes based on hover state
              color: isHovered ? '#7C3AED' : '#6B7280',
              // Arrow rotation: right initially, up-right on hover
              transform: isHovered ? 'rotate(-45deg)' : 'rotate(0deg)',
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// NewsInsightsComponent remains unchanged
const NewsInsightsComponent = () => {
  const newsItems = [
    {
      title: 'Saudi Pro League',
      description: 'AI reduced player injuries by 30%',
      date: 'Sep 2025',
    },
    {
      title: 'Saudi Pro League',
      description: 'AI reduced player injuries by 30%',
      date: 'Sep 2025',
    },
    {
      title: 'Saudi Pro League',
      description: 'AI reduced player injuries by 30%',
      date: 'Sep 2025',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p
            className="text-sm font-semibold text-purple-600 uppercase tracking-wide"
            style={{ fontFamily: 'Fustat, sans-serif' }}
          >
            News & Insights
          </p>
          <h2
            className="font-normal text-gray-900 mt-2"
            style={{
              fontFamily: 'Fustat, sans-serif',
              fontSize: '56px',
              lineHeight: '65px',
              letterSpacing: '-0.58px',
            }}
          >
            The Future is Now
          </h2>
        </div>

        {/* Responsive flex container */}
        <div className="flex flex-wrap justify-center -mx-4">
          {newsItems.map((item, index) => (
            <NewsInsightsCard
              key={index}
              title={item.title}
              description={item.description}
              date={item.date}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-right">
          <button
            className="inline-flex items-center text-lg font-semibold text-purple-700 hover:text-purple-900 transition-colors duration-200"
            style={{ fontFamily: 'Fustat, sans-serif' }}
          >
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 transform rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsInsightsComponent;