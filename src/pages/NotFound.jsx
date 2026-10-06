import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-placeholder">

      <span className="eyebrow">
        404
      </span>

      <h1>
        Page not found.
      </h1>

      <Link
        to="/"
        className="dc-button dc-button-primary"
      >
        Back Home
        <i className="bi bi-arrow-up-right"></i>
      </Link>

    </div>
  );
};

export default NotFound;