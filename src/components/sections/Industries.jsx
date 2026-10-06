import industries from "../../data/industries";

const Industries = () => {
  return (
    <section className="section industries-section">

      <div className="container-dc">

        <span className="eyebrow">
          Who We Support
        </span>

        <h2 className="section-title">
          Built for teams
          <br />
          that build.
        </h2>

        <div className="industry-list">

          {industries.map((industry, index) => (
            <div
              className="industry-item"
              key={industry}
            >

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {industry}
              </h3>

              <i className="bi bi-arrow-up-right"></i>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Industries;