import { Link } from "react-router-dom";
import Icon from "../common/Icon.jsx";
import {
  footerQuickLinks,
  footerServiceAreas,
  footerServices,
} from "../../data/footerData.js";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__cta shell">
        <div>
          <p className="eyebrow">
            <span className="status-dot" />
            Let&apos;s talk protection
          </p>
          <h2>
            Need reliable
            <br />
            <em>security?</em>
          </h2>
          <p>
            Protect your people, property, and business with professional
            security services.
          </p>
        </div>
        <div className="site-footer__cta-actions">
          <Link className="button button-primary" to="/quote">
            Request a Quote <Icon name="arrow" size={16} />
          </Link>
          <a className="button button-outline-light" href="tel:[PHONE NUMBER]">
            Call Now <Icon name="phone" size={16} />
          </a>
        </div>
      </div>

      <div className="site-footer__main shell">
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo">
            <span className="site-footer__mark">
              <Icon name="shield" size={20} />
            </span>
            <span>
              NEXLINE<small>SECURITY SERVICES</small>
            </span>
          </Link>
          <p>
            Professional, reliable, highly trained security professionals
            serving businesses, properties, events, and communities throughout
            Southern California.
          </p>
          <div className="site-footer__socials" aria-label="Social media links">
            {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((network) => (
              <a
                href={`#${network.toLowerCase()}`}
                key={network}
                aria-label={`${network} placeholder`}
              >
                {network.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>
        <div className="site-footer__column">
          <h3>Quick links</h3>
          {footerQuickLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.label} to={link.href}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ),
          )}
        </div>
        <div className="site-footer__column">
          <h3>Security services</h3>
          {footerServices.map((service) => (
            <a href="/services" key={service}>
              {service}
            </a>
          ))}
        </div>
        <div className="site-footer__column site-footer__contact">
          <h3>Contact us</h3>
          <span>Phone</span>
          <strong>[PHONE NUMBER]</strong>
          <span>Email</span>
          <strong>[EMAIL ADDRESS]</strong>
          <span>Address</span>
          <strong>[BUSINESS ADDRESS]</strong>
          <span>Hours</span>
          <strong>[BUSINESS HOURS]</strong>
        </div>
      </div>

      <div className="site-footer__areas shell" id="service-areas">
        <div className="site-footer__section-heading">
          <div>
            <p className="eyebrow">Where we serve</p>
            <h2>
              Service <em>areas.</em>
            </h2>
          </div>
          <p>Professional security services throughout Southern California.</p>
        </div>
        <div className="site-footer__area-grid">
          {footerServiceAreas.map((group) => (
            <section key={group.region}>
              <h3>{group.region}</h3>
              {group.locations.map((location) => (
                <a href="#service-areas" key={location}>
                  {location}
                </a>
              ))}
            </section>
          ))}
        </div>
      </div>

      <div className="site-footer__trust shell">
        <div>
          <h3>Trust &amp; credentials</h3>
          <p>
            Legitimate business credentials can be added here when confirmed.
          </p>
        </div>
        <div className="site-footer__trust-list">
          <span>License information: [TO BE PROVIDED]</span>
          <span>Insurance information: [TO BE PROVIDED]</span>
          <span>Certifications: [TO BE PROVIDED]</span>
        </div>
      </div>

      <div className="site-footer__bottom shell">
        <span>© {currentYear} [COMPANY NAME]. All Rights Reserved.</span>
        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#accessibility">Accessibility Statement</a>
          <a href="#sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
