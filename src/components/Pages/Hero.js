import React from 'react';
import './css/hero.css';
import phoneImage from '../../components/images/aniset.png'; // Add a phone image to assets

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Kwgt Widgets Based on Anime</h1>
        <p>Paid Available Below 👇</p>
        <div className="hero-buttons">
          <button className="btn-green">Screenshots</button>
          <button className="btn-blue">Download</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={phoneImage} alt="Phone Mockup" />
      </div>
    </div>
  );
};

export default Hero;
