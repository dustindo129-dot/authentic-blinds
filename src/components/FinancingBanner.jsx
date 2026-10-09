import { financing } from '@/data/site';

export default function FinancingBanner() {
  return (
    <section className="financing">
      <div className="container financing__inner">
        <div className="financing__text">
          <span className="financing__badge">0% Interest · 18 Months</span>
          <p>{financing.blurb}</p>
        </div>
        <a
          href={financing.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline"
        >
          {financing.applyLabel}
        </a>
      </div>
    </section>
  );
}
