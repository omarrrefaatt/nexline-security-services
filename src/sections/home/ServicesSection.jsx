import { Link } from 'react-router-dom';
import { services } from '../../data/services.js';
import Icon from '../../components/common/Icon.jsx';

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-section__container">
        <div className="services-section__header">
          <h2>Services We Provide</h2>
          <p>Comprehensive security solutions for every need</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="service-card"
            >
              <div
                className="service-card__image"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              <div className="service-card__content">
                <div className="service-card__index">{String(index + 1).padStart(2, '0')}</div>
                <h3>{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>

              <div className="service-card__footer">
                <span className="service-card__action">
                  Learn More
                  <Icon name="arrow-right" size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-section__cta">
          <p className="services-section__cta-question">Ready to find your perfect security solution?</p>
          <Link to="/services" className="btn btn--primary services-section__cta-button">
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
