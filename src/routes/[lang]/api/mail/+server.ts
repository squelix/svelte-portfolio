import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import Mailjet from 'node-mailjet';

import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, fetch }) => {
	const { token, subject, text, html, email } = await request.json();
	const accessToken = request.headers.get('x-access-token');
	const myAccessToken = env.MAIL_ACCESS_TOKEN;

	if (!token || !subject || !text || !html || !email) {
		return error(400, 'Bad Request');
	}

	if (!accessToken || accessToken !== myAccessToken) {
		return error(401, 'Unauthorized');
	}

	const params = new URLSearchParams({
		secret: env.RE_CAPTCHA_PRIVATE_KEY,
		response: token
	});
	const success = await fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		body: params.toString(),
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	})
		.then((response) => response.json())
		.then(({ success }) => success);

	if (!success) {
		return error(422, 'Captcha not good');
	}

	const mailJet = new Mailjet({
		apiKey: env.MAILJET_APIKEY_PUBLIC,
		apiSecret: env.MAILJET_APIKEY_PRIVATE
	});

	const mailResult = await mailJet.post('send', { version: 'v3.1' }).request({
		Messages: [
			{
				From: {
					Email: env.MAILJET_SENDER_EMAIL,
					Name: 'Portfolio Contact'
				},
				To: [
					{
						Email: env.MAILJET_SENDER_EMAIL,
						Name: 'Portfolio Contact'
					}
				],
				Headers: {
					'Reply-To': email
				},
				Subject: subject,
				TextPart: text,
				HTMLPart: html
			}
		]
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const successMail = (mailResult.body as any).Messages.includes(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(m: any) => m.Status === 'success'
	);

	if (successMail) {
		return new Response(undefined, { status: 204 });
	}

	return error(500, 'Internal Server Error');
};
