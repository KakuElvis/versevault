// src/pages/Home.jsx
import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HowTo from "../components/How_to";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <main>
        <Hero />
        <HowTo />
      </main>
    </div>
  );
};

export default Home;
