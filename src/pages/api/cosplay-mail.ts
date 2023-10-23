import cloudinary from '@/utils/cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { identifier, character, anime, image } = req.body;

		const { secure_url } = await cloudinary.uploader.upload(image, {
			upload_preset: 'cosplay',
		});

		if (!secure_url) {
			return res.status(400).json({ message: 'Image not uploaded.' });
		}

		const msg = {
			to: {
				email: process.env.TO_MAIL_ADDRESS,
				name: 'Posessor of great breasts',
			},
			from: { email: process.env.FROM_MAIL_ADDRESS, name: 'De best dev EVA!' },
			subject: `New Cosplay image for ${character} from ${anime} by ${identifier}`,
			text: `We have a new cosplay submission!`,
			html: `
				<p>We have a new cosplay submission from ${identifier}!</p>
				<p>Character: ${character}</p>
				<p>Anime: ${anime}</p>
				<p>Image: ${secure_url}</p>
				`,
		};

		try {
			await sgMail.send(msg);

			return res.status(200).json({ message: 'Email sent successfully!' });
		} catch (error) {
			res.status(400).json({ message: 'Email not sent.' });
		}
	} else {
		res.status(400).json({ message: 'Method not allowed.' });
	}
}
