import fetch from 'node-fetch';
import Mailjet from 'node-mailjet';

export async function POST(request) {
	const { token, subject, text, html, email } = await request.json();
	const accessToken = request.headers.get('x-access-token');
	const myAccessToken = process.env.MAIL_ACCESS_TOKEN;

	if (!token || !subject || !text || !html || !email) {
		console.error('Bad Request');
		return new Response('Bad Request', { status: 400 });
	}

	if (!accessToken || accessToken !== myAccessToken) {
		console.error('Unauthorized');
		return new Response('Unauthorized', { status: 401 });
	}

	const params = new URLSearchParams({
		secret: process.env.RE_CAPTCHA_PRIVATE_KEY,
		response: token
	});
	console.log(params.toString());
	const success = await fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		body: params,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	})
		.then((response) => response.json())
		.then((d) => {
			console.log(d);
			return d;
		})
		.then(({ success }) => success);

	if (!success) {
		console.error('Captcha not good');
		return new Response('Captcha not good', { status: 422 });
	}

	const mailJet = new Mailjet({
		apiKey: process.env.MAILJET_APIKEY_PUBLIC,
		apiSecret: process.env.MAILJET_APIKEY_PRIVATE
	});

	const mailResult = await mailJet.post('send', { version: 'v3.1' }).request({
		Messages: [
			{
				From: {
					Email: process.env.MAILJET_SENDER_EMAIL,
					Name: 'Portfolio Contact'
				},
				To: [
					{
						Email: process.env.MAILJET_SENDER_EMAIL,
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

	const successMail = mailResult.body.Messages.find((m) => m.Status === 'success');

	if (successMail) {
		console.info('Mail sent');
		return new Response(undefined, { status: 204 });
	} else {
		console.error('Internal Server Error');
		return new Response('Internal Server Error', { status: 500 });
	}
}
