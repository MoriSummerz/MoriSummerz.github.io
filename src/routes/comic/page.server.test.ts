import { describe, it, expect, vi } from 'vitest';
import type { Mock } from 'vitest';
import { load } from './+page.server';
import { getComicId, getComicData } from '$lib/api/comic';

vi.mock('$lib/api/comic', () => ({
	getComicId: vi.fn(),
	getComicData: vi.fn()
}));

describe('load function', () => {
	it('should return comic data formatted correctly', async () => {
		const mockComicId = 451;
		const mockComicData = {
			safe_title: 'Impostor',
			year: '2008',
			month: '7',
			day: '18',
			alt: 'If you think this is too hard on literary criticism, read the Wikipedia article on deconstruction.',
			img: 'https://imgs.xkcd.com/comics/impostor.png'
		};

		(getComicId as Mock).mockResolvedValue(mockComicId);
		(getComicData as Mock).mockResolvedValue(mockComicData);

		const result = await load();

		expect(getComicId).toHaveBeenCalledWith('n.timofeev@innopolis.university');
		expect(getComicData).toHaveBeenCalledWith(mockComicId);

		expect(result).toEqual({
			comic: {
				title: mockComicData.safe_title,
				date: new Date(2008, 6, 18),
				img: mockComicData.img,
				img_alt: mockComicData.alt
			}
		});
	});
});
