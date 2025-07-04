import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let’s Connect on <span>Instagram</span> 📷</h2>
        <p className="contact-sub">We don’t do boring — we stitch stories. ✂️✨</p>

        <div className="insta-block">
          <div className="insta-icon">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="insta-text">
            <h1 className="brand-name">@Boutique</h1>
            <p className="brand-tag">Designing & Tailoring Studio 👗🧵</p>
            <p className="brand-desc">
              DM us your ideas 💡 | Explore our creations 🎨
            </p>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-follow"
            >
              👉 Follow Us on Instagram
            </a>
          </div>
        </div>

        <div className="emoji-bg">
          <span className="emoji">🪡</span>
          <span className="emoji">✂️</span>
          <span className="emoji">🧷</span>
          <span className="emoji">👚</span>
          <span className="emoji">🧵</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
