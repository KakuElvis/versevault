// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import readImage from '../assets/read.svg';

const Hero = () => {
  return (
    <section id="hero" className="bg-[#176183]/90 text-white pt-40 pb-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold leading-relaxed mb-6">
            “Unleash your thoughts in brief brilliance — where words meet impact, and ideas find expression.”
          </h1>
          <div className="space-x-4">
            <Link to="/register" className="bg-button-main text-white px-6 py-3 rounded font-bold hover:opacity-80">Join</Link>
            <button className="border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-white hover:text-logo transition">Read More</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={readImage} alt="Reading" className="w-full max-w-md mx-auto transform scale-x-[-1]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
