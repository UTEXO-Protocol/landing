# Utexo Landing

Marketing and sales website for Utexo — Bitcoin-native USDT infrastructure powered by RGB protocol on Lightning Network.

## Tech Stack

- **Framework:** Next.js 15.5 (App Router, Turbopack)
- **Language:** TypeScript 5
- **UI:** React 19, SCSS (no Tailwind)
- **Forms:** react-hook-form + Zod validation
- **Database:** Supabase (signups + contact submissions)
- **Email:** Nodemailer (SMTP transactional emails with HTML templates)
- **Animations:** Motion (Framer Motion successor)
- **Carousel:** Embla Carousel
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js >= 20 (tested on 22.x)
- npm

### Installation

```bash
git clone https://github.com/UTEXO-Protocol/landing.git
cd landing
npm install
```

### Environment Variables

Create a `.env.local` file in the project root. All required variables:

#### Supabase

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | Supabase project URL (e.g. `https://xxx.supabase.co`) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only, never expose to client) |

#### SMTP (Nodemailer)

| Variable | Description |
|----------|-------------|
| `EMAIL_HOST` | SMTP server hostname (e.g. `smtp.gmail.com`) |
| `EMAIL_PORT` | SMTP port (e.g. `587`) |
| `EMAIL_PASSWORD` | SMTP password or app-specific password |
| `EMAIL_FROM` | Sender address (e.g. `noreply@utexo.com`) |
| `EMAIL_DEV_TO` | Override recipient in non-production (dev/staging test address) |

#### Application

| Variable | Description |
|----------|-------------|
| `PUBLIC_SITE_URL` | Public base URL of the site (e.g. `https://utexo.com`). Used for logo URLs in emails. |
| `SALES_CONTACT_EMAIL` | Email address that receives contact form submissions |

### Running Locally

```bash
npm run dev        # Starts dev server with Turbopack on http://localhost:3000
```

### Production Build

```bash
npm run build      # Creates optimized standalone build
npm run start      # Serves the production build
```

## Project Structure

```
src/
├── app/                     # Next.js App Router (routes + API)
│   ├── api/                 # API routes (contact, signup)
│   ├── static/              # Global styles, fonts, SVG components
│   └── [route]/page.tsx     # Page routes
├── components/              # React components organized by page
│   ├── common/              # Shared components (Navigation, Footer, Button, Input, etc.)
│   ├── home/                # Homepage sections
│   ├── api-product/         # API product page sections
│   ├── cloud/               # Cloud product page sections
│   ├── contact-sales/       # Contact form page sections
│   ├── faq/                 # FAQ page sections
│   ├── brand-kit/           # Brand kit page sections
│   └── [vertical]/          # Vertical landing pages (see note below)
├── emails/                  # HTML email templates (Handlebars-style placeholders)
├── lib/                     # Utilities (Supabase client, email service, rate limiter, etc.)
├── mocks/                   # Static data (FAQ items, feature lists, slider content)
└── types/                   # Shared TypeScript types
public/                      # Static assets (images, videos, fonts, icons)
```

Each page has its own component directory. Components are co-located with their SCSS files (e.g. `components/home/Hero/index.tsx` + `index.scss`).

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero video, product overview, newsletter CTA |
| `/api-product` | API product page — features, pricing tiers, integration details |
| `/cloud` | Cloud product page — managed Lightning infrastructure offering |
| `/contact-sales` | Contact form — submits to Supabase + sends email notifications |
| `/faq` | Frequently asked questions with expandable accordion |
| `/brand-kit` | Brand assets — logos, fonts, color palette downloads |
| `/privacy` | Privacy policy (MDX content) |
| `/terms-and-conditions` | Terms and conditions (MDX content) |
| `POST /api/signup` | Newsletter signup endpoint — stores in Supabase, sends confirmation email |
| `POST /api/contact` | Contact form endpoint — stores in Supabase, sends emails to user + sales team |

## Key Integrations

- **Supabase** — Stores newsletter signups and contact form submissions via service role key (server-side only)
- **Nodemailer** — Sends transactional emails using HTML templates from `src/emails/` (signup confirmation, contact confirmation, sales notification)
- **Vercel Analytics** — Client-side page view and web vitals tracking (injected in root layout)
- **JSZip + FileSaver** — Client-side ZIP generation for brand kit asset downloads

## Development Notes

- **Branch strategy:** All PRs target `develop`, not `main`. The `main` branch is the production deployment branch.
- **Upcoming vertical pages:** Component directories exist for `igaming`, `exchange`, `custodians`, `retails-wallet`, `enterprise-wallet`, and `psp` under `src/components/`, but these pages do not have routes in `src/app/` yet. The nav menu has a "Customers" section commented out as coming soon.
- **SCSS conventions:** Global styles use `@use` with a shared mixin file at `src/app/index.scss`. Components use BEM naming (`block__element--modifier`). There is a shared `text-geist()` mixin for typography.
- **SVG components:** SVG icons are imported as React components via `@svgr/webpack`, configured in `next.config.ts`.
- **Standalone output:** `next.config.ts` sets `output: "standalone"` for containerized deployments.

