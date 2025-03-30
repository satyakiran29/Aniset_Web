import React from 'react';
import './css/CommunitySection.css';

const CommunitySection = () => {
  return (
    <section id="community">
    <div className="community-section">
      
      <div className="community-content">
        <h2>Join Our Community and Spread Love</h2>
        <p>You're always welcome to our community</p>
        <div className="community-buttons">
          <button className="btn-green">Join Now</button>
          <button className="btn-blue">Download</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CommunitySection;
