import React, { useState } from 'react';

const blurbData = [
  { category: 'Business', text: '“When we love, we always strive to become better than we are...”', color: 'bg-red-300' },
  { category: 'Leadership', text: '“Books train your mind to imagination to think big.”', color: 'bg-blue-300' },
  { category: 'Law', text: '“Justice delayed is justice denied.”', color: 'bg-green-300' },
  { category: 'IT and Software', text: '“Code is like humor. When you have to explain it, it’s bad.”', color: 'bg-yellow-300' },
  { category: 'Leadership', text: '“A leader is one who knows the way, goes the way, and shows the way.”', color: 'bg-indigo-300' },
];

const BlurbCard = ({ category, text, color }) => (
  <div className={`${color} p-6 rounded-lg shadow-lg relative`}>
    <span className="absolute top-2 left-2 text-black p-2 font-semibold">{category}</span>
    <span className="absolute top-2 right-2 bg-white text-yellow-300 py-1 px-2 rounded-full shadow text-xs flex items-center">
      <i className="fa-solid fa-star mr-1"></i>
      <span className="text-black">4.5</span>
    </span>
    <p className="text-gray-700 mt-10">{text}</p>
  </div>
);

const Blurb = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-logo text-white w-64 p-4 transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:w-1/6`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-xl">Blurb</h1>
          {/* Close button on small screens */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white"
          >
            ✖
          </button>
        </div>
        <nav>
          <ul>
            {[
              { icon: 'home', label: 'Home' },
              { icon: 'book-open', label: 'Blurbs' },
              { icon: 'message', label: 'Messages' },
              { icon: 'bell', label: 'Notifications' },
            ].map(({ icon, label }) => (
              <li key={label} className="mb-4 flex items-center space-x-3">
                <span className="bg-white text-black p-2 rounded-md">
                  <i className={`fa-solid fa-${icon}`}></i>
                </span>
                <a href="#" className="hover:text-gray-300">{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 md:ml-0 w-full">
        {/* Toggle Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl p-2 text-gray-700 bg-gray-200 rounded-md shadow"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Grid of Blurbs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {blurbData.map((item, index) => (
            <BlurbCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blurb;
