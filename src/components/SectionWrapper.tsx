// components/SectionWrapper.tsx
import React, { useEffect, useRef, useState } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      // Animate images from top to bottom
      const images = sectionRef.current.querySelectorAll('img');
      images.forEach((img, index) => {
        img.style.clipPath = 'inset(0% 0% 100% 0%)';
        img.style.opacity = '0';
        img.style.transition = 'clip-path 1s ease-out, opacity 0.8s ease-out';
        
        setTimeout(() => {
          img.style.clipPath = 'inset(0% 0% 0% 0%)';
          img.style.opacity = '1';
        }, index * 100);
      });

      // Animate text elements from bottom to top
      const textElements = sectionRef.current.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, span:not(.no-animate), a:not(.no-animate), button:not(.no-animate), li'
      );
      
      textElements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        
        // Skip if already animated or is an image container
        if (htmlElement.closest('img') || htmlElement.classList.contains('animated')) {
          return;
        }
        
        htmlElement.style.opacity = '0';
        htmlElement.style.transform = 'translateY(30px)';
        htmlElement.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        setTimeout(() => {
          htmlElement.style.opacity = '1';
          htmlElement.style.transform = 'translateY(0)';
          htmlElement.classList.add('animated');
        }, 200 + index * 50);
      });

      // Animate cards/divs with background
      const cards = sectionRef.current.querySelectorAll('[class*="card"], [class*="bg-white"], [class*="bg-gray"]');
      cards.forEach((card, index) => {
        const htmlCard = card as HTMLElement;
        
        if (htmlCard.closest('.animated')) return;
        
        htmlCard.style.opacity = '0';
        htmlCard.style.transform = 'translateY(20px) scale(0.95)';
        htmlCard.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
          htmlCard.style.opacity = '1';
          htmlCard.style.transform = 'translateY(0) scale(1)';
        }, 300 + index * 100);
      });
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default SectionWrapper;