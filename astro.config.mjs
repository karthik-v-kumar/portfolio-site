import { defineConfig } from 'astro/config';

// Static output, no adapter: Vercel serves dist/ as-is.
export default defineConfig({
  site: 'https://karthikvkumar.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
