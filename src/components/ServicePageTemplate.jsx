import Link from 'next/link';
import FinancingBanner from '@/components/FinancingBanner';
import { services, site } from '@/data/site';

export default function ServicePageTemplate({ service }) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{service.title}</span>
          </nav>
          <h1 className="page-hero__title">{service.title}</h1>
          <p className="page-hero__lead">{service.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <div className="service-detail__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt={service.title} />
          </div>
          <div className="service-detail__body">
            <p className="section__eyebrow">Locally Manufactured</p>
            <h2 className="section__title">Why Choose Our {service.title}</h2>
            <p>{service.intro}</p>
            <ul className="feature-list">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="service-detail__actions">
              <Link href="/contact" className="btn btn--primary">
                Request a Free Quote
              </Link>
              <a href={site.phoneHref} className="btn btn--dark">
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinancingBanner />

      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">Explore More</p>
            <h2 className="section__title">Other Window Treatments</h2>
          </div>
          <div className="service-grid service-grid--2">
            {others.map((other) => (
              <article className="service-card" key={other.slug}>
                <div className="service-card__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={other.image} alt={other.title} loading="lazy" />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{other.title}</h3>
                  <p className="service-card__summary">{other.summary}</p>
                  <Link href={`/${other.slug}`} className="service-card__link">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
