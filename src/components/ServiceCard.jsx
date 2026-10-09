import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__summary">{service.summary}</p>
        <Link href={`/${service.slug}`} className="service-card__link">
          Learn more <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
