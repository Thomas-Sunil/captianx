import React, { useEffect, useRef, useState } from 'react';

// Smooth AnimateOnScroll component - subtle and natural
interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationStyles = () => {
    const baseStyle = {
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade':
          return { ...baseStyle, opacity: 0 };
        case 'slide-up':
          return { ...baseStyle, opacity: 0, transform: 'translateY(20px)' };
        case 'slide-left':
          return { ...baseStyle, opacity: 0, transform: 'translateX(20px)' };
        case 'slide-right':
          return { ...baseStyle, opacity: 0, transform: 'translateX(-20px)' };
        case 'scale':
          return { ...baseStyle, opacity: 0, transform: 'scale(0.95)' };
        default:
          return baseStyle;
      }
    }

    return { ...baseStyle, opacity: 1, transform: 'translateY(0) translateX(0) scale(1)' };
  };

  return (
    <div ref={elementRef} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};

// Enhanced Section Wrapper - more subtle and smooth
interface SmoothSectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  enableAnimations?: boolean;
}

const SmoothSectionWrapper: React.FC<SmoothSectionWrapperProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  enableAnimations = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableAnimations) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '80px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold, enableAnimations]);

  useEffect(() => {
    if (isVisible && sectionRef.current && enableAnimations) {
      const elements = sectionRef.current.querySelectorAll(
        'img, h1, h2, h3, h4, h5, h6, p, button, a, [class*="card"]'
      );

      elements.forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        
        // Skip if already has transition or is hidden
        if (htmlEl.style.transition || htmlEl.classList.contains('no-animate')) {
          return;
        }

        // Set smooth initial state
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(15px)';
        htmlEl.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

        // Animate with subtle stagger
        setTimeout(() => {
          htmlEl.style.opacity = '1';
          htmlEl.style.transform = 'translateY(0)';
        }, index * 30);
      });
    }
  }, [isVisible, enableAnimations]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

// Demo Landing Page with smooth animations
const LandingPageDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero - No animation delay, loads immediately */}
      <SmoothSectionWrapper enableAnimations={false} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6">Welcome</h1>
          <p className="text-xl mb-8 opacity-90">Smooth, natural scroll animations</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </SmoothSectionWrapper>

      {/* Features Section */}
      <SmoothSectionWrapper className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <AnimateOnScroll key={i} animation="slide-up" delay={i * 100}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Feature {i}</h3>
                <p className="text-gray-600">
                  Smooth animations that enhance user experience without feeling like a reload.
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SmoothSectionWrapper>

      {/* Content Section */}
      <SmoothSectionWrapper className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="slide-right">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
              alt="Content"
              className="rounded-2xl shadow-2xl"
            />
          </AnimateOnScroll>
          <AnimateOnScroll animation="slide-left" delay={100}>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Natural Motion
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Elements fade in smoothly as you scroll, creating a polished experience.
              </p>
              <p className="text-lg text-gray-600">
                No jarring "reload" effects - just subtle, professional animations.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </SmoothSectionWrapper>

      {/* Cards Section */}
      <SmoothSectionWrapper className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            More Content
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <AnimateOnScroll key={i} animation="scale" delay={i * 80}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold mb-2">Item {i}</h3>
                  <p className="text-sm text-gray-600">Smooth scroll animation</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </SmoothSectionWrapper>

      {/* Footer */}
      <SmoothSectionWrapper className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">Smooth animations, better UX</p>
        </div>
      </SmoothSectionWrapper>
    </div>
  );
};

export default LandingPageDemo;