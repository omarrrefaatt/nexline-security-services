import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { sendQuoteRequest } from "../../services/mailService.js";

function Quote() {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get("service");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

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
            <label>
              What do you need?
              <select name="service" defaultValue={selectedService || ""}>
                <option value="" disabled>
                  Select a service
                </option>
                <option value="executive-protection">
                  Executive Protection
                </option>
                <option value="corporate-security">Corporate Security</option>
                <option value="event-security">Event Security</option>
                <option value="mobile-patrols">Mobile Patrols</option>
                <option value="security-consulting">Security Consulting</option>
                <option value="loss-prevention">Loss Prevention</option>
              </select>
            </label>
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
              className="button button-primary"
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
