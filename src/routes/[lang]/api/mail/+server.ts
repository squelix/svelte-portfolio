import { env } from '$env/dynamic/private';
import sgMail from '@sendgrid/mail';
import { error } from '@sveltejs/kit';

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

	sgMail.setApiKey(env.SENDGRID_API_KEY);

	await sgMail.send({
		to: env.SENDGRID_SENDER,
		from: env.SENDGRID_SENDER,
		replyTo: email,
		subject,
		text,
		html
	});
	return new Response(undefined, { status: 204 });
};
