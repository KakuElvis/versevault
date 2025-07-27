// src/pages/Profile.jsx
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Topbar />
      <main className="ml-64 p-6">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        <div className="bg-white shadow rounded-lg p-6 w-full max-w-lg">
          <div className="flex items-center space-x-6 mb-6">
            <img
              src="/src/assets/user.svg"
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold">{user?.email}</p>
              <p className="text-gray-500 text-sm">Member since: {user?.metadata?.creationTime 
                ? new Date(user.metadata.creationTime).toLocaleDateString() 
                : "Loading..."}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
