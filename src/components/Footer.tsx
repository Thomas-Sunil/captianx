import React from 'react';
import { Link } from 'react-router-dom';

// --- IMPORTANT: Update these import paths with your actual paths ---
// Corrected to use the .jpg version for consistency if that's what's used in Navbar
import CompanyLogo from '../assets/Group 1597883762.svg';
import CityscapeBackground from '../assets/Group 1597888024.svg';
import LinkedInIcon from '../assets/item.svg'; // Assuming these are your social icon SVGs
import InstagramIcon from '../assets/item (1).svg';
import FacebookIcon from '../assets/item (2).svg';
import XIcon from '../assets/item (3).svg';
// --- END IMPORTANT ---

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/company' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com' },
    { name: 'X', icon: XIcon, url: 'https://twitter.com' },
  ];

  const quickLinks = [
    { label: 'Products', to: '/products' },
    { label: 'Company', to: '/company' },
    { label: 'Partners', to: '/partners' }, // Corrected typo: Patners -> Partners
    { label: 'News & Stories', to: '/news-insights' },
    { label: 'Careers', to: '/careers' },
  ];

  return (
    <footer
      className="text-white relative overflow-hidden flex flex-col justify-between"
      style={{
        backgroundColor: '#151227',
        // minHeight: '837px', // Removed fixed height to allow content to dictate height, keeping `flex-col justify-between`
      }}
    >
      {/* Cityscape Background */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0"
        style={{
          backgroundImage: `url(${CityscapeBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1738.867431640625px 421.0003662109375px', // Consider responsive backgroundSize if needed
          backgroundPosition: 'center bottom', // Changed to center for better horizontal alignment
          opacity: 1,
          height: '421px', // Fixed height for background
          width: '100%',
        }}
      ></div>

      {/* Main content container with improved padding */}
      <div className="container mx-auto px-12 sm:px-6 lg:px-24 relative z-10 py-16 md:py-20"> {/* Added sm:px-6 lg:px-8 for better responsive padding */}

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-20">
          {/* Company Info (Logo and Description) */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <Link to="/">
              <img src={CompanyLogo} alt="Company Logo" className="h-8 mb-4 object-contain" />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              AI-powered sports tech that transforms the sports ecosystem.
            </p>
          </div>

          {/* Contact & Location - Side-by-side on all screen sizes */}
          {/* Applied horizontal padding to this section as well */}
          <div className="flex flex-col sm:flex-row sm:gap-16 lg:gap-24 mb-8 lg:mb-0 lg:ml-10 mt-8 lg:mt-0">
            <div className="mb-6 sm:mb-0">
              <h4 className="font-semibold text-lg mb-3">Contact Us</h4>
              <p className="text-sm text-gray-400">+966-53 987 23 89</p>
              <p className="text-sm text-gray-400">info@captainx.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Location</h4>
              <p className="text-sm text-gray-400">Riyadh, Saudi Arabia</p>
            </div>
          </div>

          {/* Quick Links Section - Moved here for mobile flow */}
          <div className="mt-8 lg:hidden">
            <h4 className="font-semibold text-lg mb-3">Quick links</h4>
            <nav>
              <ul className="grid grid-cols-1 gap-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Follow Us On - Now with responsive styling */}
          <div className="">
            <h4 className="font-semibold text-lg mb-3">Follow Us On</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="block"
                >
                  <img
                    src={link.icon}
                    alt={link.name}
                    style={{
                      width: '40px',
                      height: '40px',
                      opacity: 1,
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section - Visible only on large screens */}
        <div className="mt-16 hidden lg:block">
          <h4 className="font-semibold text-lg mb-3">Quick links</h4>
          <nav>
            <ul className="grid grid-cols-1 gap-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div> {/* End of main content container */}

      {/* Copyright - Now has padding and responsive text alignment */}
      <div className="relative z-10 py-6 text-center text-sm text-gray-500  mt-auto"> {/* Added py-6 and border-t */}
        <p className="container mx-auto px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} — Copyright All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;