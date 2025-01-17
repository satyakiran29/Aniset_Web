import React from 'react';
import Navbar from './components/Pages/Navbar';
import Hero from './components/Pages/Hero';
import './App.css';
import StatsSection from './components/Pages/stats';
import Community from './components/Pages/CommunitySection';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <StatsSection />
      <Community />
      
    </div>
  );
};

export default App;
