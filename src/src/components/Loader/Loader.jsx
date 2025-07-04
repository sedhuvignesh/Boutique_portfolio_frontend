import React, { useState } from 'react';
import './Loader.css';

const celebrationIcons = ['🎉', '🥳', '🎊', '😄', '🎈', '💃', '🎶'];

const Loader = ({ onFinish }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
    setTimeout(() => {
      onFinish();
    }, 3000);
  };

  return (
    <div className={`loader-wrapper ${opened ? 'open' : ''}`}>
      <div className="gift-box" onClick={handleClick}>
        🎁
      </div>
      <h2 className="welcome-text">Welcome To Boutique</h2>
      <p className="click-text">"Click the gift to be our stylish journey into fashion and celebration!"</p>

      {opened && (
        <div className="confetti-area">
          {Array.from({ length: 35 }).map((_, idx) => (
            <span
              key={idx}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {celebrationIcons[Math.floor(Math.random() * celebrationIcons.length)]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Loader;
