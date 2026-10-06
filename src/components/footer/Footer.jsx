import { Link } from "react-router-dom";
import { Logo } from "../navigation/Navbar";
import services from "../../data/services";

export default function Footer() {
  return (
    <footer className="foot dark">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <Logo still />
            <p className="foot-line display">Your extended design and technical delivery team.</p>
          </div>
          <div className="foot-col">
            <span className="mono">Explore</span>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/why-draftcore">Why DraftCore</Link>
          </div>
          <div className="foot-col">
            <span className="mono">Services</span>
            {services.map((s) => <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}
          </div>
          <div className="foot-col">
            <span className="mono">Contact</span>
            <a href="mailto:info@draftcoresolutions.com">info@draftcoresolutions.com</a>
            <a href="tel:+94714449070">+94 71 444 9070</a>
            <Link to="/contact">Send an enquiry</Link>
          </div>
        </div>
        <div className="foot-bot mono">
          <span>© {new Date().getFullYear()} DraftCore Solutions PVT LTD</span>
          <span>Design · BIM · Documentation · Delivery</span>
        </div>
      </div>
    </footer>
  );
}
