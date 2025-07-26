import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-logo text-white transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}
    >
      {/* Header for mobile */}
      <div className="flex justify-between items-center p-4 md:hidden border-b border-white/20">
        <h2 className="text-xl font-bold">VerseVault</h2>
        <button onClick={toggleSidebar}>✖</button>
      </div>

      {/* Header for desktop */}
      <div className="hidden md:flex justify-center items-center p-6 text-2xl font-bold border-b border-white/20">
        VerseVault
      </div>

      {/* Nav Items */}
      <ul className="p-4 space-y-5">
        {[
          { icon: 'home', label: 'Home', to: '/dashboard' },
          { icon: 'book-open', label: 'Blurbs', to: '/verse' },
          { icon: 'message', label: 'Messages', to: '#' },
          { icon: 'bell', label: 'Notifications', to: '#' },
          { icon: 'user', label: 'Profile', to: '/profile' },
        ].map(({ icon, label, to }) => (
          <li key={label} className="flex items-center space-x-3 hover:text-gray-300">
            <span className="bg-white text-black p-2 rounded-md">
              <i className={`fa-solid fa-${icon}`}></i>
            </span>
            <Link to={to} className="font-medium">
              {label}
            </Link>
          </li>
        ))}

        {/* Logout */}
        <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-300" onClick={handleLogout}>
          <span className="bg-red-600 text-white p-2 rounded-md">
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>
          <span className="font-medium">Logout</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
