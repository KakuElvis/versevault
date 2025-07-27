// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { FaPenFancy, FaHeart, FaEye } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Blurbs",
      value: 12, // later replace with dynamic count from Firebase
      icon: <FaPenFancy className="text-white text-xl" />,
      color: "bg-blue-500",
    },
    {
      title: "Total Likes",
      value: 58,
      icon: <FaHeart className="text-white text-xl" />,
      color: "bg-red-500",
    },
    {
      title: "Total Views",
      value: 103,
      icon: <FaEye className="text-white text-xl" />,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 ml-0 md:ml-64">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className={`flex items-center justify-between p-5 rounded-lg shadow-md text-white ${stat.color}`}
              >
                <div>
                  <h3 className="text-sm uppercase">{stat.title}</h3>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700">
            This is the dashboard page content. You can manage your account,
            view blurbs, and track engagement here.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
