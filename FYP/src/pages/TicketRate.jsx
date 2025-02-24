import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TicketRate() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-8">
        <h2 className="text-xl font-bold">Ticket Prices</h2>
        <div className="mt-4 bg-gray-200 p-4 rounded-lg space-y-6">

          {/* Morning Show */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white font-bold p-2 text-center">
              Morning Show (Sunday - Saturday)
            </div>
            <div className="grid grid-cols-2 text-center p-4 bg-white">
              <div className="font-semibold">Audi 1</div>
              <div className="font-semibold">Audi 2</div>
              <div>NPR 185*</div>
              <div className="text-red-500">Opening Soon</div>
            </div>
          </div>

          {/* Deal Day */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white font-bold p-2 text-center">
              Deal Day (Tuesday & Wednesday)
            </div>
            <div className="grid grid-cols-2 text-center p-4 bg-white">
              <div className="font-semibold">Audi 1</div>
              <div className="font-semibold">Audi 2</div>
              <div>NPR 185*</div>
              <div className="text-red-500">Opening Soon</div>
            </div>
            <p className="text-xs text-gray-500 mt-2 px-4">
              * This rate is not applicable for New Releases in the first week.
            </p>
          </div>

          {/* Weekly Ticket Rates */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white font-bold p-2 text-center">
              Weekly Ticket Rates
            </div>
            <div className="grid grid-cols-3 text-center p-4 bg-white">
              <div className="font-semibold">Movie Type</div>
              <div className="font-semibold">Audi 1</div>
              <div className="font-semibold">Audi 2</div>
              <div>English / Hindi Movies</div>
              <div>NPR 350*</div>
              <div className="text-red-500">Opening Soon</div>
              <div>Only Nepali Movies</div>
              <div>NPR 350*</div>
              <div className="text-red-500">Opening Soon</div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-gray-300 p-3 rounded-lg text-xs text-gray-700 mt-4">
            <p><strong>Note:</strong> 3D Extra Charge will be added NPR 50*</p>
            <p>Tickets are applicable for ages 3 years / 3 feet and above.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TicketRate;