import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { services } from "../../data/services.js";
import "../../pages/services/serviceDetail.css";

function ServiceDetailLayout({ service }) {
  if (!service) {
    return null;
  }

  const serviceIndex =
    services.findIndex((item) => item.id === service.id) + 1;

  return (
    <PageShell>
      <section className="service-detail-page">

        {/* =====================================================
            LEFT SIDEBAR
        ===================================================== */}
        <aside className="service-detail-sidebar">

          <div className="service-detail-sidebar__header">
            <span className="service-detail-sidebar__line" />
            <p>SECURITY SERVICES</p>
          </div>

          <h2>Our Services</h2>

          <nav className="service-detail-sidebar__nav">
            {services.map((item, index) => (
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
                  {item.title}
                </span>

                <span className="service-detail-sidebar__arrow">
                  →
                </span>
              </Link>
            ))}
          </nav>

        </aside>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <main className="service-detail-content">

          {/* =====================================================
              HERO
          ===================================================== */}
          <div className="service-detail-hero">

            <div className="service-detail-hero__top">

              <p className="eyebrow">
                <span className="status-dot" />
                {service.category}
              </p>

              <span className="service-detail-hero__number">
                SERVICE / {String(serviceIndex).padStart(2, "0")}
              </span>

            </div>

            <h1>{service.title}</h1>

            <p className="service-detail-subtitle">
              {service.description}
            </p>

          </div>


          {/* =====================================================
              IMAGE
          ===================================================== */}
          <div className="service-detail-image-wrapper">

            <img
              className="service-detail-image"
              src={service.image}
              alt={service.alt || service.title}
            />

            <div className="service-detail-image-overlay" />

            <div className="service-detail-image-label">
              <span>PROFESSIONAL SECURITY</span>
              <span>24 / 7</span>
            </div>

          </div>


          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div className="service-detail-text">

            {/* =====================================================
                OVERVIEW
            ===================================================== */}
            <section className="service-detail-intro">

              <span className="service-detail-section-number">
                01
              </span>

              <div>
                <p className="service-detail-label">
                  OUR APPROACH
                </p>

                <h2>
                  Professional {service.title}
                </h2>

                <p className="service-detail-description">
                  {service.overview ||
                    service.longDescription ||
                    service.description}
                </p>
              </div>

            </section>


            {/* =====================================================
                HOW IT WORKS
            ===================================================== */}
            {service.howItWorks && (
              <section className="service-detail-how">

                <div className="service-detail-section-heading">

                  <span className="service-detail-section-number">
                    02
                  </span>

                  <div>
                    <p className="service-detail-label">
                      HOW IT WORKS
                    </p>

                    <h2>
                      {service.howItWorks.title}
                    </h2>

                    <p className="service-detail-description">
                      {service.howItWorks.description}
                    </p>
                  </div>

                </div>

              </section>
            )}


            {/* =====================================================
                PROCESS
            ===================================================== */}
            {service.process && service.process.length > 0 && (
              <section className="service-detail-process">

                <div className="service-detail-section-heading">

                  <span className="service-detail-section-number">
                    03
                  </span>

                  <div>
                    <p className="service-detail-label">
                      OUR PROCESS
                    </p>

                    <h2>
                      From assessment to protection.
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


            {/* =====================================================
                FEATURES
            ===================================================== */}
            {service.features &&
              service.features.length > 0 && (
                <section className="service-detail-features">

                  <div className="service-detail-features__heading">

                    <span className="service-detail-section-number">
                      04
                    </span>

                    <div>
                      <p className="service-detail-label">
                        OUR SERVICES
                      </p>

                      <h2>
                        What We Provide
                      </h2>
                    </div>

                  </div>


                  <div className="service-detail-feature-grid">

                    {service.features.map(
                      (feature, index) => (
                        <div
                          className="service-detail-feature"
                          key={feature}
                        >

                          <span className="service-detail-feature__number">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="service-detail-feature__content">
                            <h3>{feature}</h3>
                          </div>

                        </div>
                      )
                    )}

                  </div>

                </section>
              )}


            {/* =====================================================
                BOTTOM CTA
            ===================================================== */}
            <div className="service-detail-bottom-cta">

              <div>

                <p className="service-detail-label">
                  NEED PROTECTION?
                </p>

                <h2>
                  Security that works
                  <br />
                  when it matters.
                </h2>

              </div>

              <Link
                className="service-detail-bottom-cta__button"
                to={`/quote?service=${service.id}`}
              >
                <span>Request a Quote</span>

                <Icon
                  name="arrow"
                  size={18}
                />
              </Link>

            </div>

          </div>

        </main>


        {/* =====================================================
            RIGHT CTA
        ===================================================== */}
        <aside className="service-detail-cta">

          <div className="service-detail-cta__card">

            <div className="service-detail-cta__top">

              <span className="service-detail-cta__dot" />

              <span>
                AVAILABLE NOW
              </span>

            </div>

            <p className="service-detail-cta__small">
              Protect what matters most with professional
              security tailored to your needs.
            </p>

            <h3>
              Ready to
              <br />
              get started?
            </h3>

            <Link
              className="service-detail-cta__button"
              to={`/quote?service=${service.id}`}
            >
              <span>Get Started</span>

              <Icon
                name="arrow"
                size={16}
              />
            </Link>

            <div className="service-detail-cta__footer">
              <span>FAST RESPONSE</span>
              <span>•</span>
              <span>PROFESSIONAL TEAM</span>
            </div>

          </div>

        </aside>

      </section>
    </PageShell>
  );
}

export default ServiceDetailLayout;