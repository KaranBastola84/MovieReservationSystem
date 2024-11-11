import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="w-auto pl-8 pr-8">
        <div className="pt-8 pb-5 text-justify space-y-4">
          <h2 className="text-lg font-bold">Welcome to Chalchitra</h2>
          <p>
            Welcome to Chalchitra, where we strive to provide an excellent cinematic experience for movie lovers everywhere. We are dedicated to delivering the highest quality entertainment, offering a diverse range of films from the latest blockbusters to independent gems that cater to all tastes and preferences.
          </p>

          <h3 className="text-md font-semibold">Our Theater</h3>
          <p>
            Our state-of-the-art theater is equipped with Dolby Sound and a silver screen, featuring both 2D and 3D technology to ensure that every screening is an immersive experience. Our comfortable seating adds to your enjoyment.
          </p>

          <h3 className="text-md font-semibold">Community and Service</h3>
          <p>
            But we're more than just a movie theater; we are a community hub. Our friendly and knowledgeable staff are always on hand to help you find the perfect film or answer any questions you may have. We also offer a variety of snacks and refreshments, allowing you to enjoy your favorite treats while watching your favorite movies.
          </p>

          <h3 className="text-md font-semibold">Community Engagement</h3>
          <p>
            As a locally-owned and operated company, we believe in giving back to the community that supports us. We are constantly looking for new ways to support local charities and organizations.
          </p>

          <h3 className="text-md font-semibold">Join Us</h3>
          <p>
            Whether you're a seasoned cinephile or just looking for a fun night out, Chalchitra is the perfect destination. Come visit us and experience the magic of the movies for yourself!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
