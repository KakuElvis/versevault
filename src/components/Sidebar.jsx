import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import CreateBlurbModal from "./CreateBlurbModal";
import { FaSignOutAlt } from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";


const Sidebar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false); // ✅ New state

  const handleLogout = () => {
    toast.info("👋 Logging you out...", {
      position: "top-right",
      autoClose: 1500,
    });

    setLoggingOut(true); // ✅ Trigger overlay animation

    setTimeout(async () => {
      try {
        await signOut(auth);
        navigate("/login");
      } catch (error) {
        console.error("Logout error:", error);
        toast.error("Logout failed!");
        setLoggingOut(false);
      }
    }, 1800); // Slightly longer to allow fade effect
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-logo text-white p-2 rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-45 bg-logo text-white py-10 px-4 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
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
                <i className="fa-solid fa-user-pen"></i>
              </span>
              <Link to="/my-blurbs" className="hover:text-gray-300">
                My Blurbs
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
                All Blurbs
              </Link>
            </li>
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

      {/* Modal */}
      {showModal && <CreateBlurbModal onClose={() => setShowModal(false)} />}

      {/* Toast */}
      <ToastContainer  position="top-right" autoClose={2000} hideProgressBar transition={Slide}  // ✅ Add transition here
      />


      {/* ✅ Logout Transition Overlay */}
      {loggingOut && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity opacity-80 duration-3000 animate-fadeOut">
          <p className="text-lg text-gray-600">Logging out...</p>
        </div>
      )}
    </>
  );
};

export default Sidebar;
