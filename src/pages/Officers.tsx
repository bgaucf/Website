 import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

// Import images for officers (replace with actual image imports)
import jaydenImage from "../images/Picture2.png"; // Example, replace with actual paths
import nathanImage from "../images/nathan.png";
import aamoghImage from "../images/aamogh1.png";
import angliImage from "../images/angli.png";
import gabeImage from "../images/gabe.png";
import mattisImage from "../images/mattis.png";
import elizImage from "../images/eliz.png";



interface Officer {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string; // LinkedIn property is optional, as not all officers may have one
}

const Officers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Executive");
  const [isVisible, setIsVisible] = useState<boolean>(false); // State to control visibility

  const officersData: Record<string, Officer[]> = {
    Executive: [
      {
        name: 'Abdullah Mohammed',
        role: 'Founder & President',
        image: jaydenImage,  // Replace with actual image
        description: 'Abdullah is a passionate leader aiming to work as Assistant GM of an NBA team. He enjoys basketball, traveling, and exploring new places.',
        linkedin: 'https://www.linkedin.com/in/abdullah-mohammed',  // Replace with actual LinkedIn URL
      },
      {
        name: 'Aamogh Sawant',
        role: 'Vice President',
        image: aamoghImage,  // Replace with actual image
        description: 'Aamogh is a tech enthusiast aiming to become a Software Engineer for Apple. He enjoys coding, guitar, and chess.',
        linkedin: 'https://www.linkedin.com/in/aamogh-sawant',  // Replace with actual LinkedIn URL
      },
      {
        name: 'Elizabeth Parks',
        role: 'Secretary',
        image: elizImage,  // Replace with actual image
        description: 'Elizabeth is aiming to be an Actuary or Data Scientist, with a passion for volleyball and traveling.',
        linkedin: 'https://www.linkedin.com/in/elizabeth-parks',  // Replace with actual LinkedIn URL
      },
      {
        name: 'Mattias Escudero',
        role: 'Treasurer',
        image: mattisImage,  // Replace with actual image
        description: 'Mattias aims to work in the sports/music industry as a Data Analyst, and enjoys concerts, running, and photography.',
        linkedin: 'https://www.linkedin.com/in/mattias-escudero',  // Replace with actual LinkedIn URL
      },
    ],
    Sports: [
      {
        name: 'Nathan Wright',
        role: 'Director, Sports',
        image: nathanImage, // Replace with actual image
        description: 'Nathan is passionate about sports management and dreams of working in the front office of the Jacksonville Jaguars.',
      },
      {
        name: 'Colin Montie',
        role: 'Workshop Coordinator, Sports',
        image: jaydenImage,  // Replace with actual image
        description: 'Colin is a Data Annotator with a love for sports and fantasy football.',
      },
      {
        name: 'Asa Arnold',
        role: 'Industry Relations Coordinator, Sports',
        image: jaydenImage,  // Replace with actual image
        description: 'Asa works in industry relations at Hertz and hosts "Analytics with Asa". He dreams of front office management or sports journalism.',
      },
      {
        name: 'Jayden Cruz Berdecia',
        role: 'Sports Liaison',
        image: jaydenImage,  // Replace with actual image
        description: 'Jayden is passionate about sports and aspires to be a General Manager.',
      },
    ],
    Business: [
      {
        name: 'Gabriel Macedo',
        role: 'Director, Business',
        image: gabeImage,  // Replace with actual image
        description: 'Gabriel is passionate about finance and dreams of working in wealth management or financial analysis.',
      },
      {
        name: 'Alex Patel',
        role: 'SSO (Strategic Support Officer)',
        image: jaydenImage,  // Replace with actual image
        description: 'Alex is pursuing a career in robotics/machine learning and enjoys tech-related hobbies.',
      },
     {
        name: 'Matthew Henderson',
        role: 'IRC (Industry Relations Coordinator)',
        image: jaydenImage,  // Replace with actual image
        description: 'Matthew is pursuing a career in robotics/machine learning and enjoys tech-related hobbies.',
      },
     {
        name: 'Issac',
        role: 'Business Secretary',
        image: jaydenImage,  // Replace with actual image
        description: 'Issac is pursuing a career in robotics/machine learning and enjoys tech-related hobbies.',
      },
     {
        name: 'Aamogh Sawant',
        role: 'Workshop Director',
        image: jaydenImage,  // Replace with actual image
        description: 'Aamogh is a tech enthusiast aiming to become a Software Engineer for Apple. He enjoys coding, guitar, and chess.',
      },
    ],
    Health: [
      {
        name: 'Anjali Murali',
        role: 'Director, Health',
        image: angliImage,  // Replace with actual image
        description: 'Anjali is a Pharm Tech with a passion for healthcare and a dream to become a physician.',
      },
    ],
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to allow the transition to take effect

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-black text-[#bba53d] min-h-screen p-4 flex flex-col justify-between">
      {/* Apply fade-in with duration-1000 and ease-in to the "Our Officers" heading */}
      <h1
        className={`text-4xl font-semibold mb-6 text-center transition-opacity duration-1000 ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Our Officers
      </h1>

      <div
        className={`flex justify-center gap-4 mb-6 transition-opacity duration-1000 ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {Object.keys(officersData).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? "bg-[#bba53d] text-white"  // Changed to the color #bba53d for selected category
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {officersData[selectedCategory].map((officer, index) => (
          <a
            key={index}
            href={officer.linkedin}  // Link to LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border rounded-lg shadow-md bg-gray-800 text-left hover:scale-105 transition-transform"
          >
            {officer.image && (
              <img
                src={officer.image}
                alt={officer.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-lg font-semibold text-[#bba53d] hover:underline">
              {officer.name}
            </h2>
            <p className="text-gray-300">{officer.role}</p>
            <p className="text-gray-400 mt-2">{officer.description}</p>
          </a>
        ))}
      </div>

      {/* Add "Our Projects" Button */}
      <div className="flex justify-center mt-auto mb-6">
        <Link
          to="/Projects"
          className="px-6 py-3 bg-[#bba53d] text-black rounded-lg hover:bg-[#a08c34] transition-colors"
        >
          Our Projects
        </Link>
      </div>
    </div>
  );
};

export default Officers;
