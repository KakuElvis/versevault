import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logop.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMenuOpen(!menuOpen);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="px-20 flex justify-between items-center bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <div className="py-5 font-bold text-3xl flex items-center space-x-2">
          <a href="#home" className="flex items-center space-x-2 text-logo">
            <img src={logo} alt="VerseVault Logo" className="object-contain" width="100" height="50" />
            {/* <span>VerseVault</span> */}
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center font-bold justify-center space-x-6">
          <li>
            <a
              href="#home"
              className="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md"
            >
              About
            </a>
          </li>
          <li>
            <Link
              to="/blurbs"
              className="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md"
            >
              Blurbs
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login">
            <button className="text-white bg-button-main px-6 py-2 rounded-md capitalize font-bold hover:opacity-80 transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="text-white bg-button-main/50 px-6 py-2 rounded-md capitalize font-bold hover:opacity-80 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div
          id="hamburger"
          className="lg:hidden cursor-pointer z-50"
          onClick={toggleMobileMenu}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="menu"
          className="lg:hidden bg-logo/90 h-screen w-full fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 text-white font-semibold text-lg"
        >
          <a href="#home" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMobileMenu}>
            About
          </a>
          {/* <a href="#contact" onClick={closeMobileMenu}>
            Contact
          </a>
          <Link to="/post_blurb" onClick={closeMobileMenu}>
            Create Blurb
          </Link> */}
          <Link to="/blurbs" onClick={closeMobileMenu}>
            Blurbs
          </Link>

          <div className="mt-6 space-y-4">
            <Link to="/login" onClick={closeMobileMenu}>
              <button className="bg-button-main px-6 py-2 rounded-md font-bold hover:opacity-80 transition">
                Login
              </button>
            </Link>
            <Link to="/register" onClick={closeMobileMenu}>
              <button className="bg-button-main/50 px-6 py-2 rounded-md font-bold hover:opacity-80 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
