import React from 'react';

const DashboardCard = ({ title, count }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md text-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold text-blue-600">{count}</p>
    </div>
  );
};

export default DashboardCard;

