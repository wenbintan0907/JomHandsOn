# Jom Hands-On

React 19 and Vite 8 website for Jom Hands-On's STEM workshops and team.

Requires Node.js 22.12+ (or Node.js 24 LTS) and npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
npm run lint
npm audit
```

Routes: `/`, `/about`, `/gallery`, `/founders`, `/it`, and `/contact`.
The included `vercel.json` serves `index.html` for unknown paths so direct links and refreshes work with BrowserRouter. Unrecognized application routes show a not-found page.

The site uses optimized WebP derivatives in `src/assets`; original photos are retained. Use the derivatives in new components, lazy-load below-the-fold images, and keep slideshow images demand-loaded. Secondary pages load as separate JavaScript chunks.

The contact form uses the existing Web3Forms integration. Test delivery with the account owner before launch; local verification does not send real messages. Fonts use Google Fonts with system-font fallback.

Dependency versions and the lockfile were refreshed from npm on October 25, 2026. The production build, ESLint, npm audit, and browser navigation were checked during this update.

## Vercel deployment

Import the repository into your Vercel account. Use the Vite preset, Node.js 24, `npm run build` as the build command, and `dist` as the output directory. No environment variables are required by this static site. The configuration includes the client-route fallback and long-lived caching for hashed assets.

Dependencies and generated output are excluded from source control; install from `package-lock.json` with `npm ci`. The contact form retains its existing Web3Forms public access key; delivery still requires a real submission to verify.
