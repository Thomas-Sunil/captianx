// LandingPage.tsx - Final version with enhanced animations
import React from 'react';
import LazyLoader from '../components/LazyLoader';
import EnhancedSectionWrapper from '../components/EnhancedSectionWrapper';

// Use React.lazy for each component
const LazyHeroSection = React.lazy(() => import('../components/HeroSection'));
const LazyAccordionSection = React.lazy(() => import('../components/AccordionSection'));
const LazyCompanyComponent = React.lazy(() => import('../components/CompanyComponent'));
const LazyContactComponent = React.lazy(() => import('../components/ContactComponent'));
const LazyPartnerComponent = React.lazy(() => import('../components/PartnerComponent'));
const LazyProductCarousel = React.lazy(() => import('../components/ProductCarousel'));
const LazySolutionsSection = React.lazy(() => import('../components/sol'));
const LazyNewsInsightsComponent = React.lazy(() => import('../components/newscomp'));

const LandingPage: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* HeroSection - Images load top-to-bottom, text bottom-to-top */}
      <LazyLoader fallbackHeight="h-[calc(100vh-80px)]">
        <EnhancedSectionWrapper 
          delay={0}
          imageDelay={0}
          textDelay={300}
          staggerDelay={80}
          threshold={0.1}
        >
          <LazyHeroSection />
        </EnhancedSectionWrapper>
      </LazyLoader>

      {/* AccordionSection */}
      <LazyLoader>
        <EnhancedSectionWrapper 
          delay={0}
          imageDelay={0}
          textDelay={200}
          staggerDelay={60}
          threshold={0.3}
        >
          <LazyAccordionSection />
        </EnhancedSectionWrapper>
      </LazyLoader>
      {/* SolutionsSection - Cards and content staggered */}
      <LazyLoader>
        <EnhancedSectionWrapper 
          delay={0}
          imageDelay={0}
          textDelay={200}
          staggerDelay={100}
          threshold={0.3}
        >
          <LazySolutionsSection />
        </EnhancedSectionWrapper>
      </LazyLoader>

      {/* CompanyComponent - Logos/images from top, text from bottom */}
      <LazyLoader>
        <EnhancedSectionWrapper 
          delay={0}
          imageDelay={100}
          textDelay={250}
          staggerDelay={70}
          threshold={0.3}
        >
          <LazyCompanyComponent />
        </EnhancedSectionWrapper>
      </LazyLoader>

      
      
      {/* ProductCarousel - Product images top-to-bottom */}
      <LazyLoader>
        <EnhancedSectionWrapper 
          delay={0}
          imageDelay={100}
          textDelay={300}
          staggerDelay={80}
          threshold={0.3}
        >
          <LazyProductCarousel />
        </EnhancedSectionWrapper>
      </LazyLoader>

      {/* NewsInsightsComponent - Cards stagger in */}
      <LazyLoader>
        <EnhancedSectionWrapper 
          delay={0}
          imageDelay={0}
          textDelay={200}
          staggerDelay={100}
          threshold={0.3}
        >
          <LazyNewsInsightsComponent />
        </EnhancedSectionWrapper>
      </LazyLoader>

      {/* PartnerComponent - Partner logos reveal */}
      <LazyLoader>
        <EnhancedSectionWrapper 
          delay={0}
          imageDelay={100}
          textDelay={200}
          staggerDelay={50}
          threshold={0.3}
        >
          <LazyPartnerComponent />
        </EnhancedSectionWrapper>
      </LazyLoader>

      {/* ContactComponent - Form elements animate in */}
      <LazyLoader>
        <EnhancedSectionWrapper 
          delay={0}
          imageDelay={0}
          textDelay={200}
          staggerDelay={80}
          threshold={0.3}
        >
          <LazyContactComponent />
        </EnhancedSectionWrapper>
      </LazyLoader>
    </div>
  );
};

export default LandingPage;