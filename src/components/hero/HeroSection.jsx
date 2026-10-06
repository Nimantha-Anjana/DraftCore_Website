import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const D = ({ d, s = 1.5, delay = 0, red }) => (
  <path className={`dr ${red ? "red" : ""}`} d={d} pathLength="1" strokeWidth={s} style={{ "--d": `${delay}s` }} />
);

function SheetDrawing() {
  return (
    <svg viewBox="0 0 560 440" className="plan" role="img" aria-label="Animated interior fit-out floor plan with dimensions and a redline revision mark">
      <g fill="none" stroke="currentColor" strokeLinecap="square">
        <D d="M60 70H500V380H60Z" s={3.5} />
        <D d="M280 70V150M280 200V250H500" s={3} delay={0.5} />
        <D d="M60 250H170M220 250H280" s={3} delay={0.7} />
        <D d="M280 200H330A50 50 0 0 0 280 150" delay={1.1} />
        <D d="M170 250V300A50 50 0 0 0 220 250" delay={1.2} />
        <D d="M90 100H200V140H90ZM110 170H180V205H110Z" delay={1.4} />
        <D d="M360 95H470V185H360ZM360 95V120H470V95" delay={1.6} />
        <D d="M300 340H480V370H300ZM300 340L480 370M300 370L480 340" s={1} delay={1.8} />
        <path className="dr" pathLength="1" d="M122 320a28 28 0 1 0 56 0a28 28 0 1 0-56 0" strokeWidth="1.5" style={{ "--d": "2s" }} />
        <D d="M60 40H500M60 32V48M500 32V48" s={1} delay={2.1} />
        <D d="M28 70V380M20 70H36M20 380H36" s={1} delay={2.2} />
        <D d="M290 330H490V378H290Z" s={1.6} delay={2.7} red />
        <D d="M490 330L520 300H548" s={1.2} delay={3} red />
      </g>
      <g className="sv-t">
        <text x="280" y="34" textAnchor="middle">7,200</text>
        <text x="14" y="228" transform="rotate(-90 14 228)" textAnchor="middle">5,100</text>
        <text x="90" y="96">LIVING</text><text x="362" y="90">PRIMARY BED</text>
        <text x="300" y="334" fill="var(--acc)">R2</text>
        <text x="548" y="294" textAnchor="end" fill="var(--acc)">CLASH: JOINERY / SPRINKLER</text>
        <text x="60" y="412">LEVEL 01 · FIT-OUT PLAN · LOD 300 · 1:50</text>
      </g>
    </svg>
  );
}

function HeroVideo() {
  const mq = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(max-width: 767px)") : null;
  const [mobile, setMobile] = useState(!!mq?.matches);
  const ref = useRef(null);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 767px)");
    const f = () => setMobile(m.matches);
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  useEffect(() => { ref.current?.play?.().catch(() => {}); }, [mobile]);
  return (
    <div className="hero-bg" aria-hidden="true">
      <video ref={ref} key={mobile ? "m" : "d"} autoPlay muted loop playsInline preload="auto" poster="/images/hero/hero-poster.jpg"
        src={mobile ? "/videos/hero-video-mobile.mp4" : "/videos/hero-video.mp4"} />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero">
      <HeroVideo />
      <div className="wrap hero-in">
        <div className="hero-copy">
          <span className="tag">DraftCore Solutions · Design · BIM · Documentation · Delivery</span>
          <h1 className="display">Design intent, <em>drawn to be built.</em></h1>
          <p className="lede">
            We are the extended design and technical team behind interior studios, architects and
            contractors, producing the BIM models, drawings and site support that carry a project
            from concept to handover.
          </p>
          <div className="btns">
            <Link to="/contact" className="btn btn-ink">Discuss your project <i className="bi bi-arrow-up-right" /></Link>
            <Link to="/services" className="btn btn-ghost">View services</Link>
          </div>
          <dl className="facts">
            <div><dt>6</dt><dd>Connected capabilities</dd></div>
            <div><dt>LOD 300</dt><dd>Revit BIM output</dd></div>
            <div><dt>SD → IFC</dt><dd>Every drawing stage</dd></div>
          </dl>
        </div>
        <figure className="sheet">
          <SheetDrawing />
          <figcaption className="mono"><span>Sheet A-101</span><span className="rl">● Redline R2 open</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
