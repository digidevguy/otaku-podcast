import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const subjectOptions = [
	{
		value: 'podcast-question',
		label: 'Podcast Topic / Question of the Day Suggestions',
	},
	{
		value: 'podcast-collab-guest',
		label: 'Podcast Collaborations / Guest Inquiries',
	},
	{ value: 'endorsements', label: 'Brand or Product Endorsements' },
	{ value: 'general', label: 'General / Other' },
];

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	if (req.method === 'POST') {
		const { email, subject, content } = req.body;

		const selectedSubject =
			subjectOptions.find((option) => option.value === subject)?.label ||
			'Unknown Subject';

		const msg = {
			to: {
				email: process.env.TO_MAIL_ADDRESS,
				name: 'Otaku Senpai',
			},
			from: {
				email: process.env.FROM_MAIL_ADDRESS,
				name: 'Website Form Submission',
			},
			subject: selectedSubject,
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
