import { Link } from "react-router-dom";

const HeroOverlay = () => {
  return (
    <div className="hero-content">

      <div className="container-dc">

        <div className="hero-top-label">
          <span></span>
          DRAFTCORE SOLUTIONS PVT LTD
        </div>

        <div className="hero-main">

          <div className="hero-heading">

            <div className="hero-line">
              DESIGN.
            </div>

            <div className="hero-line hero-indent">
              BIM.
            </div>

            <div className="hero-line">
              DOCUMENTATION.
            </div>

            <div className="hero-line hero-accent">
              DELIVERY.
            </div>

          </div>

          <div className="hero-description">

            <p>
              Your extended design and technical delivery team,
              supporting projects from concept through handover.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="dc-button dc-button-primary"
              >
                Discuss Your Project
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              <Link
                to="/services"
                className="dc-button dc-button-outline"
              >
                View Services
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroOverlay;