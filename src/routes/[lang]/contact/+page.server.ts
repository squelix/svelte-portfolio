import { mailAccessToken } from '$stores/env';
import { mailService } from '$stores/services';
import { get } from 'svelte/store';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const service = get(mailService);
		const token = get(mailAccessToken);
		const data: FormData = await request.formData();

		return service.sendMail(
			data.get('email')! as string,
			data.get('message')! as string,
			data.get('name')! as string,
			data.get('g-recaptcha-response')! as string,
			token
		);
	}
};
