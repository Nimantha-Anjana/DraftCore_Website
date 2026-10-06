import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  variant = "primary",
  icon = true,
}) => {
  return (
    <Link
      to={to}
      className={`dc-button dc-button-${variant}`}
    >
      {children}

      {icon && (
        <i className="bi bi-arrow-up-right"></i>
      )}
    </Link>
  );
};

export default Button;