import { Link, useParams } from "react-router-dom";
import services from "../data/services";

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div className="page-placeholder">
        <h1>Service Not Found</h1>

        <Link to="/services">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <main>

      <section className="page-hero">
        <div className="container-dc">

          <span className="eyebrow">
            {service.number}
          </span>

          <h1>
            {service.title}
          </h1>

          <p>
            {service.description}
          </p>

        </div>
      </section>

      <section className="section">

        <div className="container-dc">

          <div className="detail-list">

            {service.details.map((item, index) => (
              <div
                className="detail-item"
                key={item}
              >

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default ServiceDetails;