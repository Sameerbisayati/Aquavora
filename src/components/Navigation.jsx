import React from 'react';

export default function Navigation() {
  return (
    <nav id="nv">
      <a className="nb" href="#top" aria-label="AQUVORA home">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z"></path>
        </svg>
        <span>
          AQUVORA
          <small>WATER SYSTEMS</small>
        </span>
      </a>

      <div id="nl">
        <a href="#approach">Our approach</a>
        <a href="#process">Technology</a>
        <a href="#industries">Industries</a>
        <a href="#projects">Projects</a>
        <a href="#impact">Impact</a>
        <a className="np" href="#contact">Start a conversation</a>
      </div>

      <button
        id="mb"
        aria-label="Toggle navigation"
        aria-expanded="false"
        aria-controls="nl"
      >
        Menu
      </button>
    </nav>
  );
}