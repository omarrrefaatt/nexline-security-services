import Button from '../../components/common/Button.jsx';
import HighlightCard from '../../components/cards/HighlightCard.jsx';
import { heroHighlights } from '../../data/heroHighlights.js';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" role="img" aria-label="Nexline security team on site" />
      <div className="hero__scrim" />

      <div className="hero__content">
        <h1>Nexline Security</h1>
        <p className="hero__subtitle">A Safer Tomorrow Starts Today.</p>

        <div className="hero__cta">
          <Button variant="secondary" href="/quote">
            Get Quote
          </Button>
          <Button variant="outline" href="/services">
            Our Services
          </Button>
        </div>

        <div className="hero__highlights">
          {heroHighlights.map((item) => (
            <HighlightCard key={item.id} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
