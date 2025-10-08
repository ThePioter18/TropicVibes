import nodemailer from 'nodemailer';

export const handler = async event => {
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ success: false, message: 'Method not allowed' }),
		};
	}

	try {
		const { fullName, emailClient, messageClient } = JSON.parse(event.body);

		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465, // SSL
			secure: true,
			auth: {
				user: process.env.CONTACT_EMAIL,
				pass: process.env.CONTACT_PASSWORD,
			},
		});

		await transporter.sendMail({
			from: `TrpicVibes <${process.env.CONTACT_EMAIL}>`,
			to: process.env.CONTACT_EMAIL,
			replyTo: emailClient,
			subject: `Wiadomość od ${fullName}`,
			text: messageClient,
			html: `
   				 	<p><strong>Od:</strong>${fullName} <${emailClient}></p>
    				<p><strong>Wiadomość:</strong></p>
    				<p>${messageClient}</p>
  					`,
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
