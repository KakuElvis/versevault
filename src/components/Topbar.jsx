import React from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiMenu } from "react-icons/fi";

const Topbar = ({ toggleSidebar }) => {
  const [user] = useAuthState(auth);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-6 border-b">
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-600 hover:text-logo focus:outline-none"
      >
        <FiMenu className="text-2xl" />
      </button>

      <h1 className="text-xl font-semibold text-logo">VerseVault</h1>

      <div className="flex items-center space-x-4">
        {user && (
          <div className="text-sm text-gray-700">
            👋Welcome, <span className="font-medium">{user.displayName || "User"}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
