import React from 'react';

export default function Services() {
  return (
    <section id="services">
      <h2>What we engineer.</h2>

      <div className="svc" data-in="">
        <div>
          <small>01 / 04</small>
          <h3>Sewage treatment plants</h3>
          <p>
            Treatment planning for residential, commercial and municipal
            sewage applications.
          </p>
        </div>

        <div>
          <small>02 / 04</small>
          <h3>Effluent treatment plants</h3>
          <p>
            Industrial wastewater treatment strategies based on
            process-specific wastewater characteristics.
          </p>
        </div>

        <div>
          <small>03 / 04</small>
          <h3>Water reuse systems</h3>
          <p>
            Treatment and polishing approaches for suitable non-potable
            reuse applications.
          </p>
        </div>

        <div>
          <small>04 / 04</small>
          <h3>Plant optimisation</h3>
          <p>
            Assessment of existing systems, operating challenges and
            opportunities for improvement.
          </p>
        </div>
      </div>
    </section>
  );
}