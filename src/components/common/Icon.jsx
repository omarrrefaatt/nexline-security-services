import {
  ArrowRight,
  Award,
  CircleCheck,
  Heart,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const customPaths = {
  headset: (
    <path d="M4 13a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1v-6h3M4 18h1a2 2 0 0 0 2-2v-3H4v3a2 2 0 0 0 0 2Zm16-5h-3v3a2 2 0 0 0 2 2h1v-5Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: (
    <>
      <path d="M9 12.5 11 14.5 15.5 9.5" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  home: <path d="M4 11 12 4l8 7M6 10v10h12V10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  shield: <path d="M12 3 20 6v5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3Z" />,
  phone: (
    <path d="M6.5 4.5 9 3l2 4-1.8 1.8a14.4 14.4 0 0 0 6 6L17 13l4 2-1.5 2.5c-.7 1.2-2 1.8-3.4 1.5A16.7 16.7 0 0 1 5 8c-.3-1.4.3-2.7 1.5-3.5Z" />
  ),
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  linkedin: (
    <>
      <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
      <path d="M6 9v8" />
      <circle cx="6" cy="6" r="1" />
      <path d="M10 13v4" />
      <path d="M10 9v2" />
      <path d="M14 13v4" />
      <path d="M14 9v2" />
    </>
  ),
  youtube: (
    <path d="M22 7.2a2.4 2.4 0 0 0-1.7-1.7C18.9 5 12 5 12 5s-6.9 0-8.3.5A2.4 2.4 0 0 0 2 7.2 25.3 25.3 0 0 0 2 12a25.3 25.3 0 0 0 .7 4.8 2.4 2.4 0 0 0 1.7 1.7C5.1 19 12 19 12 19s6.9 0 8.3-.5a2.4 2.4 0 0 0 1.7-1.7A25.3 25.3 0 0 0 22 12a25.3 25.3 0 0 0-.7-4.8zM10 14V10l4 2-4 2z" />
  ),
};

const lucideIcons = {
  'trending-up': TrendingUp,
  'shield-check': ShieldCheck,
  'arrow-right': ArrowRight,
  award: Award,
  heart: Heart,
  'check-circle': CircleCheck,
};

function Icon({ name, size = 20, strokeWidth = 1.6, className = "" }) {
  const LucideIcon = lucideIcons[name];
  if (LucideIcon) {
    return <LucideIcon className={className} size={size} strokeWidth={strokeWidth} />;
  }

  const path = customPaths[name];
  if (!path) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path}
    </svg>
  );
}

export default Icon;
