import ServicePageTemplate from '@/components/ServicePageTemplate';
import { services, site } from '@/data/site';

const service = services.find((s) => s.slug === 'roller-shades');

export const metadata = {
  title: `Custom Roller Shades in Dallas–Fort Worth`,
  description: `${service.summary} Locally manufactured with free in-home consultation. Serving Prosper, Frisco, McKinney, Plano & all of DFW. ${site.name}.`,
  alternates: { canonical: '/roller-shades' },
  openGraph: {
    title: `Custom Roller Shades | ${site.name}`,
    description: service.summary,
    url: `${site.url}/roller-shades`,
  },
};

export default function RollerShadesPage() {
  return <ServicePageTemplate service={service} />;
}
