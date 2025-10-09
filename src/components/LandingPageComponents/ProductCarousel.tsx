import React, { useState, useRef, useEffect, useCallback } from 'react';

// Sample images and videos - replace with your actual imports
const productImage1 = 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80';
const productImage2 = 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80';
const productVideo1 = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const productVideo2 = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

const productsData = [
  {
    id: 1,
    title: 'CaptainX Academy',
    description: 'Elevate athlete growth and simplify academy management. Our platform centralises performance, training.',
    image: productImage1,
    video: productVideo1,
    link: '#',
  },
  {
    id: 2,
    title: 'Sport League Pro',
    description: 'Streamline league operations, manage teams, schedules, and scores with ease. Built for efficiency.',
    image: productImage2,
    video: productVideo2,
    link: '#',
  },
  {
    id: 3,
    title: 'Athlete Connect',
    description: 'Connect athletes with coaches, scouts, and opportunities. Empowering careers, fostering talent.',
    image: productImage1,
    video: productVideo1,
    link: '#',
  },
  {
    id: 4,
    title: 'Team Tracker',
    description: 'Monitor team performance, attendance, and player stats in one intuitive dashboard. Optimize your game.',
    image: productImage2,
    video: productVideo2,
    link: '#',
  },
];

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); // New state to track mobile view

  const carouselContainerRef = useRef(null);
  const carouselInnerRef = useRef(null);
  const videoRef = useRef(null);

  const totalProducts = productsData.length;
  const transitionDuration = 700; // ms

  const getNextIndex = useCallback((currentIndex) => (currentIndex + 1) % totalProducts, [totalProducts]);
  const getPrevIndex = useCallback((currentIndex) => (currentIndex - 1 + totalProducts) % totalProducts, [totalProducts]);

  const getTargetTranslateX = useCallback(() => {
    if (!carouselContainerRef.current || !carouselInnerRef.current) return 0;

    const containerWidth = carouselContainerRef.current.offsetWidth;
    const mainCardElement = carouselInnerRef.current.children[1]; // The main card is always the second child
    const prevPeekElement = carouselInnerRef.current.children[0]; // The previous peek card

    if (!mainCardElement) return 0;

    const mainCardWidth = mainCardElement.offsetWidth;
    const gap = 24; // Tailwind gap-6 is 24px

    let offsetToAlignMainCard = 0; // This is the distance from the start of the carouselInner to the start of the mainCard

    // Determine if peek elements are actively displayed.
    // We check the offsetWidth of the prevPeekElement. If it's 0, it's hidden (e.g., via `display: none` from `hidden md:block`).
    const peekElementsAreVisible = prevPeekElement && prevPeekElement.offsetWidth > 0;

    if (peekElementsAreVisible) {
      const prevCardWidth = prevPeekElement.offsetWidth;
      offsetToAlignMainCard = prevCardWidth + gap;
    }

    // Calculate the translation needed to place the *center* of the main card at the *center* of the container.
    // The main card's *current* center within the carouselInner is `offsetToAlignMainCard + mainCardWidth / 2`.
    // The desired position for this center is `containerWidth / 2`.
    // So, the translation needed is `(containerWidth / 2) - (current center of main card)`.
    const centerOfMainCardInInner = offsetToAlignMainCard + (mainCardWidth / 2);
    const centerOffset = (containerWidth / 2) - centerOfMainCardInInner;

    return centerOffset;

  }, []);

  const basePositionTranslateX = useRef(0);

  // Effect for initial calculation and handling resize
  useEffect(() => {
    const handleResize = () => {
      // Determine if we are in a mobile view based on a breakpoint (e.g., md breakpoint)
      // This check needs to match Tailwind's internal breakpoint for `md:block`
      setIsMobileView(window.innerWidth < 768); // Tailwind's md breakpoint is 768px

      basePositionTranslateX.current = getTargetTranslateX();
      setDragOffset(0); // Reset drag offset on resize to prevent jumps
      setTransitionEnabled(true); // Ensure transition is enabled after resize
      setIsTransitioning(true); // Temporarily enable transition for smooth re-alignment
      const timer = setTimeout(() => setIsTransitioning(false), transitionDuration);
      return () => clearTimeout(timer);
    };

    handleResize(); // Initial calculation

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, getTargetTranslateX]); // activeIndex added as dependency to recalculate when it changes


  // Effect to handle transitions when activeIndex changes
  useEffect(() => {
    // Only apply transition if not dragging
    if (!isDragging) {
      setTransitionEnabled(true);
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isDragging]);


  // Play video when activeIndex changes and transition is complete
  useEffect(() => {
    if (!isTransitioning && !isDragging && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn('Video play failed:', err);
      });
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [activeIndex, isTransitioning, isDragging]);

  const currentTotalTranslate = basePositionTranslateX.current + dragOffset;

  const handleStart = useCallback((clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setTransitionEnabled(false);
    setIsTransitioning(false);
  }, []);

  const handleMove = useCallback((clientX) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
  }, [isDragging, startX]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
    setTransitionEnabled(true);

    const threshold = 100;
    if (dragOffset < -threshold) {
      setActiveIndex(prevIndex => getNextIndex(prevIndex));
    } else if (dragOffset > threshold) {
      setActiveIndex(prevIndex => getPrevIndex(prevIndex));
    } else {
      setDragOffset(0); // Snap back
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
      return () => clearTimeout(timer);
    }
    setDragOffset(0); // Reset drag offset for the next interaction
  }, [dragOffset, getNextIndex, getPrevIndex]);

  const handleTouchStart = useCallback((e) => handleStart(e.touches[0].clientX), [handleStart]);
  const handleTouchMove = useCallback((e) => handleMove(e.touches[0].clientX), [handleMove]);
  const handleTouchEnd = useCallback(() => handleEnd(), [handleEnd]);

  const handleMouseDown = useCallback((e) => { e.preventDefault(); handleStart(e.clientX); }, [handleStart]);
  const handleMouseMove = useCallback((e) => handleMove(e.clientX), [handleMove]);
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseLeave = useCallback(() => {
    if (isDragging) handleEnd();
  }, [isDragging, handleEnd]);

  // Prepare products for rendering (circular loop)
  const visibleProducts = [
    productsData[getPrevIndex(activeIndex)],
    productsData[activeIndex],
    productsData[getNextIndex(activeIndex)],
  ];

  return (
    <section className="bg-purple-50 py-16 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center mb-16">
        <span className="text-purple-600 text-lg font-medium mb-4 block">Products</span>
        <h2 className="text-5xl md:text-6xl font-normal text-gray-900">
          Go beyond the ordinary
        </h2>
      </div>

      <div
        ref={carouselContainerRef}
        className="relative w-full max-w-7xl mx-auto px-4 mb-12 select-none overflow-hidden"
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
          // Conditionally apply justify-center on mobile to truly center the single visible card
          className={`relative flex items-center gap-6 ${isMobileView ? 'justify-center' : 'justify-start'}`}
          style={{
            transform: `translateX(${currentTotalTranslate}px)`,
            transition: transitionEnabled ? `transform ${transitionDuration / 1000}s cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
          }}
        >
          {/* Previous Product Image Peek - Hidden on small screens */}
          <div
            className="hidden md:block flex-shrink-0 w-64 lg:w-80 h-[450px] rounded-3xl overflow-hidden shadow-xl"
            style={{
              transition: transitionEnabled ? `opacity ${transitionDuration / 1000}s ease-out, transform ${transitionDuration / 1000}s ease-out` : 'none',
              opacity: isTransitioning && !isDragging ? '0.5' : '0.8',
              transform: isTransitioning && !isDragging ? 'scale(0.95)' : 'scale(1)',
            }}
          >
            <img
              src={visibleProducts[0].image}
              alt={visibleProducts[0].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Product Card */}
          <div
            className="flex-shrink-0 w-full md:max-w-2xl lg:max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{
                transition: transitionEnabled ? `transform ${transitionDuration / 1000}s cubic-bezier(0.4, 0, 0.2, 1), opacity ${transitionDuration / 1000}s cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
                transform: isTransitioning && !isDragging ? 'scale(0.92)' : 'scale(1)',
                opacity: isTransitioning && !isDragging ? '0.3' : '1',
            }}
          >
            <div className="flex flex-col md:flex-row h-full md:h-[450px]">
              {/* Video/Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-full">
                {!isTransitioning && !isDragging ? (
                  <video
                    key={visibleProducts[1].id}
                    ref={videoRef}
                    src={visibleProducts[1].video}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={visibleProducts[1].image}
                    alt={visibleProducts[1].title}
                    className="w-full h-full object-cover"
                  />
                )}
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

          {/* Next Product Image Peek - Hidden on small screens */}
          <div
            className="hidden md:block flex-shrink-0 w-64 lg:w-80 h-[450px] rounded-3xl overflow-hidden shadow-xl"
            style={{
              transition: transitionEnabled ? `opacity ${transitionDuration / 1000}s ease-out, transform ${transitionDuration / 1000}s ease-out` : 'none',
              opacity: isTransitioning && !isDragging ? '0.5' : '0.8',
              transform: isTransitioning && !isDragging ? 'scale(0.95)' : 'scale(1)',
            }}
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