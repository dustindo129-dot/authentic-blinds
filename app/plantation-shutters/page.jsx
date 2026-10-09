import ServicePageTemplate from '@/components/ServicePageTemplate';
import { services } from '@/data/site';

const service = services.find((s) => s.slug === 'plantation-shutters');

export const metadata = {
  title: service.title,
  description: service.summary,
  alternates: { canonical: '/plantation-shutters' },
};

export default function PlantationShuttersPage() {
  return <ServicePageTemplate service={service} />;
}
