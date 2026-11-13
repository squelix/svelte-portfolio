import { MAIL_ACCESS_TOKEN } from '$app/env/private';
import { cdnCacheHeaders } from '#lib/server/isr.js';
import { MailService } from '#lib/services/mail.service.js';

import type { Config } from '@sveltejs/adapter-vercel';
import type { Actions, PageServerLoad } from './$types';

// Form action POST: incompatible with ISR
export const config: Config = { isr: false };

// Not ISR, so the GET is cached by the CDN instead.
export const load: PageServerLoad = async ({ parent, setHeaders }) => {
	setHeaders(cdnCacheHeaders);
	return {
		profile: await parent().then(({ profile }) => profile)
	};
};

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const service = MailService.getInstance();
		const token = MAIL_ACCESS_TOKEN;
		const data: FormData = await request.formData();

		return service.sendMail(
			fetch,
			data.get('email')! as string,
			data.get('message')! as string,
			data.get('name')! as string,
			token!
		);
	}
};
