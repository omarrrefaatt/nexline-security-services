import Icon from "../../components/common/Icon.jsx";
import { trustedCompanies } from "../../data/trustedCompanies.js";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

function TrustedBy() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="trusted-by">
      <p className="trusted-by__label">
        {t.trustedBy.label}
      </p>

      <div className="trusted-by__row">
        {trustedCompanies.map((company) => (
          <span
            key={company.id}
            className="trusted-by__item"
          >
            <Icon name={company.icon} size={18} />
            {t.trustedBy.companies[company.translationKey] ||
              company.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;