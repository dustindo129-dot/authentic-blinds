# Authentic Blinds & Shutters

Next.js (App Router) rebuild of [authenticblindsandshutters.com](https://authenticblindsandshutters.com), replacing the old WordPress site. Frontend-only: all content lives in code, and the contact form sends email through a Next.js API route (no database).

## Stack

- Next.js 14 (App Router) + React 18
- Plain CSS (global + component CSS), structured like the `val-js` reference project
- `nodemailer` for the contact form email, in a server-side API route

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in SMTP values
npm run dev                  # http://localhost:5174
```

## Project structure

```
app/                       App Router pages
  layout.jsx               Root layout: Navbar + Footer, global SEO
  page.jsx                 Home
  roller-shades/           Service page
  plantation-shutters/     Service page
  window-blinds/           Service page
  our-work/                Gallery
  contact/                 Contact page
  api/contact/route.js     Contact-form email handler (nodemailer)
src/
  components/              Navbar, Footer, Hero, ServiceCard, ContactForm, FinancingBanner
  data/site.js            Site-wide content (nav, contact info, services)
  styles/                 globals.css + component CSS
public/images/            Logo, hero, service, and gallery images
```

## Content to replace

Placeholder images live in `public/images`. Drop in the real logo and photos using the
same filenames (or update `src/data/site.js`). Also set the real Synchrony financing
application URL in `src/data/site.js` (`financing.applyUrl`).

## Deployment (Vercel + GoDaddy domain)

1. Push this repo and import it in [Vercel](https://vercel.com) (framework auto-detected as Next.js).
2. In Vercel project settings, add the environment variables from `.env.example`.
3. Add the custom domain `authenticblindsandshutters.com` (and `www`) in Vercel.
4. In GoDaddy DNS, point records at Vercel:
   - `A` record `@` -> `76.76.21.21`
   - `CNAME` record `www` -> `cname.vercel-dns.com`
   (Use the exact values Vercel shows for your project.)
5. Once DNS propagates and HTTPS is issued, the old WordPress site is retired.

GoDaddy keeps the domain; the app is hosted on Vercel.
