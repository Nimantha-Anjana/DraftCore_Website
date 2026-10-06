import { Link } from "react-router-dom";
import navigation from "../../data/navigation";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="mm">
      <nav className="wrap">
        {navigation.map((n, i) => (
          <Link key={n.path} to={n.path} onClick={onClose}>
            <small>{String(i + 1).padStart(2, "0")}</small>
            {n.label}
          </Link>
        ))}
        <p className="mono">DraftCore Solutions PVT LTD<br />info@draftcoresolutions.com</p>
      </nav>
    </div>
  );
}
