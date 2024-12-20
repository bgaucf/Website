import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const About: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Trigger fade-in effect after component mounts
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <div className="bg-black text-[#bba53d] min-h-screen py-8">
      <h1
        className={`text-center text-4xl font-semibold mb-10 transition-opacity duration-1000 ease-in ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
          About Us
      </h1>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto transition-opacity duration-1000 ease-in ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Sports Card */}
        <div className="bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg p-6 text-center ease-in transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 bg-[#bba53d] text-black py-2 rounded-lg">
            Sports
          </h2>
          <p className="text-gray-300">
            Our Sports Analytics branch leverages cutting-edge statistical models and machine learning techniques to enhance player performance, optimize team dynamics, and refine game strategies. We also help sports organizations analyze fan engagement and behavior to tailor marketing campaigns and improve the overall fan experience.
          </p>
        </div>

        {/* Business Card */}
        <div className="bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg p-6 text-center ease-in transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 bg-[#bba53d] text-black py-2 rounded-lg">
            Business
          </h2>
          <p className="text-gray-300">
            Our Business Analytics services focus on providing market intelligence to help businesses identify growth opportunities and assess market trends. We also work on improving operational efficiency by streamlining processes and uncovering inefficiencies, while offering customer insights to optimize customer satisfaction and loyalty.
          </p>
        </div>

        {/* Health Card */}
        <div className="bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg p-6 text-center ease-in transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 bg-[#bba53d] text-black py-2 rounded-lg">
            Health
          </h2>
          <p className="text-gray-300">
            Health Analytics at BGA focuses on improving patient care by providing healthcare providers with data-driven insights for personalized treatment plans. We optimize healthcare efficiency by enhancing workflows and reducing readmissions. Additionally, we use predictive analytics to forecast disease outbreaks and improve preventative care to reduce overall healthcare costs.
          </p>
        </div>
      </div>

      {/* Centered Button */}
      <div
        className={`text-center mt-12 transition-opacity duration-1000 ease-in ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          className="bg-[#bba53d] hover:bg-[#a38f35] text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in"
          onClick={() => navigate("/Officers")} // Navigate to the /Officers route
        >
          Check Our Team
        </button>
      </div>
    </div>
  );
};

export default About;
