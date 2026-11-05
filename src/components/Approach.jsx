import React from 'react';

export default function Approach() {
  return (
    <section id="approach">
      <div className="aph2">
        <div className="ph pic">
          <canvas className="flow" id="fc"></canvas>
          <div className="pcap">
            <small>Designed around the real world</small>
            <h3>Every system starts with a better question.</h3>
          </div>
        </div>

        <aside className="sd" data-in="">
          <div>
            <small>Beyond treatment</small>
            <h3>Use water wisely. <em>Recover its value.</em></h3>
            <p>
              Treatment is one part of the picture. Efficient systems also
              consider reuse, operational demands and the resources that can
              be recovered.
            </p>
          </div>

          <div className="fw">
            <i className="ln"></i>
            <b className="dp"></b>
            <u style={{ left: '0' }}></u>
            <u style={{ left: '50%', animationDelay: '2.3s' }}></u>
            <u style={{ left: '100%', animationDelay: '4.5s' }}></u>
          </div>

          <div className="tl">
            <span>Input</span>
            <span>Process</span>
            <span>Reuse</span>
          </div>
        </aside>
      </div>

      <div className="apf">
        <b>A.</b>
        <p>Practical engineering. Considered design. Better use of water.</p>
      </div>
    </section>
  );
}