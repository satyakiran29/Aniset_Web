import React from 'react';
import './css/paid.css'; // Import your CSS file for styling

const PaidSection = () => {
  return (
    
  <section id="pricing">
  <div className="pricing-heading">
    <h2> Paid</h2>
    <p>Contact Developer to get special discount </p>
  </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0"><i className="fas fa-plane rotated-icon pricing-section-icon"></i> Price </h4>
        </div>
        <p> </p>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            <span className="price">$3 // ₹250</span><small className="text-muted"></small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>- Monthly Updates</li>
            <li>- Exclusive Kwgt Widgets</li>
            <li>- Wallpaper Section</li>
          </ul>
          <a  href="https://play.google.com/store/apps/details?id=com.skdev.aniset" target="_blank">
          <button type="button" className="btn btn-lg btn-block btn-outline-success"  >Buy</button>
        </a>
        </div>
      </div>
</section>


  );
};

export default PaidSection;