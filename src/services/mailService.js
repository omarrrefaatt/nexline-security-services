const DEBUG = true; // flip to false to silence all logging in production

const emailConfig = {
  endpoint: "https://api.emailjs.com/api/v1.0/email/send",
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_dummy",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key_dummy",
  // Single generic template — see setup note at the bottom of this file.
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_dummy",
  fromEmail: import.meta.env.VITE_EMAIL_FROM || "noreply@nexline.security",
  companyEmail: import.meta.env.VITE_COMPANY_EMAIL || "hello@nexline.security",
};

// Same palette as src/styles/globals.css — keep these two in sync.
const theme = {
  background: "#0b0c0e",
  panel: "#16171b",
  border: "#2a2b30",
  text: "#f5f5f4",
  muted: "#a4a5ab",
  gold: "#d9a441",
  goldDark: "#1a1305",
};

// ---------- Debug helpers ----------

function maskKey(value) {
  if (!value) return value;
  if (value.length <= 8) return "****";
  return `${value.slice(0, 4)}...${value.slice(-4)}`;
}

function isEmailValid(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (DEBUG) {
  console.group("[mailService] config loaded");
  console.log(
    "serviceId:",
    emailConfig.serviceId,
    emailConfig.serviceId === "service_dummy"
      ? "⚠️ FALLBACK — env var not loaded"
      : "✅",
  );
  console.log(
    "templateId:",
    emailConfig.templateId,
    emailConfig.templateId === "template_dummy"
      ? "⚠️ FALLBACK — env var not loaded"
      : "✅",
  );
  console.log(
    "publicKey:",
    maskKey(emailConfig.publicKey),
    emailConfig.publicKey === "public_key_dummy"
      ? "⚠️ FALLBACK — env var not loaded"
      : "✅",
  );
  console.log("fromEmail:", emailConfig.fromEmail);
  console.log("companyEmail:", emailConfig.companyEmail);
  console.groupEnd();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/**
 * Table-based logo lockup (badge + wordmark), matching components/navigation/Logo.jsx.
 * Built with markup, not an external image, so it never depends on image hosting
 * or gets blocked by an email client's "block remote images" setting.
 */
function logoBlock() {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
      <tr>
        <td style="padding-right:12px;vertical-align:middle;">
          <div style="width:40px;height:40px;line-height:38px;text-align:center;border-radius:50%;border:1.5px solid ${theme.text};font-family:Arial,sans-serif;font-weight:700;font-size:14px;color:${theme.text};">Nx</div>
        </td>
        <td style="vertical-align:middle;text-align:left;">
          <div style="font-family:Arial,sans-serif;font-weight:700;font-size:16px;color:${theme.text};line-height:1.2;">Nexline</div>
          <div style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.03em;color:${theme.muted};">Security Services</div>
        </td>
      </tr>
    </table>`;
}

function emailLayout(title, eyebrow, body) {
  return `
    <div style="margin:0;background:${theme.background};padding:32px 16px;font-family:Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:${theme.panel};border:1px solid ${theme.border};border-radius:10px;overflow:hidden;">
        <div style="height:4px;background:${theme.gold};"></div>
        <div style="padding:30px 32px 26px;border-bottom:1px solid ${theme.border};text-align:center;">
          ${logoBlock()}
        </div>
        <div style="padding:36px 32px;">
          <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${theme.gold};font-weight:700;margin-bottom:12px;">${eyebrow}</div>
          <h1 style="margin:0 0 22px;font-size:26px;line-height:1.25;font-weight:700;color:${theme.text};">${title}</h1>
          ${body}
        </div>
        <div style="padding:22px 32px;border-top:1px solid ${theme.border};color:${theme.muted};font-size:12px;line-height:1.7;">
          Nexline Security Services &middot; Available 24/7<br />
          <a href="mailto:${escapeHtml(emailConfig.companyEmail)}" style="color:${theme.gold};text-decoration:none;">${escapeHtml(emailConfig.companyEmail)}</a>
        </div>
      </div>
    </div>`;
}

function detailRows(details) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">${Object.entries(
    details,
  )
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid ${theme.border};color:${theme.muted};font-size:11px;text-transform:uppercase;letter-spacing:0.05em;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:12px 0;border-bottom:1px solid ${theme.border};color:${theme.text};font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(value) || "—"}</td>
        </tr>`,
    )
    .join("")}</table>`;
}

function companyTemplate(type, details) {
  const isQuote = type === "quote";
  return emailLayout(
    isQuote ? "New quote request" : "New contact message",
    isQuote ? "Quote desk" : "Contact desk",
    `<p style="margin:0 0 24px;color:${theme.muted};font-size:15px;line-height:1.7;">${isQuote ? "A prospective client has requested a considered recommendation." : "A visitor has sent a new message through the website."}</p>${detailRows(details)}`,
  );
}

function confirmationTemplate(name, type) {
  const requestType = type === "quote" ? "quote request" : "message";
  return emailLayout(
    "We received your request",
    "Message received",
    `<p style="margin:0 0 18px;color:${theme.text};font-size:16px;line-height:1.7;">Hello ${escapeHtml(name)},</p>
      <p style="margin:0 0 8px;color:${theme.muted};font-size:15px;line-height:1.7;">Thank you for sending your ${requestType} to Nexline. Our team has it and will get back to you within one business day.</p>
      <p style="margin:0;color:${theme.muted};font-size:15px;line-height:1.7;">For anything urgent, call our response desk directly at <a href="tel:+1800555639546" style="color:${theme.gold};text-decoration:none;">+1 (800) 555-NEXLINE</a>.</p>`,
  );
}

/**
 * Sends fully-built HTML through EmailJS's single pass-through template.
 * `html_body` is inserted as raw HTML — see setup note below.
 */
async function sendMail(to, subject, html, replyTo = emailConfig.companyEmail) {
  const payload = {
    service_id: emailConfig.serviceId,
    template_id: emailConfig.templateId,
    user_id: emailConfig.publicKey,
    template_params: {
      to_email: to,
      from_email: emailConfig.fromEmail,
      reply_to: replyTo,
      subject,
      html_body: html,
    },
  };

  if (DEBUG) {
    console.group(`[mailService] sendMail → ${to}`);
    console.log("subject:", subject);
    console.log(
      "replyTo:",
      replyTo,
      isEmailValid(replyTo) ? "✅ valid format" : "⚠️ INVALID EMAIL FORMAT",
    );
    console.log(
      "to valid format:",
      isEmailValid(to) ? "✅" : "⚠️ INVALID EMAIL FORMAT",
    );
    console.log("service_id:", payload.service_id);
    console.log("template_id:", payload.template_id);
    console.log("html length:", html?.length ?? 0, "chars");
    console.groupEnd();
  }

  const response = await fetch(emailConfig.endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // Always read the body — EmailJS puts the real error reason here,
  // and response.ok alone tells you nothing about *why* it failed.
  const rawBody = await response.text();
  let parsedBody = rawBody;
  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    // EmailJS sometimes returns plain text instead of JSON — that's fine.
  }

  if (DEBUG) {
    console.log(
      `[mailService] response for ${to}:`,
      response.status,
      response.ok ? "✅ OK" : "❌ FAILED",
      parsedBody,
    );
  }

  if (!response.ok) {
    console.error("[mailService] EmailJS rejected the request:", {
      status: response.status,
      to,
      subject,
      body: parsedBody,
    });
    throw new Error(
      `The email provider could not send this message (status ${response.status}): ${
        typeof parsedBody === "string" ? parsedBody : JSON.stringify(parsedBody)
      }`,
    );
  }
}

export async function sendQuoteRequest({ name, email, service, details }) {
  if (DEBUG) {
    console.group("[mailService] sendQuoteRequest");
    console.log({ name, email, service, details });
    console.groupEnd();
  }

  const subject = `Quote request: ${service || "New enquiry"}`;

  try {
    await sendMail(
      emailConfig.companyEmail,
      subject,
      companyTemplate("quote", {
        Name: name,
        "Work email": email,
        Service: service || "Not specified",
        "Project details": details || "Not provided",
      }),
      email,
    );
    if (DEBUG) console.log("[mailService] ✅ company notification sent");
  } catch (err) {
    console.error(
      "[mailService] ❌ failed sending company notification for quote:",
      err,
    );
    throw err;
  }

  try {
    await sendMail(
      email,
      "We received your Nexline quote request",
      confirmationTemplate(name, "quote"),
    );
    if (DEBUG) console.log("[mailService] ✅ confirmation email sent to user");
  } catch (err) {
    console.error("[mailService] ❌ failed sending confirmation to user:", err);
    throw err;
  }
}

export async function sendContactMessage({
  name,
  email,
  enquiryType,
  message,
}) {
  if (DEBUG) {
    console.group("[mailService] sendContactMessage");
    console.log({ name, email, enquiryType, message });
    console.groupEnd();
  }

  const subject = `Website contact: ${enquiryType || "General enquiry"}`;

  try {
    await sendMail(
      emailConfig.companyEmail,
      subject,
      companyTemplate("contact", {
        Name: name,
        Email: email,
        "Enquiry type": enquiryType || "General enquiry",
        Message: message,
      }),
      email,
    );
    if (DEBUG) console.log("[mailService] ✅ company notification sent");
  } catch (err) {
    console.error(
      "[mailService] ❌ failed sending company notification for contact:",
      err,
    );
    throw err;
  }

  try {
    await sendMail(
      email,
      "We received your message for Nexline",
      confirmationTemplate(name, "contact"),
    );
    if (DEBUG) console.log("[mailService] ✅ confirmation email sent to user");
  } catch (err) {
    console.error("[mailService] ❌ failed sending confirmation to user:", err);
    throw err;
  }
}

/**
 * EmailJS one-time setup (in the EmailJS dashboard):
 * Create a single template whose entire body is just:
 *   {{{html_body}}}
 * (triple braces = insert as raw HTML, not escaped text).
 * On that same template's Settings tab, set "To Email" to {{to_email}}.
 * Set the template's ID as VITE_EMAILJS_TEMPLATE_ID in your .env.
 */
