import Logo from "./Logo.jsx";
import Icon from "../common/Icon.jsx";
import { navLinks } from "../../data/navLinks.js";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar navbar--lg">
      <div className="navbar__inner">
        <Logo />

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="/quote" className="btn btn--primary btn--sm">
            Get Started
          </a>
          <button
            type="button"
            className="icon-btn"
            aria-label="Change language"
          >
            <Icon name="globe" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
