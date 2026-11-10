// Brief §3 and §10: fail the build output if a banned phrase or the retired
// product name appears anywhere in the shipped HTML.
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const BANNED = [
  'passionate about', 'leverag', 'delve', "today's fast-paced", 'today’s fast-paced',
  'elevate', 'harness', 'beacon', '🚀', '✨', '👋',
];

async function* html(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* html(p);
    else if (p.endsWith('.html')) yield p;
  }
}

let failed = false;
for await (const file of html('dist')) {
  const text = (await readFile(file, 'utf8')).toLowerCase();
  for (const word of BANNED) {
    if (text.includes(word)) {
      console.error(`${file}: contains "${word}"`);
      failed = true;
    }
  }
}
if (failed) process.exit(1);
console.log('copy check passed');
