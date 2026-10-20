import { site, services } from '@/data/site';
import { serviceAreas } from '@/data/service-areas';

export const revalidate = 86400; // rebuild once per day

export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/our-work`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const areaRoutes = serviceAreas.map((area) => ({
    url: `${site.url}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
