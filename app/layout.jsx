import { Poppins, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/footer.css';
import '@/styles/pages.css';

import { site } from '@/data/site';
import { reviewSummary } from '@/data/reviews';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Custom Blinds, Plantation Shutters & Shades in Dallas–Fort Worth | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    'Locally manufactured custom blinds, plantation shutters & roller shades for Dallas–Fort Worth homes. Free in-home consultation, fastest lead times, guaranteed to beat any price. Serving Prosper, Frisco, McKinney, Plano & all of DFW.',
  keywords:
    'custom blinds DFW, plantation shutters Dallas, roller shades Fort Worth, window treatments Prosper TX, blinds and shutters Frisco, window blinds McKinney, affordable shutters Plano, DFW window treatments, locally manufactured blinds Texas',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `Custom Blinds, Plantation Shutters & Shades in Dallas–Fort Worth | ${site.name}`,
    description:
      'Locally manufactured custom blinds, plantation shutters & roller shades. Free in-home consultation. Guaranteed to beat any price in the DFW Metroplex.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/images/logo.svg' },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),
    other: {
      'msvalidate.01': '628976EC3B9F62D5F8FEEC8C6D543969',
    },
  },
};

// LocalBusiness + Organization schema (site-wide)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/logo.svg`,
  logo: `${site.url}/images/logo.svg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Prosper',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Prosper', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Frisco', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'McKinney', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Celina', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Allen', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Plano', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Fort Worth', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Southlake', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Flower Mound', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Little Elm', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'The Colony', containedInPlace: { '@type': 'State', name: 'Texas' } },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: reviewSummary.averageRating,
    reviewCount: reviewSummary.totalReviews,
    bestRating: 5,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.url,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
