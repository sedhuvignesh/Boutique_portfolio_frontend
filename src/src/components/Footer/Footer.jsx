import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Boutique<span></span> ✂️</h2>
        <p className="footer-tagline">Tailoring | Designing | Styling 💃</p>

        <div className="footer-socials">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-btn"
          >
            <i className="fab fa-instagram"></i> @Boutique
          </a>
        </div>

        <p className="footer-credit">Designed by Sedhuvignesh M🎨</p>
        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
