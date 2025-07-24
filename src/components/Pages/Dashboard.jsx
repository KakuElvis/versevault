import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Topbar from '../Dashboard/Topbar';
import DashboardCard from '../Dashboard/DashboardCard';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 min-h-screen bg-gray-100">
        <Topbar toggleSidebar={toggleSidebar} />

        <main className="p-6 md:ml-64">
          <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard title="Total Blurbs" value="120" icon="fa-book" color="bg-blue-500" />
            <DashboardCard title="Followers" value="87" icon="fa-user-group" color="bg-green-500" />
            <DashboardCard title="Comments" value="45" icon="fa-comments" color="bg-purple-500" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
