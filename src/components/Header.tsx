import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield size={32} />
          <span className="text-xl font-bold">Women Safety Analytics</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-indigo-200">Dashboard</a></li>
            <li><a href="#" className="hover:text-indigo-200">Analytics</a></li>
            <li><a href="#" className="hover:text-indigo-200">Alerts</a></li>
            <li><a href="#" className="hover:text-indigo-200">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
