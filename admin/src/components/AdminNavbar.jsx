import React from 'react';

const AdminNavbar = () => {
  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <nav className="bg-white shadow-md px-4 py-4 flex justify-between items-center">
      <h1 className="text-lg md:text-xl font-semibold">Admin Dashboard</h1>
      <button
        className="bg-red-500 text-white px-3 py-2 rounded text-sm md:px-4 md:py-2 md:text-base"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;
