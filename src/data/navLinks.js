export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdown: [
      { label: 'Standing Guards', href: '/services/standing-guards' },
      { label: 'Mobile Vehicle Patrol', href: '/services/mobile-vehicle-patrol' },
      { label: 'Mobile Surveillance Systems', href: '/services/mobile-surveillance-systems' },
      { label: 'Front Reception & Lobby Desk Guards', href: '/services/front-reception-guards' },
      { label: 'Fire Watch', href: '/services/fire-watch' },
      { label: 'Event Security', href: '/services/event-security' },
      { label: 'Alarm Monitoring and Response', href: '/services/alarm-monitoring' },
      { label: 'Parking Enforcement', href: '/services/parking-enforcement' },
      { label: 'Lock Up & Alarm', href: '/services/lock-up-alarm' },
      { label: 'Bike and Foot Mobile Patrol', href: '/services/bike-foot-patrol' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Contact Us',
    href: '/contact',
    hasDropdown: true,
    dropdown: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Career', href: '/contact/career' },
    ],
  },
];