import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { guardHeroes } from "../../data/aboutData.js";
import "./About.css";
import securityTeam from "../../assets/security-team.jpg";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <PageShell>
      <section className="about-page">

        {/* ================= HERO ================= */}
        <div className="about-page__hero">
          <div className="about-page__hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              {t.about.hero.eyebrow}
            </p>

            <h1>
              {t.about.hero.titleLine1}
              <br />
              <em>{t.about.hero.titleLine2}</em>
            </h1>

            <br />
            <br />

            <p className="about-page__hero-note">
              {t.about.hero.note}
            </p>
          </div>

          <div className="about-page__hero-image" aria-hidden="true">
            <img src={securityTeam} alt="" />
          </div>
        </div>

        {/* ================= COMPANY STORY ================= */}
        <section
          className="company-story"
          aria-labelledby="company-story-title"
        >
          <div className="company-story__heading">
            <p className="eyebrow">{t.about.eyebrow}</p>

            <h2 id="company-story-title">
              {t.about.title}
            </h2>
          </div>

          <div className="company-story__copy">
            <p className="company-story__summary">
              {t.about.summary}
            </p>

            <div className="company-story__details">
              <div className="company-story__detail">
                <h3>{t.about.mission.label}</h3>
                <p>{t.about.mission.text}</p>
              </div>

              <div className="company-story__detail">
                <h3>{t.about.approach.label}</h3>
                <p>{t.about.approach.text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OUR HEROES ================= */}
        <section
          className="heroes-section"
          aria-labelledby="heroes-title"
        >
          <div className="heroes-section__intro">
            <div>
              <p className="eyebrow">
                <span className="status-dot" />
                {t.about.teamSection.eyebrow}
              </p>

              <h2 id="heroes-title">
                {t.about.teamSection.titleLine1}
                <br />
                <em>{t.about.teamSection.titleLine2}</em>
              </h2>
            </div>

            <p>{t.about.teamSection.description}</p>
          </div>

          <div className="heroes-grid">
            {guardHeroes.map((guard) => {
              const translatedGuard =
                t.about.team[guard.translationKey];

              return (
                <article
                  className="hero-guard"
                  key={guard.name}
                >
                  <div className="hero-guard__portrait">
                    <img
                      src={guard.image}
                      alt={translatedGuard.alt}
                      loading="lazy"
                    />

                    <span>{guard.rank}</span>
                  </div>

                  <div className="hero-guard__body">
                    <div className="hero-guard__title-row">
                      <div>
                        <h3>{translatedGuard.name}</h3>
                        <p>{translatedGuard.role}</p>
                      </div>

                      <Icon name="shield" size={21} />
                    </div>

                    <p className="hero-guard__specialty">
                      {translatedGuard.specialty}
                    </p>

                    <p className="hero-guard__summary">
                      {translatedGuard.summary}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <div className="about-page__cta">
          <p>{t.about.cta.text}</p>

          <Link
            className="button button-primary"
            to="/quote"
          >
            {t.about.cta.button}
            <Icon name="arrow" size={16} />
          </Link>
        </div>

      </section>
    </PageShell>
  );
}

export default About;