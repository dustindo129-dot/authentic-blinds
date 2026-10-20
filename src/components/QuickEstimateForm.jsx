'use client';

import { useState } from 'react';
import { services } from '@/data/site';

const initial = { name: '', phone: '', email: '', zip: '', service: '', windows: '' };

export default function QuickEstimateForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: `[Quick Estimate Request]\nZIP: ${form.zip || '—'}\nApprox. windows: ${form.windows || '—'}\nService: ${form.service || '—'}`,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm(initial);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <h3>We Got Your Request!</h3>
        <p>
          Thank you! We&apos;ll reach out within one business day to schedule your free
          in-home consultation.
        </p>
        <button
          type="button"
          className="btn btn--dark"
          onClick={() => setStatus('idle')}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label className="form-field">
          <span>Name *</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Your full name"
          />
        </label>
        <label className="form-field">
          <span>Phone *</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            placeholder="(214) 555-0123"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="you@email.com"
          />
        </label>
        <label className="form-field">
          <span>ZIP Code</span>
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            autoComplete="postal-code"
            placeholder="75078"
            maxLength={5}
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Interested In</span>
          <select name="service" value={form.service} onChange={handleChange}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not Sure">Not Sure — Help Me Choose</option>
          </select>
        </label>
        <label className="form-field">
          <span>Approx. # of Windows</span>
          <select name="windows" value={form.windows} onChange={handleChange}>
            <option value="">Select</option>
            <option value="1-5">1–5 windows</option>
            <option value="6-10">6–10 windows</option>
            <option value="11-20">11–20 windows</option>
            <option value="20+">20+ windows (whole home)</option>
          </select>
        </label>
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get My Free Estimate →'}
      </button>
    </form>
  );
}
