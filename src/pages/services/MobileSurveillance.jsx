import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { services } from "../../data/services.js";

function MobileSurveillance() {
  const service = services.find(
    (item) => item.id === "mobile-surveillance"
  );

  return <ServiceDetailLayout service={service} />;
}

export default MobileSurveillance;