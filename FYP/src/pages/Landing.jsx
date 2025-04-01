import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Movies from "../components/MovieCard";
import { useParams } from "react-router-dom";

function Landing() {
  const [selectedDay, setSelectedDay] = useState("today");

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <Header />
      <ImageSlider />
      <div className="flex items-center gap-10 w-auto h-14 ml-24 mt-10">
        <div className="font-bold text-xl mr-4">
          <h2>NOW SHOWING</h2>
        </div>
        <div className="flex gap-10 items-center font-bold text-lg">
          <button
            className={`h-12 w-20 rounded-full border-2  ${
              selectedDay === "today" ? "bg-red-600 text-white border-red-600" : "bg-transparent text-gray-700 border-gray-400"
            } hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200`}
            onClick={() => handleDayChange("today")}>
            Today
          </button>
          <button
            className={`h-12 w-20 rounded-full border-2 ${
              selectedDay === "tomm" ? "bg-red-600 text-white border-red-600" : "bg-transparent text-gray-700 border-gray-400"
            } hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-200`}
            onClick={() => handleDayChange("tomm")}>
            Tomm
          </button>
        </div>
      </div>
      <Movies />
      <Footer />
    </>
  );
}

export default Landing;
