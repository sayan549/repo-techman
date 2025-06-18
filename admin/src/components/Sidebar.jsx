import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaBlogger, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-5">
      <ul className="space-y-6">
        <li><Link to="/admin" className="flex items-center gap-2 hover:text-yellow-400"><FaHome /> Dashboard</Link></li>
        <li><Link to="/admin/projects" className="flex items-center gap-2 hover:text-yellow-400"><FaProjectDiagram /> Projects</Link></li>

        <li><Link to="/admin/contacts" className="flex items-center gap-2 hover:text-yellow-400"><FaEnvelope /> Contacts</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
