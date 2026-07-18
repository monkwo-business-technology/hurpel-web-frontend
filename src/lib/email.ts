import nodemailer from "nodemailer";

export type EmailPayload = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

const TO_EMAIL = process.env.EMAIL_TO ?? "info@hurpelsupport.com";
const FROM_EMAIL = process.env.EMAIL_FROM ?? "no-reply@hurpelsupport.com";
const FROM_NAME = process.env.EMAIL_FROM_NAME ?? "Hurpel Support Services Website";

/**
 * Brevo transactional email HTTP API.
 * https://developers.brevo.com/reference/sendtransacemail
 */
async function sendViaBrevo(payload: EmailPayload): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error("BREVO_API_KEY is not set");

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: TO_EMAIL }],
      subject: payload.subject,
      htmlContent: payload.html,
      textContent: payload.text,
      ...(payload.replyTo ? { replyTo: { email: payload.replyTo } } : {}),
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Brevo API error ${res.status}: ${body}`);
  }
}

/**
 * Zoho Mail SMTP (personal account: smtp.zoho.com:465 SSL).
 * Use a Zoho app-specific password, not the account password.
 */
async function sendViaZoho(payload: EmailPayload): Promise<void> {
  const user = process.env.ZOHO_USER;
  const pass = process.env.ZOHO_APP_PASSWORD;
  if (!user || !pass) throw new Error("ZOHO_USER / ZOHO_APP_PASSWORD are not set");

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST ?? "smtp.zoho.com",
    port: Number(process.env.ZOHO_SMTP_PORT ?? 465),
    secure: true,
    auth: { user, pass },
  });

  await transporter.sendMail({
    // Zoho requires the authenticated mailbox as the From address.
    from: `"${FROM_NAME}" <${user}>`,
    to: TO_EMAIL,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
    ...(payload.replyTo ? { replyTo: payload.replyTo } : {}),
  });
}

/**
 * Sends via the provider selected by EMAIL_PROVIDER (brevo | zoho).
 * Unset: prefers Brevo when BREVO_API_KEY exists, otherwise Zoho.
 * If the primary provider fails and the other is configured, it is tried as fallback.
 */
export async function sendEmail(payload: EmailPayload): Promise<{ provider: string }> {
  const brevoConfigured = Boolean(process.env.BREVO_API_KEY);
  const zohoConfigured = Boolean(process.env.ZOHO_USER && process.env.ZOHO_APP_PASSWORD);

  const preferred =
    process.env.EMAIL_PROVIDER?.toLowerCase() ?? (brevoConfigured ? "brevo" : "zoho");

  const order =
    preferred === "zoho"
      ? ([["zoho", sendViaZoho, zohoConfigured], ["brevo", sendViaBrevo, brevoConfigured]] as const)
      : ([["brevo", sendViaBrevo, brevoConfigured], ["zoho", sendViaZoho, zohoConfigured]] as const);

  let lastError: unknown = new Error("No email provider is configured");
  for (const [name, send, configured] of order) {
    if (!configured) continue;
    try {
      await send(payload);
      return { provider: name };
    } catch (err) {
      console.error(`[email] ${name} failed:`, err);
      lastError = err;
    }
  }
  throw lastError;
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
