import { Link } from "react-router-dom";
import services from "../../data/services";

const ServicesPreview = () => {
  return (
    <section className="section services-preview dark-section">

      <div className="container-dc">

        <div className="services-heading-row">

          <div>
            <span className="eyebrow">
              What We Do
            </span>

            <h2 className="section-title">
              Six capabilities.
              <br />
              One accountable partner.
            </h2>
          </div>

          <Link
            to="/services"
            className="text-link"
          >
            Explore all services
            <i className="bi bi-arrow-up-right"></i>
          </Link>

        </div>

        <div className="service-grid">

          {services.map((service) => (
            <Link
              to={`/services/${service.slug}`}
              className="service-card"
              key={service.id}
            >

              <div className="service-card-top">
                <span>{service.number}</span>

                <i className="bi bi-arrow-up-right"></i>
              </div>

              <div className="service-card-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

              <div className="service-card-bottom">
                Explore capability
                <span>→</span>
              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ServicesPreview;