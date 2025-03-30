import React from 'react';
import './css/footer.css'; // Import the CSS file for styling
import { FaInstagram, FaTelegram } from 'react-icons/fa'; // Import icons

const Footer = () => {
    return (
        <footer className="footer">
            <section className="developer-info">
                <p>Meet the Developer</p>
                <div className="social-links">
                    <a 
                        href="https://instagram.com" 
                        className="social-btn instagram" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit Instagram"
                    >
                        <FaInstagram className="social-icon" /> Instagram
                    </a>
                    <a 
                        href="https://telegram.org" 
                        className="social-btn telegram" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Visit Telegram"
                    >
                        <FaTelegram className="social-icon" /> Telegram
                    </a>
                </div>
            </section>
            <p>&copy; {new Date().getFullYear()} AniSet | Developed by <a href="https://satyakiran.vercel.app/bio" target="_blank" rel="noopener noreferrer">Satyakiran(skdev)</a></p>
            <p>All rights reserved.</p>
            <div className="footer-links">
                <a href="/privacypolicy">Privacy Policy</a>
              
            </div>
        </footer>
    );
};

export default Footer;
