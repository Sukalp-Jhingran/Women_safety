import React from 'react';
import { BellRing, Users, UserCheck, MapPin, AlertTriangle, BarChart3 } from 'lucide-react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const features = [
    { icon: <Users size={24} />, title: 'Gender Distribution', description: 'Real-time count of men and women in the scene' },
    { icon: <UserCheck size={24} />, title: 'Lone Woman Detection', description: 'Identify lone women at night' },
    { icon: <AlertTriangle size={24} />, title: 'Surrounding Analysis', description: 'Detect when a woman is surrounded by men' },
    { icon: <BellRing size={24} />, title: 'SOS Detection', description: 'Recognize SOS situations through gesture analytics' },
    { icon: <MapPin size={24} />, title: 'Hotspot Identification', description: 'Identify areas with higher incident likelihood' },
    { icon: <BarChart3 size={24} />, title: 'Trend Analysis', description: 'Analyze patterns and trends for strategic planning' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-700">Women Safety Analytics Dashboard</h1>
        <Dashboard features={features} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
