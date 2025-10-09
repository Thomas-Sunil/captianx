import React from 'react';

// Adjust paths based on your actual file structure
// Example: If ClientMarquee.tsx is in src/components and SVGs are in src/assets
import iHeartMediaLogo from '../../assets/SVG.svg';
import adpLogo from '../../assets/SVG (1).svg';
import oracleLogo from '../../assets/SVG (2).svg';
import intercomLogo from '../../assets/SVG (3).svg';
import logitechLogo from '../../assets/SVG (4).svg';
import mongoDBLogo from '../../assets/SVG (5).svg';

const logos = [
  { id: 1, src: iHeartMediaLogo, alt: 'iHeartMedia' },
  { id: 2, src: adpLogo, alt: 'ADP' },
  { id: 3, src: oracleLogo, alt: 'Oracle' },
  { id: 4, src: intercomLogo, alt: 'Intercom' },
  { id: 5, src: logitechLogo, alt: 'Logitech' },
  { id: 6, src: mongoDBLogo, alt: 'MongoDB' },
];

const ClientMarquee: React.FC = () => {
  // Helper to render a single set of logos
  const renderLogos = (prefix: string) => (
    logos.map((logo, index) => (
      <img
        key={`${prefix}-${logo.id}-${index}`} // Unique key for each logo instance across sets
        src={logo.src}
        alt={logo.alt}
        // flex-shrink-0 is crucial to prevent logos from squishing inside the flex container
        className="h-8 md:h-10 lg:h-12 mx-8 md:mx-12 lg:mx-16 flex-shrink-0 inline-block filter grayscale opacity-75 hover:opacity-100 transition-opacity duration-300"
        style={{ minWidth: '80px', maxWidth: '120px', objectFit: 'contain' }}
      />
    ))
  );

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* INLINE <style> TAG FOR KEYFRAMES AND CUSTOM CLASSES */}
      <style>
        {`
          /* Keyframes for the truly infinite marquee animation */
          @keyframes marquee-infinite-flow {
            0% { transform: translateX(0%); }
            /* This 33.333% assumes you have 3 identical sets of logos inside .marquee-track */
            100% { transform: translateX(-33.333%); }
          }

          /* Custom class for the marquee track */
          .marquee-track-infinite {
            animation: marquee-infinite-flow 90s linear infinite; /* Adjust duration for speed */
            width: fit-content; /* Critical: Allows track to expand to fit all content */
            white-space: nowrap; /* Critical: Keeps all items on a single line */
          }

          /* Font family definitions (if not handled by Tailwind config or global CSS) */
          .font-fustat { font-family: 'Fustat', sans-serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
        `}
      </style>

      <div className="container mx-auto px-4 text-center">
        <h2 className="font-fustat text-xl md:text-2xl font-normal text-gray-700 mb-12">
          Trusted clients
        </h2>
      </div>

      {/* Marquee Container (overflow hidden) */}
      <div className="w-full overflow-hidden py-4">
        {/* Marquee Track (moves, contains duplicated content) */}
        {/* Applying the custom inline CSS class here */}
        <div className="marquee-track-infinite flex items-center">
          {renderLogos("set1")} {/* First full set of logos */}
          {renderLogos("set2")} {/* Second identical full set of logos */}
          {renderLogos("set3")} {/* Third identical full set of logos for seamless loop */}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center mt-20 md:mt-24 lg:mt-32">
        <span
          className="inline-block
                     bg-gradient-to-r from-[#5034B6] to-[#271958]
                     text-transparent bg-clip-text
                     text-xs font-inter font-medium mb-4"
        >
          xsuite
        </span>
        <h3
          className="font-fustat text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight md:leading-tight lg:leading-[65px] tracking-[-0.58px] mx-auto max-w-3xl"
        >
          Smarter Solutions, Powered by Intelligence
        </h3>
      </div>
    </section>
  );
};

export default ClientMarquee;