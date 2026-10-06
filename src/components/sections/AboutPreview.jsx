import SectionLabel from "../common/SectionLabel";
import Button from "../common/Button";

const AboutPreview = () => {
  return (
    <section className="section about-preview">

      <div className="container-dc">

        <div className="about-grid">

          <div>
            <SectionLabel number="01">
              About DraftCore
            </SectionLabel>
          </div>

          <div className="about-content">

            <h2>
              We turn design intent into
              <span> buildable reality.</span>
            </h2>

            <p>
              DraftCore Solutions is a specialist design and
              documentation partner working as an extended arm
              of existing design and technical teams.
            </p>

            <p>
              From BIM modelling and construction documentation
              to shop drawings, interior design support, project
              delivery and FF&E solutions, our role is to connect
              design intent with technical delivery.
            </p>

            <Button to="/about" variant="outline">
              Discover DraftCore
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutPreview;