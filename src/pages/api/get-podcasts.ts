import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	if (req.method !== 'GET') {
		res.status(405).json({ message: 'Method not allowed' });
		return;
	}

	// get podcasts from buzzsprout api
	const response = await fetch(
		`https://www.buzzsprout.com/api/${process.env.BUZZSPROUT_PODCAST_ID}/episodes.json/?api_token=${process.env.BUZZSPROUT_API_KEY}`
	);
	const data = await response.json();

	return res.status(200).json(data);
};

export default handler;
