import Button from "../common/Button";
import ScrollReveal from "../animations/ScrollReveal";

export default function AboutPreview() {
  return (
    <section className="sec">
      <div className="wrap about-grid">
        <ScrollReveal><span className="tag">01 · Who we are</span></ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="display big">We turn design intent into <em>buildable reality.</em></h2>
          <div className="two">
            <p>DraftCore is a specialist design and documentation partner that works as an extended arm of your existing design and technical team. We join your process, your standards and your deadlines.</p>
            <p>From BIM modelling and construction documentation to shop drawings, interior design support, project delivery and FF&E, our role is simple: close the gap between what was designed and what gets built.</p>
          </div>
          <Button to="/about" variant="ghost">Discover DraftCore</Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
