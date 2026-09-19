import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { contactDetails, faqs } from "../../data/contactData.js";
import { sendContactMessage } from "../../services/mailService.js";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { translations } from "../../data/translations.ts";

const enquiryOptions = [
  {
    value: "general-enquiry",
    translationKey: "general",
  },
  {
    value: "request-a-service",
    translationKey: "service",
  },
  {
    value: "existing-client-support",
    translationKey: "support",
  },
  {
    value: "press-and-partnerships",
    translationKey: "press",
  },
];

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryValue, setEnquiryValue] = useState("");

  const enquiryDropdownRef = useRef(null);

  const selectedEnquiryLabel =
    enquiryOptions.find(
      (option) => option.value === enquiryValue
    )?.translationKey
      ? t.contact.form.enquiry.options[
          enquiryOptions.find(
            (option) => option.value === enquiryValue
          ).translationKey
        ]
      : t.contact.form.enquiry.placeholder;

  useEffect(() => {
    if (!enquiryOpen) return;

    function handlePointerDown(event) {
      if (
        enquiryDropdownRef.current &&
        !enquiryDropdownRef.current.contains(event.target)
      ) {
        setEnquiryOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setEnquiryOpen(false);
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
  }, [enquiryOpen]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await sendContactMessage({
        name: formData.get("name"),
        email: formData.get("email"),
        enquiryType: formData.get("enquiryType"),
        message: formData.get("message"),
      });

      setSubmitted(true);
      form.reset();
      setEnquiryValue("");
      setEnquiryOpen(false);
    } catch {
      setError(t.contact.form.error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <PageShell>
      <section className="contact-page">
        <div className="contact-page__intro">
          <div>
            <p className="eyebrow">
              <span className="status-dot" />
              {t.contact.hero.eyebrow}
            </p>

            <h1>
              {t.contact.hero.titleLine1}
              <br />
              <em>{t.contact.hero.titleLine2}</em>
            </h1>
          </div>

          <p>{t.contact.hero.description}</p>
        </div>

        <div className="contact-layout">
          <div className="contact-page__details">
            <p className="contact-page__label">
              {t.contact.details.title}
            </p>

            {contactDetails.map((detail) => (
              <div className="contact-detail" key={detail.id}>
                <span>
                  {t.contact.details[detail.translationKey]}
                </span>

                <a href={detail.href}>{detail.value}</a>
              </div>
            ))}

            <div className="contact-hours">
              <span>
                {t.contact.details.responseDesk}
              </span>

              <strong>
                {t.contact.details.available}
              </strong>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" role="status">
                <Icon name="check" size={32} />

                <p className="eyebrow">
                  {t.contact.form.success.eyebrow}
                </p>

                <h2>
                  {t.contact.form.success.title}
                </h2>

                <p>
                  {t.contact.form.success.description}
                </p>

                <button
                  type="button"
                  className="text-link"
                  onClick={() => setSubmitted(false)}
                >
                  {t.contact.form.success.anotherMessage}
                  <Icon name="arrow" size={16} />
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form__header">
                  <p className="eyebrow">
                    {t.contact.form.header}
                  </p>

                  <span>01 / 04</span>
                </div>

                <label>
                  {t.contact.form.name.label}

                  <input
                    name="name"
                    required
                    type="text"
                    placeholder={
                      t.contact.form.name.placeholder
                    }
                  />
                </label>

                <label>
                  {t.contact.form.email.label}

                  <input
                    name="email"
                    required
                    type="email"
                    placeholder={
                      t.contact.form.email.placeholder
                    }
                  />
                </label>

                <div className="contact-form__field">
                  <label
                    className="contact-form__field-label"
                    htmlFor="enquiry-trigger"
                  >
                    {t.contact.form.enquiry.label}
                  </label>

                  <div
                    ref={enquiryDropdownRef}
                    className={`contact-form__dropdown ${
                      enquiryOpen ? "is-open" : ""
                    }`}
                  >
                    <input
                      type="hidden"
                      name="enquiryType"
                      value={enquiryValue}
                    />

                    <button
                      id="enquiry-trigger"
                      type="button"
                      className={`contact-form__dropdown-toggle ${
                        enquiryValue ? "" : "is-empty"
                      }`}
                      aria-haspopup="listbox"
                      aria-expanded={enquiryOpen}
                      onClick={() =>
                        setEnquiryOpen((open) => !open)
                      }
                    >
                      <span>{selectedEnquiryLabel}</span>

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
                      className="contact-form__dropdown-menu"
                      role="listbox"
                      aria-label={
                        t.contact.form.enquiry.ariaLabel
                      }
                    >
                      {enquiryOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          className={`contact-form__dropdown-item ${
                            enquiryValue === option.value
                              ? "is-active"
                              : ""
                          }`}
                          onClick={() => {
                            setEnquiryValue(option.value);
                            setEnquiryOpen(false);
                          }}
                        >
                          {
                            t.contact.form.enquiry.options[
                              option.translationKey
                            ]
                          }
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <label>
                  {t.contact.form.message.label}

                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder={
                      t.contact.form.message.placeholder
                    }
                  />
                </label>

                {error && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}

                <button
                  className="btn btn--primary btn--sm contact-form__submit"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending
                    ? t.contact.form.sending
                    : t.contact.form.send}

                  {!isSending && (
                    <>
                      {" "}
                      <Icon name="arrow" size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <section
          className="faq-section"
          aria-labelledby="faq-title"
        >
          <div className="faq-section__heading">
            <p className="eyebrow">
              <span className="status-dot" />
              {t.contact.faq.eyebrow}
            </p>

            <h2 id="faq-title">
              {t.contact.faq.titleLine1}
              <br />
              <em>{t.contact.faq.titleLine2}</em>
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const translatedFaq =
                t.contact.faq.items[faq.translationKey];

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "is-open" : ""
                  }`}
                  key={faq.id}
                >
                  <button
                    type="button"
                    className="faq-item__question"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                  >
                    <span>
                      <small>
                        0{index + 1}
                      </small>

                      {translatedFaq.question}
                    </span>

                    <span className="faq-item__toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="faq-item__answer">
                      {translatedFaq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="contact-page__footer-cta">
          <p>{t.contact.footerCta.title}</p>

          <Link
            className="text-link"
            to="/services"
          >
            {t.contact.footerCta.link}
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

export default Contact;