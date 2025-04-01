import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import TermsAndCondition from "./pages/TermsAndCondition";
import TicketRate from "./pages/TicketRate";
import SignIn from "./pages/SignIn";
import MovieCollection from "./pages/MoviesColl";
import MovieDetails from "./components/movieDetails";
import Booking from "./components/Booking";
import Conditions from "./pages/Conditions";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Terms&Condition" element={<TermsAndCondition />} />
          <Route path="/TicketRate" element={<TicketRate />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Conditions" element={<Conditions />} />
          <Route path="/MoviesColl" element={<MovieCollection />} />
          <Route path="/MoviesColl/:id" element={<MovieDetails />} />
          <Route path="/MovieCard/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
}
