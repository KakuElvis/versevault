import React from "react";
import { NavLink } from "react-router-dom";
import { FiUsers, FiGrid, FiLogOut } from "react-icons/fi";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/admin-login");
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-5 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <FiGrid />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin-users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <FiUsers />
          View Users
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 mt-auto px-4 py-2 rounded-md hover:bg-red-600"
        >
          <FiLogOut />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
