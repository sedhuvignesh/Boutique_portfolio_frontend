import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-3d-box">
        <div className="about-content">
          <h2 className="about-title">Welcome To Boutique<span></span> 👗</h2>

          <div className="typewriter-text">
            <p>We Stitch ✂️. We Design 🎨. We Inspire ✨.</p>
          </div>

          <p className="about-tagline">Style begins with a stitch 🧷</p>

          <div className="about-text-block">
            <p>
              <strong>v</strong> is not just a tailoring brand — it’s a canvas of creativity.
              We specialize in combining classic craftsmanship with modern fashion vibes. Our passion is
              stitched into every design we bring to life.
            </p>

            <p>
              From wedding gowns 👰 to designer kurtas 👕, custom drapes 🪡 to embroidered art 🧵 —
              we create experiences that fit, flatter, and inspire.
            </p>

            <p>
              Founded by young creators who believe in expressive dressing, our mission is to make couture
              feel personal and powerful.
            </p>

            <p className="mission-highlight">
              🧵 “Where fabric meets feeling, and fashion meets soul.” 💫
            </p>
          </div>
        </div>
      </div>

      <div className="about-emoji-background">
        <span className="emoji-thread">🧵</span>
        <span className="emoji-scissors">✂️</span>
        <span className="emoji-sparkle">✨</span>
        <span className="emoji-hanger">👗</span>
        <span className="emoji-idea">💡</span>
        <span className="emoji-needle">🪡</span>
        <span className="emoji-shirt">👕</span>
        <span className="emoji-dress">👚</span>
        <span className="emoji-ribbon">🎀</span>
        <span className="emoji-threadball">🧶</span>
      </div>
    </section>
  );
};

export default About;