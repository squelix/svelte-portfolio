import { env } from '$env/dynamic/private';

export class MailService {
	static #instance: MailService;

	static getInstance(): MailService {
		if (!MailService.#instance) {
			MailService.#instance = new MailService();
		}

		return MailService.#instance;
	}

	readonly sendMail = async (
		fetch: typeof global.fetch,
		email: string,
		text: string,
		name: string,
		accessToken: string
	) => {
		const response = await fetch(env.MAIL_ENDPOINT ?? '/api/mail', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': accessToken
			},
			body: JSON.stringify({
				subject: `Contact from ${name} - ${email}`,
				email,
				html: `<p>${text}</p>`,
				text
			})
		});

		return {
			status: response.status
		};
	};
}
