import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { site, services, whoWeServe, financing } from '@/data/site';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">{site.subTagline}</p>
            <h1 className="hero__title">{site.tagline}</h1>
            <p className="hero__lead">
              Decorative yet functional window treatments — blinds, shutters, and roller
              shades — locally manufactured for homes across the Dallas–Fort Worth Metroplex.
            </p>
            <div className="hero__actions">
              <Link href="/our-work" className="btn btn--primary">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn btn--outline">
                Free In-Home Consultation
              </Link>
            </div>
          </div>

          <aside className="hero__finance">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/photos/synchrony-home-badge.jpg"
              alt="Synchrony HOME financing"
              className="hero__finance-logo"
            />
            <p className="hero__finance-text">{financing.blurb}</p>
            <a
              href={financing.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero__finance-cta"
            >
              {financing.applyLabel}
            </a>
          </aside>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container intro">
          <div className="intro__text">
            <p className="section__eyebrow">Window Treatment Store You Can Trust</p>
            <h2 className="section__title">Affordable Window Blinds in {site.city}</h2>
            <p>
              Enhance your privacy at home by turning to {site.name}. We provide decorative
              yet functional window treatments such as blinds, shutters, and roller shades
              in the Dallas–Fort Worth Metropolitan Area and the surrounding communities.
            </p>
            <p>
              Aside from improving privacy, our locally made fixtures can block or filter
              outdoor light, regulate the temperature inside your house, and reduce your
              energy costs. You can also be confident that our products will boost your
              home&apos;s appearance.
            </p>
            <p>
              A preferred vendor for Risland Homes, we offer durable, stylish, and
              affordable blinds, shutters, and roller shades. With one of the fastest lead
              times in the area, we can install them within a month of closing the deal.
            </p>
          </div>
          <ul className="intro__highlights">
            <li>
              <strong>Beat Any Price</strong>
              <span>Guaranteed in the DFW Metroplex</span>
            </li>
            <li>
              <strong>Locally Made</strong>
              <span>Fast lead times, quick installs</span>
            </li>
            <li>
              <strong>Licensed &amp; Insured</strong>
              <span>Bonded, professional crew</span>
            </li>
            <li>
              <strong>Free Consultation</strong>
              <span>In-home, no obligation</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">Our Services</p>
            <h2 className="section__title">Window Treatments for Every Room</h2>
            <p className="section__lead">
              Explore our selection of locally manufactured window treatments, each
              custom-fit to your home.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">Who We Serve</p>
            <h2 className="section__title">Trusted by the Community</h2>
            <p className="section__lead">
              You can expect our personable team to deliver excellent work for:
            </p>
          </div>
          <ul className="serve-grid">
            {whoWeServe.map((item) => (
              <li key={item} className="serve-grid__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <h2 className="cta__title">Let&apos;s Dress Up Your Windows</h2>
          <p className="cta__text">
            Adorn your home with effective and aesthetically pleasing window treatments.
            Contact us today for a free in-home consultation.
          </p>
          <div className="cta__actions">
            <Link href="/contact" className="btn btn--primary">
              Reach Out Today
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
