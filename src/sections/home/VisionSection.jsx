import Icon from "../../components/common/Icon.jsx";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

function VisionSection() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const { language } = useLanguage();
  const t = translations[language];

  const [counts, setCounts] = useState({
    clients: 0,
    professionals: 0,
    years: 0,
  });

  const stats = [
    {
      id: "clients",
      target: 500,
    },
    {
      id: "professionals",
      target: 800,
    },
    {
      id: "operations",
      target: null,
    },
    {
      id: "years",
      target: 15,
    },
  ];

  const strengths = [
    {
      id: "monitoring",
      icon: "clock",
    },
    {
      id: "scalable",
      icon: "trending-up",
    },
    {
      id: "expertise",
      icon: "shield-check",
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
          <h2>{t.vision.title}</h2>
          <p>{t.vision.subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="vision-section__stats">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="stat-card"
            >
              <div className="stat-card__number">
                {stat.id === "operations"
                  ? "24/7"
                  : `${counts[stat.id].toLocaleString()}+`}
              </div>

              <div className="stat-card__label">
                {t.vision.stats[stat.id]}
              </div>
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className="vision-section__strengths">
          <h3>{t.vision.coreStrengths}</h3>

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

                <h4>
                  {t.vision.strengths[strength.id].title}
                </h4>

                <p>
                  {t.vision.strengths[strength.id].description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default VisionSection;