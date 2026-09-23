import { reviews } from '../../data/reviews.js';
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

function ReviewsSection() {
   const { language } = useLanguage();
  const t = translations[language];
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
          <h2>{t.reviews.title}</h2>
          <p>{t.reviews.subtitle}</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => {
            const translatedReview =
              t.reviews.items[review.id] || {
                text: review.text,
                author: review.author,
                title: review.title,
                company: review.company,
              };

            return (
              <div key={review.id} className="review-card">
                <div className="review-card__rating">
                  {renderStars(review.rating)}
                </div>

                <p className="review-card__text">
                  {translatedReview.text}
                </p>

                <div className="review-card__author">
                  <h4>{translatedReview.author}</h4>

                  <p className="review-card__title">
                    {translatedReview.title}
                  </p>

                  <p className="review-card__company">
                    {translatedReview.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
