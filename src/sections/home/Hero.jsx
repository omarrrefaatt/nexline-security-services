import { useState, useEffect } from 'react';
import Button from '../../components/common/Button.jsx';
import HighlightCard from '../../components/cards/HighlightCard.jsx';
import { heroHighlights } from '../../data/heroHighlights.js';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      id: 'safe-family',
      title: 'Safe Families',
      image: 'src/assets/home_bg.png',
    },
     {
      id: 'patrol-vehicle',
      title: 'Patrol Vehicle',
      image: 'src/assets/patrol.jpg',
    },
    {
      id: 'friendly-guard',
      title: 'Friendly Security',
      image: 'src/assets/home_bg3.jpeg',
    },
   
    {
      id: 'monitoring',
      title: '24/7 Monitoring',
      image: 'src/assets/surveillance.png',
    },
  ];

  // Auto-slide carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      {/* Image Carousel */}
      <div className="hero__carousel">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`hero__slide ${index === currentSlide ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${image.image})` }}
            role="img"
            aria-label={image.title}
          />
        ))}
        <div className="hero__scrim" />

        {/* Carousel Indicators */}
        <div className="hero__indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero__indicator ${index === currentSlide ? 'is-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="hero__content">
        <h1>NexLine Security</h1>
        <p className="hero__subtitle">A Safer Tomorrow Starts Today.</p>

        <div className="hero__cta">
          <Button variant="primary" href="/quote">
            Get Started Now
          </Button>
          <Button variant="secondary" href="/services">
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