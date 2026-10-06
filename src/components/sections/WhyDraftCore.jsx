import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../animations/ScrollReveal";

export const reasons = [
  { n: "01", t: "One accountable partner", d: "Design, BIM, documentation, site support and FF&E sit under one coordinated team, so nothing falls between suppliers." },
  { n: "02", t: "Documentation you can build from", d: "Defined standards, internal checks and coordinated sets at every stage, so site teams spend less time chasing answers." },
  { n: "03", t: "Interior specialists", d: "We understand fit-out, joinery and interior technical detail, not just drafting software." },
  { n: "04", t: "Flexible capacity", d: "Resources scale with package, workload and project stage. You get the team you need, when you need it." },
];

export default function WhyDraftCore({ intro = true }) {
  return (
    <section className="sec dark">
      <div className="wrap">
        {intro && <SectionTitle tag="05 · Why DraftCore">Built around <em>your team.</em></SectionTitle>}
        <div className="why-grid">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.n} delay={i * 80} className="why">
              <b className="display">{r.n}</b>
              <h3>{r.t}</h3>
              <p>{r.d}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
