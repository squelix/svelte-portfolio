# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run all linters in parallel (eslint, prettier, stylelint, svelte-check)
npm run format       # Auto-format all files
npm run check        # TypeScript + svelte-check
npm run check:watch  # Watch mode for type checking
```

No test suite is configured in this project.

## Architecture

**SvelteKit 5 portfolio** deployed on Vercel, backed by **Contentful** as CMS. All content (profile, jobs, skills, projects, schools, hobbies, languages) is fetched from Contentful at request time via server-side load functions.

### i18n / Routing

All routes are prefixed with a `[lang]` segment (`fr` or `en`). The server hook (`src/hooks.server.ts`) redirects any other path via `getLangRedirect` (`src/lib/lang/utils.ts`): only `/` uses `Accept-Language` (302 + `Vary`); every other redirect is derived from the URL alone (`/fr-FR/x` → `/fr/x`, `/projects` → `/en/projects`, `/de/x` → `/en/x`) because ISR caches it for all visitors. Translation files live in `src/translations/{fr,en}/` and are loaded lazily per route via `sveltekit-i18n`.

Routes are defined centrally in `src/lib/routing.ts` using the `RoutesEnum` enum and `Routes` map. Always use `getRoute(lang, RoutesEnum.X)` to build URLs — never hardcode paths.

### Data Flow

- `src/routes/+layout.server.ts` — root layout fetches `profile` and passes `lang` to all child routes
- `src/lib/api/contentful-client.ts` — singleton Contentful client (requires `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` env vars)
- `src/lib/api/*/webservice.ts` — per-domain fetch functions called from `+page.server.ts` load functions
- All API responses are transformed through `src/lib/api/utils.ts` helpers

### SSR state

Server code runs concurrent requests in the same module instance, and ISR caches the resulting HTML for 1 h, so never keep per-request state at module level (stores, `dayjs.locale()`, singletons holding request data). Nav state (`src/stores/nav.ts`) is returned by universal loads as `NavData` and turned into per-request stores by `src/routes/[lang]/+layout.svelte` (`getNavState()` in components). Dates take the locale per call: `dayjs(date).locale(i18n.locale!)`.

### Import Aliases

TS/Svelte imports use Node subpath imports declared in `package.json` `imports`: `#lib/*`, `#models/*`, `#stores/*`, `#icons/*` and `#translations`. Add the `.js` extension for TS modules (`#models/langs.enum.js`). SCSS uses `$styles/...`, a Vite `resolve.alias` in `vite.config.ts` (Sass can't resolve `#` imports).

### Key Directories

- `src/lib/commons/` — shared Svelte UI components (Nav, Header, Footer, PageNav, forms, etc.)
- `src/lib/api/` — Contentful API layer, one subfolder per content type
- `src/models/` — TypeScript type definitions (`.d.ts` and `.ts`)
- `src/stores/` — per-request nav state (context) and env vars
- `src/icons/` — SVG icon assets used via `SvgIcon.svelte`
- `api/mail.js` — Vercel serverless function for contact form email (uses Mailjet)

### Environment Variables

Server-side variables must be declared in `src/env.ts` (`defineEnvVars`) and imported from `$app/env/private`.

| Variable                  | Used in                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------- |
| `CONTENTFUL_SPACE_ID`     | Contentful client                                                                       |
| `CONTENTFUL_ACCESS_TOKEN` | Contentful client                                                                       |
| `MAIL_ACCESS_TOKEN`       | `api/mail.js` (auth header)                                                             |
| `MAILJET_APIKEY_PUBLIC`   | `api/mail.js`                                                                           |
| `MAILJET_APIKEY_PRIVATE`  | `api/mail.js`                                                                           |
| `MAILJET_SENDER_EMAIL`    | `api/mail.js`                                                                           |
| `BYPASS_TOKEN`            | `src/lib/server/isr.ts` (ISR bypass/revalidation, ≥32 chars, static: rotate = redeploy) |

### Caching (ISR)

Pages under `[lang]` use Vercel ISR (1 h expiration) via `config` in `src/routes/[lang]/+layout.server.ts`; shared settings live in `src/lib/server/isr.ts`. Overrides must spread `isrConfig` (config merge is shallow). Pages with form actions opt out (`isr: false`), and any query param a page reads must be declared in `RouteQueryParams` (`src/lib/routing.ts`), which feeds its `allowQuery` and the only params cached language redirects forward. Vercel strips every param missing from `allowQuery` before the function runs, so a page never sees it. Responses that never come from an ISR function (non-ISR pages via `setHeaders`, `+server.ts` redirects, unmatched 404s in the hook) set `cdnCacheHeaders` instead; never set them on ISR pages. Force a refresh with `curl -I -H "x-prerender-revalidate: $BYPASS_TOKEN" <url>` — it only refreshes that exact host + path (other langs, `?techno=` variants and other domains keep their cache until expiration).

### Adding a New Page

1. Create the route under `src/routes/[lang]/your-route/`
2. Add the route key to `RoutesEnum` in `src/lib/routing.ts`
3. Add the path to `Routes` in `src/lib/routing.ts`
4. Add translation loaders for both `fr_FR` and `en_GB` in `src/translations/index.ts`
5. Add translation JSON files in `src/translations/fr/` and `src/translations/en/`

### Adding a New Content Type

1. Create `src/lib/api/<type>/webservice.ts` that calls `ContentfulClient.getClient(fetch)`
2. Add a matching model interface in `src/models/`
3. Call from a `+page.server.ts` load function
