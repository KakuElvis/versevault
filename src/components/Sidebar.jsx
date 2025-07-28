// src/components/Sidebar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import CreateBlurbModal from "./CreateBlurbModal";
import { useState } from "react";


  

const Sidebar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
    <aside className="fixed top-0 left-0 h-screen w-64 bg-blue-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">VerseVault</h2>
      <nav className="space-y-4">
        <ul>
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-black text-white p-2 rounded-md">
                    <i class="fa-solid fa-home"></i></span>
                    <a href="#" class="hover:text-gray-300">Home</a>
                </li>          
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-black text-white p-2 rounded-md">
                    <i class="fa-solid fa-b"></i></span>
                    <Link to="/dashboard" className="block hover:text-gray-300">Dashboard</Link>
                </li>
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-black text-white p-2 rounded-md">
                    <i class="fa-solid fa-users"></i></span>
                    <Link to="/profile" className="block hover:text-gray-300">Profile</Link>
                </li>
                {/* <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-white text-black p-2 rounded-md">
                    <i class="fa-solid fa-book-open"></i></span>
                    <Link to="/create-blurb" className="block hover:text-gray-300">Post Blurb</Link>
                </li> */}
                <li className="mb-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="hover:text-gray-300"
                >
                  Post Blurb
                </button>
              </li>
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-white text-black p-2 rounded-md">
                    <i class="fa-solid fa-message"></i></span>
                    <a href="/verse" class="hover:text-gray-300">Blurbs</a>
                </li>
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-white text-black p-2 rounded-md">
                    <i class="fa-solid fa-bell"></i></span>
                    <a href="#" class="hover:text-gray-300">Notifications</a>
                </li>
                <li class="mb-4 flex items-center space-x-2">
                    <span class="bg-white text-black p-2 rounded-md">
                    <i class="fa-solid fa-bell"></i></span>
                    <a href="/settings" class="hover:text-gray-300">Edit Profile</a>
                </li>
                
                {/* <!-- HTML with Tailwind and Font Awesome --> */}
            </ul>
            <button onClick={handleLogout} className="mt-4 text-red-500  hover:text-red-100">
              Logout
            </button>
      </nav>
    </aside>
    {showModal && <CreateBlurbModal onClose={() => setShowModal(false)} />}
      </>
  );
};

export default Sidebar;
