import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name    = (body.name    || '').toString().trim();
  const email   = (body.email   || '').toString().trim();
  const phone   = (body.phone   || '').toString().trim();
  const service = (body.service || '').toString().trim();
  const message = (body.message || '').toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_TO, RESEND_FROM } = process.env;

  if (!RESEND_API_KEY) {
    console.error('Contact form: RESEND_API_KEY is not set.');
    return NextResponse.json(
      { error: 'The contact form is temporarily unavailable. Please call us instead.' },
      { status: 503 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const to   = CONTACT_TO  || 'info@authenticblindsandshutters.com';
  const from = RESEND_FROM || 'Authentic Blinds Website <onboarding@resend.dev>';

  const html = `
    <h2>New website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone) || '—'}</p>
    <p><strong>Interested in:</strong> ${escapeHtml(service) || '—'}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
  `;

  const text = `New website inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nInterested in: ${service || '-'}\n\nMessage:\n${message}`;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html,
      text,
    });
  } catch (err) {
    console.error('Contact form: Resend error', err);
    return NextResponse.json(
      { error: 'We could not send your message. Please try again or call us.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
