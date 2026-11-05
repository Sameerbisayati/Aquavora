import React from 'react';

export default function Hero() {
  return (
    <header className="hero">
      <canvas id="waves" aria-hidden="true"></canvas>

      <div className="eb">
        <i></i>
        AQUVORA / Water and wastewater engineering
      </div>

      <h1>
        Water.<span>Reimagined.</span>
      </h1>

      <div className="hs">
        <p>
          Engineering water. Enabling tomorrow. Thoughtful solutions for
          water treatment, wastewater management and resource recovery.
        </p>

        <div className="acts2">
          <a className="btn" href="#approach">How we work</a>
          <a className="gh" href="#contact">Discuss a project</a>
        </div>

        <div className="chips">
          <span>Water treatment</span>
          <span>Wastewater management</span>
          <span>Resource recovery</span>
        </div>
      </div>

      <div className="cue">Scroll to clean the water</div>
    </header>
  );
}