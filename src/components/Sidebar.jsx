// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import CreateBlurbModal from "./CreateBlurbModal";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-logo text-white p-2 rounded focus:outline-none"// fixed position for mobile toggle
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-42 bg-logo text-white py-15 px-4 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-2xl font-bold mb-8">VerseVault</h2>
        <nav className="space-y-4">
          <ul>
            <li className="mb-4 flex items-center space-x-2">
              <span className="bg-black text-white p-2 rounded-md">
                <i className="fa-solid fa-home"></i>
              </span>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>

            <li className="mb-4 flex items-center space-x-2">
              <span className="bg-black text-white p-2 rounded-md">
                <i className="fa-solid fa-b"></i>
              </span>
              <Link to="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>

            <li className="mb-4 flex items-center space-x-2">
              <span className="bg-black text-white p-2 rounded-md">
                <i className="fa-solid fa-user"></i>
              </span>
              <Link to="/profile" className="hover:text-gray-300">
                Profile
              </Link>
            </li>

            <li className="mb-4 flex items-center space-x-2">
              <span className="bg-white text-black p-2 rounded-md">
                <i className="fa-solid fa-pen"></i>
              </span>
              <button
                onClick={() => setShowModal(true)}
                className="hover:text-gray-300"
              >
                Post Blurb
              </button>
            </li>

            <li className="mb-4 flex items-center space-x-2">
              <span className="bg-white text-black p-2 rounded-md">
                <i className="fa-solid fa-message"></i>
              </span>
              <Link to="/verse" className="hover:text-gray-300">
                Blurbs
              </Link>
            </li>

            {/* <li className="mb-4 flex items-center space-x-2">
              <span className="bg-white text-black p-2 rounded-md">
                <i className="fa-solid fa-bell"></i>
              </span>
              <Link to="#" className="hover:text-gray-300">
                Notifications
              </Link>
            </li>

            <li className="mb-4 flex items-center space-x-2">
              <span className="bg-white text-black p-2 rounded-md">
                <i className="fa-solid fa-user-pen"></i>
              </span>
              <Link to="/settings" className="hover:text-gray-300">
                Edit Profile
              </Link>
            </li> */}
          </ul>

          <button
            onClick={handleLogout}
            className="mt-6 flex items-center gap-2 bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </aside>

      {/* Blurb Modal */}
      {showModal && <CreateBlurbModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Sidebar;
