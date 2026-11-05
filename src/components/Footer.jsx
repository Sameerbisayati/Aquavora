import React from 'react';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ftt">
        <div>
          <a className="fb" href="#top">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z"></path>
            </svg>
            <span>
              AQUVORA
              <small>WATER SYSTEMS</small>
            </span>
          </a>
          <p>Engineering water. Restoring tomorrow.</p>
          <p>Engineered around every drop.</p>
        </div>

        <nav className="fl" aria-label="Footer navigation">
          <span style={{ color: 'var(--mute)' }}>Explore AQUVORA</span>
          <a href="#approach">Our approach</a>
          <a href="#process">Technology</a>
          <a href="#services">Services</a>
          <a href="#impact">Our impact</a>
        </nav>

        <div>
          <span style={{ color: 'var(--mute)' }}>
            Have a water challenge?
          </span>
          <h2>Let’s build a <em>better flow.</em></h2>
          <a className="btn" href="#contact">Start a conversation</a>
        </div>
      </div>

      <div className="wm" aria-hidden="true">AQUVORA</div>

      <div className="ftb">
        <span>© 2026 AQUVORA. All rights reserved.</span>
        <span>Designed with purpose. Built for tomorrow.</span>
        <a className="top" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}