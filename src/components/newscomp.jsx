import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewsInsightsCard = ({ title, description, date, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Outer div for spacing and responsiveness
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-[358px] p-4 flex justify-center" // w-full on small, w-1/2 on medium, w-1/3 on large. lg:w-[358px] for fixed width on very large screens.
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-[334px] rounded-xl overflow-hidden shadow-lg
          transition-all duration-500 ease-in-out
          ${isHovered ? 'bg-gradient-to-br from-purple-700 to-purple-900 text-white' : 'bg-white text-gray-800 border border-gray-200'}
        `}
        style={{
          // On larger screens, this will override w-full from above if lg:w-[358px] is not set.
          // For absolute precision on large, we define the inner card's max-width.
          maxWidth: '358px', // Inner card max width
        }}
      >
        <div className="p-6 flex flex-col justify-between h-full" style={{ fontFamily: 'Fustat, sans-serif' }}>
          <div className={`${isHovered ? 'text-purple-300' : 'text-gray-400'} text-3xl font-bold mb-2`}>
            {`0${index + 1}`}
          </div>
          <div>
            <h3 className={`font-semibold mb-2 ${isHovered ? 'text-white' : 'text-gray-800'}`}
              style={{
                fontSize: '20px',
                lineHeight: '31px',
                letterSpacing: '-0.58px',
              }}
            >
              {title}
            </h3>
            <p className={`${isHovered ? 'text-purple-200' : 'text-gray-600'}`}
              style={{
                fontSize: '20px',
                lineHeight: '31px',
                letterSpacing: '-0.58px',
              }}
            >
              {description}
            </p>
          </div>
          <div className="flex justify-between items-end mt-auto pt-4">
            <span className={`${isHovered ? 'text-purple-300' : 'text-gray-500'} text-sm`} style={{ fontFamily: 'Fustat, sans-serif' }}>{date}</span>

            <div
              className={`flex items-center justify-center w-[51px] h-[50px]
                ${isHovered ? 'bg-white text-purple-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}
              `}
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                backgroundColor: isHovered ? 'white' : 'rgb(243 244 246)',
                borderTopLeftRadius: '11px',
                border: isHovered ? 'none' : '1px solid rgb(229 231 235)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform rotate-45"
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
      </div>
    </div>
  );
};

const NewsInsightsComponent = () => {
  const navigate = useNavigate();

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

  const handleViewAllClick = () => {
    navigate("/news-insights");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide" style={{ fontFamily: 'Fustat, sans-serif' }}>News & Insights</p>
          <h2 className="font-normal text-gray-900 mt-2"
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
        <div className="flex flex-wrap justify-center -mx-4"> {/* -mx-4 to offset the p-4 on cards */}
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
            onClick={handleViewAllClick}
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