// Central content for the site. Edit here to update text across all pages.

export const site = {
  name: 'Authentic Blinds & Shutters',
  shortName: 'Authentic Blinds',
  tagline: 'Guaranteed To Beat Any Price in the DFW Metroplex!',
  subTagline: 'Offering Locally Manufactured Window Treatments',
  description:
    'Authentic Blinds & Shutters provides decorative yet functional window treatments such as blinds, shutters, and roller shades in the Dallas-Fort Worth Metroplex and surrounding communities.',
  phone: '(214) 413-9115',
  phoneHref: 'tel:+12144139115',
  email: 'info@authenticblindsandshutters.com',
  emailHref: 'mailto:info@authenticblindsandshutters.com',
  city: 'Prosper, TX',
  hours: [
    { days: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
    { days: 'Saturday', time: 'By Appointment' },
  ],
  url: 'https://authenticblindsandshutters.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Roller Shades', href: '/roller-shades' },
      { label: 'Plantation Shutters', href: '/plantation-shutters' },
      { label: 'Window Blinds', href: '/window-blinds' },
    ],
  },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Contact', href: '/contact' },
];

export const financing = {
  blurb:
    'Now offering financing through Synchrony with 0% interest if paid in full within 18 months. Start your application after your in-home consultation.',
  // TODO: replace with the real Synchrony application URL from the client.
  applyUrl: 'https://www.synchrony.com/',
  applyLabel: 'Start Your Application',
};

export const services = [
  {
    slug: 'roller-shades',
    title: 'Roller Shades',
    image: '/images/service-roller-shades.svg',
    summary:
      'Sleek, modern roller shades that filter light beautifully and give any room a clean, contemporary finish.',
    intro:
      'Our locally manufactured roller shades combine simplicity with performance. Choose from light-filtering, room-darkening, and blackout fabrics to control privacy and sunlight exactly the way you want.',
    features: [
      'Light-filtering, room-darkening, and blackout fabric options',
      'Manual or motorized operation',
      'Custom-fit to each window for a clean look',
      'Energy-efficient fabrics that help regulate indoor temperature',
      'Wide selection of colors and textures',
    ],
  },
  {
    slug: 'plantation-shutters',
    title: 'Plantation Shutters',
    image: '/images/service-plantation-shutters.svg',
    summary:
      'Timeless plantation shutters that add lasting value, elegance, and precise light control to your home.',
    intro:
      'Plantation shutters are a classic, durable window treatment that boosts your home\u2019s appearance and resale value. Our locally made shutters are built to fit your windows perfectly and last for years.',
    features: [
      'Durable, custom-built louvers',
      'Excellent privacy and precise light control',
      'Boosts curb appeal and home value',
      'Easy to clean and maintain',
      'Great insulation to help reduce energy costs',
    ],
  },
  {
    slug: 'window-blinds',
    title: 'Window Blinds',
    image: '/images/service-window-blinds.svg',
    summary:
      'Affordable, functional blinds that enhance privacy, filter light, and complement any décor.',
    intro:
      'Enhance your privacy at home with our decorative yet functional window blinds. Our locally made fixtures block or filter outdoor light, regulate indoor temperature, reduce energy costs, and boost your home\u2019s appearance.',
    features: [
      'Faux wood, real wood, and aluminum options',
      'Improved privacy and adjustable light control',
      'Helps regulate indoor temperature and lower energy costs',
      'Durable, stylish, and affordable',
      'Custom sizing for a precise fit',
    ],
  },
];

export const whoWeServe = [
  'Homeowners',
  'Builders',
  'Contractors',
  'Interior Designers',
  'Realtors',
];

// Our Work gallery. Replace the placeholder SVGs with real project photos.
export const gallery = [
  { src: '/images/work-1.svg', alt: 'Plantation shutters installed in a living room' },
  { src: '/images/work-2.svg', alt: 'Roller shades in a modern kitchen' },
  { src: '/images/work-3.svg', alt: 'Window blinds in a bedroom' },
  { src: '/images/work-4.svg', alt: 'Shutters on large patio doors' },
  { src: '/images/work-5.svg', alt: 'Roller shades in a home office' },
  { src: '/images/work-6.svg', alt: 'Blinds in a dining room' },
];
