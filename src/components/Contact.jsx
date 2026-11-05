import React from 'react';

export default function Contact() {
  return (
    <section className="ct" id="contact">
      <div>
        <h2>Tell us about your water.</h2>
        <p className="lead">
          Tell us about your water challenge. Together, we can explore a
          practical next step.
        </p>
      </div>

      <div>
        <form id="cf">
          <div className="fr">
            <label>
              Your name *
              <input
                name="name"
                autoComplete="name"
                placeholder="Full name"
                required
              />
            </label>

            <label>
              Work email *
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
              />
            </label>
          </div>

          <label>
            Organisation
            <input
              name="organisation"
              autoComplete="organization"
              placeholder="Company or organisation"
            />
          </label>

          <label>
            Area of interest *
            <select name="interest" required>
              <option>Wastewater treatment</option>
              <option>Water reuse systems</option>
              <option>Industrial wastewater</option>
              <option>Plant optimisation</option>
              <option>Something else</option>
            </select>
          </label>

          <label>
            Project details *
            <textarea
              name="message"
              rows="4"
              placeholder="Describe your site, water source, project scale or goals..."
              required
            ></textarea>
          </label>

          <button className="btn" type="submit">Submit enquiry</button>

          <p className="pv">
            Your project details are saved in this browser only.
          </p>
        </form>

        <div id="ok" hidden tabIndex="-1" role="status">
          <h3 style={{ fontSize: '36px', margin: '0' }}>
            Your enquiry has been saved.
          </h3>
          <p className="lead">
           You response is recorded. Thank You.
          </p>
          <button className="btn" id="again" type="button">
            Submit another enquiry
          </button>
        </div>
      </div>
    </section>
  );
}