import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowDownIcon from '../assets/vector.svg'; // Your desktop arrow icon
import CompanyLogo from '../assets/Group 1597883762 (1).jpg'; // Your company logo
import MenuIcon from '../assets/Group 1597888033.svg'; // Your hamburger menu icon
import CloseIcon from '../assets/Vector.svg'; // Your close (X) icon SVG

// --- Desktop NavLink Component ---
interface NavLinkProps {
  to: string;
  label: string;
  hasArrow?: boolean;
}

const DesktopNavLink: React.FC<NavLinkProps> = ({ to, label, hasArrow = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const arrowFilterStyle: React.CSSProperties = {
    filter: 'none',
    transition: 'filter 300ms ease-in-out',
  };

  if (isActive) {
    arrowFilterStyle.filter = 'invert(35%) sepia(85%) saturate(3000%) hue-rotate(220deg) brightness(90%) contrast(100%)';
  }

  return (
    <Link
      to={to}
      className={`
        flex items-center space-x-1
        font-fustat font-normal text-[15px] leading-[1.1] capitalize
        hover:text-gray-600 transition-colors duration-300
        ${isActive ? 'text-indigo-600' : 'text-gray-800'}
      `}
    >
      <span>{label}</span>
      {hasArrow && (
        <img
          src={ArrowDownIcon}
          alt="dropdown arrow"
          className="w-[10px] h-[6px] ml-1"
          style={arrowFilterStyle}
        />
      )}
    </Link>
  );
};

// --- Mobile NavLink Component ---
interface MobileNavLinkProps {
  to: string;
  label: string;
  onClose: () => void;
  hasChevron?: boolean; // For the right-pointing arrow in the mobile list
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, onClose, hasChevron = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  // Placeholder for a simple right-pointing chevron SVG data URI
  const ChevronRightIcon = 'data:image/svg+xml;utf8,<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 1.5L7 5L3.5 8.5" stroke="%239CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  return (
    <Link
      to={to}
      onClick={onClose}
      className={`
        flex justify-between items-center py-4 px-4 border-b border-gray-200
        font-fustat text-[17px] font-normal leading-[1.1] capitalize
        hover:bg-gray-50 transition-colors duration-300
        ${isActive ? 'text-indigo-600' : 'text-gray-800'}
      `}
    >
      <span>{label}</span>
      {hasChevron && (
         <img src={ChevronRightIcon} alt="go to" className="w-3 h-3 opacity-50" />
      )}
    </Link>
  );
};


// --- Main Navbar Component ---
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);
  const location = useLocation();
  const isLetsTalkActive = location.pathname === '/contact';


  return (
    <>
      {/* --- Desktop & Mobile Header (always visible) --- */}
      <header className="bg-white p-4 shadow-sm border-b border-black sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between flex-wrap">

          {/* Mobile Logo (visible on small screens) */}
          <div className="md:hidden flex items-center flex-shrink-0 mr-auto">
            <Link to="/" onClick={handleCloseMobileMenu}>
              <img
                src={CompanyLogo}
                alt="Company Logo"
                className="w-[118.9px] h-[19px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Logo (visible on medium screens and up) */}
          <div className="hidden md:flex items-center flex-shrink-0 mr-6">
            <Link to="/">
              <img
                src={CompanyLogo}
                alt="Company Logo"
                className="w-[144px] h-[23px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links (Hidden on small screens) */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-8">
            <DesktopNavLink to="/products" label="Products" hasArrow />
            {/* Separated Company and Partners */}
            <DesktopNavLink to="/company" label="Company" hasArrow />
            <DesktopNavLink to="/partners" label="Partners" hasArrow />
            <DesktopNavLink to="/news-insights" label="News & Insights" hasArrow />
            <DesktopNavLink to="/careers" label="Careers" hasArrow />
          </div>

          {/* Desktop Let's Talk Button (Hidden on small screens) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact" // Changed to Link
              className={`
                className="
                px-6 py-2
            bg-white text-black border-black border-1 
                rounded-full
                font-fustat text-[15px] font-semibold leading-[1.1] capitalize
                w-[131px] h-[41px]
                flex items-center justify-center
                hover:bg-indigo-700 transition-all duration-300
              "
                ${isLetsTalkActive
                  ? ' bg-white text-black border-black border-1  hover:bg-indigo-700 hover:border-indigo-700'
                  : 'bg-transparent text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) - visible on small screens */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -mr-2">
              <img src={MenuIcon} alt="Open menu" className="w-[34.2px] h-[19px] object-contain" />
            </button>
          </div>
        </nav>
      </header>

      {/* --- Mobile Menu Overlay (conditionally rendered) --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out"
        >
          {/* Mobile Menu Header (Logo + Close Button) */}
          <div className="flex justify-between items-center p-4 border-b border-black">
            <Link to="/" onClick={handleCloseMobileMenu}>
              <img
                src={CompanyLogo}
                alt="Company Logo"
                className="w-[118.9px] h-[19px] object-contain"
              />
            </Link>
            <button onClick={handleCloseMobileMenu} className="p-2 -mr-2">
              <img
                src={CloseIcon}
                alt="Close menu"
                className="w-[34.2px] h-[19px] object-contain"
              />
            </button>
          </div>

          {/* Mobile Navigation Links List */}
          <nav className="flex flex-col mt-4">
            <MobileNavLink to="/products" label="Products" onClose={handleCloseMobileMenu} hasChevron />
            {/* Keep these separate as they were already */}
            <MobileNavLink to="/company" label="Company" onClose={handleCloseMobileMenu} hasChevron />
            <MobileNavLink to="/partners" label="Partners" onClose={handleCloseMobileMenu} hasChevron />
            <MobileNavLink to="/people" label="People" onClose={handleCloseMobileMenu} hasChevron />
            <MobileNavLink to="/news-insights" label="News" onClose={handleCloseMobileMenu} hasChevron />
            <MobileNavLink to="/careers" label="Careers" onClose={handleCloseMobileMenu} hasChevron />
          </nav>

          {/* Let's Talk Button (Mobile) */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center p-4">
            <Link // Changed to Link
              to="/contact"
              onClick={handleCloseMobileMenu}
              className="
                px-6 py-2
            bg-white text-black border-black border-1 
                rounded-full
                font-fustat text-[15px] font-semibold leading-[1.1] capitalize
                w-[131px] h-[41px]
                flex items-center justify-center
                hover:bg-indigo-700 transition-all duration-300
              "
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;