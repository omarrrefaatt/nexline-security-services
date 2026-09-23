import { useParams } from "react-router-dom";
import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { services } from "../../data/services.js";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

function ServiceDetailPage() {
  const { serviceId } = useParams();

  const { language } = useLanguage();
  const t = translations[language];

  const service = services.find(
    (item) => item.id === serviceId
  );

  if (!service) {
    return <div>Service not found.</div>;
  }

  const translatedService =
    t.services.items[service.translationKey];

  return (
    <ServiceDetailLayout
      service={{
        ...service,
        ...translatedService,
      }}
    />
  );
}

export default ServiceDetailPage;