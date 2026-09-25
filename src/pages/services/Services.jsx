import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { services } from "../../data/services.js";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

import serviceBackground from "../../assets/guards-services.jpg";
import "./services.css";

function Services() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { language } = useLanguage();
  const t = translations[language];

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return services;
    }

    return services.filter((service) => {
      const translatedService =
        t.services.items[service.translationKey];

      const searchableValues = [
        translatedService?.title,
        translatedService?.category,
        translatedService?.description,
      ];

      return searchableValues.some(
        (value) =>
          value &&
          value.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [query, t]);

  return (
    <PageShell>
      <section className="services-page">

        {/* =====================================================
            HERO / INTRO
        ===================================================== */}
        <div className="services-page__intro">
          <div className="services-page__intro-content">
            <p className="services-page__eyebrow">
              <span className="services-page__status-dot" />
              {t.services.hero.eyebrow}
            </p>

            <h1>
              {t.services.hero.titleLine1}
              <br />
              <em>{t.services.hero.titleLine2}</em>
            </h1>

            <p className="services-page__lead">
              {t.services.hero.description}
            </p>

            <Link
              className="services-page__quote btn btn--primary"
              to="/quote"
            >
              {t.services.hero.quote}
            </Link>
          </div>

          <div className="services-page__hero-image">
            <img src={serviceBackground} alt="" />
          </div>
        </div>

        {/* =====================================================
            TOOLBAR
        ===================================================== */}
        <div className="services-page__toolbar">
          <div className="services-page__toolbar-count">
            <span className="services-page__toolbar-number">
              {String(filteredServices.length).padStart(2, "0")}
            </span>

            <span>{t.services.toolbar.available}</span>
          </div>

          <label className="services-page__search">
            <Icon name="search" size={19} />

            <span className="services-page__sr-only">
              {t.services.toolbar.searchLabel}
            </span>

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder={t.services.toolbar.searchPlaceholder}
            />

            {query && (
              <button
                type="button"
                className="services-page__search-clear"
                onClick={() => setQuery("")}
                aria-label={t.services.toolbar.clearSearch}
              >
                &times;
              </button>
            )}
          </label>
        </div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}
        {filteredServices.length > 0 ? (
          <div className="services-page__grid">
            {filteredServices.map((service, index) => {
              const translatedService =
                t.services.items[service.translationKey];

              return (
                <article
                  key={service.id}
                  className="services-page__card"
                  onClick={() =>
                    navigate(`/services/${service.id}`)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      navigate(
                        `/services/${service.id}`
                      );
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${t.services.card.viewDetails} ${translatedService.title}`}
                >
                  <div className="services-page__card-image-wrap">
                    <img
                      className="services-page__card-image"
                      src={service.image}
                      alt={
                        translatedService.alt ||
                        translatedService.title
                      }
                      loading={
                        index > 1 ? "lazy" : "eager"
                      }
                    />
                  </div>

                  <div className="services-page__card-body">
                    <p className="services-page__card-category">
                      {translatedService.category}
                    </p>

                    <h2>{translatedService.title}</h2>

                    <p className="services-page__card-description">
                      {translatedService.description}
                    </p>

                    <button
                      type="button"
                      className="services-page__card-quote"
                      onClick={(event) => {
                        event.stopPropagation();

                        navigate(
                          `/quote?service=${service.id}`
                        );
                      }}
                    >
                      {t.services.card.getQuote}
                      <Icon name="arrow" size={16} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* =====================================================
             EMPTY SEARCH STATE
          ===================================================== */
          <div className="services-page__empty">
            <Icon name="search" size={28} />

            <h2>{t.services.empty.title}</h2>

            <p>{t.services.empty.description}</p>
          </div>
        )}

      </section>
    </PageShell>
  );
}

export default Services;