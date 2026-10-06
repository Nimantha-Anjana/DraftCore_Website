import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="final-cta">

      <div className="container-dc">

        <div className="final-cta-inner">

          <span className="eyebrow">
            Start a Conversation
          </span>

          <h2>
            Have a project
            <br />
            in mind?
          </h2>

          <p>
            Let’s discuss how DraftCore can support your
            design, documentation and delivery requirements.
          </p>

          <Link
            to="/contact"
            className="dc-button dc-button-primary"
          >
            Discuss Your Project
            <i className="bi bi-arrow-up-right"></i>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default FinalCTA;