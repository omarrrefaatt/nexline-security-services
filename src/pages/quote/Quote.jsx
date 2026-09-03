import { Link, useSearchParams } from "react-router-dom";
import Icon from "../../components/common/Icon.jsx";
import PageShell from "../../components/layout/PageShell.jsx";

function Quote() {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get("service");

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
        <form
          className="quote-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            Name
            <input required type="text" placeholder="Your full name" />
          </label>
          <label>
            Work email
            <input required type="email" placeholder="you@company.com" />
          </label>
          <label>
            What do you need?
            <select defaultValue={selectedService || ""}>
              <option value="" disabled>
                Select a service
              </option>
              <option value="executive-protection">Executive Protection</option>
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
              rows="4"
              placeholder="A little about your site, event, or operation"
            />
          </label>
          <button className="button button-primary" type="submit">
            Request a quote <Icon name="arrow" size={16} />
          </button>
        </form>
      </section>
    </PageShell>
  );
}

export default Quote;
