import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const MoviesColl = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState("today");
  
    const handleDayChange = (day) => {
      setSelectedDay(day);
    };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch popular movies
        const url =
          "https://api.themoviedb.org/3/movie/popular?api_key=919645e21353ba7d6b128ecc5c9c82d7";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Fetch runtime for each movie
        const moviesWithRuntime = await Promise.all(
          data.results.map(async (movie) => {
            const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=919645e21353ba7d6b128ecc5c9c82d7`;
            const detailsResponse = await fetch(movieDetailsUrl);
            const detailsData = await detailsResponse.json();
            return { ...movie, runtime: detailsData.runtime };
          })
        );

        setMovies(moviesWithRuntime);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Function to format runtime (e.g., "2h 19m")
  const formatRuntime = (runtime) => {
    if (!runtime) return "Runtime not available";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  // Function to format the release date
  const formatReleaseDate = (dateString) => {
    const dateObj = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return dateObj.toLocaleDateString("en-US", options);
  };

  return (
    <>
    <Header />
    <div>
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
      {/* First Section: New Release */}
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 px-20 mt-10">
        {movies.slice(0, 4).map((movie) => (

          <div key={movie.id} className="w-full flex flex-col gap-1">
            <Link to={`${movie.id}`}>
            <img
              className="w-full h-[350px] rounded-tr-[30px] rounded-bl-[30px] object-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            </Link>
            <h1 className="w-full font-bold text-xl mt-4">{movie.title}</h1>
            <p className="text-sm">Release Date: {formatReleaseDate(movie.release_date)}</p>
            <p className="text-sm">Runtime: {formatRuntime(movie.runtime)}</p>
            <br />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-10 w-auto h-14 ml-24 mb-5">
        <div className="font-bold text-xl mr-4">
          <h2>Next Release</h2>
        </div>
      </div>


      {/* Second Section: Coming Soon */}
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 px-20 mb-10 mt-2">
        {movies.slice(4, 10).map((movie) => (

          <div key={movie.id} className="w-full flex flex-col gap-1">
            <Link to={`${movie.id}`}>
            <img
              className="w-full h-[350px] rounded-tr-[30px] rounded-bl-[30px] object-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            /></Link>
            <h1 className="w-full font-bold text-xl mt-4">{movie.title}</h1>
            <p className="text-sm">Release Date: {formatReleaseDate(movie.release_date)}</p>
            <p className="text-sm">Runtime: {formatRuntime(movie.runtime)}</p>
            <br />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-10 w-auto h-14 ml-24 mb-5">
        <div className="font-bold text-xl mr-4">
          <h2>Coming soon</h2>
        </div>
      </div>

      {/* Third Section: Another Category */}
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 px-20 my-10">
        {movies.map((movie) => (
          <div key={movie.id} className="w-full flex flex-col gap-1">
            <Link to={`${movie.id}`}>
            <img
              className="w-full h-[350px] rounded-tr-[30px] rounded-bl-[30px] object-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            /></Link>
            <h1 className="w-full font-bold text-xl mt-4">{movie.title}</h1>
            <p className="text-sm">Release Date: {formatReleaseDate(movie.release_date)}</p>
            <p className="text-sm">Runtime: {formatRuntime(movie.runtime)}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MoviesColl;