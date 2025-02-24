import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

const Landing = () => {
  const [selectedDate, setSelectedDate] = useState("today");

  // Sample data for movies
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      poster: "https://via.placeholder.com/200x300",
      rating: "8.5/10",
      genre: "Action, Thriller",
      releaseDate: "2023-10-25",
      isReleased: true,
      showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    },
    {
      id: 2,
      title: "Movie 2",
      poster: "https://via.placeholder.com/200x300",
      rating: "7.9/10",
      genre: "Comedy, Drama",
      releaseDate: "2023-10-26",
      isReleased: true,
      showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
    },
    {
      id: 3,
      title: "Movie 3",
      poster: "https://via.placeholder.com/200x300",
      rating: "9.1/10",
      genre: "Sci-Fi, Adventure",
      releaseDate: "2023-11-01",
      isReleased: false,
    },
    {
      id: 4,
      title: "Movie 4",
      poster: "https://via.placeholder.com/200x300",
      rating: "8.0/10",
      genre: "Horror, Mystery",
      releaseDate: "2023-11-05",
      isReleased: false,
    },
  ];

  // Filter movies based on selected date
  const filteredMovies = movies.filter((movie) => {
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split("T")[0];

    if (selectedDate === "today") {
      return movie.releaseDate === today && movie.isReleased;
    } else if (selectedDate === "tomorrow") {
      return movie.releaseDate === tomorrow && movie.isReleased;
    }
    return movie.isReleased;
  });

  // Filter upcoming movies
  const upcomingMovies = movies.filter((movie) => !movie.isReleased);

  return (
    <div>
      <Header />
      <ImageSlider />
      <div className="container mx-auto px-4">
        {/* Date Filters */}
        <div className="flex justify-center gap-4 mt-5">
          <button
            onClick={() => setSelectedDate("today")}
            className={`px-4 py-2 rounded ${
              selectedDate === "today"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setSelectedDate("tomorrow")}
            className={`px-4 py-2 rounded ${
              selectedDate === "tomorrow"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Tomorrow
          </button>
        </div>

        {/* Now Showing Section */}
        <h2 className="font-bold text-2xl pt-5">NOW SHOWING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{movie.title}</h3>
                <p className="text-gray-600">{movie.rating}</p>
                <p className="text-gray-600">{movie.genre}</p>
                <div className="mt-2">
                  {movie.showtimes && (
                    <div className="flex flex-wrap gap-2">
                      {movie.showtimes.map((time, index) => (
                        <button
                          key={index}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-all"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <h2 className="font-bold text-2xl pt-10">COMING SOON</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {upcomingMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{movie.title}</h3>
                <p className="text-gray-600">Release Date: {movie.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;