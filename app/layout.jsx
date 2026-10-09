import { Poppins, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Global styles
import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/footer.css';
import '@/styles/pages.css';

import { site } from '@/data/site';

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
    default: `${site.name} | Blinds, Shutters & Roller Shades in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords:
    'window blinds, plantation shutters, roller shades, window treatments, Prosper TX, Dallas Fort Worth, DFW, blinds and shutters',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Window Treatments in the DFW Metroplex`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: '/images/logo.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
