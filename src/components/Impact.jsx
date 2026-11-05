import React from 'react';

export default function Impact() {
  return (
    <section className="imp" id="impact">
      <div className="orb o1" aria-hidden="true"></div>
      <div className="orb o2" aria-hidden="true"></div>

      <h2>Better water. Better possibilities.</h2>

      <p className="lead">
        Water treatment is not just about what leaves a plant. It is about
        what becomes possible when every drop is considered carefully.
      </p>

      <div className="pr ig" data-in="">
        <article>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z"></path>
          </svg>
          <small>01</small>
          <h4>Recover resources</h4>
          <p>
            Treat wastewater as an opportunity to recover water and make
            better use of valuable resources.
          </p>
        </article>

        <article>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 12a8 8 0 1 1-3-6.2M20 4v4h-4"></path>
          </svg>
          <small>02</small>
          <h4>Design for efficiency</h4>
          <p>
            Explore practical treatment systems built around the needs of
            each site and operation.
          </p>
        </article>

        <article>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19l8-8"></path>
          </svg>
          <small>03</small>
          <h4>Protect what matters</h4>
          <p>
            Put responsible water management and long-term environmental
            thinking at the centre of every project.
          </p>
        </article>
      </div>

      <div className="imb">
        <span>Every project is a chance to move water forward.</span>
        <a href="#contact">Let’s discuss your project</a>
      </div>
    </section>
  );
}