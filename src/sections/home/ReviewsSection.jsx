import { reviews } from '../../data/reviews.js';

function ReviewsSection() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'is-filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="reviews-section">
      <div className="reviews-section__container">
        <div className="reviews-section__header">
          <h2>What Our Clients Say</h2>
          <p>Real testimonials from businesses we protect</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card__rating">
                {renderStars(review.rating)}
              </div>

              <p className="review-card__text">{review.text}</p>

              <div className="review-card__author">
                <h4>{review.author}</h4>
                <p className="review-card__title">{review.title}</p>
                <p className="review-card__company">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
