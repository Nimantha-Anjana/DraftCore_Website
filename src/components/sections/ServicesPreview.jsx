import { Link } from "react-router-dom";
import services from "../../data/services";
import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../animations/ScrollReveal";

export default function ServicesPreview({ intro = true }) {
  return (
    <section className="sec grid-bg alt">
      <div className="wrap">
        {intro && (
          <SectionTitle tag="02 · What we do" aside={<Link to="/services" className="tlink">All services <i className="bi bi-arrow-up-right" /></Link>}>
            Six capabilities. <em>One accountable partner.</em>
          </SectionTitle>
        )}
        <div className="svc-list">
          {services.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 50}>
              <Link to={`/services/${s.slug}`} className="svc-row">
                <span className="mono">{s.number}</span>
                <h3 className="display">{s.title}</h3>
                <p>{s.description}</p>
                <i className="bi bi-arrow-up-right" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
