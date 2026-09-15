import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { contactDetails, faqs } from "../../data/contactData.js";
import { sendContactMessage } from "../../services/mailService.js";

const enquiryOptions = [
  { value: "general-enquiry", label: "General enquiry" },
  { value: "request-a-service", label: "Request a service" },
  { value: "existing-client-support", label: "Existing client support" },
  { value: "press-and-partnerships", label: "Press and partnerships" },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryValue, setEnquiryValue] = useState("");
  const enquiryDropdownRef = useRef(null);

  const selectedEnquiryLabel =
    enquiryOptions.find((option) => option.value === enquiryValue)?.label ||
    "Select an enquiry type";

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
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
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
      setError(
        "We could not send your message. Please try again or call us directly.",
      );
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
              Contact Nexline
            </p>
            <h1>
              Let&apos;s make
              <br />
              <em>it safer.</em>
            </h1>
          </div>
          <p>
            Have a question, a project, or a concern? Start a conversation with
            the people who will be there when it matters.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-page__details">
            <p className="contact-page__label">Reach us directly</p>
            {contactDetails.map((detail) => (
              <div className="contact-detail" key={detail.label}>
                <span>{detail.label}</span>
                <a href={detail.href}>{detail.value}</a>
              </div>
            ))}
            <div className="contact-hours">
              <span>Response desk</span>
              <strong>Available 24 / 7</strong>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" role="status">
                <Icon name="check" size={32} />
                <p className="eyebrow">Message received</p>
                <h2>We&apos;ll be in touch.</h2>
                <p>
                  Your message is with our team. We&apos;ll respond within one
                  business day.
                </p>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message <Icon name="arrow" size={16} />
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__header">
                  <p className="eyebrow">Send a message</p>
                  <span>01 / 04</span>
                </div>
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
                  Email
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="you@company.com"
                  />
                </label>
                <div className="contact-form__field">
                  <label
                    className="contact-form__field-label"
                    htmlFor="enquiry-trigger"
                  >
                    How can we help?
                  </label>

                  <div
                    ref={enquiryDropdownRef}
                    className={`contact-form__dropdown ${enquiryOpen ? "is-open" : ""}`}
                  >
                    <input type="hidden" name="enquiryType" value={enquiryValue} />

                    <button
                      id="enquiry-trigger"
                      type="button"
                      className={`contact-form__dropdown-toggle ${
                        enquiryValue ? "" : "is-empty"
                      }`}
                      aria-haspopup="listbox"
                      aria-expanded={enquiryOpen}
                      onClick={() => setEnquiryOpen((open) => !open)}
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
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    <div
                      className="contact-form__dropdown-menu"
                      role="listbox"
                      aria-label="Select an enquiry type"
                    >
                      {enquiryOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          className={`contact-form__dropdown-item ${
                            enquiryValue === option.value ? "is-active" : ""
                          }`}
                          onClick={() => {
                            setEnquiryValue(option.value);
                            setEnquiryOpen(false);
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <label>
                  Message
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell us a little about what you need"
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
                  {isSending ? "Sending..." : "Send message"}{" "}
                  {!isSending && <Icon name="arrow" size={16} />}
                </button>
              </form>
            )}
          </div>
        </div>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="faq-section__heading">
            <p className="eyebrow">
              <span className="status-dot" />
              Good to know
            </p>
            <h2 id="faq-title">
              Questions,
              <br />
              <em>answered.</em>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  className={`faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-item__question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>
                      <small>0{index + 1}</small>
                      {faq.question}
                    </span>
                    <span className="faq-item__toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && <p className="faq-item__answer">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </section>

        <div className="contact-page__footer-cta">
          <p>Looking for a complete security plan?</p>
          <Link className="text-link" to="/services">
            Explore our services <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

export default Contact;
