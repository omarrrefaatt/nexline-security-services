import { awards } from "../../data/awards.js";
import Icon from "../../components/common/Icon.jsx";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

function AwardsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="awards-section">
      <div className="awards-section__container">
        <div className="awards-section__header">
          <h2>
  {t.awards.title.split(" ").slice(0, -1).join(" ")}{" "}
  <em>{t.awards.title.split(" ").slice(-1)}</em>
</h2>
          <p>{t.awards.subtitle}</p>
        </div>

        <div className="awards-grid">
          {awards.map((award) => {
            const translatedAward =
              t.awards.items[award.id] || {
                title: award.title,
                description: award.description,
              };

            return (
              <div key={award.id} className="award-card">
                <div className="award-card__icon">
                  <Icon name={award.icon} size={32} />
                </div>

                <h3>{translatedAward.title}</h3>
                <p>{translatedAward.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;