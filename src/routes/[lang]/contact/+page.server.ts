import { env } from '$env/dynamic/private';
import { MailService } from '$lib/services/mail.service';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	return {
		profile: await parent().then(({ profile }) => profile)
	};
};

export const actions: Actions = {
	default: async ({ request, fetch, url: { pathname } }) => {
		const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;
		const service = MailService.getInstance();
		const token = env.MAIL_ACCESS_TOKEN;
		const data: FormData = await request.formData();

		return service.sendMail(
			fetch,
			lang,
			data.get('email')! as string,
			data.get('message')! as string,
			data.get('name')! as string,
			data.get('g-recaptcha-response')! as string,
			token
		);
	}
};
