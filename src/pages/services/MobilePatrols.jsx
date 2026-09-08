import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { services } from "../../data/services.js";

function MobilePatrols() {
  const service = services.find(
    (item) => item.id === "mobile-patrols"
  );

  return <ServiceDetailLayout service={service} />;
}

export default MobilePatrols;