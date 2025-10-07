import nodemailer from 'nodemailer';

export const handler = async event => {
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ success: false, message: 'Method not allowed' }),
		};
	}

	try {
		const { fullName, email, message } = JSON.parse(event.body);

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.CONTACT_EMAIL,
				pass: process.env.CONTACT_PASSWORD,
			},
		});

		// Wysyłanie e-maila
		await transporter.sendMail({
			from: email,
			to: process.env.CONTACT_EMAIL,
			subject: `Wiadomość od ${fullName}`,
			text: message,
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true }),
		};
	} catch (error) {
		console.error('Error sending e-mail:', error);
		return {
			statusCode: 500,
			body: JSON.stringify({ success: false }),
		};
	}
};
