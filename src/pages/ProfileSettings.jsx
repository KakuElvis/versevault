// src/pages/ProfileSettings.jsx
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { updateProfile, updatePassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const ProfileSettings = () => {
  const [user] = useAuthState(auth);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [newPassword, setNewPassword] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      if (displayName !== user?.displayName) {
        await updateProfile(auth.currentUser, { displayName });
        alert("Profile updated successfully!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePasswordUpdate = async () => {
    try {
      if (newPassword) {
        await updatePassword(auth.currentUser, newPassword);
        alert("Password updated!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1">
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="p-6">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>

            <form onSubmit={handleUpdateProfile}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Display Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 mt-1"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Change Password</h3>
              <input
                type="password"
                placeholder="New Password"
                className="w-full border rounded px-3 py-2 mb-3"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                onClick={handlePasswordUpdate}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Update Password
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileSettings;
