import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form backend — REAL email delivery via FormSubmit.co relay.
 *
 *  • Default provider : FormSubmit (zero-config; one-time activation
 *    email must be confirmed at the destination address — already sent).
 *  • Optional upgrade : set WEB3FORMS_ACCESS_KEY env var to route
 *    through Web3Forms instead.
 *  • Optional override: FORMSUBMIT_EMAIL env var changes the recipient.
 *
 * The browser never talks to the provider directly — this route
 * proxies server-side (no CORS, no leaked keys).
 */

const RECIPIENT = process.env.FORMSUBMIT_EMAIL ?? "anujthakur9684@gmail.com";
const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY ?? "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? ""); // bots fill this; humans never see it

  // Silently "accept" bot submissions so they don't retry
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  // --- validation -------------------------------------------------
  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }
  if (message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Message is too short (min 10 characters)." },
      { status: 422 },
    );
  }
  if (message.length > 3000) {
    return NextResponse.json({ ok: false, error: "Message is too long (max 3000 characters)." }, { status: 422 });
  }

  try {
    if (WEB3FORMS_KEY) {
      // --- Web3Forms provider (optional) ---------------------------
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          subject: subject || `Portfolio message from ${name}`,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) return NextResponse.json({ ok: true });
      return NextResponse.json(
        { ok: false, error: data.message ?? "Could not send message." },
        { status: 502 },
      );
    }

    // --- Default: FormSubmit relay ---------------------------------
    const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // FormSubmit requires a web-origin header on relayed requests
        Origin: process.env.CONTACT_ORIGIN ?? "https://anujcooks.vercel.app",
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || `Portfolio message from ${name}`,
        message,
        _captcha: "false",
        _template: "table",
      }),
    });
    const data = await res.json();
    if (String(data.success) === "true") {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { ok: false, error: "Relay is not active yet. Check the activation email, or try again shortly." },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Network error — could not reach the mail relay. Please try again." },
      { status: 502 },
    );
  }
}
