// components/EnhancedSectionWrapper.tsx
import React, { useEffect, useRef, useState } from 'react';

interface EnhancedSectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animateImages?: boolean;
  animateText?: boolean;
  imageDelay?: number;
  textDelay?: number;
  staggerDelay?: number;
  threshold?: number;
}

const EnhancedSectionWrapper: React.FC<EnhancedSectionWrapperProps> = ({
  children,
  className = '',
  delay = 0,
  animateImages = true,
  animateText = true,
  imageDelay = 0,
  textDelay = 200,
  staggerDelay = 50,
  threshold = 0.2, // Increased threshold - element must be 20% visible
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when element is actually in viewport
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '-100px 0px -100px 0px', // Wait until element is well into viewport
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
  }, [delay, threshold]);

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      
      // Animate images from top to bottom (reveal effect)
      if (animateImages) {
        const images = sectionRef.current.querySelectorAll('img');
        images.forEach((img, index) => {
          const htmlImg = img as HTMLElement;
          
          // Set initial state - hidden at bottom
          htmlImg.style.clipPath = 'inset(0% 0% 100% 0%)';
          htmlImg.style.opacity = '0';
          htmlImg.style.transform = 'scale(1.05)';
          htmlImg.style.transition = 'clip-path 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s ease-out, transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
          
          // Reveal from top to bottom
          setTimeout(() => {
            htmlImg.style.clipPath = 'inset(0% 0% 0% 0%)';
            htmlImg.style.opacity = '1';
            htmlImg.style.transform = 'scale(1)';
          }, imageDelay + index * 150);
        });
      }

      // Animate text elements from bottom to top (slide up with fade)
      if (animateText) {
        const textSelectors = [
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'p:not(.no-animate)',
          'span:not(.no-animate):not([class*="sr-"])', // Exclude screen reader text
          'a:not(.no-animate)',
          'button:not(.no-animate)',
          'li',
          'div[class*="text-"]:not(.no-animate)'
        ];
        
        const textElements = sectionRef.current.querySelectorAll(textSelectors.join(', '));
        
        textElements.forEach((element, index) => {
          const htmlElement = element as HTMLElement;
          
          // Skip if inside an image, already animated, or is an image itself
          if (
            htmlElement.closest('img') ||
            htmlElement.classList.contains('animated') ||
            htmlElement.classList.contains('no-animate') ||
            htmlElement.tagName === 'IMG' ||
            htmlElement.querySelector('img') ||
            htmlElement.hasAttribute('aria-hidden')
          ) {
            return;
          }
          
          // Set initial state - hidden at bottom
          htmlElement.style.opacity = '0';
          htmlElement.style.transform = 'translateY(30px)';
          htmlElement.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          
          // Animate to visible from bottom to top
          setTimeout(() => {
            htmlElement.style.opacity = '1';
            htmlElement.style.transform = 'translateY(0)';
            htmlElement.classList.add('animated');
          }, textDelay + index * staggerDelay);
        });
      }

      // Animate cards and containers
      const containers = sectionRef.current.querySelectorAll(
        '[class*="rounded"]:not(.animated):not(img), [class*="shadow"]:not(.animated):not(img), [class*="border"]:not(.animated):not(img)'
      );
      
      containers.forEach((container, index) => {
        const htmlContainer = container as HTMLElement;
        
        // Skip if it's a text element, already animated, or contains only text
        if (
          htmlContainer.classList.contains('animated') ||
          htmlContainer.classList.contains('no-animate') ||
          ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'SPAN', 'A', 'IMG'].includes(htmlContainer.tagName)
        ) {
          return;
        }
        
        // Set initial state
        htmlContainer.style.opacity = '0';
        htmlContainer.style.transform = 'translateY(20px) scale(0.98)';
        htmlContainer.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
        
        // Animate to visible
        setTimeout(() => {
          htmlContainer.style.opacity = '1';
          htmlContainer.style.transform = 'translateY(0) scale(1)';
          htmlContainer.classList.add('animated');
        }, 300 + index * 120);
      });
    }
  }, [isVisible, animateImages, animateText, imageDelay, textDelay, staggerDelay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default EnhancedSectionWrapper;