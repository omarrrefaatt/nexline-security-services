import Logo from "./Logo.jsx";
import Icon from "../common/Icon.jsx";
import { navLinks } from "../../data/navLinks.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownOpen = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="navbar navbar--lg">
      <div className="navbar__inner">
        <Logo />

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <div key={link.label} className="navbar__link-item">
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                {link.label}
              </NavLink>

              {/* Dropdown Arrow */}
              {link.hasDropdown && (
                <button
                  type="button"
                  className="navbar__dropdown-toggle"
                  aria-label={`Toggle ${link.label} menu`}
                  onClick={() => handleDropdownOpen(link.label)}
                  aria-expanded={openDropdown === link.label}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              )}

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <div
                  className={`navbar__dropdown ${
                    openDropdown === link.label ? "is-open" : ""
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      className={({ isActive }) =>
                        `navbar__dropdown-item ${isActive ? "is-active" : ""}`
                      }
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
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
