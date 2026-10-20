// Single source of truth for DFW service-area pages.
// Adding a city here auto-generates its /areas/[slug] page + sitemap entry.

export const serviceAreas = [
  {
    slug: 'prosper',
    name: 'Prosper',
    county: 'Collin & Denton',
    headline: 'Window Blinds, Shutters & Shades in Prosper, TX',
    intro:
      'As a Prosper-based business, Authentic Blinds & Shutters is proud to be the local window treatment experts for one of the fastest-growing communities in North Texas. From new-build homes in Star Trail and Windsong Ranch to established neighborhoods, we provide custom blinds, plantation shutters, and roller shades with the fastest lead times in the area.',
    neighborhoods: ['Star Trail', 'Windsong Ranch', 'Artesia', 'Whitley Place', 'Legacy Gardens', 'La Cima'],
    image: '/images/gallery/slide-19-shutters-newbuild.jpg',
    imageAlt: 'New build plantation shutters in Prosper TX',
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin & Denton',
    headline: 'Custom Blinds & Shutters in Frisco, TX',
    intro:
      'Frisco homeowners deserve window treatments that match the energy of this thriving city. Whether you live near The Star, Stonebriar, or one of Frisco\u2019s master-planned communities, our locally manufactured blinds, shutters, and shades are custom-fitted and professionally installed.',
    neighborhoods: ['Phillips Creek Ranch', 'Starwood', 'Richwoods', 'Lawler Park', 'Newman Village', 'Hollyhock'],
    image: '/images/gallery/slide-07-shutters-modern.jpg',
    imageAlt: 'Modern plantation shutters in a Frisco home',
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin',
    headline: 'Window Treatments in McKinney, TX',
    intro:
      'From the charming historic downtown to new neighborhoods along US-380, McKinney homes get the royal treatment with our custom blinds, plantation shutters, and roller shades. Locally made, professionally measured, and installed by our licensed crew.',
    neighborhoods: ['Stonebridge Ranch', 'Craig Ranch', 'Tucker Hill', 'Erwin Farms', 'Adriatica', 'Trinity Falls'],
    image: '/images/gallery/slide-04-shutters-triple-arch.jpg',
    imageAlt: 'Triple arch shutters in a McKinney home',
  },
  {
    slug: 'celina',
    name: 'Celina',
    county: 'Collin & Denton',
    headline: 'Blinds & Shutters for Celina, TX Homes',
    intro:
      'Celina is booming, and new homes deserve premium window treatments from day one. Our team brings free in-home consultations, locally manufactured products, and professional installation to every new and existing home in Celina.',
    neighborhoods: ['Light Farms', 'Cambridge Crossing', 'Carter Ranch', 'Mustang Lakes'],
    image: '/images/gallery/slide-12-shutters-sunburst.jpg',
    imageAlt: 'Sunburst arch shutters in a Celina home',
  },
  {
    slug: 'allen',
    name: 'Allen',
    county: 'Collin',
    headline: 'Affordable Blinds & Shades in Allen, TX',
    intro:
      'Allen families trust Authentic Blinds & Shutters for stylish, durable, and affordable window treatments. We serve every neighborhood in Allen with custom blinds, plantation shutters, and roller shades — all backed by our price-beat guarantee.',
    neighborhoods: ['Twin Creeks', 'The Villages of Allen', 'Montgomery Farm', 'Waterford Parks', 'Ridgeview'],
    image: '/images/gallery/slide-08-roller-luxury.jpg',
    imageAlt: 'Luxury roller shades in an Allen TX home',
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin',
    headline: 'Window Blinds & Plantation Shutters in Plano, TX',
    intro:
      'Plano is one of the most sought-after cities in DFW, and its homes deserve window treatments to match. We offer free in-home consultations across West Plano, East Plano, and Legacy for custom blinds, shutters, and roller shades at unbeatable prices.',
    neighborhoods: ['Willow Bend', 'Kings Gate', 'Deerfield', 'Lakeside on Preston', 'Legacy West', 'Shiloh Estates'],
    image: '/images/gallery/slide-06-shutters-entry.jpg',
    imageAlt: 'Entry sidelights with plantation shutters in Plano TX',
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas',
    headline: 'Custom Window Treatments in Dallas, TX',
    intro:
      'From Uptown to Oak Lawn, Lake Highlands to Preston Hollow — Dallas homeowners choose Authentic Blinds & Shutters for locally manufactured window treatments that are stylish, durable, and affordable. We handle everything from measurement to installation.',
    neighborhoods: ['Uptown', 'Preston Hollow', 'Lake Highlands', 'Oak Lawn', 'University Park', 'Highland Park'],
    image: '/images/gallery/slide-16-shutters-commercial.jpg',
    imageAlt: 'Custom plantation shutters in Dallas TX',
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant',
    headline: 'Blinds, Shutters & Shades in Fort Worth, TX',
    intro:
      'Fort Worth homeowners enjoy the combination of big-city style and small-town hospitality — and our window treatments fit right in. Custom blinds, plantation shutters, and roller shades for every Fort Worth neighborhood, professionally installed.',
    neighborhoods: ['Rivercrest', 'Westover Hills', 'Monticello', 'Arlington Heights', 'Tanglewood', 'TCU Area'],
    image: '/images/gallery/slide-01-shutters-living.jpg',
    imageAlt: 'Plantation shutters in a Fort Worth home',
  },
  {
    slug: 'southlake',
    name: 'Southlake',
    county: 'Tarrant',
    headline: 'Premium Shutters & Blinds in Southlake, TX',
    intro:
      'Southlake\u2019s luxury homes call for premium window treatments. Authentic Blinds & Shutters brings elegant plantation shutters, custom blinds, and designer roller shades to Southlake homeowners \u2014 all locally manufactured with our fastest-in-DFW lead times.',
    neighborhoods: ['Southlake Town Square', 'Timarron', 'Shady Oaks Estates', 'Estes Park'],
    image: '/images/gallery/slide-02-shutters-arched.jpg',
    imageAlt: 'Elegant arched shutters in a Southlake luxury home',
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    county: 'Denton',
    headline: 'Window Treatments for Flower Mound, TX',
    intro:
      'Flower Mound families love our combination of quality, affordability, and fast installation. From Bridlewood to Wellington, we bring free in-home consultations and custom window treatments to every part of Flower Mound.',
    neighborhoods: ['Bridlewood', 'Wellington', 'Canyon Falls', 'Tour 18', 'Timber Creek'],
    image: '/images/gallery/slide-13-zebra-installed.jpg',
    imageAlt: 'Zebra roller shades in a Flower Mound home',
  },
  {
    slug: 'little-elm',
    name: 'Little Elm',
    county: 'Denton',
    headline: 'Blinds & Shutters in Little Elm, TX',
    intro:
      'Little Elm is one of North Texas\u2019s fastest-growing lakeside communities. Whether you\u2019re building new or updating an existing home, our custom blinds, shutters, and roller shades are the perfect fit for your Little Elm property.',
    neighborhoods: ['Paloma Creek', 'Union Park', 'Eldorado', 'Lakewood Village'],
    image: '/images/gallery/slide-09-shutters-bedroom.jpg',
    imageAlt: 'Shutters in a Little Elm home',
  },
  {
    slug: 'the-colony',
    name: 'The Colony',
    county: 'Denton',
    headline: 'Window Treatments in The Colony, TX',
    intro:
      'The Colony homeowners love our locally manufactured window treatments. With Grandscape and Nebraska Furniture Mart nearby, residents know quality — and our custom blinds, shutters, and shades deliver just that.',
    neighborhoods: ['Austin Waters', 'Stewart Peninsula', 'Legends', 'The Tribute'],
    image: '/images/gallery/slide-10-shutters-bay.jpg',
    imageAlt: 'Bay window shutters in a home in The Colony TX',
  },
];

export function getAreaBySlug(slug) {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getOtherAreas(slug) {
  return serviceAreas.filter((a) => a.slug !== slug);
}
