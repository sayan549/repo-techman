import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <DashboardCard title="Projects" count={5} />

          <DashboardCard title="Messages" count={8} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
