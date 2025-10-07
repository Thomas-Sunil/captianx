import React from 'react';
import HeroSection from '../components/HeroSection';
import AccordionSection from '../components/AccordionSection';
import CompanyComponent from '../components/CompanyComponent';

const LandingPage = () => { // Removed ': React.FC'
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <AccordionSection />
      <CompanyComponent />
      <div className="bg-gray-100 p-8 min-h-[30vh] flex items-center justify-center">
        <p className="text-gray-600 text-xl">More content can go here!</p>
      </div>
      <div className="bg-white p-8 min-h-[30vh] flex items-center justify-center">
        <p className="text-gray-600 text-xl">Another section of content.</p>
      </div>
    </div>
  );
};

export default LandingPage;