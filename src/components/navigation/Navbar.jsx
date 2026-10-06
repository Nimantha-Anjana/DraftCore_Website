import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import navigation from "../../data/navigation";

export const Logo = ({ onClick, still = false }) => (
  <Link to="/" className="logo" onClick={onClick} aria-label="DraftCore Solutions home">
    {still ? (
      <img className="logo-img" src="/images/logo/mark.png" alt="" />
    ) : (
      <video className="logo-vid" src="/videos/logo-mark.mp4" poster="/images/logo/mark.png" autoPlay muted playsInline preload="auto" aria-hidden="true" />
    )}
    <span className="logo-word"><b>DRAFTCORE</b><small>Solutions PVT LTD</small></span>
  </Link>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <>
      <header className={`nav ${scrolled || open ? "solid" : ""}`}>
        <div className="wrap nav-in">
          <Logo onClick={() => setOpen(false)} />
          <nav className="links">
            {navigation.filter((n) => n.path !== "/contact").map((n) => (
              <NavLink key={n.path} to={n.path} end={n.path === "/"}>{n.label}</NavLink>
            ))}
          </nav>
          <Link to="/contact" className="nav-cta">Start a project <i className="bi bi-arrow-up-right" /></Link>
          <button className={`burger ${open ? "on" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span /><span />
          </button>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
