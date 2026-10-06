import PageHero from "../components/common/PageHero";
import ScrollReveal from "../components/animations/ScrollReveal";
import SectionTitle from "../components/common/SectionTitle";
import Industries from "../components/sections/Industries";
import FinalCTA from "../components/sections/FinalCTA";

const principles = [
  { t: "A drawing is a promise", d: "Every sheet commits to what will be built. We check before we issue, so the promise holds on site." },
  { t: "Coordinate early", d: "Clashes are cheapest on paper. We resolve joinery, services and finishes before they reach the workshop or the site." },
  { t: "Work in your standards", d: "We adapt to your templates, layers, naming and review process, so our output slots straight into your set." },
];
const steps = ["Brief & scope", "Standards & setup", "Production", "Coordination review", "Issue & revise"];

export default function About() {
  return (
    <>
      <PageHero sheet="A-02" label="About" tag="About DraftCore" title={<>Design teams, <em>technically supported.</em></>}
        lede="DraftCore Solutions is a specialist design and documentation partner for interior design studios, architects, joinery providers and project teams." />
      <section className="sec">
        <div className="wrap split">
          <ScrollReveal><span className="tag">Our story</span><h2 className="display">The gap between a good concept and a good building.</h2></ScrollReveal>
          <ScrollReveal delay={100} className="prose">
            <p>Great interiors are rarely lost in the concept. They are lost in translation: a detail that was never resolved, a joinery drawing that ignores the wall behind it, a finish that cannot be sourced in time.</p>
            <p>DraftCore exists to close that gap. We provide the BIM, documentation, shop drawing and delivery support that design teams need, whether that means a single package or a long-term extension of the studio.</p>
            <p>Our work spans the full chain, from design development through tender, construction, fabrication and site handover. That continuity is what lets us catch problems early and keep design intent intact.</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="sec alt grid-bg">
        <div className="wrap">
          <SectionTitle tag="What guides us">Three principles <em>we draw by.</em></SectionTitle>
          <div className="three">
            {principles.map((p, i) => (
              <ScrollReveal key={p.t} delay={i * 80} className="pcard"><b className="display">0{i + 1}</b><h3>{p.t}</h3><p>{p.d}</p></ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <SectionTitle tag="How we work">A simple, <em>repeatable rhythm.</em></SectionTitle>
          <ol className="rhythm">
            {steps.map((s, i) => <ScrollReveal as="li" key={s} delay={i * 60}><span className="mono">0{i + 1}</span><h3 className="display">{s}</h3></ScrollReveal>)}
          </ol>
        </div>
      </section>
      <Industries />
      <FinalCTA />
    </>
  );
}
