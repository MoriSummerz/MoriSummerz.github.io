type Links = {
	github?: string;
	telegram?: string;
	email?: string;
};

type Profile = {
	name: string;
	nickname: string;
	description: string;
	links: Links;
	avatar: string;
	projects: string[];
};

type Comic = {
	title: string;
	date: Date;
	img: string;
	img_alt: string;
};

interface ComicResponse {
	month: string;
	num: number;
	link: string;
	year: string;
	news: string;
	safe_title: string;
	transcript: string;
	alt: string;
	img: string;
	title: string;
	day: string;
}

export type { Comic, ComicResponse, Profile, Links };
