import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

// Importing PDF files (Replace with actual paths)
import sportsPDF1 from "../pdfs/Travel Time Performance Analysis-NBA.pdf";
import sportsPDF2 from "../pdfs/Travel Time Performance Analysis-NBA.pdf";
import businessPDF1 from "../pdfs/Travel Time Performance Analysis-NBA.pdf";
import businessPDF2 from "../pdfs/Travel Time Performance Analysis-NBA.pdf";
import healthPDF1 from "../pdfs/Travel Time Performance Analysis-NBA.pdf";
import healthPDF2 from "../pdfs/Travel Time Performance Analysis-NBA.pdf";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Sports");
  const [isVisible, setIsVisible] = useState<boolean>(false); // State to control visibility

  // Project data
  const categoryPDFs: Record<string, string[]> = {
    Sports: [sportsPDF1, sportsPDF2],
    Business: [businessPDF1, businessPDF2],
    Health: [healthPDF1, healthPDF2],
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to allow the transition to take effect

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-black text-[#bba53d] min-h-screen p-4 flex flex-col justify-between">
      {/* Apply fade-in with duration-1000 and ease-in to the "Our Projects" heading */}
      <h1
        className={`text-4xl font-semibold mb-6 text-center transition-opacity duration-1000 ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Our Projects
      </h1>

      {/* Category Buttons */}
      <div
        className={`flex justify-center gap-4 mb-6 transition-opacity duration-1000 ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {["Sports", "Business", "Health"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? "bg-[#bba53d] text-white"  // Highlight selected category
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Cards */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {categoryPDFs[selectedCategory].map((pdf, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-gray-800 text-left"
          >
            <h2 className="text-lg font-semibold mb-4 text-center text-[#bba53d]">
              {`${selectedCategory} Project ${index + 1}`}
            </h2>
            <iframe
              src={pdf}
              width="100%"
              height="500px"  // Adjust height to suit your needs
              title={`${selectedCategory} Project ${index + 1}`}
              frameBorder="0"
              className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>

      {/* Back to Officers Button */}
      <div className="flex justify-center mt-auto mb-6">
        <Link
          to="/social"
          className="px-6 py-3 bg-[#bba53d] text-black rounded-lg hover:bg-[#a08c34] transition-colors"
        >
          Contact Us!
        </Link>
      </div>
    </div>
  );
};

export default Projects;
