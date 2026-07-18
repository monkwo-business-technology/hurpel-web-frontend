import { NextResponse } from "next/server";
import { sendEmail, escapeHtml } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INQUIRY_OPTIONS = [
  "General Question",
  "Accessing Support",
  "Volunteering",
  "Employment/Hiring",
];

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields — pretend success, send nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const inquiry = typeof body.inquiry === "string" ? body.inquiry.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const newsletter = body.newsletter === true;

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please provide your full name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (!INQUIRY_OPTIONS.includes(inquiry)) {
    return NextResponse.json({ error: "Please select a nature of inquiry." }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: "Please include a message (max 5000 characters)." }, { status: 400 });
  }

  const subject = `[Website Contact] ${inquiry} — ${name}`;
  const text = [
    `New contact form submission`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Inquiry: ${inquiry}`,
    `Newsletter signup: ${newsletter ? "Yes" : "No"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const html = `
    <h2 style="color:#0F4C81">New contact form submission</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Inquiry</strong></td><td>${escapeHtml(inquiry)}</td></tr>
      <tr><td><strong>Newsletter</strong></td><td>${newsletter ? "Yes" : "No"}</td></tr>
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  try {
    const { provider } = await sendEmail({ subject, text, html, replyTo: email });
    return NextResponse.json({ ok: true, provider });
  } catch (err) {
    console.error("[api/contact] send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again or email us directly." },
      { status: 502 }
    );
  }
}
