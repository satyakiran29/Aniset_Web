import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Pages/Navbar';
import Footer from './components/Pages/footer';
import Hero from './components/Pages/Hero';
import StatsSection from './components/Pages/stats';
import Community from './components/Pages/CommunitySection';
import Pricing from './components/Pages/paid';
import Gallery from './components/Pages/cpage/Gallery';
import './components/Pages/cpage/gallery.css'
import PrivacyPolicy from './components/Pages/cpage/PrivacyPolicy/PrivacyPolicy';
const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <StatsSection />
              <Pricing />
              <Community />
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
