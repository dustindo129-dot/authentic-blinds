import Link from 'next/link';
import { nav, site } from '@/data/site';
import { serviceAreas } from '@/data/service-areas';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <Link href="/" className="footer__brand">{site.name}</Link>
          <p className="footer__blurb">{site.subTagline}</p>
          <p className="footer__location">Serving the Dallas–Fort Worth Metroplex</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__list">
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={site.emailHref}>{site.email}</a>
            </li>
          </ul>
          <h4 className="footer__heading" style={{ marginTop: '20px' }}>Hours</h4>
          <ul className="footer__list">
            {site.hours.map((h) => (
              <li key={h.days}>
                <span>{h.days}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Services</h4>
          <ul className="footer__list">
            <li>
              <Link href="/roller-shades">Roller Shades</Link>
            </li>
            <li>
              <Link href="/plantation-shutters">Plantation Shutters</Link>
            </li>
            <li>
              <Link href="/window-blinds">Window Blinds</Link>
            </li>
            <li>
              <Link href="/our-work">Our Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Service Areas</h4>
          <ul className="footer__list footer__list--areas">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas/${area.slug}`}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {year} {site.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
