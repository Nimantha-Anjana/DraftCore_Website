import FeaturedProjects from "../components/sections/FeaturedProjects";

const Projects = () => {
  return (
    <main>

      <section className="page-hero">
        <div className="container-dc">

          <span className="eyebrow">
            Portfolio
          </span>

          <h1>
            Selected
            <br />
            Projects.
          </h1>

        </div>
      </section>

      <FeaturedProjects />

    </main>
  );
};

export default Projects;