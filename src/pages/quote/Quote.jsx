import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { services } from "../../data/services.js";
import { sendQuoteRequest } from "../../services/mailService.js";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";
import "./qoute.css";

function Quote() {
  const { language } = useLanguage();
  const t = translations[language];

  const [searchParams] = useSearchParams();

  const selectedService = searchParams.get("service") || "";

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceValue, setServiceValue] =
    useState(selectedService);

  const serviceDropdownRef = useRef(null);

  /*
   * Find the translated service title from translations.ts
   * using the translationKey from services.js.
   */
  const selectedServiceData = services.find(
    (service) => service.id === serviceValue
  );

  const selectedServiceLabel =
    t.services.items[selectedServiceData?.translationKey]?.title ||
    t.quote.form.service.placeholder;

  useEffect(() => {
    setServiceValue(selectedService);
  }, [selectedService]);

  useEffect(() => {
    if (!serviceOpen) return;

    function handlePointerDown(event) {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target)
      ) {
        setServiceOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setServiceOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [serviceOpen]);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await sendQuoteRequest({
        name: formData.get("name"),
        email: formData.get("email"),
        service: formData.get("service"),
        details: formData.get("details"),
      });

      setSubmitted(true);

      form.reset();

      setServiceValue(selectedService);
      setServiceOpen(false);
    } catch {
      setError(t.quote.form.error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <PageShell>
      <section className="quote-page">
        <div className="quote-page__content">
          <p className="eyebrow">
            <span className="status-dot" />
            {t.quote.hero.eyebrow}
          </p>

          <h1>
            {t.quote.hero.titleLine1}
            <br />
            <em>{t.quote.hero.titleLine2}</em>
          </h1>

          <p className="services-page__lead">
            {t.quote.hero.description}
          </p>

          <Link
            className="text-link quote-page__back"
            to="/services"
          >
            <Icon name="arrow" size={16} />
            {t.quote.hero.backToServices}
          </Link>

          <br />
          <br />

          <div className="quote-page__call">
            <span>{t.quote.hero.callText}</span>

            <a
              className="btn btn--sm site-footer__cta-call"
              href="tel:+19097021008"
            >
              {t.quote.hero.callButton}
              <Icon name="phone" size={16} />
            </a>
          </div>
        </div>

        {submitted ? (
          <div
            className="contact-success"
            role="status"
          >
            <Icon name="check" size={32} />

            <p className="eyebrow">
              {t.quote.success.eyebrow}
            </p>

            <h2>{t.quote.success.title}</h2>

            <p>{t.quote.success.description}</p>

            <button
              type="button"
              className="text-link"
              onClick={() => setSubmitted(false)}
            >
              {t.quote.success.anotherRequest}
              <Icon name="arrow" size={16} />
            </button>
          </div>
        ) : (
          <form
            className="quote-form"
            onSubmit={handleSubmit}
          >
            <label>
              {t.quote.form.name.label}

              <input
                name="name"
                required
                type="text"
                placeholder={
                  t.quote.form.name.placeholder
                }
              />
            </label>

            <label>
              {t.quote.form.email.label}

              <input
                name="email"
                required
                type="email"
                placeholder={
                  t.quote.form.email.placeholder
                }
              />
            </label>

            <div className="quote-form__field">
              <label
                className="quote-form__field-label"
                htmlFor="service-trigger"
              >
                {t.quote.form.service.label}
              </label>

              <div
                ref={serviceDropdownRef}
                className={`quote-form__dropdown ${
                  serviceOpen ? "is-open" : ""
                }`}
              >
                <input
                  type="hidden"
                  name="service"
                  value={serviceValue}
                />

                <button
                  id="service-trigger"
                  type="button"
                  className={`quote-form__dropdown-toggle ${
                    serviceValue ? "" : "is-empty"
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={serviceOpen}
                  onClick={() =>
                    setServiceOpen(
                      (open) => !open
                    )
                  }
                >
                  <span>
                    {selectedServiceLabel}
                  </span>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className="quote-form__dropdown-menu"
                  role="listbox"
                  aria-label={
                    t.quote.form.service.ariaLabel
                  }
                >
                  {services.map((service) => {
                    const translatedService =
                      t.services.items[
                        service.translationKey
                      ];

                    return (
                      <button
                        key={service.id}
                        type="button"
                        className={`quote-form__dropdown-item ${
                          serviceValue === service.id
                            ? "is-active"
                            : ""
                        }`}
                        onClick={() => {
                          setServiceValue(service.id);
                          setServiceOpen(false);
                        }}
                      >
                        {translatedService?.title ||
                          service.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <label>
              {t.quote.form.details.label}

              <textarea
                name="details"
                rows="4"
                placeholder={
                  t.quote.form.details.placeholder
                }
              />
            </label>

            {error && (
              <p
                className="form-error"
                role="alert"
              >
                {error}
              </p>
            )}

            <button
              className="btn btn--primary btn--sm quote-form__submit"
              type="submit"
              disabled={isSending}
            >
              {isSending
                ? t.quote.form.sending
                : t.quote.form.submit}

              {!isSending && (
                <>
                  {" "}
                  <Icon
                    name="arrow"
                    size={16}
                  />
                </>
              )}
            </button>
          </form>
        )}
      </section>
    </PageShell>
  );
}

export default Quote;