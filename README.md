# Stoonex Services — stoonex.com

Premium landscaping, fencing, paving, and wall-stone contractor website.
Built with Next.js 16 (App Router), Tailwind v4, Resend, deployed on Vercel.

## Stack
- **Framework:** Next.js 16.2 (App Router, Turbopack)
- **Styles:** Tailwind v4 (cream + forest green + lime palette)
- **Fonts:** Bebas Neue (display), Instrument Serif (italic accents), Inter (body)
- **Email:** Resend → structocontracting@gmail.com
- **Hosting:** Vercel
- **DNS:** Cloudflare (stoonex.com + stoonexservices.ca)

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

## Environment variables
```
RESEND_API_KEY=re_xxxxx
RESEND_FROM="Stoonex Website <hello@stoonex.com>"
RESEND_TO=structocontracting@gmail.com
```

## Deploy to Vercel
```bash
# one-time
npx vercel link
# subsequent
npx vercel --prod
```

## Cloudflare DNS (stoonex.com & stoonexservices.ca)
Point both to Vercel:
- `A` record: @ → 76.76.21.21
- `CNAME`:    www → cname.vercel-dns.com

In Vercel project settings, add stoonex.com as primary and stoonexservices.ca
with a permanent 308 redirect to stoonex.com.

## Content
- All site copy and project data lives in `lib/site.ts`
- Real project photos in `public/projects/`
- Service detail pages auto-generate from `services` array
- Service area pages auto-generate from `serviceAreas` array

## SEO
- LocalBusiness JSON-LD in `app/layout.tsx`
- Per-page metadata, OG images, sitemap.xml, robots.txt
- Dynamic OG image generator at `/opengraph-image.tsx`
- Service + area pages emit Service JSON-LD
