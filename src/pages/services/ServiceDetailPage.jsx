import { useParams } from "react-router-dom";
import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { services } from "../../data/services.js";

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  return <ServiceDetailLayout service={service} />;
}

export default ServiceDetailPage;
