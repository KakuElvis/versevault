// src/components/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-logo text-2xl font-bold">VerseVault</Link>
        
        <ul className="hidden lg:flex gap-6 font-semibold">
          <li><a href="#home" className="hover:text-logo">Home</a></li>
          <li><a href="#about" className="hover:text-logo">About</a></li>
          <li><a href="#contact" className="hover:text-logo">Contact</a></li>
          <li><Link to="/post_blurb" className="hover:text-logo">Create</Link></li>
          <li><Link to="/verse" className="hover:text-logo">Blurbs</Link></li>
        </ul>

        <div className="hidden lg:flex gap-4">
          <Link to="/signin" className="bg-button-main text-white px-4 py-2 rounded hover:opacity-80">Login</Link>
          <Link to="/signup" className="bg-button-second text-white px-4 py-2 rounded hover:opacity-80">Get Started</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
