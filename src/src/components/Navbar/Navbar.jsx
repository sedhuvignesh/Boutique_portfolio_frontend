import React, { useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;

    const handleMouseMove = (e) => {
      const { width, height, left, top } = navbar.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const rotateY = ((x / width) - 0.5) * 10; 
      const rotateX = ((y / height) - 0.5) * -10;
      navbar.style.transform = `translateX(-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTilt = () => {
      navbar.style.transform = 'translateX(-50%) rotateX(0deg) rotateY(0deg)';
    };

    navbar.addEventListener('mousemove', handleMouseMove);
    navbar.addEventListener('mouseleave', resetTilt);

    return () => {
      navbar.removeEventListener('mousemove', handleMouseMove);
      navbar.removeEventListener('mouseleave', resetTilt);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">👗 Boutique</div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
