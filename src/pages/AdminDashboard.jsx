// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [blurbCount, setBlurbCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [usersSnapshot, blurbsSnapshot] = await Promise.all([
          getDocs(collection(db, "users")),
          getDocs(collection(db, "blurbs")),
        ]);

        setUserCount(usersSnapshot.size);
        setBlurbCount(blurbsSnapshot.size);
      } catch (err) {
        console.error("Error loading counts:", err.message);
        toast.error("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  if (loading) {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 flex items-center justify-center min-h-screen">
          <p className="text-lg font-semibold">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 min-h-screen bg-gray-50 py-10 px-6">
        <ToastContainer position="top-right" hideProgressBar />

        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome to the admin dashboard.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <DashboardCard title="Total Users" count={userCount} color="blue" />
          <DashboardCard title="Total Blurbs" count={blurbCount} color="green" />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, count, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className={`text-4xl font-bold text-${color}-600`}>{count}</p>
  </div>
);

export default AdminDashboard;
