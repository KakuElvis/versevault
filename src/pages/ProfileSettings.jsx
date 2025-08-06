import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { updateProfile, updatePassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileSettings = () => {
  const [user] = useAuthState(auth);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [newPassword, setNewPassword] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!displayName.trim()) {
      toast.error("Display name cannot be empty.");
      return;
    }

    try {
      if (displayName !== user?.displayName) {
        // Update Firebase Auth display name
        await updateProfile(auth.currentUser, { displayName });

        // Update Firestore 'users' document
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          await updateDoc(userRef, { displayName });
        } else {
          // Create the document if it doesn't exist
          await setDoc(userRef, {
            displayName,
            email: user.email,
            createdAt: new Date(),
          });
        }

        toast.success("Profile updated successfully!");
      } else {
        toast.info("No changes made.");
      }
    } catch (error) {
      toast.error(`Failed to update profile: ${error.message}`);
    }
  };

  const handlePasswordUpdate = async () => {
    if (!newPassword || newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      await updatePassword(auth.currentUser, newPassword);
      toast.success("Password updated!");
      setNewPassword("");
    } catch (error) {
      toast.error(`Failed to update password: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <ToastContainer position="top-right" hideProgressBar />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1">
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="p-6">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>

            <form onSubmit={handleUpdateProfile}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full border rounded px-3 py-2 mt-1 bg-gray-100 cursor-not-allowed text-gray-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Display Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full border rounded px-3 py-2 mt-1"
                  placeholder="Enter your display name"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
            </form>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Change Password</h3>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border rounded px-3 py-2 mb-3"
                placeholder="New Password (min. 6 characters)"
              />
              <button
                onClick={handlePasswordUpdate}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
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
