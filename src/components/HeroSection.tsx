import React, { useState, useEffect, useRef } from 'react';
import HeroVideo from '../assets/2932301-uhd_4096_2160_24fps.mp4'; // Import your video

const HeroSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // Though not directly manipulated by scroll, good to keep if needed later

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollY = window.scrollY;
        
        // Animation completes within the hero section height
        const progress = Math.min(scrollY / (heroHeight * 0.6), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic values based on scroll
  const gradientOpacity = 1 - scrollProgress;
  const contentOpacity = Math.max(0, 1 - scrollProgress * 1.5);
  const contentTranslateY = scrollProgress * -50;
  const captainXScale = 1 + scrollProgress * 2.5;

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-[70vh] sm:min-h-screen overflow-hidden flex flex-col justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HeroVideo} type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-br from-white to-purple-50 pointer-events-none" 
        style={{
          opacity: gradientOpacity,
          transition: 'opacity 0.1s ease-out'
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 min-h-[70vh] sm:min-h-screen flex flex-col justify-start md:justify-between items-start px-4 py-16 sm:px-8 sm:py-24 md:px-16 md:py-32">
        
        {/* Top Left Content */}
        <div 
          className="max-w-2xl mt-16 md:mt-0" 
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentTranslateY}px)`,
            transition: 'all 0.1s ease-out'
          }}
        >
          <h1
  className="font-bold text-gray-900 mb-2 sm:mb-4
             font-[Fustat] text-[75px] leading-[116%] tracking-[-0.04em]"
>
  The <span className="text-purple-700">future</span>, in every <br />athlete.
</h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-4 sm:mb-6 md:mb-8 max-w-xl">
            Elevate performance, redefine potential, and build the champions of tomorrow with data-driven technology.
          </p>
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-purple-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300">
            Explore solutions
          </button>
        </div>

        {/* CAPTAINX Text */}
        <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none flex justify-center items-end h-[50vh] md:h-auto"> 
          <h2
            className="text-center font-extrabold leading-none tracking-tight select-none"
            style={{
              fontSize: `max(60px, min(150px, 15vw))`,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(100, 100, 100, 0.3)',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(0,0,0,0.05)',
              transform: `scale(${captainXScale})`,
              transformOrigin: 'center bottom',
              transition: 'transform 0.1s ease-out',
              marginBottom: '-2%',
            }}
          >
            CAPTAINX
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;