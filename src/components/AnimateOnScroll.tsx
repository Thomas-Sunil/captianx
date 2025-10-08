// components/AnimateOnScroll.tsx
import React, { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: 'fade-in-bottom' | 'fade-in-top' | 'fade-in-left' | 'fade-in-right' | 'slide-up-stagger' | 'reveal-top-to-bottom';
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade-in-bottom',
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
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

  const getAnimationClass = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    switch (animation) {
      case 'fade-in-bottom':
        return `${baseClasses} ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`;
      
      case 'fade-in-top':
        return `${baseClasses} ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-10'
        }`;
      
      case 'fade-in-left':
        return `${baseClasses} ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-10'
        }`;
      
      case 'fade-in-right':
        return `${baseClasses} ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-10'
        }`;
      
      case 'slide-up-stagger':
        return `${baseClasses} ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`;
      
      case 'reveal-top-to-bottom':
        return `${baseClasses} ${
          isVisible
            ? 'opacity-100'
            : 'opacity-0'
        }`;
      
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;