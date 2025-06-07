import React from 'react';
import { FaDownload, FaImage } from 'react-icons/fa'; // Correcting the icon import
import './css/hero.css';
import phoneImage from '../../components/images/aniset.png'; // Add a phone image to assets

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Kwgt Widgets Based</h1>
        <h1> on Anime</h1>
        <p>Paid Available Below 👇</p>
        <div className="social-links">
          <a 
            href="https://play.google.com/store/apps/details?id=com.skdev.aniset"  // Replace with the actual Play Store link
            className="social-btn plstore" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Download from Playstore"
          >
            <FaDownload className="social-icon" /> Download
          </a>
          <a 
            href="/ScreenShots" 
            className="social-btn gallery" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="View Gallery"
          >
            <FaImage className="social-icon" /> Gallery
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={phoneImage} alt="Phone Mockup" />
      </div>
    </div>
  );
};

export default Hero;
