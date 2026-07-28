/**
 * Keeps the Content-Security-Policy in sync with the inline scripts in index.html.
 *
 * index.html carries inline blocks — the pre-paint theme resolver and the JSON-LD
 * structured data — and the CSP allowlists them by sha256 hash rather than by
 * 'unsafe-inline'. The failure mode without this check is quiet and bad: a hash
 * drifts, the browser refuses the block, and every visitor gets a flash of the
 * wrong theme, or search engines stop seeing the structured data. Neither shows
 * up in review, because the local dev server has no CSP.
 *
 *   node scripts/csp-hash.mjs            verify (runs as part of `npm run build`)
 *   node scripts/csp-hash.mjs --write    recompute and rewrite vercel.json
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const DIST = 'dist/index.html';
const CONFIG = 'vercel.json';

const html = readFileSync(DIST, 'utf8');

// Every inline block, whatever its type. Scripts loaded by src are covered by
// 'self'. Data blocks such as application/ld+json are included deliberately:
// whether a browser enforces script-src against them has changed across versions,
// and allowlisting costs nothing.
const inline = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(
  (m) => m[1]
);
if (inline.length === 0) {
  console.error(`csp-hash: no inline scripts found in ${DIST}. Did the build change?`);
  process.exit(1);
}

const hashes = inline.map((s) => 'sha256-' + createHash('sha256').update(s).digest('base64'));

const raw = readFileSync(CONFIG, 'utf8');
const config = JSON.parse(raw);
const header = config.headers
  .flatMap((entry) => entry.headers)
  .find((h) => h.key === 'Content-Security-Policy');

if (!header) {
  console.error(`csp-hash: no Content-Security-Policy header found in ${CONFIG}.`);
  process.exit(1);
}

const present = [...header.value.matchAll(/'(sha256-[A-Za-z0-9+/=]+)'/g)].map((m) => m[1]);
const same =
  present.length === hashes.length && hashes.every((h) => present.includes(h));

if (same) {
  console.log(`csp-hash: ok (${hashes.length} inline script${hashes.length === 1 ? '' : 's'})`);
  process.exit(0);
}

if (!process.argv.includes('--write')) {
  console.error(
    `csp-hash: MISMATCH\n` +
      `  built inline scripts: ${hashes.join(' ') || '(none)'}\n` +
      `  allowlisted in CSP  : ${present.join(' ') || '(none)'}\n\n` +
      `Those blocks would be refused in production. Fix with:\n` +
      `  npm run csp:hash -- --write`
  );
  process.exit(1);
}

// Rewrite the directive in place rather than re-serializing, so the hand-formatted
// config keeps its shape.
const allowlist = hashes.map((h) => `'${h}'`).join(' ');
const updated = raw.replace(
  /("Content-Security-Policy",\s*\n?\s*"value":\s*"[^"]*?script-src 'self')((?: 'sha256-[A-Za-z0-9+/=]+')*)/,
  (_m, head) => `${head} ${allowlist}`
);
if (updated === raw) {
  console.error(
    `csp-hash: could not locate the script-src directive in ${CONFIG} to rewrite.`
  );
  process.exit(1);
}
writeFileSync(CONFIG, updated);
console.log(`csp-hash: updated ${CONFIG} with ${hashes.length} hash(es)`);
