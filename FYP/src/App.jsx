import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from "./pages/landing";
import AboutUs from "./pages/AboutUs";
import TermsAndCondition from "./pages/TermsAndCondition";
import TicketRate from "./pages/TicketRate";
import SignIn from "./pages/SignIn";
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
      </Routes>
    </Router>
    </>
  );
}
