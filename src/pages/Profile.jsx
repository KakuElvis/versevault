// src/pages/Profile.jsx
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-4 md:p-6 max-w-3xl w-full mx-auto">
          <h2 className="text-2xl font-bold mb-4">Your Profile</h2>

          <div className="bg-white shadow rounded-lg p-6 w-full">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 mb-6 text-center sm:text-left">
              <img
                src="/src/assets/user.svg"
                alt="Profile"
                className="w-20 h-20 rounded-full mb-4 sm:mb-0"
              />
              <div>
                <p className="text-lg font-semibold">{user?.email}</p>
                <p className="text-gray-500 text-sm">
                  Member since:{" "}
                  {user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : "Loading..."}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <Link
                to="/settings"
                className="w-full sm:w-auto text-center bg-logo text-white px-4 py-2 rounded hover:bg-logo/70 transition-colors duration-200"
              >
                Update Profile
              </Link>

              <button
                          onClick={handleLogout}
                          className="mt-6 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                          <FaSignOutAlt />
                          Logout
                        </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
