import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Booking from "../components/Booking";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [selectedDay, setSelectedDay] = useState("today");
  const [showBooking, setShowBooking] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [movieTimes] = useState({
    "8:00AM": "available",
    "11:00AM": "partially-booked",
    "1:30PM": "booked",
  });
  // backend
  // const [selectedAudi, setSelectedAudi] = useState("");
  // const [showtimes, setShowtimes] = useState([]);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const detailsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=919645e21353ba7d6b128ecc5c9c82d7`
        );

        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=919645e21353ba7d6b128ecc5c9c82d7`
        );

        const directors = creditsResponse.data.crew.filter(
          (member) => member.job === "Director"
        );

        setMovie({
          ...detailsResponse.data,
          cast: creditsResponse.data.cast
            .slice(0, 5)
            .map((actor) => actor.name),
          directors: directors.map((director) => director.name),
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const formatRuntime = (runtime) => {
    if (!runtime) return "Runtime not available";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const formatReleaseDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleScreenClick = (time) => {
    const status = movieTimes[time];
    if (status === "available" || status === "partially-booked") {
      setSelectedTime(time);
      setShowBooking(false);
      setTimeout(() => setShowBooking(true), 0);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <span className="font-mono font-semibold text-2xl mb-8 block">
          Movie Details
        </span>

        <div className="bg-gray-100 rounded-xl p-8 mb-8 flex gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-72 h-[390px] rounded-xl"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
            <div className="space-y-2 mb-4">
              <p>Genre: {movie.genres?.map((g) => g.name).join(", ")}</p>
              <p>Runtime: {formatRuntime(movie.runtime)}</p>
              <p>Release Date: {formatReleaseDate(movie.release_date)}</p>
            </div>
            <p className="mb-4">{movie.overview}</p>
            <div className="space-y-2">
              <p>Cast: {movie.cast?.join(", ")}</p>
              <p>Directors: {movie.directors?.join(", ")}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-mono">Viewing Times</h2>
            <div className="flex gap-4">
              <button
                onClick={() => handleDayChange("today")}
                className={`px-6 py-2 rounded-full ${
                  selectedDay === "today"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Today
              </button>
              <button
                onClick={() => handleDayChange("tomm")}
                className={`px-6 py-2 rounded-full ${
                  selectedDay === "tomm"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Tomorrow
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <div className="flex items-center gap-8">
              <div className="bg-red-500 text-white px-8 py-4 rounded-l-xl">
                <h3 className="text-2xl font-mono">Audi 1</h3>
              </div>
              {Object.entries(movieTimes).map(([time, status]) => (
                <button
                  key={time}
                  onClick={() => handleScreenClick(time)}
                  className={`px-6 py-4 rounded-xl ${
                    status === "available"
                      ? "bg-green-400 hover:bg-green-500"
                      : status === "partially-booked"
                      ? "bg-yellow-400"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {showBooking && (
          <Booking
            totalSeats={10}
            seatPrice={300}
            movieDetails={{
              name: movie.title,
              date:
                selectedDay === "today"
                  ? new Date().toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : new Date(Date.now() + 86400000).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    ),
              time: selectedTime,
              audi: "Audi 1",
            }}
            onClose={() => setShowBooking(false)}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
