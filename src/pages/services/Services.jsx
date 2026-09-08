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

    if (!normalizedQuery) {
      return services;
    }

    return services.filter((service) =>
      [
        service.title,
        service.category,
        service.description,
      ].some((value) =>
        value.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [query]);

  return (
    <PageShell>
      <section className="services-page">

        {/* =====================================================
            HERO / INTRO
        ===================================================== */}
        <div className="services-page__intro">

          {/* HERO IMAGE */}
          <div
            className="services-page__hero-image services-page__hero-image--visible"
            aria-hidden="true"
          >
            <img
              src={serviceBackground}
              alt=""
            />
          </div>


          {/* HERO CONTENT */}
          <div className="services-page__hero-content">

            <p className="services-page__eyebrow">
              <span className="services-page__status-dot" />
              What we protect
            </p>

            <h1>
              Security that moves
              <br />
              <em>with you.</em>
            </h1>

            <p className="services-page__lead">
              From a single site to a complex operation, Nexline
              builds the right level of protection around the way
              your business works.
            </p>

          </div>


          {/* QUOTE BUTTON */}
          <Link
            className="button button-primary services-page__quote"
            to="/quote"
          >
            Get Quote
            <Icon name="arrow" size={16} />
          </Link>

        </div>


        {/* =====================================================
            TOOLBAR
        ===================================================== */}
        <div className="services-page__toolbar">

          {/* SERVICE COUNT */}
          <div className="services-page__toolbar-count">

            <span className="services-page__toolbar-number">
              {String(filteredServices.length).padStart(2, "0")}
            </span>

            <span>
              Services available
            </span>

          </div>


          {/* SEARCH */}
          <label className="services-page__search">

            <Icon
              name="search"
              size={19}
            />

            <span className="services-page__sr-only">
              Search security services
            </span>

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search services"
            />

            {query && (
              <button
                type="button"
                className="services-page__search-clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
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

            {filteredServices.map((service, index) => (

              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="services-page__card"
              >

                {/* CARD IMAGE */}
                <div className="services-page__card-image-wrap">

                  <img
                    className="services-page__card-image"
                    src={service.image}
                    alt={service.alt || service.title}
                    loading={
                      index > 1
                        ? "lazy"
                        : "eager"
                    }
                  />

                  <span className="services-page__card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* CARD BODY */}
                <div className="services-page__card-body">

                  <p className="services-page__card-category">
                    {service.category}
                  </p>

                  <h2>
                    {service.title}
                  </h2>

                  <p className="services-page__card-description">
                    {service.description}
                  </p>

                  <span className="services-page__card-action">
                    Get Quote
                    <Icon
                      name="arrow"
                      size={16}
                    />
                  </span>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          /* =====================================================
             EMPTY SEARCH STATE
          ===================================================== */
          <div className="services-page__empty">

            <Icon
              name="search"
              size={28}
            />

            <h2>
              No services found
            </h2>

            <p>
              Try a broader search or clear the field
              to see every service.
            </p>

          </div>

        )}

      </section>
    </PageShell>
  );
}

export default Services;