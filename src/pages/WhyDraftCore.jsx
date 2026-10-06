import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import WhyDraftCoreSection from "../components/sections/WhyDraftCore";
import FinalCTA from "../components/sections/FinalCTA";

const rows = [
  ["Accountability", "Several suppliers, unclear ownership", "One team accountable end to end"],
  ["Interior knowledge", "General drafting", "Fit-out, joinery and ID detail"],
  ["Standards", "Their template", "Your standards and naming"],
  ["Coordination", "Issues found on site", "Clashes resolved before issue"],
  ["Capacity", "Fixed team size", "Scales with package and stage"],
];

export default function WhyDraftCore() {
  return (
    <>
      <PageHero sheet="A-05" label="Why us" tag="Why DraftCore" title={<>One partner. <em>Multiple capabilities.</em></>}
        lede="Less coordination overhead, cleaner documents and a team that understands interiors." />
      <WhyDraftCoreSection intro={false} />
      <section className="sec">
        <div className="wrap">
          <SectionTitle tag="The difference">Typical outsourcing <em>versus DraftCore.</em></SectionTitle>
          <div className="tbl" role="table">
            <div className="tr th mono" role="row"><span /><span>Typical outsourcing</span><span>DraftCore</span></div>
            {rows.map((r) => (
              <div className="tr" role="row" key={r[0]}><span className="mono">{r[0]}</span><span className="mute">{r[1]}</span><span><b>{r[2]}</b></span></div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
