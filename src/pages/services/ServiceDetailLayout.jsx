import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { services } from "../../data/services.js";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";
import "../../pages/services/serviceDetail.css";

function ServiceDetailLayout({ service }) {
  const { language } = useLanguage();
  const t = translations[language];

  if (!service) {
    return null;
  }

  const serviceIndex =
    services.findIndex((item) => item.id === service.id) + 1;

  return (
    <PageShell>
      <section className="service-detail-page">
        <aside className="service-detail-sidebar">
          <div className="service-detail-sidebar__header">
            <span className="service-detail-sidebar__line" />
            <p>{t.serviceDetail.sidebarLabel}</p>
          </div>

          <h2>{t.serviceDetail.sidebarTitle}</h2>

          <nav className="service-detail-sidebar__nav">
            {services.map((item, index) => {
              const translatedItem =
                t.services.items[item.translationKey];

              return (
                <Link
                  key={item.id}
                  to={`/services/${item.id}`}
                  className={
                    item.id === service.id
                      ? "service-detail-sidebar__link active"
                      : "service-detail-sidebar__link"
                  }
                >
                  <span className="service-detail-sidebar__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="service-detail-sidebar__title">
                    {translatedItem?.title || item.title}
                  </span>

                  <span className="service-detail-sidebar__arrow">
                    →
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="service-detail-content">
          <div className="service-detail-hero">
            <div className="service-detail-hero__top">
              <p className="eyebrow">
                <span className="status-dot" />
                {service.category}
              </p>

              <span className="service-detail-hero__number">
                {t.serviceDetail.serviceLabel} /{" "}
                {String(serviceIndex).padStart(2, "0")}
              </span>
            </div>

            <h1>{service.title}</h1>

            <p className="service-detail-subtitle">
              {service.description}
            </p>
          </div>

          <div className="service-detail-image-wrapper">
            <img
              className="service-detail-image"
              src={service.image}
              alt={service.alt || service.title}
            />

            <div className="service-detail-image-overlay" />

            <div className="service-detail-image-label">
              <span>{t.serviceDetail.imageLabel}</span>
              <span>24 / 7</span>
            </div>
          </div>

          <div className="service-detail-text">
            <section className="service-detail-intro">
              <span className="service-detail-section-number">
                01
              </span>

              <div>
                <p className="service-detail-label">
                  {t.serviceDetail.approachLabel}
                </p>

                <h2>
                  {t.serviceDetail.professional}{" "}
                  {service.title}
                </h2>

                <p className="service-detail-description">
                  {service.overview ||
                    service.longDescription ||
                    service.description}
                </p>
              </div>
            </section>

            {service.howItWorks && (
              <section className="service-detail-how">
                <div className="service-detail-section-heading">
                  <span className="service-detail-section-number">
                    02
                  </span>

                  <div>
                    <p className="service-detail-label">
                      {t.serviceDetail.howItWorksLabel}
                    </p>

                    <h2>{service.howItWorks.title}</h2>

                    <p className="service-detail-description">
                      {service.howItWorks.description}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {service.process?.length > 0 && (
              <section className="service-detail-process">
                <div className="service-detail-section-heading">
                  <span className="service-detail-section-number">
                    03
                  </span>

                  <div>
                    <p className="service-detail-label">
                      {t.serviceDetail.processLabel}
                    </p>

                    <h2>
                      {t.serviceDetail.processTitle}
                    </h2>
                  </div>
                </div>

                <div className="service-detail-process-list">
                  {service.process.map((step) => (
                    <div
                      className="service-detail-process-item"
                      key={step.number}
                    >
                      <span className="service-detail-process-number">
                        {step.number}
                      </span>

                      <div className="service-detail-process-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {service.features?.length > 0 && (
              <section className="service-detail-features">
                <div className="service-detail-features__heading">
                  <span className="service-detail-section-number">
                    04
                  </span>

                  <div>
                    <p className="service-detail-label">
                      {t.serviceDetail.servicesLabel}
                    </p>

                    <h2>{t.serviceDetail.featuresTitle}</h2>
                  </div>
                </div>

                <div className="service-detail-feature-grid">
                  {service.features.map((feature) => (
                    <div
                      className="service-detail-feature"
                      key={feature}
                    >
                      <span className="service-detail-feature__dot">
                        <Icon name="check" size={12} />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="service-detail-inline-cta">
              <div className="service-detail-inline-cta__content">
                <p className="service-detail-label">
                  {t.serviceDetail.cta.label}
                </p>

                <h3>{t.serviceDetail.cta.title}</h3>
              </div>

              <Link
                className="service-detail-inline-cta__button"
                to={`/quote?service=${service.id}`}
              >
                {t.serviceDetail.cta.button}
                <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </main>
      </section>
    </PageShell>
  );
}

export default ServiceDetailLayout;