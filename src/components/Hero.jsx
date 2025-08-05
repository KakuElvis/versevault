// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import readImage from '../assets/read.svg';

const Hero = () => {
  return (
    <section id="hero"
      className="bg-logo/90 text-white pt-40 pb-20 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-base md:text-xl leading-relaxed">
            A scommunity platform where readers can unleash their thoughts in brief brilliance.
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Join the{" "}
            <span className="text-logo bg-white px-2 py-1 rounded-md">
              VerseVault
            </span>{" "}
            community today!
          </h1>
          <div>
            <Link
              to="/register"
              className="inline-block bg-white text-logo px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
            >
              Share your Blurb
            </Link>
          </div>
        </div>

        {/* Right Image (On top for small devices) */}
        <div className="md:w-1/2">
          <img
            src={readImage}
            alt="Reading illustration"
            className="w-full max-w-md mx-auto transform scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
