import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	if (req.method === 'POST') {
		const { email, subject, content } = req.body;

		const msg = {
			to: 'matthew@mattlittrell.dev',
			from: 'info@mattlittrell.dev',
			subject: subject,
			text: content,
			html: `<p>${content}</p>
                   <p>From: ${email}</p>`,
		};

		try {
			await sgMail.send(msg);
			res.status(200).json({ message: 'Email sent successfully!' });
		} catch (error) {
			res.status(400).json({ message: 'Email not sent.' });
		}
	} else {
		res.status(400).json({ message: 'Method not allowed.' });
	}
};

export default handler;
