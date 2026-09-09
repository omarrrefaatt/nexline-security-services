import { services } from "./services.js";

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdown: services.map((service) => ({
      label: service.title,
      href: `/services/${service.id}`,
    })),
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
