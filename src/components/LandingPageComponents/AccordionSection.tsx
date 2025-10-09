import React, { useState } from 'react';
import PlusIcon from '../../assets/Vector 2729.svg'; // Your SVG for the plus icon

// Define the data for the accordion
const accordionData = [
  {
    title: "Performance deserves precision.",
    content: "CaptainX delivers hyper-personalised insights that decode every move, every metric, every moment."
  },
  {
    title: "Talent needs traction.",
    content: "From academy to federations, CaptainX accelerates athlete development with AI-driven clarity and control."
  },
  {
    title: "Future of Sports Is AI",
    content: "CaptainX positions your organisation at the forefront of global sports innovation before others catch up."
  },
  {
    title: "Data should drive decisions.",
    content: "Empower academies and federations with predictive analytics that turn raw stats into winning strategies."
  },
];

const AccordionSection: React.FC = () => {
  // State to manage which accordion item is open. Initialize to null so none are open by default.
  const [openAccordion, setOpenAccordion] = useState<number | null>(null); 

  // Handle accordion toggle
  const handleToggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="relative bg-transparent py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row justify-between items-start overflow-hidden">
      {/* Absolute positioned blurred background element with radial gradient from top-right */}
      <div 
        className="absolute hidden lg:block" 
        style={{
          background: 'radial-gradient(circle at top right, #6843EC 0%, rgba(104, 67, 236, 0) 85%)', 
          filter: 'blur(180px)', 
          width: '700px', 
          height: '700px', 
          opacity: '0.35',
          top: '-300px', 
          right: '-300px', 
          pointerEvents: 'none', 
        }}
      ></div>

      {/* Left Content */}
      <div className="w-full lg:w-5/12 mb-12 lg:mb-0 relative z-10 bg-transparent">
        <p className="text-purple-700 text-sm font-semibold mb-2">Key value</p>
        <h2 
          className="text-gray-900 mb-6" // Retain text color and margin-bottom
          style={{
            fontFamily: 'Fustat, sans-serif', // Specify Fustat, fallback to sans-serif
            fontWeight: 400, // Regular
            fontSize: '56px', // Explicit font size
            lineHeight: '65px', // Explicit line height
            letterSpacing: '-0.58px', // Explicit letter spacing
            // leading-trim and vertical-align are typically not set directly on headings this way in CSS for visual effect.
            // If they are crucial, you might need more advanced CSS properties or a custom component for them.
          }}
        >
          Why Choose <br className="hidden sm:inline" />CaptainX
        </h2>
        <p className="text-lg text-gray-700 max-w-md">
          From federations, academies, athletes and coaches to fans, CaptainX delivers specialised solutions for every stakeholder: scalable, intelligent, futuristic, and built for impact.
        </p>
        <div className="mt-8 flex justify-center lg:justify-start">
          {/* <img src="https://via.placeholder.com/96x96" alt="CaptainX Icon" className="w-24 h-24 rounded-full shadow-lg" /> */}
        </div>
      </div>

      {/* Right Content - Accordion */}
      <div className="w-full lg:w-6/12 relative z-10">
        <div className="rounded-lg"> 
          {accordionData.map((item, index) => (
            <div 
              key={index} 
              className="group relative border-b border-gray-200 py-4 last:border-b-0"
            >
              {/* Vertical line on hover/active */}
              <div 
                className={`absolute left-0 top-0 h-full w-[1.73px] bg-[#02286F] transition-all duration-300 ease-in-out 
                  ${openAccordion === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              ></div>
              <button
                className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 focus:outline-none pl-4" 
                onClick={() => handleToggleAccordion(index)}
              >
                <span>{item.title}</span>
                <img
                  src={PlusIcon} // Your SVG path
                  alt="toggle"
                  className={`w-4 h-4 transition-transform duration-300 ${openAccordion === index ? 'rotate-45' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openAccordion === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 pr-8 pt-2 pl-4">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;