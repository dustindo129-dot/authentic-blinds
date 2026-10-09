import ServicePageTemplate from '@/components/ServicePageTemplate';
import { services } from '@/data/site';

const service = services.find((s) => s.slug === 'roller-shades');

export const metadata = {
  title: service.title,
  description: service.summary,
  alternates: { canonical: '/roller-shades' },
};

export default function RollerShadesPage() {
  return <ServicePageTemplate service={service} />;
}
