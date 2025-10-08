import React, { useState, useRef, useEffect, useCallback } from 'react';
import productImage1 from '../assets/Rectangle 22262.png';
import productImage2 from '../assets/Frame 2121457501.png';

const productsData = [
  {
    id: 1,
    title: 'CaptainX Academy',
    description: 'Elevate athlete growth and simplify academy management. Our platform centralises performance, training.',
    image: productImage1,
    link: '#',
  },
  {
    id: 2,
    title: 'Sport League Pro',
    description: 'Streamline league operations, manage teams, schedules, and scores with ease. Built for efficiency.',
    image: productImage2,
    link: '#',
  },
  {
    id: 3,
    title: 'Athlete Connect',
    description: 'Connect athletes with coaches, scouts, and opportunities. Empowering careers, fostering talent.',
    image: productImage1,
    link: '#',
  },
  {
    id: 4,
    title: 'Team Tracker',
    description: 'Monitor team performance, attendance, and player stats in one intuitive dashboard. Optimize your game.',
    image: productImage2,
    link: '#',
  },
];

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0); // Stores drag distance *relative to the start of the current drag*
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const carouselContainerRef = useRef(null); // Refers to the `max-w-7xl` container
  const carouselInnerRef = useRef(null); // Refers to the `relative flex items-center justify-start gap-6` div

  const totalProducts = productsData.length;

  const getNextIndex = useCallback((currentIndex: number) => (currentIndex + 1) % totalProducts, [totalProducts]);
  const getPrevIndex = useCallback((currentIndex: number) => (currentIndex - 1 + totalProducts) % totalProducts, [totalProducts]);

  // Calculate the target X translation for the carousel to show the active item correctly
  const getTargetTranslateX = useCallback(() => {
    if (!carouselInnerRef.current) return 0;

    const prevPeekElement = carouselInnerRef.current.children[0]; // The 'previous' peek card
    const mainCardElement = carouselInnerRef.current.children[1]; // The 'main' active card
    const gap = 24; // Corresponds to `gap-6`

    if (!prevPeekElement || !mainCardElement) return 0;

    // We want the left edge of the main active card to be at the left edge of the `carouselContainerRef`'s visible area.
    // To achieve this, we need to translate the `carouselInnerRef` by the negative of:
    // (width of the previous peek card) + (gap between prev peek and main card)
    const prevCardWidth = prevPeekElement.offsetWidth;
    const offsetToAlignMainCard = prevCardWidth + gap;

    return -offsetToAlignMainCard;
  }, []);

  // Use a ref to store the base position for the current active index
  const basePositionTranslateX = useRef(getTargetTranslateX());

  useEffect(() => {
    // When activeIndex changes or on initial render, recalculate the base position
    basePositionTranslateX.current = getTargetTranslateX();
    setDragOffset(0); // Reset any residual drag offset when activeIndex changes
    setTransitionEnabled(true); // Ensure transition is enabled for the snap to new activeIndex
  }, [activeIndex, getTargetTranslateX]);

  // Combined translation for the carousel inner container
  const currentTotalTranslate = basePositionTranslateX.current + dragOffset;


  const handleStart = useCallback((clientX: React.SetStateAction<number>) => {
    setIsDragging(true);
    setStartX(clientX);
    setTransitionEnabled(false); // Disable transition during drag for immediate feedback
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff); // Update only the drag offset
  }, [isDragging, startX]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
    setTransitionEnabled(true); // Re-enable transition for the snap

    const threshold = 100; // Minimum drag distance to trigger a slide
    if (dragOffset < -threshold) { // Swiped left (to show next product)
      setActiveIndex(prevIndex => getNextIndex(prevIndex));
    } else if (dragOffset > threshold) { // Swiped right (to show previous product)
      setActiveIndex(prevIndex => getPrevIndex(prevIndex));
    }
    // dragOffset will be reset by the useEffect when activeIndex changes
    // or implicitly by setting transitionEnabled if no index change occurs.
    else {
        setDragOffset(0); // Snap back if not enough drag
    }
  }, [dragOffset, getNextIndex, getPrevIndex]);


  // Touch event handlers
  const handleTouchStart = useCallback((e) => handleStart(e.touches[0].clientX), [handleStart]);
  const handleTouchMove = useCallback((e) => handleMove(e.touches[0].clientX), [handleMove]);
  const handleTouchEnd = useCallback(() => handleEnd(), [handleEnd]);

  // Mouse event handlers
  const handleMouseDown = useCallback((e) => { e.preventDefault(); handleStart(e.clientX); }, [handleStart]);
  const handleMouseMove = useCallback((e) => handleMove(e.clientX), [handleMove]);
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseLeave = useCallback(() => {
    if (isDragging) handleEnd(); // End drag if mouse leaves while dragging
  }, [isDragging, handleEnd]);


  const visibleProducts = [
    productsData[getPrevIndex(activeIndex)], // Previous product
    productsData[activeIndex],                 // Active product
    productsData[getNextIndex(activeIndex)],   // Next product
  ];

  return (
    <section className="bg-purple-50 py-16 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center mb-16">
        <span className="text-purple-600 text-lg font-medium mb-4 block">Products</span>
        <h2
          className="text-5xl md:text-6xl font-normal text-gray-900"
          style={{
            fontFamily: 'Fustat, sans-serif',
            fontSize: '56px',
            lineHeight: '65px',
            letterSpacing: '-0.58px',
            fontWeight: '400',
          }}
        >
          Go beyond the ordinary
        </h2>
      </div>

      <div
        ref={carouselContainerRef} // Assign ref to the container for accurate width calculations
        className="relative w-full max-w-7xl mx-auto px-4 mb-12 select-none overflow-hidden" // Added overflow-hidden here
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          ref={carouselInnerRef}
          className="relative flex items-center justify-start gap-6"
          style={{
            transform: `translateX(${currentTotalTranslate}px)`,
            transition: transitionEnabled ? 'transform 0.7s ease-out' : 'none', // Increased transition duration
          }}
        >
          {/* Previous Product Image Peek */}
          <div
            className="hidden md:block flex-shrink-0 w-64 lg:w-80 h-[450px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={visibleProducts[0].image}
              alt={visibleProducts[0].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Product Card */}
          <div
            className="flex-shrink-0 w-full md:w-[600px] lg:w-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden group transform hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row h-full md:h-[450px]">
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-full">
                <img
                  src={visibleProducts[1].image}
                  alt={visibleProducts[1].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 w-full md:w-1/2 flex flex-col justify-center bg-white">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  {visibleProducts[1].title}
                </h3>
                <p className="text-gray-500 text-base mb-8 leading-relaxed">
                  {visibleProducts[1].description}
                </p>
                <a
                  href={visibleProducts[1].link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors w-fit"
                >
                  See more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Next Product Image Peek */}
          <div
            className="hidden md:block flex-shrink-0 w-64 lg:w-80 h-[450px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={visibleProducts[2].image}
              alt={visibleProducts[2].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-purple-600 font-semibold flex items-center group hover:text-purple-700 transition-colors">
          View all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <div className="flex space-x-3">
          {productsData.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-gray-800 w-8' : 'bg-gray-400 hover:bg-gray-500'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to product ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;