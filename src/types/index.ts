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
				};
			};
		};
	};
}
