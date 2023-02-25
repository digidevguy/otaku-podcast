export interface Article {
	id: number;
	attributes: {
		title: string;
		content: string;
		image: {
			url: string;
		};
		createdAt: string;
	};
	map?: () => void;
}
