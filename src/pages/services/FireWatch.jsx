import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { services } from "../../data/services.js";

function FireWatch() {
  const service = services.find(
    (item) => item.id === "fire-watch"
  );

  return <ServiceDetailLayout service={service} />;
}

export default FireWatch;