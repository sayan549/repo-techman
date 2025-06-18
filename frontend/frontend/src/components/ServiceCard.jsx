import React from 'react';

export default function ServiceCard({ title, description }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
