# Kapuluan — Philippine Bioregion Atlas

**Living by watershed & sea**

A public knowledge commons of place-based organizers across the Philippine archipelago. Soft Kapwa / nature tone. Inspired by [bioregioning.earth](https://bioregioning.earth) — incomplete by design.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- react-leaflet + Leaflet (map, client-only)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## How to add an organization

1. Open `src/data/organizations.ts`.
2. Append an object to the `organizations` array with:
   - `id` (URL slug, kebab-case)
   - `name`, optional `aka[]`
   - `place`, `lat`, `lng`
   - `category`, `blurb`, `bioregionalContext`
   - `tags[]` (reuse existing tags when possible)
   - `sources[]` with `{ type, title, url }`
   - optional `website`
3. Do not invent statistics beyond cited sources.
4. Run `npm run build` to verify.

New entries appear automatically on the map, gallery, and `/org/[id]`.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com) — framework preset: Next.js.
3. No env vars required for the static seed data.
4. Deploy. Map tiles load from OpenStreetMap at runtime.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Map / Gallery toggle |
| `/org/[id]` | Organization detail |
| `/about` | Purpose, Kapwa, credits |

## License / commons

Seed blurbs cite public sources. Treat this atlas as a shared draft — correct and deepen with care.
