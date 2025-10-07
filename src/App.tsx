// src/App.tsx (or your main routing file)
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the new component

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ScrollToTop should be rendered within your Router context */}
      <ScrollToTop />

      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;