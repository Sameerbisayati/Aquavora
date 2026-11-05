import React from 'react';

export default function Technology() {
  return (
    <section className="hz" id="technology">
      <div className="hzs">
        <div className="hzt">
          <div className="hzi">
            <small style={{ color: 'var(--aqua)' }}>Technology</small>
            <h2 style={{ margin: '12px 0 20px' }}>
              Four ways to treat the same water.
            </h2>
            <p className="lead">
              Technology selection depends on influent quality, required
              effluent quality, footprint, energy, sludge handling, operator
              capability and lifecycle cost. No single technology is best
              for every site.
            </p>
          </div>

          <article className="hzc">
            <small>Biological treatment</small>
            <b>SBR</b>
            <h3>Sequencing Batch Reactor</h3>

            <div className="cy">
              <i style={{ '--k': '0' }}>Fill</i>
              <i style={{ '--k': '1' }}>React</i>
              <i style={{ '--k': '2' }}>Settle</i>
              <i style={{ '--k': '3' }}>Decant</i>
            </div>

            <p>
              A fill-and-draw activated-sludge process that carries out key
              treatment phases in timed cycles within a reactor.
            </p>
            <ul>
              <li>Treatment phases occur in a controlled cycle</li>
              <li>Can suit sites requiring a compact process arrangement</li>
              <li>Cycle settings can be adjusted to process needs</li>
            </ul>
            <em>
              Suited to projects where a batch-cycle process fits the
              influent profile, operating plan and site constraints.
            </em>
          </article>

          <article className="hzc">
            <small>Biological treatment</small>
            <b>MBBR</b>
            <h3>Moving Bed Biofilm Reactor</h3>
            <p>
              Uses protected surfaces on moving carriers to support a
              biofilm that contributes to biological wastewater treatment.
            </p>
            <ul>
              <li>Biofilm grows on dedicated carrier media</li>
              <li>Can support upgrades to selected existing systems</li>
              <li>Process design can be adapted to treatment objectives</li>
            </ul>
            <em>
              Suited to selected new plants and upgrades where biofilm
              treatment fits the wastewater and design targets.
            </em>
          </article>

          <article className="hzc">
            <small>Biological treatment</small>
            <b>MBR</b>
            <h3>Membrane Bioreactor</h3>
            <p>
              Combines biological treatment with membrane separation to
              retain suspended solids and produce a low-solids effluent.
            </p>
            <ul>
              <li>Combines biological treatment and membrane separation</li>
              <li>Can provide a compact process footprint</li>
              <li>May support higher-quality reuse treatment trains</li>
            </ul>
            <em>
              Suited to demanding effluent quality or footprint requirements,
              subject to lifecycle cost and maintenance assessment.
            </em>
          </article>

          <article className="hzc">
            <small>Advanced treatment</small>
            <b className="sm">Tertiary</b>
            <h3>Filtration and disinfection</h3>
            <p>
              Additional treatment steps reduce selected remaining
              contaminants or microorganisms according to the intended
              water use.
            </p>
            <ul>
              <li>Targets defined final-water quality requirements</li>
              <li>Can complement biological treatment</li>
              <li>Supports reuse planning where standards permit</li>
            </ul>
            <em>
              Suited to projects requiring additional polishing after
              primary or secondary treatment.
            </em>
          </article>
        </div>

        <div className="hzp">
          <i></i>
        </div>
      </div>
    </section>
  );
}