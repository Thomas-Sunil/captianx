// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top of the page when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run effect whenever pathname changes

  return null; // This component doesn't render anything itself
};

export default ScrollToTop;