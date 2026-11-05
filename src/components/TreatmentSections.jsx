import React from 'react';

export default function TreatmentSections() {
  return (
    <>
      <section className="tr" id="process" aria-label="Treatment process">
        <div className="stick">
          <b className="bgn" id="bgn" aria-hidden="true">01</b>

          <div className="tank" id="tank">
            <canvas id="tc"></canvas>
            <div className="read">
              <b id="ntu">0</b>turbidity removed
            </div>
          </div>

          <ol className="steps" id="steps">
            <li className="on">
              <small>01 · Pre-treatment</small>
              <h3>Preliminary treatment</h3>
              <p>
                Incoming wastewater passes through screening and, where
                needed, grit and oil removal to protect downstream equipment.
                <span className="tg">
                  <span>Coarse screens</span>
                  <span>Fine screens</span>
                  <span>Grit removal</span>
                </span>
              </p>
            </li>

            <li>
              <small>02 · Biological process</small>
              <h3>Biological treatment</h3>
              <p>
                Microorganisms help reduce biodegradable organic pollutants
                under controlled process conditions.
                <span className="tg">
                  <span>Activated sludge</span>
                  <span>SBR</span>
                  <span>MBBR</span>
                  <span>MBR</span>
                </span>
              </p>
            </li>

            <li>
              <small>03 · Solids separation</small>
              <h3>Clarification and separation</h3>
              <p>
                Suspended solids and biological sludge are separated using
                a process suited to the treatment configuration.
                <span className="tg">
                  <span>Secondary clarifiers</span>
                  <span>Membrane separation</span>
                  <span>Filtration</span>
                </span>
              </p>
            </li>

            <li>
              <small>04 · Final treatment</small>
              <h3>Polishing and reuse</h3>
              <p>
                Additional filtration and disinfection may be used to meet
                the applicable discharge or reuse requirements.
                <span className="tg">
                  <span>Pressure filtration</span>
                  <span>UV disinfection</span>
                  <span>Chlorination</span>
                </span>
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="loop" id="loop" aria-label="The reuse loop">
        <div className="stick">
          <svg
            viewBox="20 20 460 460"
            role="img"
            aria-label="Water loop: source, treatment, use, reclaim"
          >
            <circle className="rb" cx="250" cy="250" r="180"></circle>
            <circle className="rb2" cx="250" cy="250" r="214"></circle>
            <text className="lt" id="lt" x="250" y="262">Source</text>
            <path id="ring" className="rt" d="M250 70 a180 180 0 1 1 -.01 0"></path>

            <circle className="nd on" cx="250" cy="70" r="11"></circle>
            <circle className="nd" cx="430" cy="250" r="11"></circle>
            <circle className="nd" cx="250" cy="430" r="11"></circle>
            <circle className="nd" cx="70" cy="250" r="11"></circle>

            <text className="nl" x="250" y="46">Source</text>
            <text className="nl" x="462" y="255">Treat</text>
            <text className="nl" x="250" y="464">Use</text>
            <text className="nl" x="40" y="255">Reclaim</text>

            <circle id="dot" cx="250" cy="70" r="17" fill="#8a6d3b"></circle>
          </svg>

          <ol className="steps" id="lsteps">
            <li className="on">
              <small>Source</small>
              <h3>It starts untreated.</h3>
              <p>Borewell, river or industrial discharge, each with its own load of solids and chemistry.</p>
            </li>
            <li>
              <small>Treat</small>
              <h3>We make it clean.</h3>
              <p>Staged treatment brings it to the quality your process or your community needs.</p>
            </li>
            <li>
              <small>Use</small>
              <h3>You put it to work.</h3>
              <p>Cooling, washing, irrigation, drinking. The water does its job.</p>
            </li>
            <li>
              <small>Reclaim</small>
              <h3>Then we bring it back.</h3>
              <p>Used water re-enters the loop instead of the drain, again and again.</p>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}