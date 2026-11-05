import React from 'react';

export default function ReuseSections() {
  return (
    <>
      <section className="calc" id="reuse">
        <div>
          <h2>See what reuse saves you.</h2>

          <label>
            Plant size
            <b id="cvo"></b>
            <input
              id="cv"
              type="range"
              min="100"
              max="10000"
              step="100"
              defaultValue="2000"
              aria-label="Plant size in kilolitres per day"
            />
          </label>

          <label>
            Water reused
            <b id="cro"></b>
            <input
              id="cr"
              type="range"
              min="20"
              max="95"
              defaultValue="70"
              aria-label="Percent of water reused"
            />
          </label>
        </div>

        <div className="res">
          <div className="vat">
            <div id="fill"></div>
          </div>
          <div>
            <p><b id="saved">0</b>million litres saved a year</p>
            <p><b id="pools">0</b>Olympic pools of water</p>
          </div>
        </div>
      </section>

      <section className="band pb">
        <div><small>01</small><b>Engineer responsibly</b></div>
        <div><small>02</small><b>Recover more value</b></div>
        <div><small>03</small><b>Design for the long term</b></div>
        <div><small>04</small><b>Protect what matters</b></div>
      </section>

      <section className="fq" id="faq">
        <h2>Questions, answered.</h2>

        <div>
          <details open>
            <summary>
              <span>How is the required treatment capacity determined?</span>
              <i>+</i>
            </summary>
            <p>
              Capacity planning starts with the expected wastewater flow,
              peak variation, wastewater characteristics, applicable
              standards and intended discharge or reuse. A site-specific
              assessment is needed before selecting a plant capacity.
            </p>
          </details>

          <details>
            <summary>
              <span>What is the difference between an STP and an ETP?</span>
              <i>+</i>
            </summary>
            <p>
              A sewage treatment plant typically treats domestic sewage,
              while an effluent treatment plant addresses wastewater from
              industrial or commercial processes. The correct treatment
              train depends on the actual wastewater characteristics.
            </p>
          </details>

          <details>
            <summary>
              <span>Can treated wastewater be reused?</span>
              <i>+</i>
            </summary>
            <p>
              Potential uses include certain flushing, landscaping or
              process applications, but reuse depends on the final water
              quality, local rules, exposure risks and the requirements of
              the intended use.
            </p>
          </details>

          <details>
            <summary>
              <span>How do I choose a treatment technology?</span>
              <i>+</i>
            </summary>
            <p>
              Technology selection depends on influent quality, required
              effluent quality, footprint, energy, sludge handling, operator
              capability, maintenance and lifecycle cost. No single
              technology is best for every site.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}