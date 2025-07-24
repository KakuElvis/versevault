import React from 'react';

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md text-white ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm">{title}</h4>
          <h2 className="text-2xl font-bold">{value}</h2>
        </div>
        <div className="text-3xl">
          <i className={`fa-solid ${icon}`}></i>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
