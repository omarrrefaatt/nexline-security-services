import { Link } from "react-router-dom";
import Icon from "../common/Icon.jsx";
import {
  footerQuickLinks,
  footerServiceAreas,
  footerServices,
} from "../../data/footerData.js";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";
function Footer() {
  const currentYear = new Date().getFullYear();

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="site-footer">
      {/* ================= CTA ================= */}
      <div className="site-footer__cta shell">
        <div>
          <p className="eyebrow">
            <span className="status-dot" />
            {t.footer.cta.eyebrow}
          </p>

          <h2>
            {t.footer.cta.titleLine1}
            <br />
            <em>{t.footer.cta.titleLine2}</em>
          </h2>

          <p>{t.footer.cta.description}</p>
        </div>

        <div className="site-footer__cta-actions">
          <Link
            className="btn btn--primary btn--sm site-footer__cta-quote"
            to="/quote"
          >
            {t.footer.cta.quoteButton}
            <Icon name="arrow" size={16} />
          </Link>

          <a
            className="btn btn--sm site-footer__cta-call"
            href="tel:+19097021008"
          >
            {t.footer.cta.callButton}
            <Icon name="phone" size={16} />
          </a>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="site-footer__main shell">
        {/* Brand */}
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo">
            <span className="site-footer__mark">
              <Icon name="shield" size={20} />
            </span>

            <span>
              NEXLINE
              <small>SECURITY SERVICES</small>
            </span>
          </Link>

          <p>{t.footer.brand.description}</p>

          <div
            className="site-footer__socials"
            aria-label={t.footer.brand.socialLabel}
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Icon name="facebook" size={16} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Icon name="instagram" size={16} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" size={16} />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Icon name="youtube" size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="site-footer__column">
          <h3>{t.footer.quickLinks.title}</h3>

          {footerQuickLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.label} to={link.href}>
                {t.footer.quickLinks.items[link.label] || link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href}>
                {t.footer.quickLinks.items[link.label] || link.label}
              </a>
            ),
          )}
        </div>

        {/* Security Services */}
        <div className="site-footer__column">
          <h3>{t.footer.services.title}</h3>

          {footerServices.map((service) => (
            <a href="/services" key={service}>
              {t.footer.services.items[service.trim()] || service.trim()}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="site-footer__column site-footer__contact">
          <h3>{t.footer.contact.title}</h3>

          <span>{t.footer.contact.phone}</span>
          <strong>+1(909) 702-1008</strong>

          <span>{t.footer.contact.email}</span>
          <strong>info@nexlinesecurity.com</strong>

          <span>{t.footer.contact.address}</span>
          <strong>5790 Magnolia Ave, Suite 101, Riverside, CA 92506</strong>

          <span>{t.footer.contact.hours}</span>
          <strong>Monday - Friday: 8:00 AM - 5:00 PM</strong>
        </div>
      </div>

      {/* ================= SERVICE AREAS ================= */}
      <div className="site-footer__areas shell" id="service-areas">
        <div className="site-footer__section-heading">
          <div>
            <p className="eyebrow">{t.footer.serviceAreas.eyebrow}</p>

            <h2>
              {t.footer.serviceAreas.titleLine1}{" "}
              <em>{t.footer.serviceAreas.titleLine2}</em>
            </h2>
          </div>

          <p>{t.footer.serviceAreas.description}</p>
        </div>

        <div className="site-footer__area-grid">
          {footerServiceAreas.map((group) => (
            <section key={group.region}>
              <h3>
                {t.footer.serviceAreas.regions[group.region] || group.region}
              </h3>

              {group.locations.map((location) => (
                <a href="#service-areas" key={location}>
                  {location}
                </a>
              ))}
            </section>
          ))}
        </div>
      </div>

      {/* ================= TRUST & CREDENTIALS ================= */}
      <div className="site-footer__trust shell">
        <div>
          <h3>{t.footer.trust.title}</h3>

          <p>{t.footer.trust.description}</p>
        </div>

        <div className="site-footer__trust-list">
          <span>{t.footer.trust.license}</span>

          <span>{t.footer.trust.insurance}</span>

          <span>{t.footer.trust.certifications}</span>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="site-footer__bottom shell">
        <span>
          © {currentYear} NexLine Security. {t.footer.bottom.rights}
        </span>

        <div>
          <a href="#privacy">{t.footer.bottom.privacy}</a>

          <a href="#terms">{t.footer.bottom.terms}</a>

          <a href="#accessibility">{t.footer.bottom.accessibility}</a>

          <a href="#sitemap">{t.footer.bottom.sitemap}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
