import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { services } from "../../data/services.js";
import serviceBackground from "../../assets/run.png";
import "../../pages/services/Services.css";


function Services() {
  const [query, setQuery] = useState("");

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return services;

    return services.filter((service) =>
      [service.title, service.category, service.description].some((value) =>
        value.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [query]);

  return (
    <PageShell>
      <section className="services-page">

        {/* ================= HERO ================= */}
        <div className="services-page__intro">

          {/* Background / Guard Image */}
          <div
            className="services-page__hero-image"
            aria-hidden="true"
          >
            <img
              src={serviceBackground}
              alt=""
            />
          </div>

          {/* Hero Content */}
          <div className="services-page__hero-content">

            <p className="eyebrow">
              <span className="status-dot" />
              What we protect
            </p>

            <h1>
              Security that moves
              <br />
              <em>with you.</em>
            </h1>

            <p className="services-page__lead">
              From a single site to a complex operation, Nexline builds the
              right level of protection around the way your business works.
            </p>

          </div>

          {/* Quote Button */}
          <Link
            className="button button-primary services-page__quote"
            to="/quote"
          >
            Get Quote
            <Icon name="arrow" size={16} />
          </Link>

        </div>

        {/* ================= TOOLBAR ================= */}
        <div className="services-toolbar">

          <div className="services-toolbar__count">
            <span className="services-toolbar__number">
              {String(filteredServices.length).padStart(2, "0")}
            </span>

            <span>Services available</span>
          </div>

          <label className="service-search">

            <Icon name="search" size={19} />

            <span className="sr-only">
              Search security services
            </span>

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services"
            />

            {query && (
              <button
                type="button"
                className="service-search__clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}

          </label>

        </div>

        {/* ================= SERVICES GRID ================= */}
        {filteredServices.length > 0 ? (

          <div className="services-grid">

            {filteredServices.map((service, index) => (

              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card"
              >

                <div className="service-card__image-wrap">

                  <img
                    className="service-card__image"
                    src={service.image}
                    alt={service.alt}
                    loading={index > 1 ? "lazy" : "eager"}
                  />

                  <span className="service-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="service-card__body">

                  <p className="service-card__category">
                    {service.category}
                  </p>

                  <h2>{service.title}</h2>

                  <p className="service-card__description">
                    {service.description}
                  </p>

                  <span className="service-card__action">
                    Get Quote
                    <Icon name="arrow" size={16} />
                  </span>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          <div className="services-empty">

            <Icon name="search" size={28} />

            <h2>No services found</h2>

            <p>
              Try a broader search or clear the field to see every service.
            </p>

          </div>

        )}

      </section>
    </PageShell>
  );
}

export default Services;