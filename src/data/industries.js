
import construction from "../assets/construction.jpg";
import shopping from "../assets/shopping.webp";
import school from "../assets/school.jpg";
import petroleum from "../assets/petroleum.webp";
import warehouse from "../assets/warehouse.png";
import residential from "../assets/residential.jfif";
import hotel from "../assets/hotel.jpg";
import parking from "../assets/parking.jfif";
import event from "../assets/event.jpg";
import bank from "../assets/bank.jfif";
import hospital from "../assets/hospital.jpeg";

export const industries = [
  {
    id: "construction",
    title: "Construction",
    image: construction,
    alt: "Construction site at dusk",
    blurb:
      "Active job sites face theft of materials and equipment, unauthorized access, and liability risk after hours. We keep sites secured around the clock, from ground-breaking to final walkthrough.",
    suggestedServices: ["standing-guards", "mobile-patrols"],
  },

  {
    id: "retail-shopping",
    title: "Shopping Malls, Retail Stores & Supermarkets",
    image: shopping,
    alt: "Interior of a busy shopping mall",
    blurb:
      "From single storefronts to full shopping centers, we help reduce shrinkage, manage crowds, and give shoppers and staff a visible, approachable security presence.",
    suggestedServices: ["standing-guards", "mobile-surveillance"],
  },

  {
    id: "education",
    title: "Schools, Colleges & Universities",
    image: school,
    alt: "University campus building",
    blurb:
      "Campuses need a security presence that feels protective, not intimidating. We support access control, event coverage, and routine patrols across K-12 and higher-ed campuses.",
    suggestedServices: ["standing-guards", "front-reception-lobby-guards"],
  },

  {
    id: "oil-gas-chemical",
    title: "Petroleum, Petrochemical & Chemical Facilities",
    image: petroleum,
    alt: "Industrial petrochemical facility at night",
    blurb:
      "High-hazard sites demand strict access control and rigorously trained personnel who understand regulated environments. We support facilities with compliance-aware security planning.",
    suggestedServices: ["standing-guards", "fire-watch"],
  },

  {
    id: "industrial-manufacturing",
    title: "Manufacturing Plants, Industrial Facilities & Warehouses",
    image: warehouse,
    alt: "Interior of a large warehouse facility",
    blurb:
      "Protect inventory, equipment, and perimeter access across production floors, distribution centers, and storage facilities with consistent, trained coverage.",
    suggestedServices: ["standing-guards", "mobile-surveillance"],
  },

  {
    id: "residential-communities",
    title: "Gated Residential Communities & Condo/Apartment Complexes",
    image: residential,
    alt: "Gated residential community entrance",
    blurb:
      "Residents expect to feel safe coming home. We provide gate staffing, patrol coverage, and visitor management tailored to residential communities of any size.",
    suggestedServices: ["mobile-patrols", "standing-guards"],
  },

  {
    id: "hospitality",
    title: "Hotels & Motels",
    image: hotel,
    alt: "Hotel lobby interior",
    blurb:
      "Guest safety and a welcoming first impression go hand in hand. We provide lobby presence, patrol coverage, and incident response that protects your guests and your brand.",
    suggestedServices: ["front-reception-lobby-guards", "standing-guards"],
  },

  {
    id: "parking-facilities",
    title: "Parking Facilities",
    image: parking,
    alt: "Multi-level parking garage",
    blurb:
      "Parking structures see a steady mix of foot and vehicle traffic with limited natural oversight. Our patrols deter theft and vandalism and keep garages feeling safe after dark.",
    suggestedServices: ["mobile-patrols", "mobile-surveillance"],
  },

  {
    id: "events-entertainment",
    title: "Concerts, Sporting Events & Special Events",
    image: event,
    alt: "Crowd at a large outdoor concert event",
    blurb:
      "Large gatherings need experienced crowd management, access control, and rapid incident response. We staff everything from private functions to large-scale public events.",
    suggestedServices: ["event-security", "standing-guards"],
  },

  {
    id: "banking-financial",
    title: "Banks & Financial Institutions",
    image: bank,
    alt: "Modern bank branch exterior",
    blurb:
      "Financial institutions carry elevated risk and strict compliance expectations. We provide a disciplined, highly trained presence for branches and back-office facilities alike.",
    suggestedServices: ["standing-guards", "front-reception-lobby-guards"],
  },

  {
    id: "healthcare",
    title: "Hospitals",
    image: hospital,
    alt: "Hospital building exterior",
    blurb:
      "Hospitals need security that supports patients, staff, and visitors without disrupting care. We provide trained personnel experienced in healthcare environments and de-escalation.",
    suggestedServices: ["standing-guards", "front-reception-lobby-guards"],
  },
];
