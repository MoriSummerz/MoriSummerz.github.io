import { getComicId, getComicData } from '$lib/api/comic';

export const csr = false;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const comicId = await getComicId('n.timofeev@innopolis.university');
	const comicData = await getComicData(comicId);
	const title = comicData.safe_title;
	const date = new Date(
		parseInt(comicData.year),
		parseInt(comicData.month) - 1,
		parseInt(comicData.day)
	);
	const img = comicData.img;
	const img_alt = comicData.alt;
	return {
		comic: {
			title,
			date,
			img,
			img_alt
		}
	};
}
