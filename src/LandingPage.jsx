import React from "react";
import combinedLogo from "./assets/rain-uk-international-development.png";
import muralBanner from "./assets/rajdevi-map.webp";
import "./LandingPage.css";

export default function LandingPage({ onStart }) {
  return (
    <div className="landing">
      <header className="landing-header">
        <img className="landing-logo" src={combinedLogo} width="1174" height="275" alt="UK International Development and RAIN — Resilience, Adaptation and Inclusion in Nepal" />
        <span className="landing-location">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
          Rajdevi, Nepal
        </span>
      </header>
      <section className="mural-hero" aria-labelledby="mural-title">
        <div className="mural-intro">
          <p className="mural-kicker">WebAR mural</p>
          <h1 id="mural-title">Explore flood risk in Rajdevi</h1>
          <p className="mural-copy">Visit Laxmipur Safe Shelter in Rajdevi Municipality. Scan the mural with your phone to view an immersive flood risk visualisation in your browser.</p>
          <button type="button" className="mural-start" onClick={onStart}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7.5h4l1.8-3h6.4l1.8 3h4v12H3z" /><circle cx="12" cy="13" r="3.4" /></svg>
            Start camera
          </button>
        </div>
        <img className="mural-banner" src={muralBanner} width="2560" height="1280" alt="Rajdevi Municipality flood risk mural showing flood depths, settlements and safe shelters along the Bagmati River." />
      </section>
      <aside className="scan-tip" aria-labelledby="scan-heading">
        <div className="scan-symbol" aria-hidden="true">
          <svg viewBox="0 0 32 32"><path d="M4 11V4h7m10 0h7v7m0 10v7h-7m-10 0H4v-7M7 16h18" /></svg>
        </div>
        <div><h2 id="scan-heading">At the shelter?</h2><p>Tap Start camera and allow camera access. Keep the mural in the frame until the flood risk animation starts.</p></div>
      </aside>
      <footer className="landing-footer">This project was funded by UK International Development.</footer>
    </div>
  );
}
