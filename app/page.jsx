import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import QuickEstimateForm from '@/components/QuickEstimateForm';
import PhotoCarousel from '@/components/PhotoCarousel';
import { site, services, financing } from '@/data/site';
import { reviews, reviewSummary } from '@/data/reviews';
import { serviceAreas } from '@/data/service-areas';

const faqs = [
  {
    q: 'How much do custom blinds cost in DFW?',
    a: 'Prices vary by product and window size. Our blinds start at competitive rates and we guarantee to beat any written quote from a DFW competitor. Schedule a free in-home consultation for an exact estimate.',
  },
  {
    q: 'Do you offer free in-home consultations?',
    a: 'Yes! Every consultation is free and no-obligation. We bring samples to your home, take precise measurements, and provide a quote on the spot.',
  },
  {
    q: 'How long does installation take?',
    a: 'We have one of the fastest lead times in DFW. Most orders are manufactured and installed within 3–4 weeks of placing your order.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire Dallas–Fort Worth Metroplex including Prosper, Frisco, McKinney, Plano, Allen, Celina, Dallas, Fort Worth, Southlake, Flower Mound, Little Elm, The Colony, and surrounding communities.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes! We offer financing through Synchrony with 0% interest if paid in full within 18 months. Start your application after your in-home consultation.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const serviceSchemas = services.map((s) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.title,
  description: s.summary,
  provider: { '@type': 'LocalBusiness', '@id': `${site.url}/#business` },
  areaServed: { '@type': 'Place', name: 'Dallas–Fort Worth Metroplex' },
  url: `${site.url}/${s.slug}`,
}));

const whoWeServe = ['Homeowners', 'Builders', 'Contractors', 'Interior Designers', 'Realtors', 'Property Managers'];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">Locally Manufactured in North Texas</p>
            <h1 className="hero__title">
              Custom Blinds, Plantation Shutters &amp; Shades for Your DFW Home
            </h1>
            <p className="hero__lead">
              Guaranteed to beat any price in the Dallas–Fort Worth Metroplex. Free in-home
              consultation, locally manufactured, and installed within weeks — not months.
            </p>
            <div className="hero__actions">
              <Link href="#free-estimate" className="btn btn--primary btn--lg">
                Get My Free Estimate
              </Link>
              <a href={site.phoneHref} className="btn btn--outline btn--lg">
                Call {site.phone}
              </a>
            </div>
          </div>

          <aside className="hero__finance">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/photos/synchrony-home-badge.jpg"
              alt="Synchrony HOME financing — 0% interest for 18 months"
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

      {/* ─── Social Proof Bar ─── */}
      <section className="proof-bar">
        <div className="container proof-bar__inner">
          <div className="proof-bar__stars">
            {'★★★★★'}
            <span className="proof-bar__rating">{reviewSummary.averageRating} / 5</span>
          </div>
          <span className="proof-bar__count">
            {reviewSummary.totalReviews}+ verified Google reviews
          </span>
          <span className="proof-bar__sep">|</span>
          <span className="proof-bar__badge">Preferred vendor for Risland Homes</span>
        </div>
      </section>

      {/* ─── Quick Estimate Form ─── */}
      <section className="section" id="free-estimate">
        <div className="container estimate-section">
          <div className="estimate-section__text">
            <p className="section__eyebrow">Free, No-Obligation Quote</p>
            <h2 className="section__title">Get Your Free Estimate in 24 Hours</h2>
            <p className="section__lead">
              Tell us about your project and we&apos;ll reach out within one business day to
              schedule your free in-home consultation. No pressure, no hidden fees.
            </p>
            <ul className="check-list">
              <li>Free in-home measurement &amp; consultation</li>
              <li>Price-beat guarantee across DFW</li>
              <li>Fastest lead times in the metroplex</li>
              <li>Licensed, bonded &amp; insured crew</li>
            </ul>
          </div>
          <div className="contact-form-wrap">
            <QuickEstimateForm />
          </div>
        </div>
      </section>

      {/* ─── Locally Manufactured ─── */}
      <section className="section section--tint">
        <div className="container locally-made">
          <div className="locally-made__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/photos/manufacturing.jpg"
              alt="Our local manufacturing facility in the DFW Metroplex — shutters built right here in Texas"
              loading="lazy"
            />
          </div>
          <div className="locally-made__body">
            <p className="section__eyebrow">Made Right Here in Texas</p>
            <h2 className="section__title">Locally Manufactured, Locally Installed</h2>
            <p>
              Unlike big-box retailers who ship blinds from overseas, every shutter, blind,
              and shade we sell is manufactured right here in the DFW Metroplex. That means
              faster lead times, tighter quality control, and a local team that stands behind
              every product we install.
            </p>
            <ul className="check-list">
              <li>Manufactured locally — not imported</li>
              <li>3–4 week lead time (fastest in DFW)</li>
              <li>Every order custom-measured and custom-built</li>
              <li>Installed by our own licensed crew</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Photo Gallery Slideshow ─── */}
      <PhotoCarousel />

      {/* ─── Reviews ─── */}
      <section className="section section--tint" id="reviews">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">What Our Customers Say</p>
            <h2 className="section__title">
              ★ {reviewSummary.averageRating} Stars — {reviewSummary.totalReviews}+ Reviews
            </h2>
            <p className="section__lead">
              Real feedback from homeowners across the Dallas–Fort Worth Metroplex.
            </p>
          </div>
          <div className="review-grid">
            {reviews.slice(0, 6).map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="section">
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

      {/* ─── Service Areas ─── */}
      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">Serving All of DFW</p>
            <h2 className="section__title">Service Areas</h2>
            <p className="section__lead">
              We bring free in-home consultations and professional installation to
              communities across the Dallas–Fort Worth Metroplex.
            </p>
            <div className="serve-tags">
              {whoWeServe.map((item) => (
                <span key={item} className="serve-tag">{item}</span>
              ))}
            </div>
          </div>
          <div className="area-grid">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`} className="area-card">
                <div className="area-card__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={area.image} alt={area.imageAlt} loading="lazy" />
                </div>
                <div className="area-card__body">
                  <strong>{area.name}</strong>
                  <span>{area.county} County</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">Common Questions</p>
            <h2 className="section__title">Frequently Asked Questions</h2>
          </div>
          <dl className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-list__item">
                <dt className="faq-list__q">{f.q}</dt>
                <dd className="faq-list__a">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta">
        <div className="container cta__inner">
          <h2 className="cta__title">Ready to Transform Your Windows?</h2>
          <p className="cta__text">
            Get your free estimate today — we guarantee to beat any price in DFW.
          </p>
          <div className="cta__actions">
            <Link href="#free-estimate" className="btn btn--primary btn--lg">
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
