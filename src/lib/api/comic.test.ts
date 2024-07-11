import { describe, it, expect, vi } from 'vitest';
import { getComicId, getComicData } from '$lib/api/comic';
import type { ComicResponse } from '$lib/types';

describe('API functions', () => {
	describe('getComicId', () => {
		it('should return comic id from API response', async () => {
			const mockEmail = 'n.timofeev@innopolis.university';
			const mockComicId = '451';

			// Mock fetch response
			global.fetch = vi.fn(() =>
				Promise.resolve({
					text: () => Promise.resolve(mockComicId)
				} as Response)
			);

			const result = await getComicId(mockEmail);
			expect(result).toBe(mockComicId);
			expect(fetch).toHaveBeenCalledWith(
				`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(mockEmail)}`
			);
		});
	});

	describe('getComicData', () => {
		it('should return comic data from API response', async () => {
			const mockComicId = '451';
			const mockComicData: ComicResponse = {
				month: '7',
				num: 451,
				link: '',
				year: '2008',
				news: '',
				safe_title: 'Impostor',
				transcript:
					"My Hobby: Sitting down with grad students and timing how long it takes them to figure out that I'm not actually an expert in their field.\\nEngineering:\\nStudents: Our big problem is heat dissipation\\nMe: Have you tried logarithms?\\n48 seconds\\nLinguistics:\\nMe: Ah, so does this Finno-ugric family include, say, Klingon?\\n63 Seconds\\nSociology:\\nMe: Yeah, my latest work is on ranking people from best to worst.\\n4 Minutes\\nLiterary Criticism:\\nMe: You see, the deconstruction is inextricable from not only the text, but also the self.\\nEight papers and two books and they haven't caught on.\\n{{Alt\\ntitle text: If you think this is too hard on literary criticism, read the Wikipedia article on deconstruction.}}",
				alt: 'If you think this is too hard on literary criticism, read the Wikipedia article on deconstruction.',
				img: 'https://imgs.xkcd.com/comics/impostor.png',
				title:
					'Impostor\u003Cimg src="" onerror="alert(\'You\\\'ve been hacked! Should have used safe_title instead of title and textContent instead of innerHTML ¯\\\\_(ツ)_/¯\');this.parentNode.removeChild(this);"\u003E',
				day: '18'
			};

			// Mock fetch response
			global.fetch = vi.fn(() =>
				Promise.resolve({
					json: () => Promise.resolve(mockComicData)
				} as Response)
			);

			const result = await getComicData(mockComicId);
			expect(result).toEqual(mockComicData);
			expect(fetch).toHaveBeenCalledWith(
				`https://fwd.innopolis.university/api/comic?id=${encodeURIComponent(mockComicId)}`
			);
		});
	});
});
