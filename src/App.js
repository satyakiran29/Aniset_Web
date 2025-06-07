import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RingLoader } from 'react-spinners';  // Importing HashLoader
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Pages/nav/Navbar';
import Footer from './components/Pages/footer';
import Hero from './components/Pages/Hero';
import StatsSection from './components/Pages/stats';
import Community from './components/Pages/CommunitySection';
import Pricing from './components/Pages/paid';
import Gallery from './components/Pages/cpage/Gallery';
import './components/Pages/cpage/gallery.css'
import PrivacyPolicy from './components/Pages/cpage/PrivacyPolicy/PrivacyPolicy';

const App = () => {
  const [loading, setLoading] = useState(true);  // Use state to track loading status

  useEffect(() => {
    // Simulate a loading state for 3 seconds (replace this with your actual loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
    <Analytics />
      {loading ? (
        <div className="loader" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <RingLoader
            color={'white'}
            loading={loading}
            size={100}
            cssOverride={{ display: 'block', margin: '0 auto' }}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default App;
