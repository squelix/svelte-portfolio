export class MailService {
	private readonly mailUrl: string;

	constructor(url: string) {
		this.mailUrl = url.replace(/\/$/, '');
	}

	sendMail = async (
		email: string,
		text: string,
		token: string,
		name: string,
		accessToken: string
	) => {
		const response = await fetch(`${this.mailUrl}/api/mail/send`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': accessToken
			},
			body: JSON.stringify({
				subject: `Contact from ${name} - ${email}`,
				html: `<p>${text}</p>`,
				text,
				token
			})
		});

		return {
			status: response.status
		};
	};
}
