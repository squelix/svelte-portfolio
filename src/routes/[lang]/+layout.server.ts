import { isrConfig } from '#lib/server/isr.js';

import type { Config } from '@sveltejs/adapter-vercel';

// Applies ISR to every page under [lang]; +server.ts endpoints don't inherit layout config.
// No load here: `lang`, `route` and `profile` already come from the root layout.
export const config: Config = { isr: isrConfig };
