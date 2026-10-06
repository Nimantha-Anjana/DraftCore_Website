import process from "../../data/process";
import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../animations/ScrollReveal";

export default function ProcessSection() {
  return (
    <section className="sec dark">
      <div className="wrap">
        <SectionTitle tag="03 · How a project flows">From concept <em>through handover.</em></SectionTitle>
        <ol className="proc">
          {process.map((p, i) => (
            <ScrollReveal as="li" key={p.code} delay={i * 70} className="stage">
              <span className="dot" />
              <b className="display">{p.code}</b>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
