import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import HighlightCard from "../../components/cards/HighlightCard.jsx";
import { heroHighlights } from "../../data/heroHighlights.js";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

import homeBg from "../../assets/home.jpeg";
import patrol from "../../assets/patrol.jpg";
import homeBg3 from "../../assets/home_backhground.jpeg";
import surveillance from "../../assets/surveillance.png";
import video from "../../assets/patrol_video.mp4";
import slide1 from "../../assets/1.jpeg";
import slide5 from "../../assets/home_bg5.jpeg";


function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { language } = useLanguage();
  const t = translations[language];

  const heroImages = [
    {
      id: "safe-family",
      title: "Safe Families",
      image: slide1,
      type: "image",
    },
    {
      id: "video-surveillance",
      title: "Video Surveillance",
      image: video,
      type: "video",
    },
    
    {
      id: "friendly-guard",
      title: "Friendly Security",
      image: homeBg3,
      type: "image",
    },
    {
      id: "patrol-vehicle",
      title: "Patrol Vehicle",
      image: patrol,
      type: "image",
    },
    {
      id: "monitoring",
      title: "24/7 Monitoring",
      image: surveillance,
      type: "image",
    },
    {
      id: "home-security",
      title: "Home Security",
      image: slide5,
      type: "image",
    }

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % heroImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % heroImages.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      <div className="hero__carousel">

        {heroImages.map((item, index) => (
          <div
            key={item.id}
            className={`hero__slide ${
              index === currentSlide ? "is-active" : ""
            }`}
            style={
              item.type === "image"
                ? {
                    backgroundImage: `url(${item.image})`,
                  }
                : undefined
            }
            role="img"
            aria-label={
              t.hero.slides[item.id] || item.title
            }
          >
            {item.type === "video" && (
              <video
                className="hero__video"
                src={item.image}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        ))}

        <div className="hero__scrim" />

        <div className="hero__indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero__indicator ${
                index === currentSlide ? "is-active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`${t.hero.goToSlide} ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hero__content">
        <h1>Nexline Security</h1>

        <p className="hero__subtitle">
          {t.hero.subtitle}
        </p>

        <div className="hero__cta">
          <Button variant="primary" href="/quote">
            {t.hero.getStarted}
          </Button>

          <Button variant="secondary" href="/services">
            {t.hero.ourServices}
          </Button>
        </div>

        <div className="hero__highlights">
          {heroHighlights.map((item, index) => {
            const destinations = [
              "/contact",
              "/services",
              "/about",
            ];

            return (
              <Link
                key={item.id}
                to={destinations[index]}
                className="hero__highlight-link"
              >
                <HighlightCard
                  icon={item.icon}
                  title={
                    t.hero.highlights[item.translationKey] ||
                    item.title
                  }
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;