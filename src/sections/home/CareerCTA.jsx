import { Link } from 'react-router-dom';

function CareerCTA() {
  const benefits = [
    {
      id: 'training',
      title: 'Continuous Training',
      description: 'Professional development and skills advancement',
    },
    {
      id: 'growth',
      title: 'Career Growth',
      description: 'Clear advancement opportunities within our company',
    },
    {
      id: 'compensation',
      title: 'Competitive Compensation',
      description: 'Industry-leading pay and benefits packages',
    },
    {
      id: 'culture',
      title: 'Supportive Culture',
      description: 'Work with a team that values professionalism and respect',
    },
  ];

  return (
    <section className="career-cta">
      <div className="career-cta__container">
        <div className="career-cta__content">
          <h2>Join Our Elite Team</h2>
          <p>Be part of a growing security organization committed to excellence and professional development.</p>

          <div className="career-cta__benefits">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="benefit-item">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <Link to="/contact/career" className="btn btn--primary btn--lg">
            Explore Careers
          </Link>
        </div>

        <div className="career-cta__image">
          <img src="src/assets/security-team.png" alt="Our security team" />
        </div>
      </div>
    </section>
  );
}

export default CareerCTA;
