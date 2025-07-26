// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-gray-100 text-sm text-gray-600">
      © {new Date().getFullYear()} VerseVault. All rights reserved.
    </footer>
  );
};

export default Footer;
