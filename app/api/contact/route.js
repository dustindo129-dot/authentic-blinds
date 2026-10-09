import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Run on the Node.js runtime (nodemailer needs Node APIs, not the Edge runtime).
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

  const name = (body.name || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const phone = (body.phone || '').toString().trim();
  const service = (body.service || '').toString().trim();
  const message = (body.message || '').toString().trim();

  // Validation
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

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // Misconfiguration: don't leak details to the client, but log server-side.
    console.error('Contact form: SMTP environment variables are not configured.');
    return NextResponse.json(
      { error: 'The contact form is temporarily unavailable. Please call us instead.' },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: String(SMTP_SECURE) !== 'false', // default to secure (465)
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = CONTACT_TO || SMTP_USER;
  const from = CONTACT_FROM || SMTP_USER;

  const html = `
    <h2>New website inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone) || '—'}</p>
    <p><strong>Interested in:</strong> ${escapeHtml(service) || '—'}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
  `;

  const text = `New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || '-'}
Interested in: ${service || '-'}

Message:
${message}`;

  try {
    await transporter.sendMail({
      from: `"Authentic Blinds Website" <${from}>`,
      to,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text,
      html,
    });
  } catch (err) {
    console.error('Contact form: failed to send email', err);
    return NextResponse.json(
      { error: 'We could not send your message. Please try again or call us.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
