import { services } from "./services.js";

export const navLinks = [
  {
    label: "Services",
    translationKey: "services",
    href: "/services",
    hasDropdown: true,
    dropdown: services.map((service) => ({
      label: service.title,
      href: `/services/${service.id}`,
    })),
  },
  {
    label: "Industries",
    translationKey: "industries",
    href: "/industries",
  },
  {
    label: "About Us",
    translationKey: "about",
    href: "/about",
  },
  {
    label: "Contact",
    translationKey: "contact",
    href: "/contact",
  },
];