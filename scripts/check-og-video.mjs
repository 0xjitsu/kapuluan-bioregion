// Runs after `next build`: fails if the og:video / twitter:player tags are missing
// from the prerendered home page, or if the preview MP4 is over 5 MB.
import { readFileSync, statSync } from "node:fs";

const html = readFileSync(".next/server/app/index.html", "utf8");
const required = [
  ["property", "og:image"],
  ["property", "og:video"],
  ["property", "og:video:secure_url"],
  ["property", "og:video:type"],
  ["property", "og:video:width"],
  ["property", "og:video:height"],
  ["name", "twitter:card"],
  ["name", "twitter:player"],
  ["name", "twitter:player:width"],
  ["name", "twitter:player:height"],
];

const errors = [];
for (const [attr, key] of required) {
  const m = html.match(new RegExp(`<meta ${attr}="${key}" content="([^"]*)"`));
  if (!m) errors.push(`missing ${key}`);
  else if (/^(og:image|og:video|og:video:secure_url|twitter:player)$/.test(key) && !m[1].startsWith("https://"))
    errors.push(`${key} is not an absolute https URL: ${m[1]}`);
}
if (!html.includes('content="video/mp4"')) errors.push("og:video:type is not video/mp4");
if (!html.includes('<meta name="twitter:card" content="player"')) errors.push("twitter:card is not player");

const size = statSync("public/og/preview.mp4").size;
if (size >= 5 * 1024 * 1024) errors.push(`public/og/preview.mp4 is ${size} bytes (limit 5 MB)`);

if (errors.length) {
  console.error("og:video check failed:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log(`og:video check passed (preview.mp4 ${(size / 1024).toFixed(0)} KB)`);
