import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <main className="bg-[#176183]/90 py-20 px-6 md:px-20 lg:px-40">
      <section id="hero">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-snug">
              "Unleash your thoughts in brief <br /> brilliance – where words meet <br /> impact, and ideas <br /> find expression."
            </h1>

            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
              <Link to="/signin">
                <button className="text-white text-lg bg-button-main px-6 py-3 rounded-md capitalize font-bold hover:opacity-80 transition">
                  Join
                </button>
              </Link>

              <button className="text-logo text-lg border-2 border-button-main px-6 py-3 rounded-md capitalize font-bold hover:bg-button-main hover:text-white transition">
                Read More
              </button>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="/src/assets/read.svg"
              alt="Illustration of reading"
              className="transform scale-x-[-1] w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
