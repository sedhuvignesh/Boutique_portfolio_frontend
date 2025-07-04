import React from 'react';
import './Hero.css';
import fashionArt from '../../assets/fashion-art.jpg'; 

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      
      <div className="floating-icons">
        <span>🧵</span>
        <span>🧷</span>
        <span>🪡</span>
        <span>✂️</span>
      </div>

    
      <div className="hero-left">
        <p className="hero-welcome">Welcome to the world of creativity ✨</p>

        <h1 className="hero-title">👗Boutique</h1>

        <p className="hero-tagline">Custom Stitching & Dream Designs</p>

        <p className="hero-subtext">
          Born from passion, stitched with style — where imagination meets fabric ✂️✨
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-btn primary">🎀 Let’s Stitch</a>
          <a href="#gallery" className="hero-btn secondary">🎨 Our Gallery</a>
        </div>
      </div>

      
      <div className="hero-right">
        <img src={fashionArt} alt="Fashion Designer" className="fashion-art" />
      </div>

     
      <div className="scroll-down">
        <span>↓ Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
