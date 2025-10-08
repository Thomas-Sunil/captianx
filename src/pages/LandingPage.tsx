import React from 'react';
import HeroSection from '../components/HeroSection';
import AccordionSection from '../components/AccordionSection';
import CompanyComponent from '../components/CompanyComponent';
import ContactComponent from '../components/ContactComponent';
import PartnerComponent from '../components/PartnerComponent';
import ProductCarousel from '../components/ProductCarousel';
import SolutionsSection from '../components/sol';

const LandingPage = () => { // Removed ': React.FC'
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <AccordionSection />
      <CompanyComponent />
      <SolutionsSection />
      <ProductCarousel />
      <PartnerComponent />
      <ContactComponent />
      
    </div>
  );
};

export default LandingPage;