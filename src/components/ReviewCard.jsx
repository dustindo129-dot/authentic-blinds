export default function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card__stars" aria-label={`${review.rating} out of 5 stars`}>
        {'★'.repeat(review.rating)}
      </div>
      <blockquote className="review-card__text">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <footer className="review-card__footer">
        <span className="review-card__author">{review.author}</span>
        <span className="review-card__city">{review.city}, TX</span>
      </footer>
    </article>
  );
}
