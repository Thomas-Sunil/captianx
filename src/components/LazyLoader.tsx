// components/LazyLoader.jsx
import React, { Suspense } from 'react';
// import PlaceholderCard from './PlaceholderCard'; // <-- REMOVE THIS IMPORT

const LazyLoader = ({ children, fallbackHeight = 'h-48' }) => { // Renamed prop to fallbackHeight for clarity
  const loadingFallback = (
    // This div will be shown while the component's code is being fetched.
    // You can customize its appearance (e.g., set a specific background, text color).
    // If you want nothing to show, you can return <div className={`${fallbackHeight}`}></div> or null
    <div className={`flex justify-center items-center bg-gray-50 text-gray-600 ${fallbackHeight}`}>
      Loading...
    </div>
  );

  return (
    <Suspense fallback={loadingFallback}>
      {children}
    </Suspense>
  );
};

export default LazyLoader;