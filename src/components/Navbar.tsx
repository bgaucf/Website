import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import the image
import logoImage from "../components/bgaVro.png"; // Adjust path if needed

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-[#bba53d]">
      <div className="flex justify-between items-center px-4 py-3 w-full">
        
        {/* Desktop Menu (Logo + My Website + Links) */}
        <div className="flex items-center space-x-8 w-full justify-center">
          {/* Logo */}
          <img
            src={logoImage} // Use the imported image
            alt="Logo"
            className="w-10 h-10" // Adjust size of the logo
          />
          {/* "My Website" Text */}
          <div className="text-lg font-bold">Black and Gold Analytics</div>
          
          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-8 font-bold transition-opacity ease-in opacity-100">
            <Link 
              to="/" 
              className="hover:underline px-4 py-2" 
              onClick={handleLinkClick}
              style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:underline px-4 py-2" 
              onClick={handleLinkClick}
              style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
            >
              About
            </Link>
            <Link 
              to="/officers" 
              className="hover:underline px-4 py-2" 
              onClick={handleLinkClick}
              style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
            >
              Officers
            </Link>
            <Link 
              to="/projects" 
              className="hover:underline px-4 py-2" 
              onClick={handleLinkClick}
              style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
            >
              Projects
            </Link>
            <Link 
              to="/social" 
              className="hover:underline px-4 py-2" 
              onClick={handleLinkClick}
              style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
            >
              Socials
            </Link>
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          className="sm:hidden text-[#bba53d] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <ul
        className={`absolute left-0 top-0 w-1/2 h-full bg-black sm:hidden font-bold transition-all duration-300 ease-in-out transform transition-opacity ease-in ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <li>
          <Link 
            to="/" 
            className="block px-4 py-2 hover:underline" 
            onClick={handleLinkClick}
            style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="block px-4 py-2 hover:underline" 
            onClick={handleLinkClick}
            style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/officers" 
            className="block px-4 py-2 hover:underline" 
            onClick={handleLinkClick}
            style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
          >
            Officers
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className="block px-4 py-2 hover:underline" 
            onClick={handleLinkClick}
            style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/social" 
            className="block px-4 py-2 hover:underline" 
            onClick={handleLinkClick}
            style={{ color: '#bba53d' }} // Set the text color to custom yellowish-brown
          >
            Social
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
