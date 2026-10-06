import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`dc-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container-dc navbar-inner">

          <Link to="/" className="dc-logo" onClick={closeMenu}>
            <span className="logo-mark">D</span>

            <span className="logo-text">
              DRAFT<span>CORE</span>
            </span>
          </Link>

          <nav className="desktop-nav">
            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/services">
              Services
            </NavLink>

            <NavLink to="/projects">
              Projects
            </NavLink>

            <NavLink to="/why-draftcore">
              Why DraftCore
            </NavLink>
          </nav>

          <div className="navbar-actions">
            <Link to="/contact" className="nav-contact">
              Discuss Your Project
              <i className="bi bi-arrow-up-right"></i>
            </Link>

            <button
              className={`menu-toggle ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;