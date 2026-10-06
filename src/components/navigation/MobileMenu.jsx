import { Link } from "react-router-dom";
import "./navbar.css";

const MobileMenu = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="mobile-menu">

      <div className="mobile-menu-inner">

        <div className="mobile-menu-label">
          Navigation
        </div>

        <nav>
          <Link to="/" onClick={onClose}>
            <span>01</span>
            Home
          </Link>

          <Link to="/about" onClick={onClose}>
            <span>02</span>
            About
          </Link>

          <Link to="/services" onClick={onClose}>
            <span>03</span>
            Services
          </Link>

          <Link to="/projects" onClick={onClose}>
            <span>04</span>
            Projects
          </Link>

          <Link to="/why-draftcore" onClick={onClose}>
            <span>05</span>
            Why DraftCore
          </Link>

          <Link to="/contact" onClick={onClose}>
            <span>06</span>
            Contact
          </Link>
        </nav>

        <div className="mobile-menu-footer">
          <span>DraftCore Solutions PVT LTD</span>
          <span>Design · BIM · Documentation · Delivery</span>
        </div>

      </div>
    </div>
  );
};

export default MobileMenu;