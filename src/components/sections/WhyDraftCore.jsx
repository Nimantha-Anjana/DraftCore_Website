const reasons = [
  {
    number: "01",
    title: "Single Accountable Partner",
    description:
      "Design, BIM, documentation, site support and FF&E under one coordinated delivery structure.",
  },
  {
    number: "02",
    title: "Documentation You Can Build From",
    description:
      "Defined standards and coordinated documentation across project stages.",
  },
  {
    number: "03",
    title: "Interior Specialists",
    description:
      "A focused understanding of fit-out, joinery and interior technical detail.",
  },
  {
    number: "04",
    title: "Flexible Capacity",
    description:
      "Resources can scale according to package, workload and project stage.",
  },
];

const WhyDraftCore = () => {
  return (
    <section className="section why-section dark-section">

      <div className="container-dc">

        <div className="why-header">

          <span className="eyebrow">
            Why DraftCore
          </span>

          <h2 className="section-title">
            Built around
            <br />
            your team.
          </h2>

        </div>

        <div className="why-list">

          {reasons.map((reason) => (
            <div
              className="why-item"
              key={reason.number}
            >

              <span className="why-number">
                {reason.number}
              </span>

              <h3>
                {reason.title}
              </h3>

              <p>
                {reason.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyDraftCore;