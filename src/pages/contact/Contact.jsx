import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";
import { contactDetails, faqs } from "../../data/contactData.js";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
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
                  <input required type="text" placeholder="Your full name" />
                </label>
                <label>
                  Email
                  <input required type="email" placeholder="you@company.com" />
                </label>
                <label>
                  How can we help?
                  <select defaultValue="">
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option>General enquiry</option>
                    <option>Request a service</option>
                    <option>Existing client support</option>
                    <option>Press and partnerships</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell us a little about what you need"
                  />
                </label>
                <button className="button button-primary" type="submit">
                  Send message <Icon name="arrow" size={16} />
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
