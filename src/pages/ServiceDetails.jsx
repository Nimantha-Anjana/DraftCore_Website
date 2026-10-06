import { Link, useParams } from "react-router-dom";
import services from "../data/services";
import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import FinalCTA from "../components/sections/FinalCTA";

export default function ServiceDetails() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s)
    return (
      <PageHero sheet="404" label="Not found" tag="Service" title={<>Service <em>not found.</em></>}
        lede={<Link to="/services" className="tlink">Back to services <i className="bi bi-arrow-up-right" /></Link>} />
    );
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <>
      <PageHero sheet={`S-${s.number}`} label={s.short} tag={`Service ${s.number}`} title={s.title} lede={s.intro} />
      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="tag">Best suited to</span>
            <p className="big-p">{s.bestFor}</p>
            <h3 className="mono sub">Typical deliverables</h3>
            <div className="pills">{s.deliverables.map((d) => <span key={d}>{d}</span>)}</div>
          </div>
          <div>
            <span className="tag">What is included</span>
            <ul className="dl">
              {s.details.map((d, i) => <li key={d}><span className="mono">0{i + 1}</span><h3 className="display">{d}</h3></li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="sec alt grid-bg">
        <div className="wrap">
          <SectionTitle tag="Works well with">Related <em>capabilities.</em></SectionTitle>
          <div className="svc-list">
            {related.map((r) => (
              <Link key={r.id} to={`/services/${r.slug}`} className="svc-row">
                <span className="mono">{r.number}</span><h3 className="display">{r.title}</h3><p>{r.description}</p><i className="bi bi-arrow-up-right" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
