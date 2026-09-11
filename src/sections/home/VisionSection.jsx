import Icon from '../../components/common/Icon.jsx';
import { useEffect, useRef, useState } from "react";

function VisionSection() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const [counts, setCounts] = useState({
    clients: 0,
    professionals: 0,
    years: 0,
  });

  const stats = [
    {
      id: 'clients',
      number: '500+',
      label: 'Clients Protected',
      target: 500,
      step: 1,
    },
    {
      id: 'professionals',
      number: '800+',
      label: 'Security Professionals',
      target: 800,
      step: 1,
    },
    {
      id: 'operations',
      number: '24/7',
      label: 'Operations',
      target: null,
      step: null,
    },
    {
      id: 'years',
      number: '15+',
      label: 'Years of Excellence',
      target: 15,
      step: 1,
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

  // Detect when the section enters the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

// Count the numbers
useEffect(() => {
  if (!hasStarted) return;

  const duration = 1800;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const progress = Math.min(
      (currentTime - startTime) / duration,
      1
    );

    setCounts({
      clients: Math.min(
        Math.floor(500 * progress),
        500
      ),

      professionals: Math.min(
        Math.floor(800 * progress),
        800
      ),

      years: Math.min(
        Math.floor(15 * progress),
        15
      ),
    });

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [hasStarted]);
  return (
    <section
      ref={sectionRef}
      className="vision-section"
    >
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

              <div className="stat-card__number">
                {stat.id === 'operations'
                  ? '24/7'
                  : `${counts[stat.id].toLocaleString()}${stat.id === 'clients' || stat.id === 'professionals' || stat.id === 'years' ? '+' : ''}`
                }
              </div>

              <div className="stat-card__label">
                {stat.label}
              </div>

            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className="vision-section__strengths">
          <h3>Our Core Strengths</h3>

          <div className="strengths-grid">
            {strengths.map((strength) => (
              <div
                key={strength.id}
                className="strength-card"
              >
                <div className="strength-card__icon">
                  <Icon
                    name={strength.icon}
                    size={32}
                  />
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