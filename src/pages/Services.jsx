import ServicesPreview from "../components/sections/ServicesPreview";

const Services = () => {
  return (
    <main>
      <section className="page-hero">
        <div className="container-dc">

          <span className="eyebrow">
            Our Capabilities
          </span>

          <h1>
            Services built
            <br />
            for delivery.
          </h1>

        </div>
      </section>

      <ServicesPreview />
    </main>
  );
};

export default Services;