// src/components/Sidebar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-blue-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">VerseVault</h2>
      <nav className="space-y-4">
        <Link to="/" className="block hover:text-gray-300">Dashboard</Link>
        <Link to="/profile" className="block hover:text-gray-300">Profile</Link>
        <button onClick={handleLogout} className="mt-4 text-red-300 hover:text-red-100">
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
