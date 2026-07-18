import { NextResponse } from "next/server";
import { sendEmail, escapeHtml } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const frequency = body.frequency === "monthly" ? "Monthly" : "One-Time";
  const amount = Number(body.amount);
  const dedication =
    body.dedicate === true && typeof body.dedication === "string" ? body.dedication.trim() : "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please provide your full name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (!Number.isFinite(amount) || amount <= 0 || amount > 1_000_000) {
    return NextResponse.json({ error: "Please provide a valid donation amount." }, { status: 400 });
  }

  const subject = `[Donation Pledge] $${amount} ${frequency} — ${name}`;
  const text = [
    `New donation pledge from the website`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Amount: $${amount}`,
    `Frequency: ${frequency}`,
    dedication ? `Dedication: ${dedication}` : `Dedication: —`,
    ``,
    `Follow up with a secure payment link to complete this donation.`,
  ].join("\n");

  const html = `
    <h2 style="color:#0F4C81">New donation pledge</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Amount</strong></td><td>$${amount}</td></tr>
      <tr><td><strong>Frequency</strong></td><td>${frequency}</td></tr>
      <tr><td><strong>Dedication</strong></td><td>${dedication ? escapeHtml(dedication) : "—"}</td></tr>
    </table>
    <p><em>Follow up with a secure payment link to complete this donation.</em></p>
  `;

  try {
    const { provider } = await sendEmail({ subject, text, html, replyTo: email });
    return NextResponse.json({ ok: true, provider });
  } catch (err) {
    console.error("[api/donate] send failed:", err);
    return NextResponse.json(
      { error: "We couldn't record your pledge right now. Please try again or email us directly." },
      { status: 502 }
    );
  }
}
