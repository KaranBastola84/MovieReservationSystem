import React, { useState, useEffect } from "react";
import img from "../assets/pexels1.jpg";
import img3 from "../assets/pexels3.jpg";
import left from "../assets/left.png";
import right from "../assets/right.png";

const images = [img, img3];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-5 relative">
      <div className="w-[1200px] h-[510px] overflow-hidden rounded-2xl shadow-xl relative">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-full object-cover transition-transform duration-500"
        />

        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-300 bg-opacity-80 p-2 rounded-full hover:bg-opacity-65 transition-all duration-300"
        >
          <img src={left} alt="" />
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-300 bg-opacity-80 p-2 rounded-full hover:bg-opacity-65 transition-all duration-300"
        >
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;