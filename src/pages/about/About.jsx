import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { companyStory, guardHeroes } from "../../data/aboutData.js";
import "./About.css";
import securityTeam from "../../assets/security-team.jpg";
function About() {
  return (
    <PageShell>
      <section className="about-page">
      <div className="about-page__hero">
  <div className="about-page__hero-content">
    <p className="eyebrow">
      <span className="status-dot" />
      About Nexline
    </p>

    <h1>
      People behind
      <br />
      <em>the protection.</em>
    </h1>
<br />
<br />
    <p className="about-page__hero-note">
      A security partner for the moments that matter, built around people
      you can trust.
    </p>
  </div>

  <div className="about-page__hero-image" aria-hidden="true">
    <img src={securityTeam} alt="" />
  </div>
</div>
        <section
          className="company-story"
          aria-labelledby="company-story-title"
        >
          <div className="company-story__heading">
            <p className="eyebrow">{companyStory.eyebrow}</p>
            <h2 id="company-story-title">{companyStory.title}</h2>
          </div>
          <div className="company-story__copy">
            <p className="company-story__summary">{companyStory.summary}</p>
            <div className="company-story__details">
              {companyStory.details.map((detail) => (
                <div className="company-story__detail" key={detail.label}>
                  <h3>{detail.label}</h3>
                  <p>{detail.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="heroes-section" aria-labelledby="heroes-title">
          <div className="heroes-section__intro">
            <div>
              <p className="eyebrow">
                <span className="status-dot" />
                Our heroes
              </p>
              <h2 id="heroes-title">
                The people
                <br />
                <em>you can count on.</em>
              </h2>
            </div>
            <p>
              Our top-rated guards bring skill, empathy, and readiness to every
              assignment. Meet the team behind the Nexline standard.
            </p>
          </div>
          <div className="heroes-grid">
            {guardHeroes.map((guard) => (
              <article className="hero-guard" key={guard.name}>
                <div className="hero-guard__portrait">
                  <img src={guard.image} alt={guard.alt} loading="lazy" />
                  <span>{guard.rank}</span>
                </div>
                <div className="hero-guard__body">
                  <div className="hero-guard__title-row">
                    <div>
                      <h3>{guard.name}</h3>
                      <p>{guard.role}</p>
                    </div>
                    <Icon name="shield" size={21} />
                  </div>
                  <p className="hero-guard__specialty">{guard.specialty}</p>
                  <p className="hero-guard__summary">{guard.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="about-page__cta">
          <p>Ready for a more considered kind of security?</p>
          <Link className="button button-primary" to="/quote">
            Talk to our team <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

export default About;
