import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="dc-footer">

      <div className="container-dc">

        <div className="footer-top">

          <div className="footer-brand">

            <Link to="/" className="dc-logo">

              <span className="logo-mark">
                D
              </span>

              <span className="logo-text">
                DRAFT<span>CORE</span>
              </span>

            </Link>

            <p>
              Your extended design and technical
              delivery team.
            </p>

          </div>

          <div className="footer-column">

            <span>Explore</span>

            <Link to="/about">
              About
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/projects">
              Projects
            </Link>

            <Link to="/why-draftcore">
              Why DraftCore
            </Link>

          </div>

          <div className="footer-column">

            <span>Services</span>

            <Link to="/services/bim-modelling">
              BIM Modelling
            </Link>

            <Link to="/services/cad-documentation">
              CAD Documentation
            </Link>

            <Link to="/services/shop-drawings">
              Shop Drawings
            </Link>

            <Link to="/services/interior-design">
              Interior Design
            </Link>

          </div>

          <div className="footer-column">

            <span>Contact</span>

            <a href="mailto:info@draftcoresolutions.com">
              info@draftcoresolutions.com
            </a>

            <a href="tel:+94714449070">
              +94 71 444 9070
            </a>

            <Link to="/contact">
              Send an enquiry
            </Link>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} DraftCore Solutions PVT LTD
          </span>

          <span>
            Design · BIM · Documentation · Delivery
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;