import { financing } from '@/data/site';

export default function FinancingBanner() {
  return (
    <section className="financing">
      <div className="container financing__inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photos/synchrony-home-badge.jpg"
          alt="Synchrony HOME financing"
          className="financing__logo"
        />
        <p className="financing__blurb">{financing.blurb}</p>
        <a
          href={financing.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn financing__cta"
        >
          {financing.applyLabel}
        </a>
      </div>
    </section>
  );
}
