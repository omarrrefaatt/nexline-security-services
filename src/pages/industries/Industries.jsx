// @ts-expect-error PageShell is a JavaScript module without TypeScript declarations.
import PageShell from "../../components/layout/PageShell.jsx";
import { Link } from "react-router-dom";
import { industries } from "../../data/industries.js";
import { services } from "../../data/services.js";
import Icon from "../../components/common/Icon.jsx";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

function getServiceById(id) {
  return services.find((service) => service.id === id);
}

function Industries() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <PageShell>
      <div className="industries-page">
        <div className="industries-page__intro">
          <div className="industries-page__intro-content">
            <h1>{t.industries.hero.title}</h1>

            <p className="industries-page__lead">
              {t.industries.hero.description}
            </p>
          </div>

          <nav
            className="industries-page__jumpnav"
            aria-label={t.industries.hero.jumpNavLabel}
          >
            <span className="industries-page__jumpnav-label">
              {t.industries.hero.jumpNavLabel}
            </span>

            <ul>
              {industries.map((industry) => {
                const translatedIndustry =
                  t.industries.items[industry.translationKey];

                return (
                  <li key={industry.id}>
                    <a href={`#${industry.id}`}>
                      {translatedIndustry?.title ||
                        industry.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => {
            const translatedIndustry =
              t.industries.items[industry.translationKey];

            return (
              <article
                key={industry.id}
                id={industry.id}
                className="industry-card"
              >
                <div className="industry-card__image-wrap">
                  <img
                    className="industry-card__image"
                    src={industry.image}
                    alt={
                      translatedIndustry?.alt ||
                      industry.alt
                    }
                    loading="lazy"
                  />
                </div>

                <div className="industry-card__body">
                  <h2>
                    {translatedIndustry?.title ||
                      industry.title}
                  </h2>

                  <p className="industry-card__blurb">
                    {translatedIndustry?.blurb ||
                      industry.blurb}
                  </p>

                  <div className="industry-card__services">
                    <span className="industry-card__services-label">
                      {t.industries.suggestedServices}
                    </span>

                    <div className="industry-card__service-links">
                      {industry.suggestedServices.map(
                        (serviceId) => {
                          const service =
                            getServiceById(serviceId);

                          if (!service) return null;

                          const translatedService =
                            t.services.items[
                              service.translationKey
                            ];

                          return (
                            <Link
                              key={serviceId}
                              to={`/services/${service.id}`}
                              className="industry-card__service-chip"
                            >
                              {translatedService?.title ||
                                service.title}
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>

                  <Link
                    to="/quote"
                    className="btn btn--primary btn--sm industry-card__cta"
                  >
                    {t.industries.getQuote}

                    <Icon
                      name="arrow-right"
                      size={16}
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

export default Industries;