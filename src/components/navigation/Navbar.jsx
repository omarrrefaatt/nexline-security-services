import Logo from "./Logo.jsx";
import Icon from "../common/Icon.jsx";
import { navLinks } from "../../data/navLinks.js";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations";
import "./navigation.css";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);

  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const handleDropdownOpen = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Translate navigation labels using translationKey
  const getNavLabel = (link) => {
    return t.nav[link.translationKey] || link.label;
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
                className={({ isActive }) =>
                  isActive ? "is-active" : ""
                }
              >
                {getNavLabel(link)}
              </NavLink>

              {/* Dropdown Arrow */}
              {link.hasDropdown && (
                <button
                  type="button"
                  className="navbar__dropdown-toggle"
                  aria-label={`Toggle ${getNavLabel(link)} menu`}
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
                        `navbar__dropdown-item ${
                          isActive ? "is-active" : ""
                        }`
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
          {/* Get Started */}
          <Link
  to="/quote"
  className="btn btn--primary btn--sm"
>
  {t.nav.getStarted}
</Link>

          {/* Language */}
          <div className="navbar__language">
            <button
              type="button"
              className="icon-btn"
              aria-label="Change language"
              onClick={() => setLanguageOpen(!languageOpen)}
              aria-expanded={languageOpen}
            >
              <Icon name="globe" size={20} />
            </button>

            {languageOpen && (
              <div className="language-menu">
                {/* English */}
                <button
                  type="button"
                  className={language === "en" ? "active" : ""}
                  onClick={() => {
                    setLanguage("en");
                    setLanguageOpen(false);
                  }}
                >
                  {t.nav.english}
                  {language === "en" && <span>✓</span>}
                </button>

                {/* Spanish */}
                <button
                  type="button"
                  className={language === "es" ? "active" : ""}
                  onClick={() => {
                    setLanguage("es");
                    setLanguageOpen(false);
                  }}
                >
                  {t.nav.spanish}
                  {language === "es" && <span>✓</span>}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;