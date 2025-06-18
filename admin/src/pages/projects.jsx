import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';

const Projects = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Manage Projects</h2>
          {/* Project listing or management form goes here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

