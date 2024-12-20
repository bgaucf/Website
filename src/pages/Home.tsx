import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(false); // State for image fade-in effect

  // Array of image paths
  const images = [
    require("../images/gbm.png"),
    require("../images/Picture2.png"),
    require("../images/gbm copy 2.png"),
  ];

  useEffect(() => {
    // Fade in the text on initial load
    const textTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Fade in the initial image
    const imageTimeout = setTimeout(() => {
      setImageVisible(true);
    }, 200);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(imageTimeout);
    };
  }, []);

  // Helper function to transition images with a fade effect
  const transitionImage = (updateIndexFn: () => number) => {
    setImageVisible(false); // Fade out the current image
    setTimeout(() => {
      setCurrentImageIndex(updateIndexFn()); // Update the image index
      setImageVisible(true); // Fade in the new image
    }, 500); // Match this delay to the fade-out duration
  };

  // Go to the next image
  const goToNextImage = () => {
    transitionImage(() => (currentImageIndex + 1) % images.length);
  };

  // Go to the previous image
  const goToPrevImage = () => {
    transitionImage(() => (currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div
          className={`text-left max-w-4xl md:mr-6 transition-opacity duration-1000 ease-in ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl font-semibold" style={{ color: "#bba53d" }}>
            Welcome to Black and Gold Analytics
          </h1>
          <p className="mt-6">
            Black and Gold Analytics (BGA) is a forward-thinking, data-driven
            organization dedicated to unlocking the full potential of analytics
            to solve complex challenges and foster meaningful growth. By
            harnessing the power of data and blending it with deep industry
            expertise, we provide unmatched insights that empower businesses,
            sports teams, healthcare systems, and other organizations to make
            confident, informed decisions in an increasingly competitive world.
          </p>
          <p className="mt-4">
            At BGA, we believe data is more than just numbers—it's a story
            waiting to be told. Our team of data scientists, analysts,
            engineers, and industry professionals collaborates seamlessly to
            reveal hidden patterns, forecast trends, and deliver actionable
            strategies that lead to measurable success. By transforming raw
            data into valuable knowledge, we help our clients stay ahead of the
            curve and thrive in their respective industries.
          </p>
          <p className="mt-4">
            Black and Gold Analytics (BGA) is not just about collecting and
            analyzing data; it’s about understanding the deeper insights that
            data can offer to drive innovation and success. Our approach is
            rooted in a deep commitment to uncovering the stories behind the
            numbers, giving businesses the clarity they need to make strategic
            decisions and achieve sustainable growth.
          </p>
          <p className="mt-4">
            Ultimately, at BGA, we’re not just providing data—we’re creating a
            foundation for success in an ever-evolving world. Our mission is to
            unlock the full potential of data and use it as a force for
            positive, long-term change for organizations across every sector.
          </p>

          <div className="mt-8 flex flex-col items-center">
            <a
              href="/about"
              className="text-black py-3 px-8 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              style={{
                backgroundColor: "#bba53d",
              }}
            >
              Join Us
            </a>
          </div>
        </div>

        <div className="relative w-96 h-96 flex items-center justify-center mt-8 md:mt-0">
          <button
            onClick={goToPrevImage}
            className="absolute left-0 text-4xl text-white bg-black bg-opacity-50 rounded-full p-2"
          >
            &#10094;
          </button>

          <img
            src={images[currentImageIndex]}
            alt="Black and Gold Analytics"
            className={`object-cover w-full h-full transition-opacity duration-500 ease-in-out ${
              imageVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          <button
            onClick={goToNextImage}
            className="absolute right-0 text-4xl text-white bg-black bg-opacity-50 rounded-full p-2"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
