// @ts-expect-error PageShell is a JavaScript module without TypeScript declarations.
import PageShell from "../../components/layout/PageShell.jsx";
import { Link } from "react-router-dom";
import { industries } from "../../data/industries.js";
import { services } from "../../data/services.js";
import Icon from "../../components/common/Icon.jsx";

function getServiceById(id) {
  return services.find((service) => service.id === id);
}

function Industries() {
  return (
    <PageShell>
      <div className="industries-page">
        <div className="industries-page__intro">
          <div className="industries-page__intro-content">
            <h1>Industries We Serve</h1>
            <p className="industries-page__lead">
              From single storefronts to regulated industrial sites, we build
              security programs around how each industry actually operates.
              Explore the sectors we work with below.
            </p>
          </div>

          <nav
            className="industries-page__jumpnav"
            aria-label="Jump to industry"
          >
            <span className="industries-page__jumpnav-label">
              Jump to an industry
            </span>
            <ul>
              {industries.map((industry) => (
                <li key={industry.id}>
                  <a href={`#${industry.id}`}>{industry.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => (
            <article
              key={industry.id}
              id={industry.id}
              className="industry-card"
            >
              <div className="industry-card__image-wrap">
                <img
                  className="industry-card__image"
                  src={industry.image}
                  alt={industry.alt}
                  loading="lazy"
                />
              </div>

              <div className="industry-card__body">
                <h2>{industry.title}</h2>
                <p className="industry-card__blurb">{industry.blurb}</p>

                <div className="industry-card__services">
                  <span className="industry-card__services-label">
                    Suggested services
                  </span>
                  <div className="industry-card__service-links">
                    {industry.suggestedServices.map((serviceId) => {
                      const service = getServiceById(serviceId);
                      if (!service) return null;
                      return (
                        <Link
                          key={serviceId}
                          to={`/services/${service.id}`}
                          className="industry-card__service-chip"
                        >
                          {service.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link to="/quote" className="btn btn--primary btn--sm industry-card__cta">
                  Get a Quote
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

export default Industries;