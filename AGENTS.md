# Agent notes — Kapuluan

- Product name: **Kapuluan — Philippine Bioregion Atlas**. Subtitle: Living by watershed & sea.
- No personal branding (no 0xjitsu / Oneshot / individual founder credits in UI).
- Tone: soft Kapwa / nature — bone `#f7f3eb`, deep green `#1a3c34`, umber accents.
- Org data lives only in `src/data/organizations.ts`. Do not invent fake stats beyond seeded blurbs.
- Map uses `react-leaflet` via dynamic import `ssr: false` (`src/components/Map.tsx` → `MapView.tsx`).
- Prefer extending tags already in `ALL_TAGS` rather than inventing one-offs.
- `npm run build` must stay green before shipping.
- Do not force-push or invent GitHub remotes unless asked; Babaylan handles GitHub API push.
