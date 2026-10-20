import ServicePageTemplate from '@/components/ServicePageTemplate';
import { services, site } from '@/data/site';

const service = services.find((s) => s.slug === 'plantation-shutters');

export const metadata = {
  title: `Plantation Shutters in Dallas–Fort Worth`,
  description: `${service.summary} Custom-built, locally manufactured with free in-home consultation. Serving Prosper, Frisco, McKinney, Plano & all of DFW. ${site.name}.`,
  alternates: { canonical: '/plantation-shutters' },
  openGraph: {
    title: `Plantation Shutters | ${site.name}`,
    description: service.summary,
    url: `${site.url}/plantation-shutters`,
  },
};

export default function PlantationShuttersPage() {
  return <ServicePageTemplate service={service} />;
}
