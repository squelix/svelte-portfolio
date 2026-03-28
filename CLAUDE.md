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

All routes are prefixed with a `[lang]` segment (`fr` or `en-gb`). The server hook (`src/hooks.server.ts`) detects language from `Accept-Language` and redirects bare paths to the appropriate locale. Translation files live in `src/translations/{fr,en}/` and are loaded lazily per route via `sveltekit-i18n`.

Routes are defined centrally in `src/lib/routing.ts` using the `RoutesEnum` enum and `Routes` map. Always use `getRoute(lang, RoutesEnum.X)` to build URLs — never hardcode paths.

### Data Flow

- `src/routes/+layout.server.ts` — root layout fetches `profile` and passes `lang` to all child routes
- `src/lib/api/contentful-client.ts` — singleton Contentful client (requires `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` env vars)
- `src/lib/api/*/webservice.ts` — per-domain fetch functions called from `+page.server.ts` load functions
- All API responses are transformed through `src/lib/api/utils.ts` helpers

### Key Directories

- `src/lib/commons/` — shared Svelte UI components (Nav, Header, Footer, PageNav, forms, etc.)
- `src/lib/api/` — Contentful API layer, one subfolder per content type
- `src/models/` — TypeScript type definitions (`.d.ts` and `.ts`)
- `src/stores/` — Svelte stores for nav state, page title, and env vars
- `src/icons/` — SVG icon assets used via `SvgIcon.svelte`
- `api/mail.js` — Vercel serverless function for contact form email (uses Mailjet)

### Environment Variables

| Variable                  | Used in                     |
| ------------------------- | --------------------------- |
| `CONTENTFUL_SPACE_ID`     | Contentful client           |
| `CONTENTFUL_ACCESS_TOKEN` | Contentful client           |
| `MAIL_ACCESS_TOKEN`       | `api/mail.js` (auth header) |
| `MAILJET_APIKEY_PUBLIC`   | `api/mail.js`               |
| `MAILJET_APIKEY_PRIVATE`  | `api/mail.js`               |
| `MAILJET_SENDER_EMAIL`    | `api/mail.js`               |

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
