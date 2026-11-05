import React from 'react';

export default function Projects() {
  return (
    <section id="projects">
      <small style={{ color: 'var(--aqua)' }}>
        Concept studies, not completed projects
      </small>

      <h2>Projects, thought through.</h2>

      <a
        className="pj"
        data-in=""
        href="#contact"
        data-s="Residential"
        data-t="STP + reuse concept"
        data-d="A concept design study for a residential development seeking a more considered approach to sewage treatment and non-potable reuse."
        data-c="Balance available plant space, variable wastewater flow and the intended reuse application."
        data-a="Assess influent characteristics, compare suitable treatment configurations and define the required polishing and monitoring stages."
      >
        <div className="pr0">
          <small>01</small>
          <h3>Residential water reuse</h3>
          <div className="mt">Residential<br />STP + reuse concept</div>
        </div>
        <div className="dt"></div>
      </a>

      <a
        className="pj"
        data-in=""
        href="#contact"
        data-s="Industrial"
        data-t="ETP design concept"
        data-d="A concept study exploring how wastewater characterisation can guide the selection of industrial treatment stages."
        data-c="Industrial wastewater composition varies by production process and may require specialised pretreatment."
        data-a="Begin with sampling and analysis, identify applicable requirements and evaluate a process train against the wastewater profile."
      >
        <div className="pr0">
          <small>02</small>
          <h3>Industrial effluent strategy</h3>
          <div className="mt">Industrial<br />ETP design concept</div>
        </div>
        <div className="dt"></div>
      </a>

      <a
        className="pj"
        data-in=""
        href="#contact"
        data-s="Commercial"
        data-t="Performance review concept"
        data-d="A concept study focused on reviewing plant operation, maintenance routines and opportunities for process improvement."
        data-c="Identify potential operational bottlenecks without assuming the cause before reviewing site data."
        data-a="Review operating records, inspect the treatment train and prioritise evidence-based improvements for further engineering assessment."
      >
        <div className="pr0">
          <small>03</small>
          <h3>Commercial plant optimisation</h3>
          <div className="mt">Commercial<br />Performance review concept</div>
        </div>
        <div className="dt"></div>
      </a>
    </section>
  );
}