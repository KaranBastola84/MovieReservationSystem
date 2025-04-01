import React from 'react'

function Conditions() {
  return (
    <div>
      <div className="w-auto pl-8 pr-8 text-white">
        <div className="pt-8 pb-5 text-justify space-y-4">  
          <h2 className="text-lg font-bold">Terms and Conditions</h2>
          <p>
            By accessing and using the website and services provided by Chalchitra, you agree to be bound by the following Terms and Conditions. Please ensure you are updated with these terms.
          </p>

          <h3 className="text-md font-semibold">Ticket Policy</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Tickets once purchased cannot be cancelled, exchanged, or refunded.</li>
            <li>Ticket reservations will be deactivated 30 minutes prior to the show.</li>
            <li>Customers must collect their tickets from the Box Office at least 30 minutes before the show starts.</li>
            <li>Children aged 5 years and above require a separate ticket.</li>
            <li>3D glasses are available at the cinema for 3D films and must be returned before exiting the premises. In case of loss or damage, charges will apply as per Friends Cinemas policies.</li>
          </ul>

          <h3 className="text-md font-semibold">Age Restrictions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Children below 18 years cannot be admitted to movies rated 'A'.</li>
            <li>Proof of age is required for entry to 'A' rated movies.</li>
          </ul>

          <h3 className="text-md font-semibold">General Policies</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Outside food and beverages are not allowed inside the cinema.</li>
            <li>Entry is permitted only for valid ticket holders.</li>
            <li>Management is not responsible for theft or loss of personal belongings.</li>
            <li>Unauthorized filming of movies using cameras, mobile phones, tablets, etc., is strictly prohibited inside the theatres.</li>
            <li>Decisions made by Friends Cinemas are final and binding.</li>
            <li>Pets are not allowed inside the cinema hall.</li>
            <li>Mobile phones, tablets, or any other recording devices are not allowed.</li>
          </ul>

          <p>Thank you for your understanding and cooperation.</p>
        </div>
      </div>
    </div>
  )
}

export default Conditions
