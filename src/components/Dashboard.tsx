import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface DashboardProps {
  features: Feature[];
}

const Dashboard: React.FC<DashboardProps> = ({ features }) => {
  const data = [
    { name: 'Area A', incidents: 12 },
    { name: 'Area B', incidents: 19 },
    { name: 'Area C', incidents: 3 },
    { name: 'Area D', incidents: 5 },
    { name: 'Area E', incidents: 2 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <div className="text-indigo-500 mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
      <div className="col-span-full bg-white rounded-lg shadow-md p-6 mt-6">
        <h3 className="text-2xl font-semibold mb-4">Incident Hotspots</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="incidents" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
