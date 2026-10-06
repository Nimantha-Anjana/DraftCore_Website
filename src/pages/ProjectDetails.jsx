import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import services from "../data/services";
import PageHero from "../components/common/PageHero";
import FinalCTA from "../components/sections/FinalCTA";

export default function ProjectDetails() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p)
    return (
      <PageHero sheet="404" label="Not found" tag="Project" title={<>Project <em>not found.</em></>}
        lede={<Link to="/projects" className="tlink">Back to projects <i className="bi bi-arrow-up-right" /></Link>} />
    );
  return (
    <>
      <PageHero sheet={p.code} label={p.category} tag={p.category} title={p.title} lede={p.summary} />
      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="tag">Typical scope</span>
            <ul className="dl">
              {p.scope.map((d, i) => <li key={d}><span className="mono">0{i + 1}</span><h3 className="display">{d}</h3></li>)}
            </ul>
          </div>
          <div>
            <span className="tag">Services involved</span>
            <div className="svc-list tight">
              {p.services.map((slug) => {
                const s = services.find((x) => x.slug === slug);
                return (
                  <Link key={slug} to={`/services/${slug}`} className="svc-row">
                    <span className="mono">{s.number}</span><h3 className="display">{s.title}</h3><p>{s.description}</p><i className="bi bi-arrow-up-right" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
