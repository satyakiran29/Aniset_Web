import React from 'react';
import './css/stats.css';

const StatsSection = () => {
  return (
<section id="features">
    <div class="row">
      <div class="features-box col-lg-4">
        <i class="fas fa-check-circle features-icons"></i>
        <h3>Easy to use</h3>
        <p>Really easy to use & user friendly, Try that out.</p>
      </div>
      <div class="features-box col-lg-4">
        <i class="fas fa-shield-alt features-icons"></i>
        <h3>Safe & Secured</h3>
        <p>Our app Didnt Collect Data.</p>
      </div>
      <div class="features-box col-lg-4">
        <i class="fas fa-heart features-icons"></i>
        <h3>Loved By 1k+</h3>
        <p>We are being fatured & loved by over  users.</p>
      </div>
    </div>
</section>

  );
};

export default StatsSection;