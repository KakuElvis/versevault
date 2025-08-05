// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logop.png"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center py-4 bg-logo text-sm text-white">
      <img src={logo} alt="VerseVault Logo" className="object-contain" width="100" height="50" />
      © {new Date().getFullYear()} VerseVault. All rights reserved.
    </footer>
    
  );
};

export default Footer;
