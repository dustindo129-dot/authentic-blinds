import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site, services } from '@/data/site';
import { serviceAreas, getAreaBySlug, getOtherAreas } from '@/data/service-areas';

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }) {
  const area = getAreaBySlug(params.slug);
  if (!area) return {};
  return {
    title: `${area.headline}`,
    description: `${site.name} provides custom blinds, plantation shutters & roller shades in ${area.name}, TX. Free in-home consultation, locally manufactured, guaranteed to beat any price. Serving ${area.neighborhoods.slice(0, 3).join(', ')} & more.`,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: area.headline,
      description: `Custom window treatments for ${area.name}, TX homeowners. Free consultation, fastest lead times in DFW.`,
      url: `${site.url}/areas/${area.slug}`,
    },
  };
}

export default function ServiceAreaPage({ params }) {
  const area = getAreaBySlug(params.slug);
  if (!area) notFound();

  const nearby = getOtherAreas(params.slug).slice(0, 6);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: area.name,
        item: `${site.url}/areas/${area.slug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Window Treatments in ${area.name}, TX`,
    description: area.intro,
    provider: { '@type': 'LocalBusiness', '@id': `${site.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: area.name,
      containedInPlace: { '@type': 'State', name: 'Texas' },
    },
    url: `${site.url}/areas/${area.slug}`,
  };

  const areaFaqs = [
    {
      q: `Do you serve ${area.name}, TX?`,
      a: `Absolutely! ${site.name} provides free in-home consultations and professional installation throughout ${area.name} and the surrounding ${area.county} County area.`,
    },
    {
      q: `How much do blinds cost in ${area.name}?`,
      a: `Prices depend on the product type and number of windows. We guarantee to beat any written quote from a competitor in the DFW Metroplex. Contact us for a free, no-obligation estimate.`,
    },
    {
      q: `What window treatments are popular in ${area.name}?`,
      a: `Plantation shutters, roller shades, and faux wood blinds are all popular choices among ${area.name} homeowners. Our team can help you choose the best option for your home during a free consultation.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: areaFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{area.name}</span>
          </nav>
          <h1 className="page-hero__title">{area.headline}</h1>
          <p className="page-hero__lead">{area.intro}</p>
        </div>
      </section>

      {/* Services for this area */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">Our Services in {area.name}</p>
            <h2 className="section__title">
              Window Treatments for {area.name} Homes
            </h2>
            <p className="section__lead">
              Every product is locally manufactured with custom sizing, professional
              installation, and our price-beat guarantee.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <div className="service-card__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={`${service.title} in ${area.name}`} loading="lazy" />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__summary">{service.summary}</p>
                  <Link href={`/${service.slug}`} className="service-card__link">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      {area.neighborhoods.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <div className="section__head">
              <p className="section__eyebrow">Neighborhoods We Serve</p>
              <h2 className="section__title">
                Popular {area.name} Communities
              </h2>
            </div>
            <div className="area-grid">
              {area.neighborhoods.map((n) => (
                <div key={n} className="area-card area-card--static">
                  <strong>{n}</strong>
                  <span>{area.name}, TX</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">
              {area.name} Window Treatment FAQ
            </h2>
          </div>
          <dl className="faq-list">
            {areaFaqs.map((f, i) => (
              <div key={i} className="faq-list__item">
                <dt className="faq-list__q">{f.q}</dt>
                <dd className="faq-list__a">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">Nearby Service Areas</p>
            <h2 className="section__title">We Also Serve</h2>
          </div>
          <div className="area-grid">
            {nearby.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="area-card">
                <strong>{a.name}</strong>
                <span>{a.county} County</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <h2 className="cta__title">
            Ready for New Window Treatments in {area.name}?
          </h2>
          <p className="cta__text">
            Book your free in-home consultation today. We guarantee to beat any
            price in the DFW Metroplex.
          </p>
          <div className="cta__actions">
            <Link href="/contact" className="btn btn--primary btn--lg">
              Get My Free Estimate
            </Link>
            <a href={site.phoneHref} className="btn btn--outline">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
