import Logo from "./Logo.jsx";
import Icon from "../common/Icon.jsx";
import { navLinks } from "../../data/navLinks.js";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations";
import "./navigation.css";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const handleDropdownOpen = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setLanguageOpen(false);
  };

  // Translate navigation labels using translationKey
  const getNavLabel = (link) => {
    return t.nav[link.translationKey] || link.label;
  };

  return (
    <header className="navbar navbar--lg">
      <div className="navbar__inner">
        <Logo />

        <button
          type="button"
          className="navbar__mobile-toggle min-[901px]:hidden"
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : t.nav.toggleMenu
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          {mobileMenuOpen ? (
            <X size={25} strokeWidth={1.8} />
          ) : (
            <Menu size={25} strokeWidth={1.8} />
          )}
        </button>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <div key={link.label} className="navbar__link-item">
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) => (isActive ? "is-active" : "")}
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

        <div className="navbar__actions navbar__actions--desktop">
          {/* Get Started */}
          <Link to="/quote" className="btn btn--primary btn--sm">
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

        <div
          id="mobile-navigation"
          className={`navbar__mobile-menu min-[901px]:hidden ${mobileMenuOpen ? "is-open" : ""}`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="navbar__mobile-links" aria-label="Mobile primary">
            <div className="navbar__mobile-link-item">
              <div className="navbar__mobile-link-row">
                <NavLink to="/" end onClick={closeMobileMenu}>
                  {t.nav.home}
                </NavLink>
              </div>
            </div>

            {navLinks.map((link) => (
              <div key={link.label} className="navbar__mobile-link-item">
                <div className="navbar__mobile-link-row">
                  <NavLink
                    to={link.href}
                    end={link.href === "/"}
                    onClick={closeMobileMenu}
                    className={({ isActive }) => (isActive ? "is-active" : "")}
                  >
                    {getNavLabel(link)}
                  </NavLink>

                  {link.hasDropdown && (
                    <button
                      type="button"
                      className="navbar__mobile-dropdown-toggle"
                      aria-label={`Toggle ${getNavLabel(link)} menu`}
                      aria-expanded={openDropdown === link.label}
                      onClick={() => handleDropdownOpen(link.label)}
                    >
                      <ChevronDown size={20} strokeWidth={1.8} />
                    </button>
                  )}
                </div>

                {link.hasDropdown && (
                  <div
                    className={`navbar__mobile-dropdown ${openDropdown === link.label ? "is-open" : ""}`}
                  >
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.href}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          isActive ? "is-active" : ""
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="navbar__mobile-actions">
            <Link
              to="/quote"
              className="btn btn--primary"
              onClick={closeMobileMenu}
            >
              {t.nav.getStarted}
            </Link>
            <div className="navbar__mobile-language-group">
              <button
                type="button"
                className="navbar__mobile-language"
                aria-label="Change language"
                onClick={() => setLanguageOpen((isOpen) => !isOpen)}
                aria-expanded={languageOpen}
              >
                <span
                  className="navbar__mobile-language-icon"
                  aria-hidden="true"
                >
                  <Icon name="globe" size={18} strokeWidth={1.8} />
                </span>
                <span className="navbar__mobile-language-current">
                  {language === "en" ? t.nav.english : t.nav.spanish}
                </span>
                <ChevronDown
                  className="navbar__mobile-language-chevron"
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </button>
              {languageOpen && (
                <div className="navbar__mobile-language-options">
                  <button
                    type="button"
                    className={language === "en" ? "active" : ""}
                    onClick={() => {
                      setLanguage("en");
                      setLanguageOpen(false);
                    }}
                  >
                    {t.nav.english}
                  </button>
                  <button
                    type="button"
                    className={language === "es" ? "active" : ""}
                    onClick={() => {
                      setLanguage("es");
                      setLanguageOpen(false);
                    }}
                  >
                    {t.nav.spanish}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
