import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const typewriterEffect = () => {
    const text = "Ankit Kumar Verma";
    let index = 0;
    const intervalId = setInterval(() => {
      document.querySelector('h1').textContent = text.slice(0, index);
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 100);
  };

  // Run the typewriter effect every time the component renders
  typewriterEffect();

  return (
    <header>
      <h1>Ankit Kumar Verma</h1>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="/">Intro</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
