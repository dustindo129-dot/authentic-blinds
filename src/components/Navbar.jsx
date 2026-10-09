'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, site } from '@/data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link href="/" className="navbar__brand" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt={`${site.name} logo`} className="navbar__logo" />
          <span className="navbar__brand-text">
            Authentic <strong>Blinds &amp; Shutters</strong>
          </span>
        </Link>

        <a href={site.phoneHref} className="navbar__phone">
          <span aria-hidden="true">&#9742;</span> {site.phone}
        </a>

        <button
          type="button"
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`}>
          <ul className="navbar__list">
            {nav.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className={`navbar__item navbar__item--has-children ${
                    servicesOpen ? 'is-open' : ''
                  }`}
                >
                  <button
                    type="button"
                    className="navbar__link navbar__dropdown-toggle"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {item.label}
                    <span className="navbar__caret" aria-hidden="true">
                      &#9662;
                    </span>
                  </button>
                  <ul className="navbar__dropdown">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`navbar__dropdown-link ${
                            pathname === child.href ? 'is-active' : ''
                          }`}
                          onClick={close}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href} className="navbar__item">
                  <Link
                    href={item.href}
                    className={`navbar__link ${pathname === item.href ? 'is-active' : ''}`}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li className="navbar__item navbar__item--cta">
              <Link href="/contact" className="btn btn--primary" onClick={close}>
                Free Consultation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
