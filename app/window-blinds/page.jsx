import ServicePageTemplate from '@/components/ServicePageTemplate';
import { services, site } from '@/data/site';

const service = services.find((s) => s.slug === 'window-blinds');

export const metadata = {
  title: `Affordable Window Blinds in Dallas–Fort Worth`,
  description: `${service.summary} Faux wood, real wood & aluminum options. Locally manufactured with free in-home consultation. Serving Prosper, Frisco, McKinney, Plano & all of DFW. ${site.name}.`,
  alternates: { canonical: '/window-blinds' },
  openGraph: {
    title: `Window Blinds | ${site.name}`,
    description: service.summary,
    url: `${site.url}/window-blinds`,
  },
};

export default function WindowBlindsPage() {
  return <ServicePageTemplate service={service} />;
}
