import industries from "../../data/industries";
import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../animations/ScrollReveal";

export default function Industries() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionTitle tag="06 · Who we support">Built for teams <em>that build.</em></SectionTitle>
        <div className="ind">
          {industries.map((x, i) => (
            <ScrollReveal key={x.name} delay={i * 60} className="ind-item">
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display">{x.name}</h3>
              <p>{x.note}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
