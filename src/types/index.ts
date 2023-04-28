import { ParsedUrlQuery } from 'querystring';

export interface Article {
	id: number;
	attributes: {
		title: string;
		content: string;
		image: {
			data: {
				attributes: {
					url: string;
					height: number;
					width: number;
				};
			};
		};
		createdAt: string;
	};
	map?: () => void;
}

export interface Image {
	id: number;
	attributes: {
		date: string;
		location: string;
		name: string;
		img: {
			data: {
				attributes: {
					url: string;
					height: number;
					width: number;
				};
			};
		};
	};
}

export interface Track {
	id: number;
	artist: string;
	title: string;
	artwork_url: string;
	audio_url: string;
	description: string;
	duration: number;
	episode_number: number;
	published_at: string;
}

export interface IParams extends ParsedUrlQuery {
	id: string;
}
