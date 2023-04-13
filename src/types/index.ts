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

export interface IParams extends ParsedUrlQuery {
	id: string;
}
