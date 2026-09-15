import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { sendQuoteRequest } from "../../services/mailService.js";
import "./qoute.css";

const serviceOptions = [
  { value: "standing-guards", label: "Standing Guards" },
  { value: "mobile-surveillance-systems", label: "Mobile Surveillance Systems" },
  { value: "event-security", label: "Event Security" },
  { value: "vehicle-mobile-patrols", label: "Vehicle & Mobile Patrols" },
  { value: "front-reception-lobby-guards", label: "Front Reception & Lobby Guards" },
  { value: "fire-watch", label: "Fire Watch" },
];

function Quote() {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get("service") || "";
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceValue, setServiceValue] = useState(selectedService);
  const serviceDropdownRef = useRef(null);

  const selectedServiceLabel =
    serviceOptions.find((option) => option.value === serviceValue)?.label ||
    "Select a service";

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
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
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
      setError(
        "We could not send your request. Please try again or call us directly.",
      );
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
            Start a conversation
          </p>
          <h1>
            Let&apos;s build
            <br />
            <em>your cover.</em>
          </h1>
          <p className="services-page__lead">
            Tell us what you need protected and a Nexline specialist will be in
            touch with a considered recommendation.
          </p>
          <Link className="text-link quote-page__back" to="/services">
            <Icon name="arrow" size={16} /> View all services
          </Link>
          <br />
          <br />

          <div className="quote-page__call">
  <span>We are one call away.</span>

 <a className="btn btn--sm site-footer__cta-call" href="tel:+19097021008">
  Call Now <Icon name="phone" size={16} />
</a>
</div>
        </div>

        {submitted ? (
          <div className="contact-success" role="status">
            <Icon name="check" size={32} />
            <p className="eyebrow">Request received</p>
            <h2>We&apos;ll be in touch.</h2>
            <p>
              Your quote request is with our team. We&apos;ll respond within one
              business day.
            </p>
            <button
              type="button"
              className="text-link"
              onClick={() => setSubmitted(false)}
            >
              Send another request <Icon name="arrow" size={16} />
            </button>
          </div>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                required
                type="text"
                placeholder="Your full name"
              />
            </label>
            <label>
              Work email
              <input
                name="email"
                required
                type="email"
                placeholder="you@company.com"
              />
            </label>
            <div className="quote-form__field">
              <label className="quote-form__field-label" htmlFor="service-trigger">
                What do you need?
              </label>

              <div
                ref={serviceDropdownRef}
                className={`quote-form__dropdown ${serviceOpen ? "is-open" : ""}`}
              >
                <input type="hidden" name="service" value={serviceValue} />

                <button
                  id="service-trigger"
                  type="button"
                  className={`quote-form__dropdown-toggle ${
                    serviceValue ? "" : "is-empty"
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={serviceOpen}
                  onClick={() => setServiceOpen((open) => !open)}
                >
                  <span>{selectedServiceLabel}</span>
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                <div className="quote-form__dropdown-menu" role="listbox" aria-label="Select a service">
                  {serviceOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`quote-form__dropdown-item ${
                        serviceValue === option.value ? "is-active" : ""
                      }`}
                      onClick={() => {
                        setServiceValue(option.value);
                        setServiceOpen(false);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <label>
              Project details
              <textarea
                name="details"
                rows="4"
                placeholder="A little about your site, event, or operation"
              />
            </label>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button
              className="btn btn--primary btn--sm quote-form__submit"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Request a quote"}{" "}
              {!isSending && <Icon name="arrow" size={16} />}
            </button>
          </form>
        )}
      </section>
    </PageShell>
  );
}

export default Quote;
