const steps = [
  "Concept",
  "Design",
  "Documentation",
  "Coordination",
  "Delivery",
];

const ProcessSection = () => {
  return (
    <section className="section process-section dark-section">

      <div className="container-dc">

        <div className="process-header">

          <span className="eyebrow">
            Our Approach
          </span>

          <h2 className="section-title">
            From concept
            <br />
            through handover.
          </h2>

        </div>

        <div className="process-list">

          {steps.map((step, index) => (
            <div
              className="process-step"
              key={step}
            >

              <span className="process-number">
                0{index + 1}
              </span>

              <h3>{step}</h3>

              {index < steps.length - 1 && (
                <i className="bi bi-arrow-right"></i>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProcessSection;