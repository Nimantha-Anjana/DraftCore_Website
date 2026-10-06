import { Link } from "react-router-dom";
import projects from "../../data/projects";
import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../animations/ScrollReveal";

export default function FeaturedProjects({ intro = true }) {
  return (
    <section className="sec">
      <div className="wrap">
        {intro && (
          <SectionTitle tag="04 · Where we work" aside={<Link to="/projects" className="tlink">All project types <i className="bi bi-arrow-up-right" /></Link>}>
            Documentation for <em>every kind of space.</em>
          </SectionTitle>
        )}
        <div className="cards">
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <Link to={`/projects/${p.slug}`} className="card">
                <div className={`thumb t${i % 4}`}><span className="mono">{p.code}</span></div>
                <span className="mono mute">{p.category}</span>
                <h3 className="display">{p.title}</h3>
                <p>{p.summary}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <p className="note mono">Representative scopes. Detailed case studies available on request.</p>
      </div>
    </section>
  );
}
