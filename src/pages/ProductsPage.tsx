import React from 'react';
import HeroSection from '../components/ProductPageComponents/HeroSection';
import LeadershipSection from '../components/ProductPageComponents/LeadershipSection'
import ClientMarquee from '../components/ProductPageComponents/ClientMarquee';
import ProductShowcaseSection from '../components/ProductPageComponents/ProductShowcaseSection';
const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ClientMarquee />
      <ProductShowcaseSection/>
      <LeadershipSection />
      
    </div>
  );
};

export default ProductsPage;