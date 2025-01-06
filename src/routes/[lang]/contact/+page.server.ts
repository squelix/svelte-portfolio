import { PUBLIC_MAIL_ACCESS_TOKEN, PUBLIC_MAIL_URI } from '$env/static/public';
import { MailService } from '$lib/services/mail.service';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	return {
		profile: await parent().then(({ profile }) => profile)
	};
};

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const service = MailService.getInstance(PUBLIC_MAIL_URI);
		const token = PUBLIC_MAIL_ACCESS_TOKEN;
		const data: FormData = await request.formData();

		return service.sendMail(
			fetch,
			data.get('email')! as string,
			data.get('message')! as string,
			data.get('name')! as string,
			data.get('g-recaptcha-response')! as string,
			token
		);
	}
};
