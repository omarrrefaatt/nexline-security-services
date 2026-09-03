const paths = {
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
};

function Icon({ name, size = 20, strokeWidth = 1.6, className = "" }) {
  const path = paths[name];
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
