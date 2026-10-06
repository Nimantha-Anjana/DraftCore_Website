import { Link } from "react-router-dom";

const CapabilityStrip = () => {
  const capabilities = [
    "Revit BIM",
    "CAD Documentation",
    "Shop Drawings",
    "Interior Design",
    "Project Delivery",
    "FF&E Solutions",
  ];

  return (
    <section className="capability-strip">

      <div className="capability-track">

        {[...capabilities, ...capabilities].map(
          (item, index) => (
            <Link
              to="/services"
              key={index}
              className="capability-item"
            >
              <span>{item}</span>
              <span className="capability-dot">✦</span>
            </Link>
          )
        )}

      </div>

    </section>
  );
};

export default CapabilityStrip;