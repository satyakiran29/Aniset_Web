import React from 'react';
import './css/CommunitySection.css';

const CommunitySection = () => {
  return (
    <div className="community-section">
      <div className="community-content">
        <h2>Join Our Community and Spread Love</h2>
        <p>You're always welcome to our community</p>
        <div className="community-buttons">
          <button className="btn-green">Join Now</button>
          <button className="btn-blue">Download</button>
        </div>
      </div>
      <footer className="community-footer">
        <p>Meet the Developer</p>
        <div className="social-links">
          <a href="https://instagram.com" className="social-btn instagram">Instagram</a>
          <a href="https://telegram.org" className="social-btn telegram">Telegram</a>
        </div>
        <p>&copy; Copyright 2024 | AniSet | Developed By Skdev</p>
      </footer>
    </div>
  );
};

export default CommunitySection;
