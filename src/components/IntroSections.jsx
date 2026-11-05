import React from 'react';

export default function IntroSections() {
  return (
    <>
      <div className="mq" aria-hidden="true">
        <div>
          <span>Treat<i>.</i> Reuse<i>.</i> Restore<i>.</i></span>
          <span>Treat<i>.</i> Reuse<i>.</i> Restore<i>.</i></span>
        </div>
        <div>
          <span>Engineering water. Restoring tomorrow.</span>
          <span>Engineering water. Restoring tomorrow.</span>
        </div>
      </div>

      <section className="mf">
        <p>
          Every drop that leaves a plant should be cleaner than the one that
          came in. We design systems that clean it, reuse it and return it,
          so cities, farms and industry can grow without draining what is left.
        </p>
      </section>

      <section className="ms" id="principles">
        <div className="msg">
          <div>
            <small style={{ color: 'var(--aqua)' }}>Our mission</small>
            <h2>Solving water scarcity through innovation.</h2>
            <p className="lead">
              We create sustainable water infrastructure that reclaims,
              recycles and restores, because every drop matters.
            </p>
            <a className="lnk" href="#approach">
              Discover our approach
            </a>
          </div>

          <div className="ph pic">
            <canvas className="cau" id="cau"></canvas>
            <div className="rays"></div>

            <div className="bub" aria-hidden="true">
              <i style={{ '--l': '8%', '--s': '10px', '--d': '9s', '--w': '0s' }}></i>
              <i style={{ '--l': '20%', '--s': '18px', '--d': '12s', '--w': '-4s' }}></i>
              <i style={{ '--l': '33%', '--s': '8px', '--d': '8s', '--w': '-2s' }}></i>
              <i style={{ '--l': '47%', '--s': '14px', '--d': '11s', '--w': '-7s' }}></i>
              <i style={{ '--l': '60%', '--s': '22px', '--d': '14s', '--w': '-3s' }}></i>
              <i style={{ '--l': '72%', '--s': '9px', '--d': '9s', '--w': '-6s' }}></i>
              <i style={{ '--l': '84%', '--s': '16px', '--d': '12s', '--w': '-1s' }}></i>
              <i style={{ '--l': '92%', '--s': '11px', '--d': '10s', '--w': '-8s' }}></i>
            </div>

            <div className="mk">
              AQUVORA
              <small>WATER SYSTEMS</small>
            </div>

            <div className="pcap">
              <small>Every drop matters</small>
              <h3 style={{ fontSize: 'clamp(24px,2.6vw,38px)' }}>
                Designing for a water-secure future.
              </h3>
            </div>
          </div>
        </div>

        <div
          className="st"
          role="img"
          aria-label="From wastewater to a cleaner, brighter tomorrow."
        >
          <span>From wastewater</span>
          <span>to a cleaner,</span>
          <span>brighter tomorrow.</span>
        </div>
      </section>

      <section className="zp" id="portal" aria-label="Every drop matters">
        <div className="zs">
          <div className="zc" id="zc"></div>
          <h2 className="z1" id="z1">Every drop matters.</h2>
          <p className="z2" id="z2">
            From wastewater to a cleaner, brighter tomorrow.
          </p>
        </div>
      </section>
    </>
  );
}