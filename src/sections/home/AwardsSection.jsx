import { awards } from '../../data/awards.js';
import Icon from '../../components/common/Icon.jsx';

function AwardsSection() {
  return (
    <section className="awards-section">
      <div className="awards-section__container">
        <div className="awards-section__header">
          <h2>Awards & Certifications</h2>
          <p>Industry recognition and professional credentials</p>
        </div>

        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-card">
              <div className="award-card__icon">
                <Icon name={award.icon} size={32} />
              </div>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
