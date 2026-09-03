import Icon from '../../components/common/Icon.jsx';
import { trustedCompanies } from '../../data/trustedCompanies.js';

function TrustedBy() {
  return (
    <section className="trusted-by">
      <p className="trusted-by__label">Trusted by businesses and organizations</p>
      <div className="trusted-by__row">
        {trustedCompanies.map((company) => (
          <span key={company.id} className="trusted-by__item">
            <Icon name={company.icon} size={18} />
            {company.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;
