export interface Article {
	id: number;
	attributes: {
		title: string;
		content: string;
		image: {
			data: {
				attributes: {
					url: string;
				};
			};
		};
		createdAt: string;
	};
	map?: () => void;
}
