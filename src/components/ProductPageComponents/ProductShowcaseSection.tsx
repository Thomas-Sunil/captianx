import React, { useEffect, useRef } from 'react';
import RectangleImage from '../../assets/Rectangle 22262 (1).png'; // Adjust path based on your structure

const ProductShowcaseSection: React.FC = () => {
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-focus');
          } else {
            entry.target.classList.remove('in-focus');
          }
        });
      },
      { threshold: 0.6 } // 60% of the card visible to trigger focus
    );

    productRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <style>
        {`
          .product-card {
            width: 1375px;
            height: 519px;
            top: 2185px;
            left: 36px;
            opacity: 1;
            border-radius: 11.94px;
            background: url(${RectangleImage}) no-repeat center/cover;
            position: relative;
            transform: scale(0.8);
            transition: transform 0.5s ease, opacity 0.5s ease;
            margin: 0 auto;
          }
          .in-focus {
            transform: scale(1);
            opacity: 1;
            z-index: 10;
          }
          @media (max-width: 1400px) {
            .product-card {
              width: 90%;
              height: auto;
              aspect-ratio: 1375 / 519;
            }
          }
        `}
      </style>

      <div className="relative flex flex-col items-center space-y-12 md:space-y-16 lg:space-y-24">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => {
              if (el) productRefs.current[index] = el;
            }}
            className="product-card"
            style={{
              transformOrigin: 'center',
              position: index === 4 ? 'relative' : 'absolute', // Fifth product initially in focus
              top: index === 4 ? '0' : `${2185 + index * 600}px`, // Staggered positioning for scroll
              left: '36px',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcaseSection;