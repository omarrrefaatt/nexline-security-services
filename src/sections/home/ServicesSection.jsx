import { Link } from "react-router-dom";
import { services } from "../../data/services.js";
import Icon from "../../components/common/Icon.jsx";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="services-section">
      <div className="services-section__container">

        <div className="services-section__header">
          <h2>
  {t.servicesSection.title.split(" ").slice(0, -2).join(" ")}{" "}
  <em>{t.servicesSection.title.split(" ").slice(-2).join(" ")}</em>
</h2>
          <p>{t.servicesSection.subtitle}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const translatedService =
              t.services.items[service.translationKey];

            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card"
              >
                <div
                  className="service-card__image"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                />

                <div className="service-card__content">
                  <div className="service-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{translatedService.title}</h3>

                  <p className="service-card__description">
                    {translatedService.description}
                  </p>
                </div>

                <div className="service-card__footer">
                  <span className="service-card__action">
                    {t.servicesSection.learnMore}
                    <Icon
                      name="arrow-right"
                      size={16}
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="services-section__cta">
          <p className="services-section__cta-question">
            {t.servicesSection.ctaQuestion}
          </p>

          <Link
            to="/services"
            className="btn btn--primary services-section__cta-button"
          >
            {t.servicesSection.viewAll}
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;