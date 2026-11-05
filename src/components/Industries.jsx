import React from 'react';

export default function Industries() {
  return (
    <section id="industries">
      <small style={{ color: 'var(--aqua)' }}>
        Designed around real needs
      </small>

      <h2>One resource. Many responsibilities.</h2>

      <p className="lead" style={{ margin: '-3vh 0 6vh' }}>
        The right treatment approach starts with the people, processes and
        place it needs to serve.
      </p>

      <div className="il" data-in="">
        <article className="ir">
          <small>01</small>
          <div className="ic">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-6 10 6z"></path>
            </svg>
          </div>
          <div>
            <h3>Commercial developments</h3>
            <p>
              Treatment and water-management planning for offices, retail
              developments and institutional buildings.
            </p>
            <div className="tg">
              <span>Building wastewater systems</span>
              <span>Utility coordination</span>
              <span>Reuse feasibility</span>
            </div>
          </div>
          <a className="ia" href="#contact" aria-label="Enquire about commercial solutions">↘</a>
        </article>

        <article className="ir">
          <small>02</small>
          <div className="ic">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 21V10l6 4v-4l6 4V6h4v15z"></path>
            </svg>
          </div>
          <div>
            <h3>Industrial facilities</h3>
            <p>
              Effluent treatment approaches tailored to industrial processes,
              wastewater characteristics and discharge requirements.
            </p>
            <div className="tg">
              <span>Effluent characterisation</span>
              <span>Process-specific treatment</span>
              <span>Sludge management planning</span>
            </div>
          </div>
          <a className="ia" href="#contact" aria-label="Enquire about industrial facility solutions">↘</a>
        </article>

        <article className="ir">
          <small>03</small>
          <div className="ic">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 21V4h14v17M9 8h2M13 8h2M9 12h2M13 12h2M10 21v-4h4v4"></path>
            </svg>
          </div>
          <div>
            <h3>Hotels and campuses</h3>
            <p>
              Water and wastewater solutions for facilities with changing
              occupancy, space constraints and reuse goals.
            </p>
            <div className="tg">
              <span>Variable wastewater loads</span>
              <span>Landscape reuse assessment</span>
              <span>Operations planning</span>
            </div>
          </div>
          <a className="ia" href="#contact" aria-label="Enquire about hotel and campus solutions">↘</a>
        </article>

        <article className="ir">
          <small>04</small>
          <div className="ic">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 21V3h12v18M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"></path>
            </svg>
          </div>
          <div>
            <h3>Residential communities</h3>
            <p>
              Sewage treatment planning for apartment complexes, housing
              communities and mixed-use developments.
            </p>
            <div className="tg">
              <span>Residential sewage treatment</span>
              <span>Treated-water reuse planning</span>
              <span>Space-aware plant layouts</span>
            </div>
          </div>
          <a className="ia" href="#contact" aria-label="Enquire about residential solutions">↘</a>
        </article>
      </div>

      <div className="indf">
        <i></i>
        <span>Not sure which solution fits? Start with your water challenge.</span>
        <a href="#contact">Talk to AQUVORA</a>
      </div>
    </section>
  );
}