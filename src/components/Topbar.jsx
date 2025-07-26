// src/components/Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center ml-64">
      <h1 className="text-lg font-semibold">Welcome back 👋</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Elvis Kaku</span>
        <img src="/src/assets/user.svg" alt="user" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Topbar;
