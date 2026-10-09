import ServicePageTemplate from '@/components/ServicePageTemplate';
import { services } from '@/data/site';

const service = services.find((s) => s.slug === 'window-blinds');

export const metadata = {
  title: service.title,
  description: service.summary,
  alternates: { canonical: '/window-blinds' },
};

export default function WindowBlindsPage() {
  return <ServicePageTemplate service={service} />;
}
