import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="page-placeholder">

        <h1>
          Project Not Found
        </h1>

        <Link to="/projects">
          Back to Projects
        </Link>

      </div>
    );
  }

  return (
    <main>

      <section className="page-hero">

        <div className="container-dc">

          <span className="eyebrow">
            {project.category}
          </span>

          <h1>
            {project.title}
          </h1>

        </div>

      </section>

    </main>
  );
};

export default ProjectDetails;