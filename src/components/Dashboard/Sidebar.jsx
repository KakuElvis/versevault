import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed z-50 top-0 left-0 h-full w-64 bg-logo text-white transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}>
      <div className="flex justify-between items-center p-4 md:hidden">
        <h2 className="text-xl font-bold">Blurb</h2>
        <button onClick={toggleSidebar}>✖</button>
      </div>
      <div className="hidden md:block p-4 text-2xl font-bold">Blurb</div>
      <ul className="p-4 space-y-4">
        <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
        <li><Link to="/blurbs" className="hover:text-gray-300">Blurbs</Link></li>
        <li><Link to="/messages" className="hover:text-gray-300">Messages</Link></li>
        <li><Link to="/profile" className="hover:text-gray-300">Profile</Link></li>
        <li><Link to="/logout" className="hover:text-gray-300">Logout</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
