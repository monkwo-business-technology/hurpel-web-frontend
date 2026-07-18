import { NextResponse } from "next/server";
import { sendEmail, escapeHtml } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter signup. If Brevo is configured, the address is stored as a
 * Brevo contact (set BREVO_NEWSLETTER_LIST_ID to also add it to a list).
 * Otherwise the signup is emailed to the organization inbox.
 */
async function addBrevoContact(email: string): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return false;

  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);
  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      updateEnabled: true,
      ...(Number.isFinite(listId) && listId > 0 ? { listIds: [listId] } : {}),
    }),
  });
  // 201 created, 204 updated
  return res.status === 201 || res.status === 204;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  try {
    const stored = await addBrevoContact(email);
    if (!stored) {
      await sendEmail({
        subject: `[Newsletter] New signup: ${email}`,
        text: `New newsletter signup from the website:\n\n${email}`,
        html: `<h2 style="color:#0F4C81">New newsletter signup</h2><p>${escapeHtml(email)}</p>`,
      });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/newsletter] failed:", err);
    return NextResponse.json(
      { error: "We couldn't sign you up right now. Please try again later." },
      { status: 502 }
    );
  }
}
