import { Link } from "react-router-dom";
import projects from "../../data/projects";

const FeaturedProjects = () => {
  return (
    <section className="section projects-preview">

      <div className="container-dc">

        <div className="projects-header">

          <div>
            <span className="eyebrow">
              Selected Work
            </span>

            <h2 className="section-title">
              Projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="text-link"
          >
            View portfolio
            <i className="bi bi-arrow-up-right"></i>
          </Link>

        </div>

        {projects.length === 0 ? (

          <div className="projects-empty">

            <div className="projects-empty-number">
              00
            </div>

            <h3>
              Portfolio coming soon.
            </h3>

            <p>
              Approved project case studies, images and
              project information will appear here.
            </p>

          </div>

        ) : (

          <div className="project-grid">
            {projects.map((project) => (
              <Link
                to={`/projects/${project.slug}`}
                key={project.id}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>

        )}

      </div>

    </section>
  );
};

export default FeaturedProjects;