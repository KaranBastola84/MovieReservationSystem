import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("New Release");

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

  return (
    <div>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 px-20 my-10">
        {movies.slice(0, 4).map((movie) => {
          // Function to format the release date
          const formatReleaseDate = (dateString) => {
            const dateObj = new Date(dateString);
            const options = { month: "long", day: "numeric", year: "numeric" };
            return dateObj.toLocaleDateString("en-US", options);
          };

          return (
            <div key={movie.id} className="w-full flex flex-col gap-1">
              <Link to={`/MoviesColl/${movie.id}`}>
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
          );
        })}
      </div>

      <div className="flex justify-center w-full">
        <button
          onClick={() => setActiveTab("New Release")}
          className={`w-32 py-2 ${
            activeTab === "New Release"
              ? "bg-red-600 text-white"
              : "bg-gray-300 text-gray-600"
          } rounded-[25px]`}
        >
          New Release
        </button>
        <button
          onClick={() => setActiveTab("Coming Soon")}
          className={`w-36 py-2 ${
            activeTab === "Coming Soon"
              ? "bg-red-600 text-white"
              : "bg-gray-300 text-gray-600"
          } rounded-[25px]`}
        >
          Coming Soon
        </button>
      </div>

      {activeTab === "Coming Soon" && (
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 px-20 my-10">
          {movies.slice(10, 20).map((movie) => {
            // Function to format the release date
            const formatReleaseDate = (dateString) => {
              const dateObj = new Date(dateString);
              const options = { month: "long", day: "numeric", year: "numeric" };
              return dateObj.toLocaleDateString("en-US", options);
            };

            return (
              <div key={movie.id} className="w-full flex flex-col gap-1">
                <Link to={`/MoviesColl/${movie.id}`}>
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
            );
          })}
        </div>
      )}

      {activeTab === "New Release" && (
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 px-20 my-10">
          {movies.slice(4, 10).map((movie) => {
            // Function to format the release date
            const formatReleaseDate = (dateString) => {
              const dateObj = new Date(dateString);
              const options = { month: "long", day: "numeric", year: "numeric" };
              return dateObj.toLocaleDateString("en-US", options);
            };

            return (
              <div key={movie.id} className="w-full flex flex-col gap-1">
                <Link to={`/MoviesColl/${movie.id}`}>
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Movies;