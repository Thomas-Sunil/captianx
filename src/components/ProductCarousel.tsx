import React, { useState } from 'react';
import productImage1 from '../assets/Rectangle 22262.png';
import productImage2 from '../assets/Frame 2121457501.png';

const productsData = [
  {
    id: 1,
    title: 'CaptainX Academy',
    description: 'Elevate athlete growth and simplify academy management. Our platform centralises performance, training.',
    image: productImage1,
    link: '#',
  },
  {
    id: 2,
    title: 'Sport League Pro',
    description: 'Streamline league operations, manage teams, schedules, and scores with ease. Built for efficiency.',
    image: productImage2,
    link: '#',
  },
  {
    id: 3,
    title: 'Athlete Connect',
    description: 'Connect athletes with coaches, scouts, and opportunities. Empowering careers, fostering talent.',
    image: productImage1,
    link: '#',
  },
  {
    id: 4,
    title: 'Team Tracker',
    description: 'Monitor team performance, attendance, and player stats in one intuitive dashboard. Optimize your game.',
    image: productImage2,
    link: '#',
  },
];

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalProducts = productsData.length;
  const getNextIndex = (currentIndex: number) => (currentIndex + 1) % totalProducts;

  return (
    <section className="bg-purple-50 py-16 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center mb-16">
        <span className="text-purple-600 text-lg font-medium mb-4 block">Products</span>
        <h2 
          className="text-5xl md:text-6xl font-normal text-gray-900"
          style={{
            fontFamily: 'Fustat, sans-serif',
            fontSize: '56px',
            lineHeight: '65px',
            letterSpacing: '-0.58px',
            fontWeight: '400',
          }}
        >
          Go beyond the ordinary
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 mb-12">
        <div className="relative flex items-center justify-start gap-6 overflow-hidden">
          {/* Main Product Card */}
          <div 
            className="flex-shrink-0 w-full md:w-[600px] lg:w-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row h-full md:h-[450px]">
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-full">
                <img
                  src={productsData[activeIndex].image}
                  alt={productsData[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 w-full md:w-1/2 flex flex-col justify-center bg-white">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  {productsData[activeIndex].title}
                </h3>
                <p className="text-gray-500 text-base mb-8 leading-relaxed">
                  {productsData[activeIndex].description}
                </p>
                <a
                  href={productsData[activeIndex].link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors w-fit"
                >
                  See more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Next Product Image Peek */}
          <div 
            className="hidden md:block flex-shrink-0 w-64 lg:w-80 h-[450px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500"
          >
            <img
              src={productsData[getNextIndex(activeIndex)].image}
              alt={productsData[getNextIndex(activeIndex)].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-purple-600 font-semibold flex items-center group hover:text-purple-700 transition-colors">
          View all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <div className="flex space-x-3">
          {productsData.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-gray-800 w-8' : 'bg-gray-400 hover:bg-gray-500'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to product ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;