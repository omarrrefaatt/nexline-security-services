import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { services } from "../../data/services.js";

function FrontReceptionGuards() {
  const service = services.find(
    (item) => item.id === "front-reception-lobby-guards"
  );

  return <ServiceDetailLayout service={service} />;
}

export default FrontReceptionGuards;