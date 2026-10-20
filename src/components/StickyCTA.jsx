'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { site } from '@/data/site';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`sticky-cta ${visible ? 'sticky-cta--show' : ''}`}>
      <a href={site.phoneHref} className="sticky-cta__btn sticky-cta__btn--call">
        Call Now
      </a>
      <Link href="#free-estimate" className="sticky-cta__btn sticky-cta__btn--estimate">
        Free Estimate
      </Link>
    </div>
  );
}
