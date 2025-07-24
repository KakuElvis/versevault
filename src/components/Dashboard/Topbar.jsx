import React from 'react';

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center md:ml-64">
      <button className="md:hidden text-2xl" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="text-xl font-semibold">Welcome back 👋</h1>
      <div className="flex items-center space-x-4">
        <span className="hidden sm:inline text-gray-700">Elvis Kaku</span>
        <img src="/src/assets/user.svg" alt="User" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Topbar;
