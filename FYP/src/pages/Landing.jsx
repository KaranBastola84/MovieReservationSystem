import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

function Landing() {
  const [selectedDay, setSelectedDay] = useState("today");

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <Header />
      <ImageSlider />
      <div className="show flex gap-20 w-auto h-14 ml-24 mt-10">
        <div className="head font-bold text-xl">
          <h2>
            NOW <br /> SHOWING
          </h2>
        </div>
        <div className="show-time gap-10 flex">
          <button
            className={`h-12 w-20 mt-1 rounded-full border-2 ${
              selectedDay === "today"
                ? "bg-red-600 text-white border-red-600" 
                : "bg-transparent text-gray-700 border-gray-400" 
            } hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200`}
            onClick={() => handleDayChange("today")}
          >
            Today
          </button>
          <button
            className={`h-12 w-20 mt-1 rounded-full border-2 ${
              selectedDay === "tomm"
                ? "bg-red-600 text-white border-red-600" 
                : "bg-transparent text-gray-700 border-gray-400" 
            } hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200`}
            onClick={() => handleDayChange("tomm")}
          >
            Tomm
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;