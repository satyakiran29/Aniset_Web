import React from 'react';
import './css/stats.css';

const StatsSection = () => {
  return (
    <section id="features">
      <div className="row">
        <div className="features-box col-lg-4">
          <i className="fas fa-check-circle features-icons"></i>
          <h3>Easy to use</h3>
          <p>Really easy to use & user friendly, Try that out.</p>
        </div>
        <div className="features-box col-lg-4">
          <i className="fas fa-shield-alt features-icons"></i>
          <h3>Safe & Secured</h3>
          <p>Our app didn't collect data.</p>
        </div>
        <div className="features-box col-lg-4">
          <i className="fas fa-heart features-icons"></i>
          <h3>Loved By 1k+</h3>
          <p>We are being featured & loved by over 1,000 users.</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
