import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { site } from '@/data/site';

export const metadata = {
  title: 'Contact Us — Free In-Home Consultation',
  description: `Contact ${site.name} for a free in-home consultation on custom blinds, shutters & shades. Call ${site.phone} or send us a message. Serving Prosper, Frisco, McKinney, Plano & all of DFW.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact ${site.name}`,
    description: `Schedule your free in-home consultation for custom window treatments. Call ${site.phone}.`,
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Contact</span>
          </nav>
          <h1 className="page-hero__title">Contact Us</h1>
          <p className="page-hero__lead">
            Reach out today to learn more about our window treatments or to book a free
            in-home consultation with our licensed, bonded, and insured crew.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2 className="section__title">Get in Touch</h2>
            <p className="section__lead">
              We&apos;d love to help you find the perfect window treatments for your home.
            </p>

            <ul className="contact-details">
              <li>
                <span className="contact-details__label">Phone</span>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <span className="contact-details__label">Email</span>
                <a href={site.emailHref}>{site.email}</a>
              </li>
              <li>
                <span className="contact-details__label">Area Served</span>
                <span>Dallas–Fort Worth Metroplex</span>
              </li>
            </ul>

            <div className="contact-hours">
              <h3>Hours</h3>
              <ul>
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="contact-form-wrap">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
