import Link from 'next/link';
import { gallery, site } from '@/data/site';

export const metadata = {
  title: 'Our Work',
  description:
    'See a selection of blinds, shutters, and roller shades installed in homes across the Dallas–Fort Worth Metroplex by Authentic Blinds & Shutters.',
  alternates: { canonical: '/our-work' },
};

export default function OurWorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Our Work</span>
          </nav>
          <h1 className="page-hero__title">Our Work</h1>
          <p className="page-hero__lead">
            A look at window treatments we&apos;ve designed and installed for homeowners,
            builders, and designers across the DFW Metroplex.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery">
            {gallery.map((item, i) => (
              <figure className="gallery__item" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption className="gallery__caption">{item.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2 className="cta__title">Like What You See?</h2>
          <p className="cta__text">
            Let&apos;s create the same transformation for your windows. Book a free in-home
            consultation with our licensed, bonded, and insured crew.
          </p>
          <div className="cta__actions">
            <Link href="/contact" className="btn btn--primary">
              Get Started
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
