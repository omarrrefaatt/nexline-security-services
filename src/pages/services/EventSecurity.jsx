import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { services } from "../../data/services.js";

function EventSecurity() {
  const service = services.find(
    (item) => item.id === "event-security"
  );

  return <ServiceDetailLayout service={service} />;
}

export default EventSecurity;