import { Link } from "react-router-dom";

export default function Button({ children, to, variant = "ink", icon = true }) {
  return (
    <Link to={to} className={`btn btn-${variant}`}>
      {children}
      {icon && <i className="bi bi-arrow-up-right" />}
    </Link>
  );
}
