import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { services } from "../../data/services.js";

function StandingGuards() {
  const service = services.find(
    (item) => item.id === "standing-guards"
  );

  return <ServiceDetailLayout service={service} />;
}

export default StandingGuards;