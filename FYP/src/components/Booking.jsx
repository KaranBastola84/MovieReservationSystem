import React, { useState } from "react";
import { Armchair, ShieldCheck, Ticket, X, Lock } from "lucide-react";
import Khalti from "../assets/khalti.jpeg";
import Esewa from "../assets/esewa.svg";
import TermsAndConditions from "../pages/Conditions";

const App = ({ totalSeats, seatPrice, movieDetails }) => {
  const [showBooking, setShowBooking] = useState(true);
  const handleClose = () => {
    setShowBooking(false);
  };

  const formatReleaseDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <>
      <div>
        {showBooking && (
          <Booking
            totalSeats={totalSeats}
            seatPrice={seatPrice}
            movieDetails={movieDetails}
            onClose={handleClose}
          />
        )}
      </div>
    </>
  );
};

const Booking = ({
  totalSeats = 10,
  seatPrice = 300,
  movieDetails = {
    name: "Movie Title",
    date: new Date().toLocaleDateString(),
    time: "8:00 AM",
    audi: "Audi 1",
  },
  onClose,
}) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const { name, date, time, audi } = movieDetails;
  const serviceFee = 50;

  const toggleSeat = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleProceed = () => setShowPayment(true);
  const handleBack = () => setShowPayment(false);

  const handleBuyNow = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }

    if (!acceptedTerms) {
      alert("Please accept the terms and conditions");
      return;
    }

    alert(
      `Booking confirmed for ${name} via ${selectedPayment}!\nSeats: ${selectedSeats
        .map((s) => `${audi}-${String(s + 1).padStart(2, "0")}`)
        .join(", ")}`
    );
    setSelectedSeats([]);
    setShowPayment(false);
    onClose();
  };

  if (showTerms) {
    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-purple-900 to-indigo-800 rounded-2xl w-full max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">
              Terms and Conditions
            </h1>
            <button
              onClick={() => setShowTerms(false)}
              className="p-2 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>
          <TermsAndConditions />
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setShowTerms(false)}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showPayment) {
    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-purple-900 to-indigo-800 rounded-2xl w-full max-w-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">Payment Summary</h1>
            <button
              onClick={handleBack}
              className="p-2 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white/10 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-3">
                <Ticket className="text-purple-300" size={20} />
                <div>
                  <h2 className="text-lg font-semibold text-white">{name}</h2>
                  <p className="text-sm text-gray-300">
                    {date} | {time} | {audi}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Seats:{" "}
                {selectedSeats
                  .map((s) => `${audi}-${String(s + 1).padStart(2, "0")}`)
                  .join(", ")}
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <h3 className="text-base font-semibold text-white mb-3">
                Choose Payment Method
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`bg-white/10 p-4 rounded-xl border-2 ${
                      selectedPayment === "khalti"
                        ? "border-purple-400"
                        : "border-transparent hover:border-purple-400"
                    } transition-all`}
                    onClick={() => setSelectedPayment("khalti")}
                  >
                    <img src={Khalti} alt="Khalti" className="h-8 mx-auto" />
                    <p className="text-xs text-gray-300 mt-2 text-center">
                      Instant & Secure Payments
                    </p>
                  </button>

                  <button
                    className={`bg-white/10 p-4 rounded-xl border-2 ${
                      selectedPayment === "esewa"
                        ? "border-blue-400"
                        : "border-transparent hover:border-blue-400"
                    } transition-all`}
                    onClick={() => setSelectedPayment("esewa")}
                  >
                    <img src={Esewa} alt="eSewa" className="h-8 mx-auto" />
                    <p className="text-xs text-gray-300 mt-2 text-center">
                      Nepal's Most Trusted Wallet
                    </p>
                  </button>
                </div>

                <div className="bg-white/5 p-3 rounded-lg flex items-center gap-2">
                  <ShieldCheck className="text-green-400" size={18} />
                  <p className="text-sm text-gray-300">
                    {selectedPayment
                      ? `Your payment is securely processed through ${
                          selectedPayment === "khalti" ? "Khalti" : "eSewa"
                        }`
                      : "Select a payment method to continue"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-xl mb-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-white">
                <span>Subtotal:</span>
                <span>
                  NPR {(selectedSeats.length * seatPrice).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm text-white">
                <span>Service Fee:</span>
                <span>NPR {serviceFee.toLocaleString()}</span>
              </div>
              <div className="border-t border-white/20 pt-2">
                <div className="flex justify-between text-white font-bold">
                  <span>Total:</span>
                  <span className="text-green-400">
                    NPR{" "}
                    {(
                      selectedSeats.length * seatPrice +
                      serviceFee
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-start gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
              />
              <span className="text-sm text-gray-300 group-hover:text-gray-200">
                I agree to the{" "}
                <button
                  className="text-purple-400 hover:text-purple-300 underline"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTerms(true);
                  }}
                >
                  Terms and Conditions
                </button>{" "}
                and acknowledge that my booking is subject to the cinema's
                booking policies.
              </span>
            </label>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors disabled:bg-gray-700 disabled:cursor-not-allowed"
              disabled={!selectedPayment || !acceptedTerms}
            >
              {selectedPayment
                ? `Pay with ${
                    selectedPayment.charAt(0).toUpperCase() +
                    selectedPayment.slice(1)
                  }`
                : "Select Payment Method"}
            </button>
          </div>

          <p className="text-center text-sm text-gray-300 mt-4">
            <Lock className="inline mr-1" size={14} />
            All transactions are SSL encrypted and PCI compliant
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-800 rounded-2xl w-full max-w-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">{name} Booking</h1>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-gray-300 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="bg-white/10 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>
          <p className="text-gray-300">
            {audi} | {date} | {time}
          </p>
        </div>

        <div className="bg-white/20 h-4 rounded-lg mb-8 transform rotate-x-12 perspective-1000" />

        <div className="grid grid-cols-5 gap-4 mb-8">
          {Array.from({ length: totalSeats }, (_, i) => (
            <button
              key={i}
              onClick={() => toggleSeat(i)}
              className={`p-3 rounded-lg flex items-center justify-center transition-all ${
                selectedSeats.includes(i)
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              <Armchair className="text-white" size={20} />
              <span className="text-white ml-2">{i + 1}</span>
            </button>
          ))}
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white">Selected Seats:</span>
            <span className="text-white font-semibold">
              {selectedSeats
                .map((s) => `${audi}-${String(s + 1).padStart(2, "0")}`)
                .join(", ") || "None"}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-white">Total Price:</span>
            <span className="text-green-400 font-bold">
              NPR {(selectedSeats.length * seatPrice).toLocaleString()}
            </span>
          </div>

          {selectedSeats.length > 0 && (
            <button
              onClick={handleProceed}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
