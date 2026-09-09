import Icon from '../../components/common/Icon.jsx';

function VisionSection() {
  const stats = [
    {
      id: 'clients',
      number: '500+',
      label: 'Clients Protected',
    },
    {
      id: 'professionals',
      number: '2,400+',
      label: 'Security Professionals',
    },
    {
      id: 'operations',
      number: '24/7',
      label: 'Operations',
    },
    {
      id: 'years',
      number: '15+',
      label: 'Years of Excellence',
    },
  ];

  const strengths = [
    {
      id: 'monitoring',
      icon: 'clock',
      title: '24/7 Monitoring',
      description: 'Continuous surveillance and alert response around the clock',
    },
    {
      id: 'scalable',
      icon: 'trending-up',
      title: 'Scalable Solutions',
      description: 'Security services that grow and adapt with your needs',
    },
    {
      id: 'expertise',
      icon: 'shield-check',
      title: 'Expert Team',
      description: 'Trained professionals with industry certifications',
    },
  ];

  return (
    <section className="vision-section">
      <div className="vision-section__container">
        {/* Header */}
        <div className="vision-section__header">
          <h2>Why Choose Us</h2>
          <p>Leading the industry in professional security solutions</p>
        </div>

        {/* Stats Grid */}
        <div className="vision-section__stats">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-card__number">{stat.number}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className="vision-section__strengths">
          <h3>Our Core Strengths</h3>
          <div className="strengths-grid">
            {strengths.map((strength) => (
              <div key={strength.id} className="strength-card">
                <div className="strength-card__icon">
                  <Icon name={strength.icon} size={32} />
                </div>
                <h4>{strength.title}</h4>
                <p>{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;